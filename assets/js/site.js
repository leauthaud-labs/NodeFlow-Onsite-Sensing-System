/*
   site.js: page furniture that is not the code generator itself:
   service worker registration, offline notice, the sticky action
   bar and contact details.

   loaded on every page. main.js is only loaded on the generator.
    */

(function () {
  "use strict";

  var CFG = self.NODEFLOW_CONFIG || {};
  var byId = function (id) {
    return document.getElementById(id);
  };
  var t = function (key, fallback) {
    var out = self.t ? self.t(key) : key;
    return out === key ? fallback : out;
  };

  /*
  contact details
     config.js ships with a sample address. until it is replaced the
     page says so rather than printing a mailto link that bounces.
                */
  function renderContact() {
    var slots = document.querySelectorAll(".contact-slot");
    if (!slots.length) return;
    var email = (CFG.contactEmail || "").trim();
    var usable = email && email.indexOf("@") > 0 && !/example\.org$/i.test(email);
    slots.forEach(function (slot) {
      if (!usable) {
        slot.textContent = t("foot.contactSoon", "Contact details coming soon.");
        return;
      }
      var who = document.createElement("span");
      who.textContent =
        (CFG.contactName || t("foot.contactTeam", "The project team")) + ": ";
      var a = document.createElement("a");
      a.href = "mailto:" + email;
      a.textContent = email;
      slot.textContent = "";
      slot.appendChild(who);
      slot.appendChild(a);
    });
  }

  /* the user guide is a pdf built from latex, so it may not be there yet.
     show the link only when the file actually answers. a dead link in the
     instructions is worse than no link at all. */
  function revealGuideLink() {
    var link = byId("guide-link");
    var pending = byId("guide-pending");
    if (!link) return;

    fetch(link.getAttribute("href"), { method: "HEAD" })
      .then(function (r) {
        var type = r.headers.get("content-type") || "";
        if (r.ok && type.indexOf("html") === -1) {
          link.hidden = false;
          if (pending) pending.hidden = true;
        }
      })
      .catch(function () {
        /* offline, or not published yet. the pending line stays. */
      });
  }

  /*  footer year */
  function renderYear() {
    var y = byId("foot-year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  /*
  sticky action bar (small screens)
     appears once the form itself has been reached, and stands down
     whenever the real generate button is on screen: two buttons doing the
     same job in view at once is just noise.
              */
  function initStickyCta() {
    var bar = byId("sticky-cta");
    var form = byId("sensors-list");
    var genBtn = byId("gen-btn");
    if (!bar || !form || !("IntersectionObserver" in window)) return;

    var reachedForm = false;
    var genVisible = true;

    var update = function () {
      bar.hidden = !reachedForm || genVisible;
    };

    new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) reachedForm = true;
        });
        update();
      },
      { rootMargin: "0px 0px -30% 0px" },
    ).observe(form);

    if (genBtn) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          genVisible = e.isIntersecting;
        });
        update();
      }).observe(genBtn);
    } else {
      genVisible = false;
    }

    update();
  }

  /*  consent checkbox in the download dialog */
  function initSurveyConsent() {
    var cb = byId("consent-checkbox");
    var btn = byId("confirm-btn");
    if (!cb || !btn) return;
    cb.addEventListener("change", function () {
      btn.disabled = !cb.checked;
    });
  }

  /*  offline notice */
  function updateOnlineStatus() {
    var bar = byId("offline-bar");
    document.body.classList.toggle("is-offline", !navigator.onLine);
    if (!navigator.onLine) {
      if (!bar) {
        bar = document.createElement("div");
        bar.id = "offline-bar";
        bar.setAttribute("role", "status");
        bar.textContent = t(
          "bar.offline",
          "You are offline. The form still works and your file will download. Research information is sent when you reconnect.",
        );
        document.body.appendChild(bar);
      }
    } else if (bar) {
      bar.remove();
    }
  }

  /*  service worker */
  var IS_LOCAL =
    ["localhost", "127.0.0.1", "::1", ""].indexOf(location.hostname) !== -1 ||
    location.protocol === "file:";

  var updateRequested = false;

  function initServiceWorker() {
    if (!("serviceWorker" in navigator)) return;

    if (IS_LOCAL) {
      navigator.serviceWorker.getRegistrations().then(function (rs) {
        rs.forEach(function (r) {
          r.unregister();
        });
      });
      if (window.caches)
        caches.keys().then(function (ks) {
          ks.forEach(function (k) {
            caches.delete(k);
          });
        });
      console.info(
        "[NodeFlow] localhost detected - service worker disabled for development.",
      );
      return;
    }

    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register("sw.js")
        .then(function (reg) {
          var flush = function () {
            if (navigator.serviceWorker.controller) {
              navigator.serviceWorker.controller.postMessage("flush-queue");
            }
            if (reg.sync) reg.sync.register("flush-queue").catch(function () {});
          };
          window.addEventListener("online", flush);
          if (navigator.onLine) flush();

          function showUpdateBar(worker) {
            if (byId("update-bar")) return;
            var bar = document.createElement("div");
            bar.id = "update-bar";
            bar.setAttribute("role", "status");

            var msg = document.createElement("span");
            msg.id = "update-msg";
            msg.textContent = t(
              "bar.update",
              "A new version of this page is available.",
            );
            var btn = document.createElement("button");
            btn.id = "update-btn";
            btn.type = "button";
            btn.textContent = t("bar.updateBtn", "Refresh");
            btn.addEventListener("click", function () {
              updateRequested = true;
              worker.postMessage("skip-waiting");
            });

            bar.appendChild(msg);
            bar.appendChild(btn);
            document.body.appendChild(bar);
          }

          if (reg.waiting) showUpdateBar(reg.waiting);

          reg.addEventListener("updatefound", function () {
            var nw = reg.installing;
            if (!nw) return;
            nw.addEventListener("statechange", function () {
              if (
                nw.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                showUpdateBar(nw);
              }
            });
          });
        })
        .catch(function () {});

      navigator.serviceWorker.addEventListener("controllerchange", function () {
        if (!updateRequested) return;
        updateRequested = false;
        window.location.reload();
      });
    });
  }

  /*
  the generator page starts i18n itself at the end of main.js, once the
     form exists. every other page has no main.js, so it is started here.
              */
  if (self.NodeFlowI18n && typeof self.addBlock !== "function") {
    self.NodeFlowI18n.init();
  }

  /* the language toggle re-applies every data-i18n string, but not the ones
     this file wrote itself. redraw those when the language changes. */
  document.addEventListener("nodeflow:language", function () {
    renderContact();
    var offline = byId("offline-bar");
    if (offline)
      offline.textContent = t(
        "bar.offline",
        "You are offline. The form still works and your file will download. Research information is sent when you reconnect.",
      );
    var updateMsg = byId("update-msg");
    if (updateMsg)
      updateMsg.textContent = t("bar.update", "A new version of this page is available.");
    var updateBtn = byId("update-btn");
    if (updateBtn) updateBtn.textContent = t("bar.updateBtn", "Refresh");
  });

  /*  go */
  renderContact();
  renderYear();
  revealGuideLink();
  initStickyCta();
  initSurveyConsent();
  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
  updateOnlineStatus();
  initServiceWorker();
})();
