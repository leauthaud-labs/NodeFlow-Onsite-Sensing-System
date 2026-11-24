/*
   i18n.js - English and Spanish for the code generator.

   HOW IT WORKS
   static page text carries data-i18n="key". attributes carry
   data-i18n-attr="placeholder:key, aria-label:key". strings built
   in JavaScript call t("key").

   text that comes from the spreadsheet (sensor names, measurement
   names, tooltips, parameter labels, survey questions) is keyed on
   the stable identifier rather than on the English wording, so
   rewording a cell in Excel does not silently drop a translation.

   WHERE THE SPANISH SHOULD EVENTUALLY LIVE
   in the spreadsheet, as `_es` columns next to the English ones, so
   the people who know the agronomy own the wording. until those
   columns exist it lives here. the keys are the same either way, so
   moving it later is a change to build.py and not to this file's
   shape.

   REVIEW STATUS
   the Spanish below is a careful first pass, not a reviewed
   translation. the agronomic terms are the ones to check: frente de
   humedecimiento, tension hidrica, capacidad de campo, punto de
   marchitez. a native-speaking agronomist should read it before this
   is put in front of growers.
    */

(function (root) {
  "use strict";

  var LANG_KEY = "nodeflow_lang_v1";

  var STRINGS = {
    en: {
      /*  page chrome */
      "page.title": "NodeFlow On-site Sensing System Code Generator",
      "page.skip": "Skip to the form",
      "lang.switch": "Español",
      "lang.switchLabel": "Cambiar el idioma a español",
      "logo.alt":
        "NodeFlow logo: a water drop over a fan of soil layers with three sensor nodes",

      /*  summary box */
      "info.title": "Summary & Instructions",
      "info.p1":
        "This website allows you to configure the code which the NodeFlow On-site Sensing System uses to interpret and display sensor readings.",
      "info.p1b":
        "For each port on the Arduino board, you will select which sensor you are using, what variable you would like to see displayed, and how you would like to have this variable visualized. This website then generates your specified code, which you then upload to your hardware.",
      "info.guideIntro":
        "For complete instructions, from installing the Arduino software to reading the screen, please see the user guide.",
      "info.guideLink": "Open the user guide (PDF)",
      "info.guidePending": "The printable guide is being prepared.",
      "info.p2": "Videos on how to use the device are still to be added.",
      "info.p3":
        "To generate the code for your NodeFlow On-site device, you will select the following for each port you plan to use (for example A1, A2, A3):",
      "info.portNote": "Please note that you can only connect one type of sensor to each port.",
      "info.li1": "What kind of sensor you plan to use",
      "info.li2": "Which variable will be displayed on the LCD screen",
      "info.li3": "How this variable will be visualized",
      "info.research":
        "Please note that this service is part of an ongoing research project. Before you download, you will be asked for your name, email address and country, and to agree that the configuration you built may be recorded. The project team uses this to see which sensors and settings people actually use, so we know what to improve, and to reach you if there is a problem with a configuration you generated. It goes to a spreadsheet only the project team can open, and it is never sold or used for advertising.",
      "info.researchLink": "Read what is recorded and how to have it removed",
      "info.upload":
        "Once you download your code, you will be taken to a <a class=\"info-inline-link\" href=\"thank-you.html\">page with instructions on how to upload it onto your Arduino board</a>. For that step you will need your Arduino board, the <a class=\"info-inline-link\" href=\"https://www.arduino.cc/en/software\" target=\"_blank\" rel=\"noopener\">Arduino IDE application</a>, and a USB B to USB A cable, the square-ended kind that comes with most printers.",
      "info.offlineTitle": "Working offline?",
      "info.offline":
        "Once you have opened this page online once, your browser keeps a copy of it, so you can fill in the form and download your code with no connection. If you download while offline, the details you agreed to send are held in your browser and sent automatically the next time you are online.",
      "info.offline2":
        "Clearing your browser's cache or site data for this page removes that copy, along with your saved details and anything still waiting to be sent. If that happens, just open this page again while online to restore it.",

      /*  form */
      "form.requiredNote": "Fields marked * are required",
      "form.noscript":
        "This generator builds your Arduino file inside the browser, so it needs JavaScript switched on. Everything still happens on your own machine: turning JavaScript on does not send your work anywhere.",
      "form.blockTitle": "Sensor-Arduino port connection specifications",
      "form.remove": "Remove",
      "form.duplicate": "Duplicate",
      "form.duplicateTip":
        "Copy this sensor onto the next free port, keeping the measurement, the visualization and the parameter values.",
      "form.blockIntro":
        "For each sensor, select the items you want from the lists below. Leaving the default values will generate a default code that may not meet your requirements.",
      "form.pairCaption":
        "The sensor specified below will be plugged into the Arduino board port specified below.",
      "form.sensorType": "Sensor type",
      "form.port": "Port",
      "form.required": "Required.",
      "form.outputLabel":
        "For this sensor and this port, I want to see the variable specified below on my screen:",
      "form.vizLabel":
        "For this sensor and this port, I want this variable to appear as:",
      "form.partnerLabel": "Deep (partner) sensor port",
      "form.partnerHelp1": "Wetting front needs two sensors at different depths. This block is the",
      "form.partnerHelpShallow": "shallow",
      "form.partnerHelp2": "sensor. Add a second sensor block for the",
      "form.partnerHelpDeep": "deep",
      "form.partnerHelp3": "sensor, then choose its port here.",
      "form.paramsLabel":
        "The information listed below is necessary to configure your NodeFlow On-site. Please fill in each case to the best of your knowledge.",
      "form.calHintTitle": "Calibration values.",
      "form.calHint":
        "If you don't know these numbers yet: generate a code with the output \"Raw Sensor Value (bits)\" for this sensor first, read the value shown with the probe held in open air, then with the probe submerged in water, and enter those two numbers here.",
      "form.parameter": "Parameter",
      "form.value": "Value",
      "form.units": "Units",
      "form.addBlock": "+ Add another \"Sensor-Arduino port connection specifications\"",
      "form.generate": "Generate the code for my NodeFlow On-site Sensing System",
      "form.generating": "Generating your code...",
      "form.costQuestion": "Do you want to estimate the cost of your system?",
      "form.costSoon": "Cost estimator, coming soon",
      "form.selectPort": "Select the port",
      "form.tempProbe": "soil temperature probe",
      "form.addSecondBlock": "Add a second sensor block first",
      "form.ready": "Ready when you are",
      "form.noAnalogPort": "No analog port available",

      /*  tooltips on the form itself */
      "tip.sensorType":
        "The sensors that can be used with the NodeFlow On-site Sensing System are listed in our written guidelines.",
      "tip.port":
        "The letter and number of the port are written on the left side of each port. The ports associated to the Arduino board are shown on the LCD screen.",
      "tip.output":
        "The sensor will send out a raw value that can be transformed into other variables that may be easier to understand and read on a regular basis. Please choose how you want to read your data.",
      "tip.viz":
        "You can display your variable in different ways. For example, you may want it to appear as a number, or a percentage, or a percentage bar. Please select.",
      "tip.params":
        "In the configuration you specified in the boxes above, we need to know the value of the parameters listed below. Default values are specified but they may not be suitable for your specific situation. Please refer to the guidelines to learn how to measure these values.",
      "tip.prefix": "Explanation:",

      /*  saved information */
      "saved.welcome": "Welcome back,",
      "saved.infoSaved": ". Your info is saved.",
      "saved.edit": "Edit my info",
      "saved.clear": "Clear",
      "saved.loadTitle": "Load a previous configuration",
      "saved.loadHelp":
        "Reloads the sensors, ports and values you used for that file so you can adjust them.",
      "saved.load": "Load",
      "saved.sensor": "sensor",
      "saved.sensors": "sensors",
      "saved.forgetConfig": "Forget this configuration",
      "saved.forgetName": "Forget this filename",
      "saved.confirmLoad":
        "Load the configuration saved as \"{name}\"? This replaces what is currently in the form.",
      "saved.confirmDelete":
        "Delete saved configuration \"{name}\"? This only removes it from your browser.",

      /*  download dialog */
      "dialog.title": "Before you download",
      "dialog.close": "Cancel and close this dialog",
      "dialog.cancel": "Cancel",
      "dialog.confirm": "Confirm + download",
      "dialog.generating": "Generating...",
      "dialog.consent1": "I have read the",
      "dialog.consentLink": "consent form (PDF, opens in a new tab)",
      "dialog.consent2":
        "and agree to my information being collected by NodeFlow for research purposes.",
      "dialog.option1": "Option 1: reuse a previous name",
      "dialog.option1Help":
        "Click to fill in the name below. Your browser will not overwrite the earlier download. It saves alongside it as name-2.ino, so delete the old one if you don't want both.",
      "dialog.lastUsed": "Last used:",
      "dialog.clickToUse": "Click to use",
      "dialog.or": "OR",
      "dialog.option2": "Option 2: make a new file",
      "dialog.option2Help": "Type a new name to create a separate file.",
      "dialog.filename": "Name of file to generate",
      "dialog.filenameOrPrevious": "Name of file to generate (new or selected from above)",
      "dialog.filenameHelp":
        "Letters, numbers, dashes and underscores. Anything else is removed.",
      "dialog.filenamePlaceholder": "e.g. apples_field2 (no spaces, no .ino)",
      "dialog.stamp":
        "Add a date and time to the filename so it never overwrites an earlier download",
      "dialog.comment": "Comment to include in the code (optional)",
      "dialog.commentPlaceholder": "e.g. Orchard block 2, installed June 2026",
      "dialog.submittingAs": "Submitting as",
      "dialog.notYou": "Not you?",
      "dialog.badEmail": "That does not look like an email address.",
      "dialog.badFilename":
        "Use letters or numbers in the name. Symbols on their own will not do.",

      /*  results */
      "result.downloaded": "The code has successfully downloaded as",
      "result.viewBelow": "You can visualize it below, or read",
      "result.whatNext": "what to do next",
      "result.preview": "Code preview",
      "result.copy": "Copy",
      "result.copied": "Copied!",

      /*  messages */
      "msg.duplicatePort":
        "Two sensor blocks are using port {port}. Each port can hold only one sensor, so give one of them a different port.",
      "msg.emptyRequired":
        "Some required values are still empty. The fields that need filling in are outlined in red.",
      "msg.samePort":
        "The soil temperature sensor and the Watermark cannot share the same port ({port}). Pick a different port for the temperature sensor.",
      "msg.needTempPort":
        "This sensor uses two probes. Choose the port your soil temperature sensor is plugged into.",
      "msg.needDeepSensor":
        "Wetting front and flow rate readings need a second, deeper sensor. Add another sensor block and choose its port as the deep partner.",
      "msg.blockLimit":
        "You have reached the limit of {n} sensor blocks. Remove one before adding another.",
      "msg.tooFast": "That was quick. Wait a few seconds before generating another file.",
      "msg.hourlyLimit":
        "You have generated {n} files in the last hour, which is the limit. Try again a little later, or get in touch if you genuinely need more.",
      "msg.generateFailed":
        "Something went wrong while generating your code. Please check your entries and try again.",
      "msg.tooLarge":
        "Your configuration is too large to record, so it was not sent. Your file downloaded normally.",
      "msg.portsDuplicate": "Port{s} {ports} used in more than one block. Each port must be unique.",
      "msg.portsFull":
        "All five analog ports (A1 to A5) are in use. A 200SS-VA3 adapter carries three Watermarks and a temperature probe on a single port, which is how you fit more sensors on this board.",
      "msg.oneDirectOnly":
        "Only one sensor can be wired straight to the Arduino ({ports} are both set to direct). Wet soil conducts between bare sensors, so two of them read partly through each other and the electrodes corrode. Use a 200SS-VA3 adapter for the others.",
      "msg.offline":
        "You are offline. The form still works and your file will download. Research information is sent when you reconnect.",
      "msg.update": "A new version of this page is available.",
      "msg.refresh": "Refresh",


      /*  footer */
      "foot.privacy": "Privacy policy",
      "foot.terms": "Terms of use",
      "foot.consentForm": "Research consent form (PDF)",
      "foot.afterDownload": "After you download",
      "foot.generator": "Code generator",
      "foot.legal":
        "A research and outreach project of UC Agriculture and Natural Resources and UC Santa Cruz.",
      "foot.contactSoon": "Contact details coming soon.",
      "foot.copyright": "The NodeFlow project.",

      /*  privacy, terms, after-download and 404 pages  */
      "page.skipMain": "Skip to the main content",
      "page.logoHome": "NodeFlow On-site code generator, home",
      "page.subtitle": "NodeFlow On-site Sensing System Code Generator",
      "page.ucanrAlt": "University of California, Agriculture and Natural Resources",
      "page.ucscAlt": "University of California, Santa Cruz",
      "page.backToGenerator": "Back to the code generator",
      "foot.contactTeam": "The project team",
      "bar.offline":
        "You are offline. The form still works and your file will download. Research information is sent when you reconnect.",
      "bar.update": "A new version of this page is available.",
      "bar.updateBtn": "Refresh",
      "terms.pageTitle": "Terms of Use | NodeFlow On-site Sensing System",
      "terms.h1": "Terms of use",
      "terms.updated": "Last updated: 29 August 2026",
      "terms.h2a": "What this site is",
      "terms.p1":
        "NodeFlow On-site is a free research and outreach tool from UC Agriculture and Natural Resources and UC Santa Cruz. It assembles Arduino source code from the choices you make in a form. Using it costs nothing, and there is no account to create.",
      "terms.h2b": "The code you download",
      "terms.p2":
        "The generated <code>.ino</code> file is yours. You may use, change, share and redistribute it freely, including on commercial farms and in commercial work. We ask, but do not require, that you keep the attribution comment at the top so other people can find the project.",
      "terms.h2c": "No warranty",
      "terms.p3":
        "The generator and the code it produces are provided as is, with no warranty of any kind, express or implied, including any warranty of merchantability or fitness for a particular purpose. Sensor calibration, wiring, soil variability and hardware faults all affect what the readings mean.",
      "terms.p4":
        "<strong>Irrigation decisions stay yours.</strong> Check the readings against your own knowledge of the field before you act on them. Do not treat a number on the display as a substitute for inspecting the soil. To the fullest extent the law allows, the project team and the universities are not liable for crop loss, water waste, equipment damage or any other loss arising from use of this tool or the code it produces.",
      "terms.h2d": "Electrical and site safety",
      "terms.p5":
        "You are responsible for wiring your own hardware safely, for the batteries and power supplies you use, and for anything you install in a field. Follow the manufacturer's documentation for the Arduino board, the LCD board, the Irrometer adapter and every sensor.",
      "terms.h2e": "Acceptable use",
      "terms.use1": "Do not try to overload, disrupt or probe the site or the submission endpoint.",
      "terms.use2":
        "Do not submit automated or bulk requests. The form is rate limited and abusive traffic is blocked.",
      "terms.use3": "Do not submit other people's personal information in the form fields.",
      "terms.use4":
        "Do not present the tool as your own or as endorsed by the universities without written permission.",
      "terms.h2f": "Research participation",
      "terms.p6":
        "Downloading a file records the form details described in the <a href=\"privacy.html\">privacy policy</a>, after you have read the consent form and ticked the box. Participation is voluntary; you can ask for your records to be deleted at any time.",
      "terms.h2g": "Availability",
      "terms.p7":
        "This is a research project, not a commercial service. The site may change or stop being available. Because it runs entirely in your browser, a copy you have already loaded keeps working offline, and a file you have already downloaded keeps working regardless.",
      "terms.h2h": "Third-party services",
      "terms.p8":
        "Pages are hosted on GitHub Pages. Form submissions are recorded through Google Apps Script into a Google Sheet. Both providers handle data under their own terms.",
      "terms.h2i": "Changes to these terms",
      "terms.p9":
        "We may update this page. The date at the top shows when it last changed. Continuing to use the site after a change means you accept the updated terms.",
      "terms.h2j": "Contact",
      "privacy.pageTitle": "Privacy Policy | NodeFlow On-site Sensing System",
      "privacy.h1": "Privacy policy",
      "privacy.updated": "Last updated: 29 August 2026",
      "privacy.h2a": "The short version",
      "privacy.p1":
        "This site builds your Arduino file inside your own browser. When you download a generated file, the details you typed into the form are also sent to a spreadsheet the project team keeps, so we can see how the system is being used and improve it. We do not sell that information and we do not use it for advertising.",
      "privacy.h2b": "What is collected when you download a file",
      "privacy.p2": "When you press <strong>Confirm and download</strong>, this is recorded:",
      "privacy.c1": "Your name",
      "privacy.c2": "Your email address",
      "privacy.c3": "Your country",
      "privacy.c4": "The file name you chose",
      "privacy.c5": "Any comment you asked to be written into the code",
      "privacy.c6":
        "The sensor configuration you generated: which sensors, which ports, which measurements, and the parameter values you entered",
      "privacy.c7": "The date and time of the download",
      "privacy.p3":
        "Nothing is sent while you fill in the form. It is sent at the moment you confirm the download, and only then. You see the consent form and tick the box before that happens.",
      "privacy.h2d": "What is never collected",
      "privacy.n1":
        "No advertising or tracking cookies, and no third-party trackers embedded in the page.",
      "privacy.n2":
        "No sensor readings from your device. The board is not connected to this website in any way, and the code it runs sends nothing back to us.",
      "privacy.n3": "No location data beyond the country you type in yourself.",
      "privacy.n4": "No payment details. Nothing on this site is for sale.",
      "privacy.h2e": "Why it is collected",
      "privacy.p5":
        "NodeFlow On-site is a research and outreach project. Knowing which sensors and settings people actually use tells us which parts of the system to improve, which defaults are wrong, and where the instructions are unclear. The email address lets us reach you if there is a problem with a configuration you generated, or a fix you should know about.",
      "privacy.h2f": "Where it is stored",
      "privacy.p6":
        "Submissions go to a Google Sheet reachable only by the project team, through a Google Apps Script endpoint. Google's handling of that data is covered by their own terms. The endpoint accepts the fields listed above and rejects anything larger or malformed.",
      "privacy.h2g": "How long it is kept",
      "privacy.p7":
        "Submissions are kept for as long as the project runs, because the point of them is to see how use changes over time. You can ask for yours to be removed at any point, and you do not need to give a reason.",
      "privacy.h2h": "Information kept in your browser",
      "privacy.p8":
        "So you do not retype it, your name, email and country are stored locally in your own browser, along with the configurations you have generated. This stays on your device. We cannot read it.",
      "privacy.p9":
        "Remove it at any time with <strong>Clear</strong> in the welcome banner on the generator page, or by clearing this site's data in your browser. Clearing site data also removes the offline copy of the page, which comes back the next time you open the site online.",
      "privacy.h2i": "Offline use",
      "privacy.p10":
        "If you generate a file while offline, the submission waits in your browser and is sent the next time you have a connection. Nothing leaves your device while you have no connection.",
      "privacy.h2j": "Requesting removal or a copy",
      "privacy.p11":
        "Ask us to delete, correct or send you the information tied to your email address, and we will. Use the contact address in the footer of this page.",
      "privacy.h2k": "Children",
      "privacy.p12":
        "This is a tool for agricultural and research use and is not directed at children.",
      "privacy.h2l": "Changes",
      "privacy.p13":
        "If what we collect changes, this page changes with it and the date at the top moves.",
      "next.pageTitle": "After You Download | NodeFlow On-site Sensing System",
      "next.h1": "Your file is downloaded",
      "next.lede":
        "Thank you. Your configuration choice helps us understand how the system is being used.",
      "next.lede2":
        "This page will walk you through the process of uploading this code onto your Arduino board. If you have not done so already, please <a href=\"https://www.arduino.cc/en/software\" target=\"_blank\" rel=\"noopener\">download the Arduino IDE application here</a>. Note that no additional software, packages or configuration are needed. You will also need a USB B to USB A cable, the square-ended kind that comes with most printers, to connect the board to your computer.",
      "next.s1h": "Open the file",
      "next.s1p":
        "Find the <code>.ino</code> file in your downloads folder and open it with the Arduino IDE. The Arduino IDE will ask to move this file into a new folder. Select yes or OK.",
      "next.s2h": "Choose the board and the port",
      "next.s2p":
        "Plug the Arduino into your computer with the USB cable. In the Arduino IDE, set <strong>Tools &rsaquo; Board</strong> to <em>Arduino Uno</em>. On some versions of the Arduino IDE it sits one level deeper, under <strong>Tools &rsaquo; Board &rsaquo; Arduino AVR Boards &rsaquo; Arduino Uno</strong>. Then set <strong>Tools &rsaquo; Port</strong> to the port that appeared when you plugged the board in. If no port appeared, try a different USB cable: many cables carry power but no data.",
      "next.s3h": "Upload",
      "next.s3p":
        "Press the upload arrow. When the Arduino IDE says <em>Done uploading</em>, the display starts showing readings.",
      "next.s4h": "Read the screen",
      "next.s4p":
        "The top line of the Arduino screen shows the port number, the abbreviated sensor name and the value, like <code>A2 WM200SS 34 kPa</code>. The bottom line shows the bar, state or warning you chose. Press the board's left and right buttons to step through your sensors. The backlight goes out after five minutes without a button press; any button wakes it.",
      "next.s4p2":
        "Some choices leave the bottom line blank, and that is normal. <em>Raw value</em>, <em>Transformed Raw Value 0-100</em> and <em>Temperature</em> put everything on the top line. <em>No visualization</em> goes further: the sensor is still read, but nothing about it appears on the screen at all. If you want the bottom line used, choose a visualization that draws there, such as <em>Percentage bar</em> or one of the <em>State</em> options.",
      "next.faqH": "If something looks wrong",
      "next.q1": "The screen is blank or shows blocks",
      "next.a1":
        "Near one corner of the LCD board there is a small blue box with a screw slot in the middle. That is the contrast dial. Turn it slowly with a small screwdriver until the text appears. A new board is often set to full contrast, which shows a row of solid blocks, or to none, which shows nothing at all.",
      "next.q2": "A port reads <code>No Sensor</code>",
      "next.a2":
        "Nothing is detected on that pin. Check the wiring at both ends. On a Watermark going through the 200SS-VA3 adapter, remember the adapter refreshes each channel every five minutes and holds the previous value in between, so give it time after powering up.",
      "next.q3": "The percentage looks backwards",
      "next.a3":
        "Higher percentages always mean wetter soil, in every measurement except the raw reading, which reports the sensor faithfully. If a capacitive probe reads backwards, your air and water calibration values are probably swapped. Generate a file with the raw value as the measurement, note the reading in open air and in water, then put those two numbers back into the form.",
      "next.q4": "A battery warning appears",
      "next.a4":
        "The code measures the supply voltage against the chip's internal 1.1&nbsp;V reference. It only works on battery power through the barrel jack. On USB power, including a USB power bank, the reading is not meaningful and the warning can be ignored.",
      "next.q5":
        "The calibration values in the form or the display values do not match my soil",
      "next.a5":
        "Calibration values and soil-texture thresholds are your field's, not ours. The defaults are a starting point. Change them in the form and generate the file again.",
      "next.laterH": "Coming back later",
      "next.laterP":
        "Your configuration is saved in this browser. Open the generator again and load it from the list at the top of the form, adjust what changed, and download a new file. Nothing is overwritten: tick the date-stamp option if you want each download kept separately.",
      "next.again": "Generate another file",
      "nf404.pageTitle": "Page Not Found | NodeFlow On-site Sensing System",
      "nf404.h1": "That page is not here",
      "nf404.lede":
        "The address may have changed, or the link that brought you here may be out of date. Nothing is broken on your end.",
      "nf404.h2": "Where you probably meant to go",
      "nf404.l1":
        "<a href=\"index.html\">The code generator</a>: pick your sensors and download your code",
      "nf404.l2":
        "<a href=\"thank-you.html\">After you download</a>: getting the file onto the board",
      "nf404.l3":
        "<a href=\"privacy.html\">Privacy policy</a> and <a href=\"terms.html\">terms of use</a>",
      "nf404.p":
        "If a link on this site sent you here, we would like to fix it. Tell us which page you came from.",
      "nf404.back": "Back to the generator",
    },

    es: {
      /*  page chrome */
      "page.title": "Generador de código del sistema de sensores NodeFlow In Situ",
      "page.skip": "Ir al formulario",
      "lang.switch": "English",
      "lang.switchLabel": "Switch the language to English",
      "logo.alt":
        "Logotipo de NodeFlow: una gota de agua sobre un abanico de capas de suelo con tres nodos de sensores",

      /*  summary box */
      "info.title": "Resumen e instrucciones",
      "info.p1":
        "Este sitio web le permite configurar el código que el sistema de sensores NodeFlow In Situ utiliza para interpretar y mostrar las lecturas de los sensores.",
      "info.p1b":
        "Para cada puerto de la placa Arduino, usted elegirá qué sensor está usando, qué variable desea ver en pantalla y cómo desea que esa variable se visualice. Este sitio web genera entonces el código que usted especificó, y luego usted lo carga en su equipo.",
      "info.guideIntro":
        "Para las instrucciones completas, desde instalar el programa de Arduino hasta leer la pantalla, consulte la guía del usuario.",
      "info.guideLink": "Abrir la guía del usuario (PDF)",
      "info.guidePending": "La guía imprimible se está preparando.",
      "info.p2": "Los videos sobre cómo usar el dispositivo aún están por agregarse.",
      "info.p3":
        "Para generar el código de su dispositivo NodeFlow In Situ, elegirá lo siguiente para cada puerto que piense usar (por ejemplo A1, A2, A3):",
      "info.portNote": "Tenga en cuenta que solo se puede conectar un tipo de sensor a cada puerto.",
      "info.li1": "Qué tipo de sensor piensa usar",
      "info.li2": "Qué variable se mostrará en la pantalla LCD",
      "info.li3": "Cómo se visualizará esa variable",
      "info.research":
        "Tenga en cuenta que este servicio forma parte de un proyecto de investigación en curso. Antes de descargar, se le pedirá su nombre, su correo electrónico y su país, y que acepte que se registre la configuración que creó. El equipo del proyecto usa estos datos para saber qué sensores y ajustes se usan en la práctica, y así saber qué mejorar, y para contactarle si hay un problema con una configuración que usted generó. Todo va a una hoja de cálculo que solo el equipo del proyecto puede abrir, y nunca se vende ni se usa para publicidad.",
      "info.researchLink": "Ver qué se registra y cómo pedir que se elimine",
      "info.upload":
        "Una vez que descargue su código, pasará a una <a class=\"info-inline-link\" href=\"thank-you.html\">página con instrucciones para cargarlo en su placa Arduino</a>. Para ese paso necesitará su placa Arduino, la <a class=\"info-inline-link\" href=\"https://www.arduino.cc/en/software\" target=\"_blank\" rel=\"noopener\">aplicación Arduino IDE</a> y un cable USB B a USB A, del tipo de extremo cuadrado que viene con la mayoría de las impresoras.",
      "info.offlineTitle": "¿Trabaja sin conexión?",
      "info.offline":
        "Una vez que haya abierto esta página en línea una vez, su navegador guarda una copia, así que puede llenar el formulario y descargar su código sin conexión. Si descarga sin conexión, los datos que usted aceptó enviar quedan guardados en su navegador y se envían automáticamente la próxima vez que tenga conexión.",
      "info.offline2":
        "Si borra la caché o los datos del sitio en su navegador, se elimina esa copia, junto con sus datos guardados y cualquier información pendiente de envío. Si eso ocurre, vuelva a abrir esta página con conexión para restaurarla.",

      /*  form */
      "form.requiredNote": "Los campos marcados con * son obligatorios",
      "form.noscript":
        "Este generador crea su archivo de Arduino dentro del navegador, así que necesita que JavaScript esté activado. Todo sigue ocurriendo en su propia computadora: activar JavaScript no envía su trabajo a ningún lado.",
      "form.blockTitle": "Especificaciones de conexión entre el sensor y el puerto del Arduino",
      "form.remove": "Quitar",
      "form.duplicate": "Duplicar",
      "form.duplicateTip":
        "Copia este sensor al siguiente puerto libre, conservando la medición, la visualización y los valores de los parámetros.",
      "form.blockIntro":
        "Para cada sensor, seleccione lo que desee en las listas de abajo. Si deja los valores predeterminados se generará un código genérico que puede no ajustarse a sus necesidades.",
      "form.pairCaption":
        "El sensor indicado abajo se conectará al puerto de la placa Arduino indicado abajo.",
      "form.sensorType": "Tipo de sensor",
      "form.port": "Puerto",
      "form.required": "Obligatorio.",
      "form.outputLabel":
        "Para este sensor y este puerto, quiero ver en mi pantalla la variable indicada abajo:",
      "form.vizLabel":
        "Para este sensor y este puerto, quiero que esta variable aparezca como:",
      "form.partnerLabel": "Puerto del sensor profundo (asociado)",
      "form.partnerHelp1":
        "El frente de humedecimiento necesita dos sensores a distintas profundidades. Este bloque es el sensor",
      "form.partnerHelpShallow": "superficial",
      "form.partnerHelp2": ". Agregue un segundo bloque de sensor para el sensor",
      "form.partnerHelpDeep": "profundo",
      "form.partnerHelp3": "y luego elija aquí su puerto.",
      "form.paramsLabel":
        "La información indicada abajo es necesaria para configurar su NodeFlow In Situ. Complete cada campo con los mejores datos que tenga.",
      "form.calHintTitle": "Valores de calibración.",
      "form.calHint":
        "Si todavía no conoce estos números: primero genere un código con la salida \"Valor bruto del sensor (bits)\" para este sensor, anote el valor que aparece con la sonda al aire libre y después con la sonda sumergida en agua, e ingrese esos dos números aquí.",
      "form.parameter": "Parámetro",
      "form.value": "Valor",
      "form.units": "Unidades",
      "form.addBlock": "+ Agregar otra \"Especificación de conexión sensor-puerto\"",
      "form.generate": "Generar el código para mi sistema de sensores NodeFlow In Situ",
      "form.generating": "Generando su código...",
      "form.costQuestion": "¿Desea estimar el costo de su sistema?",
      "form.costSoon": "Estimador de costos, próximamente",
      "form.selectPort": "Seleccione el puerto",
      "form.tempProbe": "sonda de temperatura del suelo",
      "form.addSecondBlock": "Agregue primero un segundo bloque de sensor",
      "form.ready": "Cuando quiera",
      "form.noAnalogPort": "No hay ningún puerto analógico disponible",

      /*  tooltips on the form itself */
      "tip.sensorType":
        "Los sensores que se pueden usar con el sistema de sensores NodeFlow In Situ están enumerados en nuestras guías escritas.",
      "tip.port":
        "La letra y el número del puerto están escritos al lado izquierdo de cada puerto. Los puertos asociados a la placa Arduino se muestran en la pantalla LCD.",
      "tip.output":
        "El sensor entrega un valor bruto que se puede transformar en otras variables más fáciles de entender y de leer a diario. Elija cómo desea leer sus datos.",
      "tip.viz":
        "Puede mostrar su variable de distintas formas. Por ejemplo, como un número, como un porcentaje o como una barra de porcentaje. Seleccione una opción.",
      "tip.params":
        "Para la configuración que indicó en los campos de arriba, necesitamos conocer el valor de los parámetros que se enumeran abajo. Se indican valores predeterminados, pero pueden no ser adecuados para su situación. Consulte las guías para aprender a medir estos valores.",
      "tip.prefix": "Explicación:",

      /*  saved information */
      "saved.welcome": "Bienvenido de nuevo,",
      "saved.infoSaved": ". Sus datos están guardados.",
      "saved.edit": "Editar mis datos",
      "saved.clear": "Borrar",
      "saved.loadTitle": "Cargar una configuración anterior",
      "saved.loadHelp":
        "Vuelve a cargar los sensores, los puertos y los valores que usó para ese archivo para que pueda ajustarlos.",
      "saved.load": "Cargar",
      "saved.sensor": "sensor",
      "saved.sensors": "sensores",
      "saved.forgetConfig": "Olvidar esta configuración",
      "saved.forgetName": "Olvidar este nombre de archivo",
      "saved.confirmLoad":
        "¿Cargar la configuración guardada como \"{name}\"? Esto reemplaza lo que hay ahora en el formulario.",
      "saved.confirmDelete":
        "¿Eliminar la configuración guardada \"{name}\"? Esto solo la quita de su navegador.",

      /*  download dialog */
      "dialog.title": "Antes de descargar",
      "dialog.close": "Cancelar y cerrar este cuadro de diálogo",
      "dialog.cancel": "Cancelar",
      "dialog.confirm": "Confirmar y descargar",
      "dialog.generating": "Generando...",
      "dialog.consent1": "He leído el",
      "dialog.consentLink": "formulario de consentimiento (PDF, se abre en una pestaña nueva)",
      "dialog.consent2":
        "y acepto que NodeFlow recopile mi información con fines de investigación.",
      "dialog.option1": "Opción 1: reutilizar un nombre anterior",
      "dialog.option1Help":
        "Haga clic para completar el nombre de abajo. Su navegador no sobrescribirá la descarga anterior. La guarda junto a ella como nombre-2.ino, así que borre la antigua si no quiere las dos.",
      "dialog.lastUsed": "Usado por última vez:",
      "dialog.clickToUse": "Haga clic para usar",
      "dialog.or": "O BIEN",
      "dialog.option2": "Opción 2: crear un archivo nuevo",
      "dialog.option2Help": "Escriba un nombre nuevo para crear un archivo aparte.",
      "dialog.filename": "Nombre del archivo que se generará",
      "dialog.filenameOrPrevious":
        "Nombre del archivo que se generará (nuevo o elegido arriba)",
      "dialog.filenameHelp":
        "Letras, números, guiones y guiones bajos. Cualquier otro carácter se elimina.",
      "dialog.filenamePlaceholder": "por ejemplo, manzanos_lote2 (sin espacios, sin .ino)",
      "dialog.stamp":
        "Agregar la fecha y la hora al nombre del archivo para que nunca sobrescriba una descarga anterior",
      "dialog.comment": "Comentario para incluir en el código (opcional)",
      "dialog.commentPlaceholder": "por ejemplo, Huerto lote 2, instalado en junio de 2026",
      "dialog.submittingAs": "Enviando como",
      "dialog.notYou": "¿No es usted?",
      "dialog.badEmail": "Eso no parece una dirección de correo electrónico.",
      "dialog.badFilename":
        "Use letras o números en el nombre. Los símbolos por sí solos no sirven.",

      /*  results */
      "result.downloaded": "El código se descargó correctamente como",
      "result.viewBelow": "Puede verlo abajo o leer",
      "result.whatNext": "qué hacer a continuación",
      "result.preview": "Vista previa del código",
      "result.copy": "Copiar",
      "result.copied": "¡Copiado!",

      /*  messages */
      "msg.duplicatePort":
        "Dos bloques de sensor están usando el puerto {port}. Cada puerto admite un solo sensor, así que asigne otro puerto a uno de ellos.",
      "msg.emptyRequired":
        "Todavía faltan valores obligatorios. Los campos que hay que completar están marcados en rojo.",
      "msg.samePort":
        "El sensor de temperatura del suelo y el Watermark no pueden compartir el mismo puerto ({port}). Elija otro puerto para el sensor de temperatura.",
      "msg.needTempPort":
        "Este sensor usa dos sondas. Elija el puerto donde está conectado su sensor de temperatura del suelo.",
      "msg.needDeepSensor":
        "Una lectura del frente de humedecimiento necesita un segundo sensor más profundo. Agregue otro bloque de sensor y elija su puerto como el sensor profundo asociado.",
      "msg.blockLimit":
        "Ha llegado al límite de {n} bloques de sensor. Quite uno antes de agregar otro.",
      "msg.tooFast":
        "Eso fue muy rápido. Espere unos segundos antes de generar otro archivo.",
      "msg.hourlyLimit":
        "Ha generado {n} archivos en la última hora, que es el límite. Vuelva a intentarlo un poco más tarde o escríbanos si realmente necesita más.",
      "msg.generateFailed":
        "Algo salió mal al generar su código. Revise sus datos e inténtelo de nuevo.",
      "msg.tooLarge":
        "Su configuración es demasiado grande para registrarla, así que no se envió. Su archivo se descargó con normalidad.",
      "msg.portsDuplicate":
        "El puerto {ports} se usa en más de un bloque. Cada puerto debe ser único.",
      "msg.portsFull":
        "Los cinco puertos analógicos (A1 a A5) están en uso. Un adaptador 200SS-VA3 admite tres sensores Watermark y una sonda de temperatura en un solo puerto, que es la forma de conectar más sensores a esta placa.",
      "msg.oneDirectOnly":
        "Solo un sensor puede conectarse directamente al Arduino ({ports} están ambos en conexión directa). El suelo húmedo conduce entre sensores desnudos, así que dos de ellos se leen parcialmente entre sí y los electrodos se corroen. Use un adaptador 200SS-VA3 para los demás.",
      "msg.offline":
        "Está sin conexión. El formulario sigue funcionando y su archivo se descargará. La información de investigación se envía cuando vuelva a conectarse.",
      "msg.update": "Hay una versión nueva de esta página.",
      "msg.refresh": "Actualizar",


      /*  footer */
      "foot.privacy": "Política de privacidad",
      "foot.terms": "Términos de uso",
      "foot.consentForm": "Formulario de consentimiento (PDF)",
      "foot.afterDownload": "Después de descargar",
      "foot.generator": "Generador de código",
      "foot.legal":
        "Un proyecto de investigación y divulgación de UC Agriculture and Natural Resources y UC Santa Cruz.",
      "foot.contactSoon": "Datos de contacto próximamente.",
      "foot.copyright": "El proyecto NodeFlow.",

      /*  privacy, terms, after-download and 404 pages  */
      "page.skipMain": "Ir al contenido principal",
      "page.logoHome": "Generador de código NodeFlow In Situ, inicio",
      "page.subtitle": "Generador de código del sistema de sensores NodeFlow In Situ",
      "page.ucanrAlt": "Universidad de California, Agricultura y Recursos Naturales",
      "page.ucscAlt": "Universidad de California, Santa Cruz",
      "page.backToGenerator": "Volver al generador de código",
      "foot.contactTeam": "El equipo del proyecto",
      "bar.offline":
        "Está sin conexión. El formulario sigue funcionando y su archivo se descargará. La información de investigación se envía cuando vuelva a conectarse.",
      "bar.update": "Hay una nueva versión de esta página.",
      "bar.updateBtn": "Actualizar",
      "terms.pageTitle": "Términos de uso | Sistema de sensores NodeFlow In Situ",
      "terms.h1": "Términos de uso",
      "terms.updated": "Última actualización: 29 de agosto de 2026",
      "terms.h2a": "Qué es este sitio",
      "terms.p1":
        "NodeFlow In Situ es una herramienta gratuita de investigación y divulgación de UC Agriculture and Natural Resources y UC Santa Cruz. Arma el código fuente de Arduino a partir de las opciones que usted elige en un formulario. Usarla no cuesta nada y no hay que crear ninguna cuenta.",
      "terms.h2b": "El código que usted descarga",
      "terms.p2":
        "El archivo <code>.ino</code> generado es suyo. Puede usarlo, modificarlo, compartirlo y redistribuirlo libremente, incluso en explotaciones agrícolas y trabajos comerciales. Le pedimos, sin exigirlo, que conserve el comentario de atribución al principio para que otras personas puedan encontrar el proyecto.",
      "terms.h2c": "Sin garantía",
      "terms.p3":
        "El generador y el código que produce se ofrecen tal cual, sin garantía de ningún tipo, expresa o implícita, incluida cualquier garantía de comerciabilidad o de idoneidad para un fin determinado. La calibración de los sensores, el cableado, la variabilidad del suelo y las fallas del equipo influyen en lo que significan las lecturas.",
      "terms.p4":
        "<strong>Las decisiones de riego siguen siendo suyas.</strong> Contraste las lecturas con su propio conocimiento del campo antes de actuar según ellas. No tome un número en la pantalla como sustituto de inspeccionar el suelo. En la máxima medida que permita la ley, el equipo del proyecto y las universidades no se hacen responsables de pérdidas de cosecha, desperdicio de agua, daños al equipo ni cualquier otra pérdida derivada del uso de esta herramienta o del código que produce.",
      "terms.h2d": "Seguridad eléctrica y en campo",
      "terms.p5":
        "Usted es responsable de cablear su equipo de forma segura, de las baterías y fuentes de alimentación que utilice y de todo lo que instale en un campo. Siga la documentación del fabricante de la placa Arduino, la pantalla LCD, el adaptador Irrometer y cada sensor.",
      "terms.h2e": "Uso aceptable",
      "terms.use1":
        "No intente sobrecargar, interrumpir ni sondear el sitio ni el punto de envío de datos.",
      "terms.use2":
        "No envíe solicitudes automatizadas ni masivas. El formulario tiene un límite de frecuencia y el tráfico abusivo se bloquea.",
      "terms.use3":
        "No introduzca información personal de otras personas en los campos del formulario.",
      "terms.use4":
        "No presente la herramienta como propia ni como avalada por las universidades sin permiso por escrito.",
      "terms.h2f": "Participación en la investigación",
      "terms.p6":
        "Al descargar un archivo se registran los datos del formulario descritos en la <a href=\"privacy.html\">política de privacidad</a>, después de que usted haya leído el formulario de consentimiento y marcado la casilla. La participación es voluntaria; puede pedir que se eliminen sus registros en cualquier momento.",
      "terms.h2g": "Disponibilidad",
      "terms.p7":
        "Este es un proyecto de investigación, no un servicio comercial. El sitio puede cambiar o dejar de estar disponible. Como funciona por completo en su navegador, una copia que ya haya cargado sigue funcionando sin conexión, y un archivo que ya haya descargado sigue funcionando de todos modos.",
      "terms.h2h": "Servicios de terceros",
      "terms.p8":
        "Las páginas están alojadas en GitHub Pages. Los envíos del formulario se registran mediante Google Apps Script en una hoja de cálculo de Google. Ambos proveedores tratan los datos según sus propios términos.",
      "terms.h2i": "Cambios en estos términos",
      "terms.p9":
        "Podemos actualizar esta página. La fecha que aparece arriba indica cuándo cambió por última vez. Seguir usando el sitio después de un cambio significa que acepta los términos actualizados.",
      "terms.h2j": "Contacto",
      "privacy.pageTitle": "Política de privacidad | Sistema de sensores NodeFlow In Situ",
      "privacy.h1": "Política de privacidad",
      "privacy.updated": "Última actualización: 29 de agosto de 2026",
      "privacy.h2a": "En resumen",
      "privacy.p1":
        "Este sitio crea su archivo de Arduino dentro de su propio navegador. Cuando descarga un archivo generado, los datos que escribió en el formulario también se envían a una hoja de cálculo que mantiene el equipo del proyecto, para que podamos ver cómo se usa el sistema y mejorarlo. No vendemos esa información ni la usamos para publicidad.",
      "privacy.h2b": "Qué se registra cuando descarga un archivo",
      "privacy.p2":
        "Cuando pulsa <strong>Confirmar y descargar</strong>, se registra lo siguiente:",
      "privacy.c1": "Su nombre",
      "privacy.c2": "Su correo electrónico",
      "privacy.c3": "Su país",
      "privacy.c4": "El nombre de archivo que eligió",
      "privacy.c5": "Cualquier comentario que pidió incluir en el código",
      "privacy.c6":
        "La configuración de sensores que generó: qué sensores, qué puertos, qué mediciones y los valores de los parámetros que introdujo",
      "privacy.c7": "La fecha y la hora de la descarga",
      "privacy.p3":
        "No se envía nada mientras llena el formulario. Se envía en el momento en que confirma la descarga, y solo entonces. Antes de eso, usted ve el formulario de consentimiento y marca la casilla.",
      "privacy.h2d": "Qué no se recoge nunca",
      "privacy.n1":
        "Ninguna cookie de publicidad o de seguimiento, y ningún rastreador de terceros incrustado en la página.",
      "privacy.n2":
        "Ninguna lectura de los sensores de su dispositivo. La placa no está conectada a este sitio web de ninguna forma, y el código que ejecuta no nos envía nada.",
      "privacy.n3": "Ningún dato de ubicación más allá del país que usted mismo escribe.",
      "privacy.n4": "Ningún dato de pago. Nada en este sitio está a la venta.",
      "privacy.h2e": "Por qué se recoge",
      "privacy.p5":
        "NodeFlow In Situ es un proyecto de investigación y divulgación. Saber qué sensores y ajustes usa la gente en la práctica nos dice qué partes del sistema mejorar, qué valores predeterminados están mal y dónde las instrucciones no son claras. El correo electrónico nos permite contactarle si hay un problema con una configuración que usted generó o una corrección que debería conocer.",
      "privacy.h2f": "Dónde se guarda",
      "privacy.p6":
        "Los envíos van a una hoja de cálculo de Google a la que solo tiene acceso el equipo del proyecto, a través de un punto de conexión de Google Apps Script. El tratamiento que Google da a esos datos se rige por sus propios términos. El punto de conexión acepta los campos enumerados arriba y rechaza cualquier cosa más grande o mal formada.",
      "privacy.h2g": "Cuánto tiempo se conserva",
      "privacy.p7":
        "Los envíos se conservan mientras dure el proyecto, porque su finalidad es ver cómo cambia el uso con el tiempo. Puede pedir que se eliminen los suyos en cualquier momento, y no necesita dar ninguna razón.",
      "privacy.h2h": "Información guardada en su navegador",
      "privacy.p8":
        "Para que no tenga que volver a escribirlos, su nombre, su correo y su país se guardan localmente en su propio navegador, junto con las configuraciones que ha generado. Esto permanece en su dispositivo. Nosotros no podemos leerlo.",
      "privacy.p9":
        "Puede borrarlo cuando quiera con <strong>Borrar</strong> en el aviso de bienvenida de la página del generador, o borrando los datos de este sitio en su navegador. Borrar los datos del sitio también elimina la copia sin conexión de la página, que vuelve la próxima vez que abra el sitio con conexión.",
      "privacy.h2i": "Uso sin conexión",
      "privacy.p10":
        "Si genera un archivo sin conexión, el envío queda en espera en su navegador y se manda la próxima vez que tenga conexión. Nada sale de su dispositivo mientras no tenga conexión.",
      "privacy.h2j": "Cómo pedir la eliminación o una copia",
      "privacy.p11":
        "Pídanos que eliminemos, corrijamos o le enviemos la información asociada a su correo electrónico, y lo haremos. Use la dirección de contacto que aparece al pie de esta página.",
      "privacy.h2k": "Menores de edad",
      "privacy.p12":
        "Esta es una herramienta de uso agrícola y de investigación, y no está dirigida a menores de edad.",
      "privacy.h2l": "Cambios",
      "privacy.p13":
        "Si cambia lo que recogemos, esta página cambia con ello y la fecha que aparece arriba se actualiza.",
      "next.pageTitle": "Después de descargar | Sistema de sensores NodeFlow In Situ",
      "next.h1": "Su archivo está descargado",
      "next.lede":
        "Gracias. La configuración que eligió nos ayuda a entender cómo se está usando el sistema.",
      "next.lede2":
        "Esta página le guiará por el proceso de cargar este código en su placa Arduino. Si aún no lo ha hecho, <a href=\"https://www.arduino.cc/en/software\" target=\"_blank\" rel=\"noopener\">descargue aquí la aplicación Arduino IDE</a>. Tenga en cuenta que no hace falta ningún programa, paquete ni configuración adicional. También necesitará un cable USB B a USB A, del tipo de extremo cuadrado que viene con la mayoría de las impresoras, para conectar la placa a su computadora.",
      "next.s1h": "Abra el archivo",
      "next.s1p":
        "Busque el archivo <code>.ino</code> en su carpeta de descargas y ábralo con el Arduino IDE. El Arduino IDE le pedirá mover este archivo a una carpeta nueva. Seleccione sí o aceptar.",
      "next.s2h": "Elija la placa y el puerto",
      "next.s2p":
        "Conecte el Arduino a su computadora con el cable USB. En el Arduino IDE, ponga <strong>Herramientas &rsaquo; Placa</strong> en <em>Arduino Uno</em>. En algunas versiones del Arduino IDE está un nivel más adentro, en <strong>Herramientas &rsaquo; Placa &rsaquo; Arduino AVR Boards &rsaquo; Arduino Uno</strong>. Después ponga <strong>Herramientas &rsaquo; Puerto</strong> en el puerto que apareció al conectar la placa. Si no apareció ningún puerto, pruebe con otro cable USB: muchos cables llevan corriente pero no datos.",
      "next.s3h": "Cargue el código",
      "next.s3p":
        "Pulse la flecha de carga. Cuando el Arduino IDE indique <em>Subido</em>, la pantalla empieza a mostrar lecturas.",
      "next.s4h": "Lea la pantalla",
      "next.s4p":
        "La línea de arriba de la pantalla del Arduino muestra el número de puerto, el nombre abreviado del sensor y el valor, como <code>A2 WM200SS 34 kPa</code>. La línea de abajo muestra la barra, el estado o el aviso que eligió. Pulse los botones izquierdo y derecho de la placa para recorrer sus sensores. La retroiluminación se apaga tras cinco minutos sin pulsar ningún botón; cualquier botón la vuelve a encender.",
      "next.s4p2":
        "Algunas opciones dejan la línea de abajo en blanco, y eso es normal. <em>Valor bruto</em>, <em>Valor bruto transformado 0-100</em> y <em>Temperatura</em> ponen todo en la línea de arriba. <em>Sin visualización</em> va más lejos: el sensor se sigue leyendo, pero no aparece nada suyo en la pantalla. Si quiere que se use la línea de abajo, elija una visualización que escriba ahí, como <em>Barra de porcentaje</em> o alguna de las opciones de <em>Estado</em>.",
      "next.faqH": "Si algo no se ve bien",
      "next.q1": "La pantalla está en blanco o muestra bloques",
      "next.a1":
        "Cerca de una esquina de la placa LCD hay una cajita azul con una ranura de tornillo en el centro. Ese es el control de contraste. Gírelo despacio con un destornillador pequeño hasta que aparezca el texto. Una placa nueva suele venir con el contraste al máximo, que muestra una fila de bloques llenos, o al mínimo, que no muestra nada.",
      "next.q2": "Un puerto indica <code>No Sensor</code>",
      "next.a2":
        "No se detecta nada en ese pin. Revise el cableado en ambos extremos. En un Watermark conectado mediante el adaptador 200SS-VA3, recuerde que el adaptador actualiza cada canal cada cinco minutos y mantiene el valor anterior mientras tanto, así que déle tiempo después de encenderlo.",
      "next.q3": "El porcentaje parece invertido",
      "next.a3":
        "Un porcentaje más alto siempre significa suelo más húmedo, en todas las mediciones salvo la lectura bruta, que refleja el sensor tal cual. Si una sonda capacitiva lee al revés, lo más probable es que sus valores de calibración de aire y agua estén intercambiados. Genere un archivo con el valor bruto como medición, anote la lectura al aire libre y dentro del agua, y vuelva a introducir esos dos números en el formulario.",
      "next.q4": "Aparece un aviso de batería",
      "next.a4":
        "El código mide el voltaje de alimentación contra la referencia interna de 1,1&nbsp;V del chip. Solo funciona con batería a través del conector cilíndrico. Con alimentación USB, incluida una batería externa USB, la lectura no es significativa y el aviso puede ignorarse.",
      "next.q5":
        "Los valores de calibración del formulario o los valores en pantalla no coinciden con mi suelo",
      "next.a5":
        "Los valores de calibración y los umbrales de textura del suelo son los de su campo, no los nuestros. Los valores predeterminados son solo un punto de partida. Cámbielos en el formulario y genere el archivo de nuevo.",
      "next.laterH": "Volver más adelante",
      "next.laterP":
        "Su configuración queda guardada en este navegador. Abra el generador de nuevo, cárguela desde la lista que aparece al principio del formulario, ajuste lo que haya cambiado y descargue un archivo nuevo. No se sobrescribe nada: marque la opción de fecha si quiere conservar cada descarga por separado.",
      "next.again": "Generar otro archivo",
      "nf404.pageTitle": "Página no encontrada | Sistema de sensores NodeFlow In Situ",
      "nf404.h1": "Esa página no está aquí",
      "nf404.lede":
        "Puede que la dirección haya cambiado o que el enlace que le trajo aquí esté desactualizado. No hay nada roto de su lado.",
      "nf404.h2": "A dónde seguramente quería ir",
      "nf404.l1":
        "<a href=\"index.html\">El generador de código</a>: elija sus sensores y descargue un código",
      "nf404.l2":
        "<a href=\"thank-you.html\">Después de descargar</a>: cómo pasar el archivo a la placa",
      "nf404.l3":
        "<a href=\"privacy.html\">Política de privacidad</a> y <a href=\"terms.html\">términos de uso</a>",
      "nf404.p":
        "Si un enlace de este sitio le trajo aquí, nos gustaría corregirlo. Díganos de qué página venía.",
      "nf404.back": "Volver al generador",
    },
  };

  /*
     text that comes from the spreadsheet. keyed on the identifier,
     not on the English wording, so rewording a cell does not drop
     the translation. anything missing falls back to the English the
     spreadsheet supplies, so a new row is never blank.
      */
  var DATA_ES = {
    sensors: {
      DF_robot: "Sensor capacitivo de humedad del suelo (como el DFRobot SEN0308)",
      Watermark: "Irrometer Watermark (200SS)",
      Watermark_Temperature:
        "Irrometer Watermark (200SS) combinado con sensor de temperatura del suelo Irrometer (200TS)",
      Temperature: "Sensor de temperatura del suelo Irrometer (200TS)",
    },

    /* keyed on the measurement's value in the sensors sheet */
    outputs: {
      "Raw Value (ADC)": "Valor bruto del sensor (ADC)",
      "Raw Value (%)": "Valor bruto del sensor (%)",
      Thresholds: "Umbrales de manejo",
      "Wetting Front": "Llegada del frente de humedecimiento a la profundidad del sensor",
      "Volumetric Soil Moisture": "Humedad volumétrica del suelo",
      "Vertical Flow Rate": "Velocidad de flujo vertical",
      "Total Available Water ": "Agua total disponible",
      "Total Available Water": "Agua total disponible",
      "Raw value (Resistance)": "Valor bruto (resistencia, en kΩ)",
      "Tension (kPa)": "Tensión (kPa)",
      Tension: "Tensión",
      "Management Thresholds": "Umbrales de manejo",
      "Raw value (Temperature, in °F)": "Valor bruto (temperatura, en °F)",
      "Raw value (Temperature, in °C)": "Valor bruto (temperatura, en °C)",
    },

    outputTips: {
      "Raw Value (ADC)": "Lectura directa del sensor (salida digital o analógica).",
      "Raw Value (%)":
        "Transformamos el valor bruto y lo expresamos como porcentaje: 0 % corresponde al valor más bajo posible y 100 % al más alto.",
      Thresholds:
        "Esta variable le indica si el suelo está muy seco, seco o húmedo. Transforma el valor bruto en esos tres estados cualitativos usando dos umbrales que usted especifica.",
      "Wetting Front":
        "Esta variable indica cuándo el agua ha llegado a la profundidad a la que está colocado el sensor.",
      "Volumetric Soil Moisture":
        "El contenido volumétrico de humedad del suelo, expresado aquí como porcentaje (%), es el volumen de agua respecto del volumen de suelo. Se calcula como θv = Vw/Vs · 100, donde Vw es el volumen de agua y Vs el volumen de suelo seco.",
      "Total Available Water":
        "El agua disponible es la cantidad de agua que puede almacenarse en el perfil del suelo y quedar a disposición de los cultivos. También se conoce como capacidad de agua disponible (AWC) o agua total disponible (TAW).",
      "Raw value (Resistance)":
        "Este sensor mide la resistencia eléctrica dentro de una matriz granular para determinar la tensión hídrica del suelo. Con esta opción usted lee el valor de resistencia (kΩ).",
      "Tension (kPa)":
        "Este sensor mide la resistencia eléctrica dentro de una matriz granular para determinar la tensión hídrica del suelo. Una ecuación de calibración convierte ese valor a tensión hídrica (kPa). Use esta opción si no puede medir la temperatura del suelo.",
      Tension:
        "Este sensor mide la resistencia eléctrica dentro de una matriz granular para determinar la tensión hídrica del suelo. La temperatura afecta la resistencia medida, por lo que un sensor de temperatura mejora la exactitud. Use esta opción si puede medir la temperatura del suelo.",
      "Raw value (Temperature, in °F)":
        "Está leyendo la temperatura del suelo con su sensor de temperatura.",
      "Raw value (Temperature, in °C)":
        "Está leyendo la temperatura del suelo con su sensor de temperatura.",
    },

    /* keyed on viz_key in the viz_options sheet */
    viz: {
      none: "Sin visualización",
      bar: "Barra de porcentaje",
      raw_lcd: "Valor bruto",
      state_lcd: "Estado: muy seco, seco o húmedo",
      transformed_lcd: "Valor bruto transformado 0-100",
      temp_lcd: "Temperatura",
      kpa_lcd: "Tensión",
      rate_lcd: "Velocidad de flujo",
      front_lcd: "Frente detectado",
      wm_state_lcd: "Estado: seco con estrés, rango de riego o saturación",
    },

    vizTips: {
      none:
        "Muestra la información de forma visual en la pantalla LCD. Ahora mismo no hay nada seleccionado.",
      bar: "Muestra una barra que cambia según el contenido de agua.",
      raw_lcd: "Muestra el valor bruto del sensor.",
      state_lcd:
        "Muestra el estado general en que parece estar el suelo, para los sensores capacitivos.",
      transformed_lcd: "Una versión más compacta del valor bruto del sensor.",
      temp_lcd: "Muestra la temperatura.",
      kpa_lcd: "Muestra la tensión del suelo en kPa.",
      rate_lcd: "Muestra la velocidad de flujo entre dos sensores.",
      front_lcd:
        "Muestra el frente detectado cuando el frente de humedecimiento llega al sensor profundo.",
      wm_state_lcd:
        "Muestra el estado en que parece estar el suelo, para los sensores Watermark.",
    },

    /* keyed on param_name in the params sheet */
    params: {
      wiring: "Conexión",
      Rx: "Resistencia en serie",
      soil_temp_c: "Temperatura del suelo",
      therm_r25: "Resistencia del termistor a 25 C",
      therm_beta: "Coeficiente beta del termistor",
      air_val: "Valor en aire",
      air_val_max: "Valor en aire (máximo)",
      water_val: "Valor en agua",
      fc: "Capacidad de campo",
      wp: "Punto de marchitez",
      soil_type: "Tipo de suelo",
      thr_low: "Umbral húmedo (10 % de agotamiento)",
      thr_high: "Umbral seco (40 % de agotamiento)",
      a: "Umbral superior",
      b: "Umbral inferior",
      shallow: "Profundidad del sensor superficial",
      deep: "Profundidad del sensor profundo",
      threshold: "Lectura de llegada del frente",
      k: "k",
    },

    /* keyed on the survey question key */
    survey: {
      filename: "Nombre del archivo que se generará",
      name: "Su nombre",
      country: "Su país",
      email: "Su correo electrónico",
      ino_comment: "Comentario para incluir en el código (opcional)",
    },
  };

  /* */

  var current = "en";

  /* the site is english only for now. the spanish strings stay here so the
     toggle can come back once they have been reviewed. */
  function detect() {
    return "en";
  }

  function t(key, vars) {
    var table = STRINGS[current] || STRINGS.en;
    var text = table[key];
    if (text === undefined) text = STRINGS.en[key];
    if (text === undefined) return key;
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        text = text.split("{" + name + "}").join(vars[name]);
      });
    }
    return text;
  }

  /*
 spreadsheet text. `fallback` is whatever the sheet supplies, which is
     what shows when there is no translation yet.
             */
  function tData(group, key, fallback) {
    if (current === "en") return fallback;
    var table = DATA_ES[group];
    var found = table && key in table ? table[key] : null;
    return found || fallback;
  }

  function apply(root) {
    var scope = root || document;

    scope.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    scope.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });

    scope.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr")
        .split(",")
        .forEach(function (pair) {
          var bits = pair.split(":");
          if (bits.length === 2) {
            el.setAttribute(bits[0].trim(), t(bits[1].trim()));
          }
        });
    });

    /* elements that belong to one language only, such as a note telling a
       spanish reader the guide is still in english. */
    scope.querySelectorAll("[data-i18n-lang]").forEach(function (el) {
      el.hidden = el.getAttribute("data-i18n-lang") !== current;
    });

    document.documentElement.lang = current;
    /* every page but the generator names its own title key on <html> */
    var titleKey = document.documentElement.getAttribute("data-title-key") || "page.title";
    var title = t(titleKey);
    if (title !== titleKey) document.title = title;
  }

  function setLanguage(lang, rerender) {
    current = lang === "es" ? "es" : "en";
    try {
      localStorage.setItem(LANG_KEY, current);
    } catch (_) {}
    apply();
    if (rerender && typeof root.rebuildForLanguage === "function") {
      root.rebuildForLanguage();
    }
    /* text that site.js builds itself (contact line, offline and update
       bars) is not in the markup, so it listens for this and redraws. */
    try {
      document.dispatchEvent(new CustomEvent("nodeflow:language", { detail: current }));
    } catch (_) {}
  }

  function initToggle() {
    var btn = document.getElementById("lang-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      setLanguage(current === "es" ? "en" : "es", true);
    });
  }

  current = detect();

  root.NodeFlowI18n = {
    t: t,
    tData: tData,
    apply: apply,
    init: function () {
      apply();
      initToggle();
    },
    get lang() {
      return current;
    },
    setLanguage: setLanguage,
  };

  /* short aliases for main.js */
  root.t = t;
  root.tData = tData;
})(typeof self !== "undefined" ? self : this);
