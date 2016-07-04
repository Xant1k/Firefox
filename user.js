/* Отключает User Timing API - доступ к высокочастотному таймеру, при помощи которого может быть осуществлено прослушивание процессорного кэша из непривилегированного JS-кода. */
user_pref("dom.enable_user_timing", false);
user_pref("dom.performance.enable_user_timing_logging", false);

/* Отключает Web Speech API, использующееся для распознавания и синтеза речи.*/
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);

/* Отключает CSS Font Loading API, предназначенный для динамической подгрузки шрифтов из скриптов. */
user_pref("layout.css.font-loading-api.enabled", false);

/* Отключает Battery API - позволяет отслеживать состояние аккумуляторной батареи и тем самым получать информацию. */
user_pref("dom.battery.enabled", false);

/* Отключает Push API, позволяющий веб-приложениям регистрировать идентификатор на сервере Мозиллы, чтобы сайт приложения оставлял там уведомления, которые пользователь получит, когда выйдет онлайн.
Проще говоря сайты могут с разрешения пользователя присылать push-оповещения, даже если браузер закрыт). */
user_pref("dom.push.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.adaptive.enabled", false);
user_pref("dom.push.udp.wakeupEnabled", false);
user_pref("dom.push.maxQuotaPerSubscription", 0);

/* Отключает Selection Events, позволяющие странице реагировать на выделение пользователем текста на ней. Сам Selection API эта настройка не отключает и window.getSelection() все еще будет работать. */
user_pref("dom.select_events.enabled", false);

/* Отключает Simple Push API - нестандартную альтернативу Push API от Mozilla. */
user_pref("services.push.enabled", false);
user_pref("services.push.serverURL", "");

/* Отключает API сенсоров. Возможность сбора через браузер информации с сенсоров устройства. */
user_pref("device.sensors.enabled", false);

/* Отключает Device Storage API, который позволит веб-страницам получать доступ к файловой системе и самопроизвольно читать файлы пользователя или писать в них. */
user_pref("device.storage.enabled", false);

/* Отключает ImageCapture API для снятия изображения с веб-камеры. */
user_pref("dom.imagecapture.enabled", false);

/* Отключает Resource Timing API (получение информации о том, с какой скоростью обрабатываются элементы сайта). */
user_pref("dom.enable_resource_timing", false);

/* Запрет скриптам скрывать персональную панель инструментов. */
user_pref("dom.disable_window_open_feature.personalbar", true);

/* Запрет скриптам изменять размеры окон. */
user_pref("dom.disable_window_open_feature.resizable", true);

/* Запрет скриптам скрывать полосы прокрутки. */
user_pref("dom.disable_window_open_feature.scrollbars", true);

/* Запрет скриптам скрывать строку состояния. */
user_pref("dom.disable_window_open_feature.status", true);

/* Запрет скриптам скрывать меню окна. */
user_pref("dom.disable_window_open_feature.menubar", true);

/* Запрет скриптам блокировать кнопку минимизации окна. */
user_pref("dom.disable_window_open_feature.minimizable", true);

/* Запрет скриптам закрывать окна. */
user_pref("dom.allow_scripts_to_close_windows", false);

/* Запрет скриптам изменять размер окон. */
user_pref("dom.disable_window_move_resize", true);

/* Запрет скриптам сворачивать/разворачивать окна. */
user_pref("dom.disable_window_flip", true);

/* Запрет скриптам показывать текст в строке статуса. */
user_pref("dom.disable_window_status_change", true);

/* Запрет скриптам закрывать окна. */
user_pref("dom.disable_window_open_feature.close", true);

/* Запрет скриптам скрывать строку адреса. */
user_pref("dom.disable_window_open_feature.location", true);

/* Запрет скриптам скрывать заголовок окна. */
user_pref("dom.disable_window_open_feature.titlebar", true);

/* Запрет скриптам скрывать панель инструментов. */
user_pref("dom.disable_window_open_feature.toolbar", true);

/* Отключает предупреждения при открытии вкладок. */
user_pref("browser.tabs.warnOnOpen", false);

/* Отключает показ информации о найденных обновлениях для дополнений при старте браузера. */
user_pref("extensions.update.notifyUser", false);

/* Отключает всплывающие предупреждения об отсутствии требуемого для элементов страницы плагина. */
user_pref("plugin.default_plugin_disabled", true);

/* Отключает уведомления об обновлениях плагинов. */
user_pref("plugins.update.notifyUser", false);

/* Отключает появление диалогового окна о импорте информации из других браузеров при создании нового профиля. */
user_pref("profile.confirm_automigration", false);

/* Отключает сообщение об устаревших плагинах: "Некоторые плагины, используемые на этой странице устарели" (или подобное). */
user_pref("plugins.hide_infobar_for_outdated_plugin", true);

/* Отключает предупреждение о закрытии нескольких вкладок «закрыть остальные». */
user_pref("browser.tabs.warnOnCloseOtherTabs", false);

/* Отключает показа сообщения “Вы хотите установить плагин, нужный для отображения этой страницы?”. */
user_pref("plugins.hideMissingPluginsNotification", false);

/* Отключает предупреждение о необходимости Flash плеера, если на сайте есть содержимое использующее его. Всплывающее меню: "Для проигрывание нужен...". */
user_pref("plugins.notifyMissingFlash", false);

/* Отключает загрузку URL из буфера обмена по нажатию на колесо в Linux, которая мешает при промахах мимо ссылок и случайных кликах по колесу. */
user_pref("middlemouse.contentLoadURL", false);

/* Отключает притормаживающую на окнах с многими вкладками анимацию открытия и закрытия табов. */
user_pref("browser.tabs.animate", false);
user_pref("browser.fullscreen.animateUp", 0);
browser.fullscreen.animate

/* Отключает полупрозрачную превьюшку таба, болтающуюся при его перетаскивании около курсора, и мешающую перетащить его в нужное место. */
user_pref("nglayout.enable_drag_images", false);

/* Отключает проверку при запуске, является ли Firefox браузером по умолчанию.
Изменение также доступно в меню браузера > Настройки > Основные > Всегда проверять, является ли Firefox вашим браузером по умолчанию */
user_pref("browser.shell.checkDefaultBrowser", false);

/* Отключает передачу статистики при обновлении аддонов. */
user_pref("extensions.getAddons.cache.enabled", false);

/* Отключает предложение оценить работу Firefox и отправить пожертвования Mozilla. */
user_pref("browser.selfsupport.url", "");

/* Отключает приветственную страницу при первом запуске браузера с новым профилем. */
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");

/* Отключает автоматическое открытие вкладки с описанием изменений в новой версии после обновления. */
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_override_url", "");

/* Отключения наблюдения простоя. */
user_pref("dom.idle-observers-api.enabled", false);

/* Не интегрировать деятельность в последние документы Windows. */
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.download.manager.addToRecentDocs", false);

/* Отключить открытие JAR файлов. */
user_pref("network.jar.open-unsafe-types", false);

/* Очистка историй, сессий, паролей, кэша, cookies и др. при выходе из браузера. */
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// Дополнительные настройки очистки:
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.passwords", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);

/* Включает отображения пути к установленному плагину на странице about:plugins
false предотвращает утечку информаций об установленных плагинах. */
user_pref("plugin.expose_full_path", true);

/* Отключает IPv6 DNS-запросы */
user_pref("network.dns.disableIPv6", true);

/* Отключает передачу браузером информации о времени начала и окончания загрузки страницы (по интервалу можно определить использование прокси-сервера или сети TOR).
Если отключено некоторые сайты будут отображаться лишь частично, то есть прекратится догрузка превьюшек например к видео на странице или вовсе прекратится подгрузка бесконечной страницы. */
user_pref("dom.enable_performance", false);

/* Отключает хранение истории посещений и загрузок. */
user_pref("places.history.enabled", false);

/* Отключает автоопределение изменения состояния сетевого подключения и связанную с ним самодеятельность вроде рефреша DNS-кэша. */
user_pref("network.notify.changed", false);

/* Отключение автообновления стилей Stylish. */
user_pref("extensions.stylish.updatesEnabled", false);

/* Отключение установки соединения браузером со страницами, на которые, по его предположению, перейдёт пользователь.
Иными словами отключает Predictor - механизм, запоминающий связи между хостами, с которых запрашивается контент для того или иного URL (например, основным хостом и хостом со статикой), и при следующем подключении заранее соединяющийся со всеми хостами, которые понадобятся. */
user_pref("network.predictor.enable-hover-on-ssl", false);
user_pref("network.predictor.enabled", false);

/* Отключение автозавершения нестандартных адресов (авто подстановки суффиксов/префиксов).
Отключает угадывание доменного имени при помощи подстановки www и разных TLD. */
user_pref("browser.fixup.alternate.enabled", false);

/* Отключение автоматического обновления браузера. */
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false);
user_pref("app.update.service.enabled", false);
user_pref("app.update.checkInstallTime", false);
user_pref("app.update.url", "");
user_pref("app.update.silent", false);
user_pref("app.update.staging.enabled", false);
user_pref("app.update.badge", false);

/* Отключает встроенный менеджер паролей. После отключения следует удалить сохраненные пароли, хранящиеся в файле logins.json который располгается в папке профиля (или через Настройки > Защита). */
user_pref("signon.rememberSignons", false);
user_pref("signon.storeWhenAutocompleteOff", false);


/* Отключает Firefox Hello. */
user_pref("loop.enabled", false);
user_pref("loop.screenshare.enabled", false);
user_pref("loop.textChat.enabled", false);
user_pref("loop.server", "");
user_pref("loop.feedback.baseUrl", "");
user_pref("loop.debug.twoWayMediaTelemetry", false);
user_pref("loop.contextInConversations.enabled", false);
user_pref("loop.contacts.gravatars.promo", false);
user_pref("loop.contacts.gravatars.show", false);
user_pref("loop.gettingStarted.url", "");
user_pref("loop.learnMoreUrl", "");
user_pref("loop.legal.ToS_url", "");
user_pref("loop.legal.privacy_url", "");
user_pref("loop.oauth.google.redirect_uri", "");
user_pref("loop.oauth.google.scope", "");
user_pref("loop.seenToS", "unseen");
user_pref("loop.showPartnerLogo", false);
user_pref("loop.support_url", "");
user_pref("loop.feedback.dateLastSeenSec", 1446595200);
user_pref("loop.feedback.periodSec", 630720000);
user_pref("loop.feedback.formURL", "");
user_pref("loop.feedback.manualFormURL", "");
user_pref("loop.linkClicker.url", "");
user_pref("loop.facebook.shareUrl", "");
user_pref("loop.CSP", "");

/* Отключает показ текста пароля по клику на соответствующее поле ввода в попапе, предлагающем сохранить введенный пароль. */
user_pref("signon.rememberSignons.visibilityToggle", false);

/* Отключает автоматическое копирование выделенного текста в буфер обмена.
Только для Linux-билдов. */
user_pref("clipboard.autocopy", false);

/* Снижение числа ранее посещенных в этой же вкладке адресов, хранящихся в истории back/forward вкладки.
На глобальную историю не влияет. Сами URL из этой истории недоступны из JS, но их количество видно в window.history.length, что можно использовать для фингерпринтинга.
По умолчанию 50. Значение 1 означает хранение адреса только текущей страницы. */
user_pref("browser.sessionhistory.max_entries", 2);

/* Включает установку неподписанных аддонов. */
user_pref("xpinstall.signatures.required", false);

/* Отключает применение к посещенным ссылкам стилей с селектором :visited, что предотвращает возможность выяснить, какие URL есть у пользователя в истории браузера. */
user_pref("layout.css.visited_links_enabled", false);


/* Отключает хранение данных форм, вводимых на страницах. */
user_pref("browser.formfill.expire_days", 0);

/* Отключает обнаружение captive portal - подмены всех запрашиваемых пользователем страниц на страницы провайдера. Эта техника используется в местах публичного Wi-Fi и некоторыми операторами для аунтефикации или показа пользователю какой-либо информации (например, о необходимости пополнить счет). Обнаружение происходит через периодическое скачивание файла с сервера «мозиллы». */
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.captive-portal-service.minInterval", 0);
user_pref("captivedetect.canonicalURL", "");
user_pref("captivedetect.maxRetryCount", 0);

/* Отключает распространённые плагины. */
user_pref("plugins.click_to_play", true); // Запуск мультимедийного содержимого страницы (при помощи плагинов) только после подтверждения пользователя.
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);
user_pref("plugin.persistentPermissionAlways.intervalInDays", 0);
user_pref("plugin.default.state", 0); // 1=состояние по умолчанию. При этом браузер спросит "активировать ли плагин?". 2=вы можете переопределить отдельные плагины. 0=отключить.
user_pref("plugin.defaultXpi.state", 0);
user_pref("plugin.state.flash", 0);
user_pref("plugin.state.java", 0);

// If installed - ask to activate Flash. If not - don't nag about missing Flash plugin:
user_pref("plugin.state.flash", 1);
user_pref("plugins.notifyMissingFlash", false);

/* Отключает все плагины.
Только для Windows-билдов. */
user_pref("plugin.scan.plid.all", false);
user_pref("plugin.scan.Acrobat", "30000.0");
user_pref("plugin.scan.Quicktime", "30000.0");
user_pref("plugin.scan.WindowsMediaPlayer", "30000.0");

/* Отключает возможность перечисления плагинов через window.navigator.plugins */
user_pref("plugins.enumerable_names", "");
user_pref("plugins.load_appdir_plugins", false);
user_pref("plugins.update.url", "");
user_pref("pfs.datasource.url", ""); // Удаляет плагин службы поиска

/* Отключение всех плагинов. */
user_pref("plugin.allowed_types", " "); // Именно пробел, а не пустая строка. Пустая строка значит "разрешены все".

/* Запрет javascript-ам обращаться к плагинам. */
user_pref("security.xpconnect.plugin.unrestricted", false);
user_pref("application.use_ns_plugin_finder", false);

/* Отключает просмотр PDF средствами браузера. */
user_pref("pdfjs.disabled", true);
user_pref("pdfjs.enableWebGL", false);

/* Отключает WebGL, позволяющее узнать модель видеокарты пользователя и ее драйвер. */
user_pref("webgl.enable-debug-renderer-info", false);

/* Запрет передачи сайтам подробной информации о графических возможностях системы. */
user_pref("webgl.disable-extensions", true);
user_pref("webgl.min_capability_mode", true);

/* Полное отключение WebGL.  */
user_pref("webgl.disabled", true);
user_pref("webgl.force-enabled", false);
// user_pref("webgl.disable-extensions", true);

/* Отключает встроенный сервис закладок Pocket. */
user_pref("browser.pocket.enabled", false);
user_pref("browser.pocket.api", "");
user_pref("browser.pocket.site", "");
user_pref("browser.pocket.oAuthConsumerKey", "");
user_pref("browser.pocket.enabledLocales", "");
user_pref("browser.toolbarbuttons.introduced.pocket-button", false);
user_pref("browser.uiCustomization.state", "");
user_pref("browser.pocket.useLocaleList", false);

/* Отключает Reader View (иконка с книжкой в адресной строке). */
user_pref("reader.parse-on-load.enabled", false);
user_pref("reader.parse-on-load.force-enabled", false);
user_pref("reader.errors.includeURLs", false);
/* При каждом изменении window.location значение сравнивается с этой настройкой, чтобы начать UI-тур по режиму чтения. Значение этого параметра используется как регэксп без проверки на пустую строку, поэтому обнулять его нельзя. Вместо этого можно использовать регэксп, возвращающий для любой строки false. */
user_pref("browser.uitour.readerViewTrigger", ".^");

/* Отключает автоматическую отправку поисковику недопечатанного запроса по мере его набора, используемую для формирования поисковых подсказок. */
user_pref("browser.search.suggest.enabled", false); // Отключение автоподстановки поисковых запросов в окне поиска.
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.maxCharsForSearchSuggestions", 0);

/* Отключает предложение включить поисковые подсказки. */
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);

/* Отключает поиск через адресную строку без заданных поисковикам префиксов-кейвордов.
Пример: mozilla.org > http://mozilla.org/ */
user_pref("keyword.enabled", false);

/* Отключает аппаратное ускорение. */
user_pref("layers.acceleration.disabled", true);

/* Убрать рамку обводящую ссылку во время клика. */
user_pref("browser.display.focus_ring_width", 0);
user_pref("browser.display.focus_ring_on_anything", false);

/* Отключает замеры времени запуска браузера и уведомления о слишком долгом по его мнению старте. */
user_pref("browser.slowStartup.notificationDisabled", true);

/* Отключает показ URL с описанием функций, связанных с Windows 10, у пользователей последней. */
user_pref("browser.usedOnWindows10", true);
user_pref("browser.usedOnWindows10.introURL", "");

/* Отключает автодополнение данных из истории и закладок. */
user_pref("browser.urlbar.autocomplete.enabled", false);

/* Установка количества резервных копий закладок браузера.
По умолчанию 10.
0=отключить сохранение.
-1=будет сохранять безлемитное кол-во резервных копий. */
user_pref("browser.bookmarks.max_backups", 1);

/* Отключает плавную прокрутку. */
user_pref("general.smoothScroll", false);

/* Отключает показ страницы AMO (https://addons.mozilla.org/ru/firefox/) при входе в Менеджер дополнений на вкладке Получить дополнения. */
user_pref("extensions.webservice.discoverURL", "");

/* Отключает сборк статистики производительности декодирования HTML5-видео.
Посмотреть её можно в Show Statistics контекстного меню плеера. */
user_pref("media.video_stats.enabled", false);

/* Установка стартовой страницы пустой.
Допустимые значения:
about:blank — открытие пустой страницы;
about:newtab — часто посещаемые сайты (не рекомендуется);
about:home — стартовая страница (она же домашняя страница по умолчанию);
http://site.com — указание на конкретный сайт;
file:///file.name — указание на локальный файл в форматах txt, htm(l).
*/
user_pref("browser.startup.homepage", "about:blank");

/* Отключает запоминание истории форм (меню браузера > Настройки > Приватность > История), данные введённые в формы веб-страницы и строки поисковой системы.
Если она раньше была включена, следует вручную удалить файл formhistory.sqlite из папки профиля.
Firefox хранит историю введенного в формы, ассоциируя текст только с атрибутом name input-элемента, куда этот текст был введен, без привязки к домену, на котором была форма. Из-за этого в выпадающей подсказке истории форм одного сайта могут появиться элементы, введенные на совершенно другом, если у того другого input был с таким же атрибутом name (например, распространенный "email"). */
user_pref("browser.formfill.enable", false);
user_pref("browser.formfill.saveHttpsForms", false);

/* Включение проверки правописания во всех полях ввода, а не только в месте ввода.
По умолчанию Firefox производит проверку правописания только в многострочных окнах ввода, игнорируя однострочные, с помощью этого параметра можно отключить проверку вообще, либо включить её и для однострочных полей ввода.
Значения:
0=отключить проверку правописания
1=проверка правописания работает в "больших" полях ввода
2=проверка правописания работает во всех полях ввода
*/
user_pref("layout.spellcheckDefault", 2);

/* Задержка перед началом отрисовки страницы в миллисекундах.
Это визуальное ускорение, то есть задержка между тем как браузер начал получать ответ от сервера и началом отображения в окне браузера (иными словами рендеринг страницы). Стоит поставить здесь «0» т.к. это позволит вам получить доступ к уже загруженной части страницы. */
user_pref("nglayout.initialpaint.delay", 0);

/* Автоматическое выделение всей адресной строки при установке в неё курсора (работает в Linux). */
user_pref("browser.urlbar.clickSelectsAll", true);

/* Отключает автоматическое обновление поисковых плагинов. */
user_pref("browser.search.update", false);

/* Отключает обновления тем браузера. */
user_pref("lightweightThemes.update.enabled", false);

/* Игнорировать значения «off» атрибута «autocomplete» у текстовых полей форм (<input type=«text» autocomplete=«off»>). */
user_pref("signon.overrideAutocomplete", true);

/* Блокировать все всплывающие окна вызываемые плагинами.
Например при установленной настройке "Кликнуть для воспроизведения" на сайтах, где используется плагин выскакивает сообщение: "Разрешить для www.example.com запуск плагина Adobe Flash?" */
user_pref("privacy.popups.disable_from_plugins", 3);

/* Отключает выпадающий под адресной строкой список с ранее посещёнными сайтами, при ручном наборе URL.
В данном параметре указывается количество показываемых предположений.
Для отключения вывода данных адресов нужно поставить данному параметру значение «-1»
*/
user_pref("browser.urlbar.maxRichResults", 0);

/* Отключает New Tab Page Tiles - изкоробочную панель быстрого набора с часто посещаемыми сайтами, которая потребляет процессорное время и замедляет открытие новых пустых вкладок. */
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);

/* Запрещает сайтам обращение к локальной машине, что позволило бы им анализировать список открытых портов.
Возможны проблемы при обращении на адреса типа http://127.0.0.1:631, используемые для конфигурации принтеров через CUPS и прочих устройств */
user_pref("network.proxy.no_proxies_on", "");

/* Запрещает поддержку протокола WebRTC, текущая реализация которого позволяет незаметно для пользователя получить список IP-адресов в его локальной сети. А также узнать ваш реальный IP за прокси/Tor/VPN и NAT. Ломает Firefox Hello.
Как проверить.Для проверки локального IP используйте страницу: https://diafygi.github.io/webrtc-ips/
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.Identity.timeout", 1);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.video.h264_enabled", false);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.default_iceservers", "[]"); // или [{"url": "127.0.0.1"}]
user_pref("media.peerconnection.use_document_iceservers", false);

/* Запрещает использовать WebRTC на всех интерфейсах кроме loopback. */
user_pref("media.peerconnection.ice.force_interface", "lo");

/* Отключает автоподстановку имени пользователя и пароля в форму логина (может привести к утечке в кросс сайт формы), когда для этого сайта сохранена только одна их пара. Пароль будет подставлен после ввода логина. */
user_pref("signon.autofillForms", false);

/* Отключает Java. */
user_pref("security.enable_java", false);

/* Назначение количества закрытых табов, отображаемых в «недавно закрытых вкладках». По умолчанию браузер содержит до 10 последних закрытых вкладок. */
user_pref("browser.sessionstore.max_tabs_undo", 25);

/* Скрывает всплывающее окно с вопросом, сохранять закрываемые вкладки до следующей сессии или нет. */
user_pref("browser.showQuitWarning", false);

/* Назначает число вкладок загружаемых одновременно при восстановлении сессии.
При создании данного параметра значения параметров browser.sessionstore.restore_on_demand (обычные вкладки) и browser.sessionstore.restore_pinned_tabs_on_demand (закреплённые вкладки) автоматически принимают значение false. */
user_pref("browser.sessionstore.max_concurrent_tabs", 0); // Если присвоить параметру значение 0, то вкладки будут загружаться, когда на них переключаешься.

/* Отключение режима при котором при восстановлении сессии загружается лишь одна вкладка, а остальные только при переходе на неё. */
user_pref("browser.sessionstore.restore_on_demand", false); // Обычные вкладки.
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", false); // Закреплённые вкладки.

/* Отключение "Искать с" в адресной строке. */
user_pref("browser.urlbar.unifiedcomplete", false);

/* Регулирование задержки в миллисекундах между наведением указателя на подменю браузера и собственно отображением содержимого подменю.
0 = моментальное отображение содержимого подменю при наведении на него указателя мыши.
*/
user_pref("ui.submenuDelay", 0);

/* Регулирование задержки в секундах в диалоговых окна установки плагинов и аддонов.
Убирает задержку перед установкой аддонов и плагинов. */
user_pref("security.dialog_enable_delay", 0);

// Speed up security delay when installing add-ons:
user_pref("security.dialog_enable_delay", 400);

/* Запрет сайтам отслеживать вас (отправлять сайтам заголовок «не следить за мной»). Включение Do Not Track. Некоторые сайты его игнорируют. */
user_pref("privacy.donottrackheader.enabled", true);

/* Спрашивать путь для загрузки файлов. */
user_pref("browser.download.useDownloadDir", false);

/* Отключение закрытия браузера при закрытий последней вкладки. */
user_pref("browser.tabs.closeWindowWithLastTab", false);

/* Включение отображения полного адреса в адресной строке. */
user_pref("browser.urlbar.trimURLs", false); // Включение показа префикса http://

/* Отключение предупреждения при заходе в about:config */
user_pref("general.warnOnAboutConfig", false);

/* Отключение предупреждения о закрытии окна при выходе из браузера. */
user_pref("browser.warnOnQuit", false);


/* Не выделять лишний пробел при выделении слов по "двойному клику".
Определяет, как будет выделяться слово при двойном щелчке на него.
Доступные значения:
•	true = при двойном щелчке на слово выделяет его с пробелом, который расположен справа.
•	false = пробел не выделяется при двойном щелчке на слово.
*/
user_pref("layout.word_select.eat_space_to_next_word", false);

/* Отключение автопроигрывания HTML5-видео и аудио. */
user_pref("media.autoplay.enabled", false);

/* Отключает Shared Workers. Они могут стать проблемой, если загружаются с одного CDN несколькими разными открытыми в данный момент во вкладках у пользователя сайтами, так как такие Workers имеют общий контекст (т.е. доступ к данным друг друга). */
user_pref("dom.workers.sharedWorkers.enabled", false);

/* Отключает видеозахват с элемента canvas. */
user_pref("canvas.capturestream.enabled", false);

/* Включение всегда спрашивать что делать с неизвестным MIME типом, и отключение опций запоминания что открывать с этим типом. */
user_pref("browser.helperapps.alwaysask.force", true);

/* Отключение автоматической установки обновлений аддонов. Перед обновлением аддонов браузер будет спрашивать разрешения. */
user_pref("extensions.update.autoUpdateDefault", false);

/* Отключение периодической проверки обновлений установленных аддонов. */
user_pref("extensions.update.enabled", false);
user_pref("extensions.update.url", "");
user_pref("extensions.update.background.url", "");
user_pref("extensions.systemAddon.update.url", "");

/* Отключение автозаполнения в адресной строке. */
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill.typed", false);

/* Изменение скорости скроллинга. По умолчанию 100. 300 будет делать скроллинг более отзывчивым. */
user_pref("mousewheel.default.delta_multiplier_y", 300);

/* Отключение появления сообщения "Mozilla Firefox is free and open source software from the non-profit Mozilla Foundation." с кнопкой "Know your rights..." под адресной строкой при первом запуске браузера. */
user_pref("browser.rights.3.shown", true);

/* Отключение сообщения о переходе браузера в полноэкранный режим. */
user_pref("full-screen-api.warning.timeout", 0);

/* Отключает предзагрузку ссылок, на которые по мнению браузера вы собираетесь кликнуть. Отключение попытки сайтом сразу загружать все ссылки, обнаруженные на текущей странице.
Если включена эта опция, ресурсы, помеченные rel="prefetch", браузер автоматически предзагружает и кэширует после окончания загрузки текущей страницы. Можно также отправить заголовок Link: <http://example.com>; rel=prefetch или сделать то же самое через meta-тег: <meta http-equiv="Link" content="<http://example.com>; rel=prefetch"> */
user_pref("network.prefetch-next", false);
// И предварительный резолвинг их доменов тоже. Проще говорят запретить предварительный запрос DNS для всех ссылок на активной странице, если их нажать. Это может привести к утечке DNS-трафика при работе через анонимизирующий прокси-сервер.
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
// И предварительный коннект к хостам. предзагрузку при использовании строки поиска
user_pref("network.http.speculative-parallel-limit", 0);

/* Вместо открытия JAR-файлов запрещает браузеру открывать JAR-файлы вместо скачивания. */
user_pref("network.jar.block-remote-files", true);

/* Запрещает работу WebRTC в режиме P2P, разрешая ее только через сервер третьей стороны, что предотвращает утечку IP-адресов всех сетевых интерфейсов компьютера. */
user_pref("media.peerconnection.ice.relay_only", true);

/* Разрешает работу WebRTC только на дефолтном сетевом интерфейсе, вследствие чего не
происходит раскрытия настоящего IP пользователя, использующего VPN.
Пока что не работает вместе с E10S */
//user_pref("media.peerconnection.ice.default_address_only", true);

/* Отключает добавление в New Tab Page Tiles сайтов спонсоров Mozilla и сбор статистики кликов по ним. После отключения следует удалить directoryLinks.json
в about:cache -> <директория на уровень выше cache2>, чтобы уже загруженная реклама не показывалась. */
user_pref("browser.newtabpage.directory.ping", "");
// Firefox не проверяет эту опцию на пустую строку и XHR начинает ругаться в консоль, если она пустая.
user_pref("browser.newtabpage.directory.source", "data:application/json,{}");
user_pref("browser.newtabpage.directory.source",	 "data:text/plain,{}");
user_pref("browser.newtabpage.enhanced", false);
// Отключает предупреждение о вышеописанной рекламе при первом открытии New Tab Page.
user_pref("browser.newtabpage.introShown", true);
// Отключает загрузку рекламы сервисов от самой Mozilla (Sync, Hello, версий для Android) в about:home
user_pref("browser.aboutHomeSnippets.updateUrl", "");

user_pref("browser.newtab.preload", false);
user_pref("browser.newtab.url", "about:blank");
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);

/* Настройки для HTTP-заголовка Referer (а также DOM-свойства document.referrer), содержащего URL страницы, с которой пользователь перешел по ссылке или, находясь на которой, запросил загрузку нужного для ее отображения ресурса (картинки, стиля, скрипта, шрифта, etc). В частности, очень многие сайты (и некоторые UserJS) ссылаются на скрипты, подгружающиеся с доменов Гугла (jQuery, reCAPTCHA, Analytics), благодаря чему Гугл, анализируя заголовок Referer, узнает посещенные пользователем URL, даже если тот переходил на них не из самого Гугла. Используется некоторыми сайтами для защиты от хотлинкинга, поэтому целиком его лучше не запрещать. Реферер удобнее контролировать при помощи аддона RefControl, однако в Firefox есть и довольно продвинутые встроенные настройки для управления реферерами, которые могут быть использованы, если установка лишнего аддона нежелательна. Оптимально будет включить spoofSource и выставить trimmingPolicy в 2, а остальное не трогать – тогда при любом запросе страницы или ресурса сайтам будет посылаться в Referer их собственный корень вместо URL ссылающейся на них страницы. PS: Здесь нет опечаток в словах, обозначающих реферер. Заголовок - Referer с тремя "r", свойство DOM - с четырьмя "r", настройки Firefox кроме одной - с тремя "r", одна - с четырьмя. */
user_pref("network.http.referer.spoofSource", true); // "false=real referer, true=spoof referer (use target URI as referer)"
user_pref("network.http.referer.trimmingPolicy", 2); // "0=full URI, 1=scheme+host+port+path, 2=scheme+host+port"
user_pref("network.http.sendRefererHeader", 2); // "0=don't send any, 1=send only on clicks, 2=send on image requests as well"
/* Настройка определяет, когда посылать Referer header (т.е. речь идет об отсылке серверу URI-адреса того ресурса, с которого произведен клик по ссылке или на котором загружаются изображения).
Значения:
0=никогда не посылать HTTP referer для обычного соединения
1=посылать только для ссылок
2=посылать для ссылок и изображений (значение по умолчанию)
Внимание: запрет на отсылку Referer headers может вызвать нарушения в работе некоторых сайтов (например, могут не отображаться картинки, в т.ч. и капчи). */
user_pref("network.http.referer.XOriginPolicy", 0); // "0=always send, 1=send iff base domains match, 2=send iff hosts match"
user_pref("network.http.sendSecureXSiteReferrer", true); // false=отключает передачу заголовка HTTPS referer для зашифрованного соединения.


/* Отключает автоматическое снятие скриншотов посещённых страниц с сохранением их на диск. Эти скриншоты используются в качестве превью в New Tab Page Tiles и в Ctrl+Tab (browser.ctrlTab.previews). При включенных New Tab Page Tiles и дефолтном значении этой опции, происходит еще и автоматическая закачка самых часто посещамых пользователем сайтов для генерации их превью. Если Tiles выключить, превью все равно сохраняются, когда пользователь сам заходит на один из часто посещаемых сайтов. Скриншоты пишутся на диск, даже если кэш полностью отключен. Хранятся они в каталоге thumbnails, расположенном на уровень выше каталога кэша, указанного в about:cache.
Включение этой настройки решает все вышеописанные проблемы. */
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("pageThumbs.enabled", false);

/* Открывать вкладки вместо новых окон, открывать все ссылки в вкладках. */
user_pref("browser.link.open_newwindow.restriction", 0);

/* Отключает <a ping>(пинг-трекинга), который отправляет запрос по отдельному указанному адресу (с целью трекинга) при нажатии на ссылку.
Пинг-трэкинг позволяет серверу легко отслеживать действия пользователя. */
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

/* Запрет сайтам установки соединений на критически важные порты, занятые I2P и Tor. */
user_pref("network.security.ports.banned", "4444,9050,9051");

/* Отключает браузерный анти-трекинговый список, который дублирует функции uBlock с соответствующими подписками и является менее эффективным (т.к. основан на списке от Disconnect). */
user_pref("privacy.trackingprotection.enabled", false); // Настройка может нарушать работу сайтов.
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("browser.trackingprotection.updateURL", "");
user_pref("browser.trackingprotection.gethashURL", "");
user_pref("browser.polaris.enabled", false);
user_pref("privacy.trackingprotection.introURL", "");
user_pref("privacy.trackingprotection.introCount", 1);


/* Отключает File Handle API, который используется совместно с Indexed DB или Device Storage и предоставляет доступ к более низкоуровневым файловым операциям. */
user_pref("dom.fileHandle.enabled", false);

/* Отключает Cache API (Cache Storage), представляющее из себя хранилище на компьютере пользователя, куда скрипты могут складывать информацию. Оно является частью спецификации Service Workers, но может быть использовано и без них (через window.caches). Кроме того, писать туда можно не только кэшированные ответы из сети, но и произвольные данные. В отличие от DOM Storage, Cache Storage не очищается при Clear Recent History, а его содержимое не видно в Developer Tools или на странице about:cache. Через интерфейс самого браузера увидеть его использование можно только в Информация о странице > Разрешения (но не в about:permissions) > Maintain Offline Storage и очистить там же (пункт общий с Indexed DB, и очищает их тоже вместе). Находится Cache Storage в папке профиле, по такому пути: storage/default/<домен>/cache/ */
user_pref("dom.caches.enabled", false);

/* Отключает sendBeacon() - API для отправки статистики перед выгрузкой страницы. */
user_pref("beacon.enabled", false);

/* Отключает Network Information API, которым можно узнать информацию о типе подключения к Интернету. */
user_pref("dom.netinfo.enabled", false);

/* Отключает Social API и кнопки для перепостов в соцсети. */
user_pref("social.enabled", false);
user_pref("social.remote-install.enabled", false);
user_pref("social.toast-notifications.enabled", false);
user_pref("social.directories", "");
user_pref("social.whitelist", "");
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.shareDirectory", "");

/* Отключает загрузку бинарника H.264-кодека от Cisco (будет использоваться GStreamer). */
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.fragmented-mp4.gmp.enabled", false);
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-manager.url", "");
user_pref("media.gmp-manager.cert.requireBuiltIn", true);
user_pref("media.gmp-manager.cert.checkAttributes", true);
user_pref("media.gmp-manager.certs.1.commonName", "");
user_pref("media.gmp-manager.certs.1.issuerName", "");
user_pref("media.gmp-manager.certs.2.commonName", "");
user_pref("media.gmp-manager.certs.2.issuerName", "");
// https://github.com/The-OP/Fox/issues/25
user_pref("media.gmp-manager.lastCheck", 1437696000);
user_pref("media.gmp-manager.secondsBetweenChecks", 630720000);

/* Отключает замеры производительности аддонов каждые 15 секунд. Эти замеры сами могут являться причиной тормозов браузера. Результаты показываются в Add-on Manager в виде: “[Add-on Name] might be making [Firefox version] run slowly”. */
user_pref("browser.addon-watch.interval", -1);

/* Отключение Vibration API. Позволяет использовать вибрацию, если на устройстве установлен вибромотор. Звук или вибрация от него может привлечь внимание. */
user_pref("dom.vibrator.enabled", false);


/* Отключает Media Source Extensions. Ломает некоторые кодеки на YouTube. */
user_pref("media.mediasource.enabled", false);
user_pref("media.mediasource.mp4.enabled", false);
user_pref("media.mediasource.webm.enabled", false);
user_pref("media.mediasource.webm.audio.enabled", false);
user_pref("media.mediasource.format-reader", false);
user_pref("media.mediasource.format-reader.mp4", false);
user_pref("media.mediasource.format-reader.webm", false);


/* Снижение (уменьшение) потребления (расхода) памяти когда браузер свёрнут.
true - при сворачивании браузера все его данные будут переноситься из ОЗУ (оперативная память) в виртуальную память (расположена на жёстком диске). Это позволит высвободить оперативную память, но уменьшит скорость разворачивания браузера.
false - память не выгружается, но и работает быстрее (только при сворачивании-разворачивании, а не вообще).
*/
user_pref("config.trim_on_minimize", true);

/* Отключение информаций, по котороый отслеживают пользователей. */
user_pref("dom.storage.default_quota", 0);

/* Ограничение на хранение сведений о недавно закрытых окнах в пределах одной сессии. */
user_pref("browser.sessionstore.max_windows_undo", 0);


/* Отключает getUserMedia API, который используется для записи звука с микрофона, изображения с вебкамеры и screen sharing (доступ удаленного компьютера к порции экрана). Ломает Firefox Hello.
Проверить: https://mozilla.github.io/webrtc-landing/gum_test.html
*/
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.navigator.permission.disabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.screensharing.allow_on_old_platforms", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");
user_pref("media.getusermedia.aec_enabled", false);
user_pref("media.getusermedia.agc_enabled", false);
user_pref("media.getusermedia.noise_enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);

/* Запрет поддержки Network API, с помощью которого можно определить тип подключения к сети и параметры соединение пользователя с сетью (при этом передаётся тип соединения: LAN, Wifi, 3G и так далее). Данная настройка актуальна лишь для мобильных версий Firefox. */
user_pref("dom.network.enabled", false);

/* Отключает History API, позволяющее добавлять в историю back/forward вкладки элементы, состоящие из URL и ассоциированных с ними state objects с произвольными данными. Последние сохраняются при перезапусках браузера (structuredCloneState в recovery.js), если включено восстановление сессии. Когда пользователь снова загрузит вкладку с соответствующим элементом истории или перейдет по back/forward на него, вкладка сможет прочитать сохраненный объект из window.history.state.
Объекты привязываются именно к элементам истории back/forward вкладки, поэтому прочитать их может только установившая их вкладка, а не любая другая с таким же URL.
К сожалению, присваивать maxStateObjectSize 0, не отключая History API целиком, бесполезно - при этом pushState и replaceState, даже с null вместо state object, будут выбрасывать исключения. */
user_pref("browser.history.allowPopState", false);
user_pref("browser.history.allowPushState", false);
user_pref("browser.history.allowReplaceState", false);
user_pref("browser.history.maxStateObjectSize", 0);

/*
/* Отключает Indexed DB API, позволяющий скриптам хранить информацию в БД SQLite на компьютере пользователя. Объем Indexed DB может значительно превышать объем DOM Storage. "IndexedDB is completely disabled in private browsing mode." Проверить это  можно на примере из MDN, здесь: https://mdn.github.io/to-do-notifications/index.html
В обычном окне пример покажет "Database initialised.", в приватном - "Error loading database.", плюс сообщения "TypeError: db is undefined" в консоли. Также в обычном окне использование Indexed DB сайтом можно увидеть через Page - Info Permissions (но не в about:permissions) -> Maintain Offline Storage и очистить там же. Block, равно как и Ask, почему-то не работает для отдельных сайтов. В about:permissions > All Sites, Block работает - при его выборе просто выставляется dom.indexedDB.enabled в false. Находится Indexed DB в профиле, по такому пути: storage/default/<домен>/idb/
Использование Indexed DB включили в один из популярных фреймворков и эта настройка стала ломать все больше и больше сайтов. */
user_pref("dom.indexedDB.enabled", false); Ломает Twitter.
user_pref("dom.indexedDB.experimental", false);

// Отключает автообновления и редиректы страниц, происходящие через <meta http-equiv="refresh"> (редиректы через HTTP 3xx не отключает)
http://kb.mozillazine.org/Accessibility.blockautorefresh
user_pref("accessibility.blockautorefresh", true);

/* Отключает Service Worker API, позволяющей сайтам запускать скрипты, которые могут заниматься различной сомнительной самодеятельностью в фоновом режиме, даже если у пользователя не открыто ни одной вкладки этого сайта.
Часто цель применения ServiceWorker это получение push-уведомлений в браузере и контроль кэшируемых ресурсов.
Примеры:
https://github.com/slightlyoff/ServiceWorker
https://serviceworke.rs/
Посмотреть и удалить установленные сайтами Service Workers можно через about:serviceworkers */
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.serviceWorkers.interception.enabled", false);
user_pref("dom.serviceWorkers.interception.opaque.enabled", false);
user_pref("dom.serviceWorkers.openWindow.enabled", false);
user_pref("dom.serviceWorkers.testUpdateOverOneDay", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

/* Отключает использование указанных сайтами шрифтов (Настройки > Содержимое > Шрифты и цвета > Дополнительно…). Будут использоваться указанные пользователем в настройках браузера (Настройки > Содержимое >  Шрифты и цвета). Предотвращает фингерпринтинг через анализ установленных шрифтов: https://www.browserleaks.com/fonts
user_pref("browser.display.use_document_fonts", 0);

/* css правило @font-face позволяет определить настройки шрифтов, а также загрузить специфичный шрифт на компьютер пользователя.

Существует вероятность отличить пользователя по загрузке/не загрузке шрифтов. За загрузку шрифтов отвечают опции: 

Внимание: Отключение/включение gfx.downloadable_fonts.enabled не имеет особого значения, так как и по отключению, и по включению можно получить некоторые данные о пользователе. Установите их на свое усмотрение и по ситуации.

browser.display.use_document_fonts
0: Never use document's fonts
1: Allow documents to specify fonts to use
2: Always use document's fonts (deprecated)

gfx.downloadable_fonts.enabled
gfx.downloadable_fonts.fallback_delay
gfx.downloadable_fonts.sanitize
*/

/* Отключение загрузки внешних шрифтов. Отключает загружаемые сайтами шрифты. Ломает кнопки uBlock. В качестве не ломающей кнопки замены можно добавить правило "no-remote-fonts: * true" (без кавычек) в My rules самого uBlock. */
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("gfx.downloadable_fonts.woff2.enabled", false);

/* Отключение cookies для сторонних сайтов.
Доступные значения:
0 = все cookies разрешены. Значение по умолчанию.
3 = third-party cookies разрешены только если этот сайт хранит куки с предыдущего посещения (устаревшее).
2 = отключить глобально прием cookies (в том числе - со сторонних сайтов)
1 = принимать cookies только с посещаемых сайтов (не рекомендуется!)
Если ипользуется значение 1 (принимать cookies только с посещаемых сайтов), то необходимо включить опцию очистки cookies при закрытии браузера:
network.cookie.lifetimePolicy = 2 // Хранение cookies только на время сессии.
// Хранение Cookies не более суток.
network.cookie.lifetime.days = 1
Determines the number of days to keep cookies if network.cookie.lifetimePolicy is 3. Default value is 90.
*/
//user_pref("network.cookie.cookieBehavior", 0); // Значение по умолчанию.
Глобальный запрет приема cookies (в том числе - со сторонних сайтов):
network.cookie.cookieBehavior=2 (рекомендовано)
http://kb.mozillazine.org/Network.cookie.cookieBehavior
Прием cookie только с посещаемого (оригинального) сайта. Cookie со сторонних (third-party) серверов будут блокироваться:

network.cookie.cookieBehavior=1 (не рекомендуется)
Примечание: В последнем случае (=1) необходимо активировать опцию устаревания загруженных cookies при закрытии браузера:
network.cookie.lifetimePolicy=2
http://kb.mozillazine.org/Network.cookie.lifetimePolicy

/* Объем RAM-кэша (кэш браузера который храниться в памяти) в килобайтах. */
user_pref("browser.cache.memory.capacity", 524288);

/* Автоматически определять кол-во оперативной памяти, выделямой под кэш браузера.
browser.cache.memory.capacity
-1 - размер определяется автоматически в процентах от общей оперативной памяти;
0 - оперативная память для кэша не используется; (не рекомендуется; см. примечание ниже);
Примечание: одновременный запрет (установка значения "0") на хранение кэша как в оперативной памяти, так и на винчестере может привести к проблемам
n (любое число) - максимальный размер кэша устанавливается в n килобайт. количество килобайт, выделенных на кэш.

прим. Для работы этой опции требуется установить параметру browser.cache.memory.enable значение TRUE

// Максимальный объем одного элемента.
user_pref("browser.cache.memory.max_entry_size", 52428);

browser.cache.memory.max_entry_size => -1
При этом лучше будет отключить дисковый кэш, иначе Firefox почему-то начнет писать в него еще до заполнения RAM-кэша.
user_pref("browser.cache.disk.enable", false); // true = использовать дисковой кэш. False = не использовать.
user_pref("browser.cache.disk.capacity", 0); // Размер дискового пространства под кэш браузера ( в килобайтах ). Для работы этой опции требуется установить параметру browser.cache.disk.enable значение true.
user_pref("browser.cache.disk_cache_ssl", false); // разрешение кэшировать защищённые страницы (HTTPS/SSL) или нет. true – разрешить. false – запретить. Для работы этой опции требуется установить параметру browser.cache.disk.enable значение true.

// Полное отключение кэширования. Анализируя время загрузки страницы, можно узнать, посещал ли пользователь этот сайт. Если посещал - часть файлов будет взята из кэша, что отразится на времени. Еще проще и надежнее определяется наличие файлов в кэше по значениям заголовков If-Modified-Since и If-None-Match, которые также могут быть использованы и для прямого трекинга (отдавая пользователям файл с уникальным Last-Modified и/или ETag).
user_pref("network.http.use-cache", false);
user_pref("browser.cache.memory.enable", false); // Использование кэша в оперативной памяти. true = использовать кэш в оперативной памяти. false = не использовать.
user_pref("browser.cache.memory.capacity", 0);
user_pref("media.cache_size", 0);
user_pref("image.cache.size", 0);

/* Отключение дискового кэширования. Анализируя время загрузки страницы, можно узнать, посещал ли пользователь этот сайт. Если посещал - часть файлов будет взята из кэша, что отразится на времени. Еще проще и надежнее определяется наличие файлов в кэше по значениям заголовков If-Modified-Since и If-None-Match, которые также могут быть использованы и для прямого трекинга (отдавая пользователям файл с уникальным Last-Modified и/или ETag).
user_pref("browser.cache.disk.enable", false); // true = использовать дисковой кэш. false = не использовать.
user_pref("browser.cache.disk.capacity", 0); // Размер диского пространства под кэш браузера (в килобайтах). Для работы этой опции требуется установить параметру browser.cache.disk.enable значение true.
user_pref("browser.cache.disk.smart_size.enabled", false); отключение автоматического управления дисковым кэшем
user_pref("browser.cache.disk_cache_ssl", false); // разрешение кэшировать защищённые страницы (HTTPS/SSL) или нет. true – разрешить. false – запретить. Для работы этой опции требуется установить параметру browser.cache.disk.enable значение true.

/* Назначает путь к папке cache с кэшем браузера.

Примечание: Путь прописывается таким образом: X:\\папка 1\\папка 2\\

Примечание: Для работы этой опции требуется установить параметру browser.cache.disk.enable значение true.
*/
browser.cache.disk.parent_directory


/* Отключает дисковый кэш, хранящейся на диске. К тому же защищает от составления отпечатка ETag.
E-TAGS FINGERPRINTING
E-Tag - часть HTTP-заголовка: "непрозрачный" идентификатор, обеспечивающий проверку устаревания веб-кэша браузера. Если содержимое страницы изменилось за время обращения к веб-ресурсу, E-Tag меняется на новый. Этот механизм может применяться также для распознавания "электронных отпечатков" браузера и схож с использованием cookie. Для предотвращения распознавания полностью запретите кэширование интернет-данных на HDD и(!) в RAM.

Если вы все же используете кэширование файлов в RAM:

а) не стремитесь заполнить оперативную память полностью (например - открыв множество вкладок в Firefox): это приведет к частичной выгрузке данных в swap-раздел;

б) чаще перезагружайте свой браузер в процессе работы.
Примечание: Данную опцию включать вместе с browser.cache.disk.smart_size.enabled = false
*/
user_pref("browser.cache.disk.capacity", 0);


/* Блокирование запросов к DNS-серверам при обращении браузера к сайтам в доменной зоне .onion
Скрытые сервисы Tor всё равно работают без DNS, а эта настройка предотвратит раскрытие DNS-серверу информации о том, что пользователь щёлкнул по .onion-ссылке. */
network.dns.blockDotOnion


/* Анимация увеличения вкладки при её выборе.
•	true = анимация будет отображаться
•	false = анимация отображаться не будет
*/
browser.panorama.animate_zoom

/* Определяет как открывать закладки через пункт контекстного меню «Открыть в новой вкладке». Также можно кликать средней кнопкой мыши по закладке (или Ctrl+ЛКМ).
•	true = новая вкладка откроется в фоне
•	false = будет произведено переключение на новую вкладку
*/
browser.tabs.loadBookmarksInBackground

/* Определяет, как будут открываться вкладки, открываемые вместо окон, а также ссылки из внешних приложений.
•	true = открытие вкладок в фоне
•	false = переключаться на открываемые вкладки
*/
browser.tabs.loadDivertedInBackground


/* Сглаживание шрифтов (только для Mac OS)
true=использовать системные настройки Mac OS
false=сглаживать все шрифты
*/
gfx.use_text_smoothing_setting

/* Отключение SPDY. Протокол SPDY предназначен для сокращения задержек во время соединения и обмена информационными данными между пользователем и сервером.
SPDY может хранить идентификатор и держит экстремально долгое открытое соединение.

Блокирование SPDY. SPDY протокол, разработанный с участием Google для транспортировки веб-контента. SPDY видоизменяет веб-трафик с целью сокращения времени его загрузки путем компрессии, мультиплекса и механизма расстановки приоритетов. Чтобы отключить его, измените:
*/
network.http.spdy.allow-push=false
media.http.spdy.enabled=false
network.http.spdy.enabled.deps=false

user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.v3-1", false);
user_pref("network.http.spdy.enabled.http2", false);
user_pref("network.http.spdy.enabled.http2draft", false);

Разрешать ли скриптам доступ к событию контекстного меню? 
(отключение может нарушить функционал online редакторов, например)
// Не дает страницам перехватывать и блокировать обращения к контекстному меню. Ломает Google Docs.
user_pref("dom.event.contextmenu.enabled", true);

Разрешать ли скриптам доступ к буферу обмена? (изменять скопированный текст, блокировать копирование) 
// Отключает Clipboard Events, которые позволяют страницам узнавать, какая их часть была скопирована в буфер
// обмена, подменять скопированное, перехватывать вставку из буфера и реагировать на нее особым образом
// (например загружать находящуюся в буфере обмена картинку в сообщение почты или чата).
// Ломает копирование текста из редактора Stylish.
// https://w3c.github.io/clipboard-apis/#clipboard-event-interfaces
GitHub (ломает копирование текста из редактора).
user_pref("dom.event.clipboardevents.enabled", true);

Запрещать ли изменять скриптам имя хоста в строке адреса? 
(сейчас многие flash-сайты используют эту функцию, для навигации по сайту) 
user_pref("dom.disable_location.hostname.set", true);

// Отключает событие beforeunload, на которое некоторые страницы ставят сообщения вроде: "Эта страница просит вас подтвердить, что вы хотите уйти."
user_pref("dom.disable_beforeunload", true);

/* Отключает декодирование мультимедиа через GStreamer. */
user_pref("media.gstreamer.enabled", false);

// Кроме того, на основе анализа истории уязвимостей в Firefox, разработчиками Tor Browser был сформирован список возможностей, в реализации которых всплывает больше всего уязвимостей. Для повышения безопасности предлагается реализовать средство для выборочного отключения проблемных возможностей путем предоставления пользователю кнопки для выбора уровня безопасности.
Первый уровень подразумевает отключение opentype в коде отображения шрифтов.
https://wiki.mozilla.org/SVGOpenTypeFonts
user_pref("gfx.font_rendering.opentype_svg.enabled", false);

Второй уровень - отключение WebAudio и asm.js.
user_pref("javascript.options.ion", false);
user_pref("javascript.options.asmjs", false);

Настройки media.webaudio.enabled больше не существует, поэтому только так.
user_pref("noscript.forbidMedia", true);

Третий уровень - отключение JIT-компилятора, SVG и обработку JavaScript только для HTTPS.
user_pref("javascript.options.baselinejit", false);
user_pref("gfx.font_rendering.graphite.enabled", false);

Наивысший уровень - отключение внешних шрифтов, JavaScript и всех кодеков.

Отключение внешних шрифтов. На выбор одна из настроек:
user_pref("gfx.downloadable_fonts.enabled", false);

Отключает поддержку соответствующих форматов/кодеков.
user_pref("media.format-reader.mp4", false);
user_pref("media.format-reader.webm", false);
user_pref("media.fragmented-mp4.enabled", false);
user_pref("media.fragmented-mp4.exposed", false);
user_pref("media.fragmented-mp4.ffmpeg.enabled", false);
user_pref("media.mp4.enabled", false);
user_pref("media.ogg.enabled", false);
user_pref("media.opus.enabled", false);
user_pref("media.webm.enabled", false);
user_pref("media.raw.enabled", false);
user_pref("media.wave.enabled", false);
user_pref("media.apple.mp3.enabled", false);
user_pref("media.apple.mp4.enabled", false);
user_pref("media.windows-media-foundation.enabled", false);
user_pref("media.windows-media-foundation.use-dxva", false);
user_pref("media.wmf.enabled", false);
user_pref("media.wmf.low-latency.enabled", false);
user_pref("media.directshow.enabled", false);
user_pref("media.ffmpeg.enabled", false);
user_pref("media.gmp.decoder.enabled", false);

// Отключает переход по URL при нажатии на соответствующие элементы управления:
// Preferences -> Search -> Add more search engines...
user_pref("browser.search.searchEnginesURL", "");
// Edit Control -> Context Menu -> Languages -> Add dictionaries...
user_pref("browser.dictionaries.download.url", "");
// Customize -> Themes -> Get More Themes
user_pref("lightweightThemes.getMoreURL", "");

// Отключает проигрывание в браузере не эмбеднутых аудио и видео при переходе по прямой ссылке
// на .webm/.mp3/etc. Вместо проигрывания вызовется сохранение файла.
user_pref("media.play-stand-alone", false);

// Отключает Web Video Text Tracks (субтитры для тега video).
user_pref("media.webvtt.enabled", false);

// Запрещает попапам отключать элементы окон браузера.
// http://kb.mozillazine.org/Dom.popup_maximum
user_pref("dom.popup_maximum", 5);
user_pref("dom.disable_open_during_load", true); Блокирование всплывающих окон и показ предупреждения об их блокировании: browser.popups.showPopupBlocker=true
user_pref("dom.allow_scripts_to_close_windows", false);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_flip", true);
user_pref("dom.disable_window_status_change", true);

// Отключает передачу по сети рисуемых браузером кадров специальному отладочному вьюверу.
// https://wiki.mozilla.org/Platform/GFX/LayerScope
user_pref("gfx.layerscope.enabled", false);
user_pref("gfx.layerscope.port", 100000);

// Отключает UI-тур по возможностям Australis, Hello и т.п. Эти настроки влияют на UITour.onPageEvent() и не действуют на тур по Reader View, который вызывается напрямую через UITour.onLocationChange().
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("browser.uitour.themeOrigin", "");

// Отключает геолокацию через сервисы Гугла с присвоением клиентскому компьютеру уникального идентификатора и передачей в Гугл информации о близлежащих точках доступа Wi-Fi.
user_pref("geo.enabled", false);
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("geo.wifi.scan", false);
user_pref("geo.cell.scan", false);
user_pref("geo.wifi.timeToWaitBeforeSending", 630720000);

// Отключает геолокацию для применения региональных настроек поиска. Геолокация запрашивается один раз, после чего код страны сохранится в browser.search.countryCode в виде строки "US", "RU", etc. Она не будет производиться, если код страны уже в browser.search.countryCode или если очищен необходимый для нее URL.
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");
user_pref("browser.search.geoip.timeout", 0);
user_pref("browser.search.geoip.url", "");

// Эта настройка не отключает XHR геолокации, а только применение региональных настроек.
user_pref("browser.search.geoSpecificDefaults", false);
// Нужно очищать вместе с browser.search.geoip.url.
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.search.geoip.url", "");


Фингерпринтинг
Такие методы обнаружения, для которых не требуется запись уникального идентификатора на машину пользователя.
Проверить себя на уникальность отпечатка можно на следующих ресурсах:

user_pref("gfx.direct2d.disabled",		true);


the default in Firefox for Linux is to use system proxy settings.
по умолчанию в Firefox для Linux является использование системных настроек прокси-сервера.
We change it to direct connection
//user_pref("network.proxy.type", 0);


http://asmjs.org/
user_pref("javascript.options.asmjs",		false);

// Disable rendering of SVG OpenType fonts:
    // https://wiki.mozilla.org/SVGOpenTypeFonts
    // https://github.com/iSECPartners/publications/blob/master/presentations/SVG_Security-rdegraaf-bh_us_2014.pdf
https://wiki.mozilla.org/SVGOpenTypeFonts
the iSEC Partners Report recommends to disable this
user_pref("gfx.font_rendering.opentype_svg.enabled",		false);

https://feeding.cloud.geek.nz/posts/tweaking-cookies-for-privacy-in-firefox/

Always use private browsing
user_pref("browser.privatebrowsing.autostart",		true);

/* Отключает предупреждение о переходе сайта в полноэкранный режим. */
full-screen-api.warning.timeout -> 0

Отключение синхронизации паролей посредством Firefox Sync:
services.sync.prefs.sync.signon.rememberSignons=false

Отключение автозаполнения веб-форм: установка запрета на хранение поисковых запросов и прочих данных, введенных ранее в текстовые веб-формы. Когда вы вводите данные в формы веб-страниц (например, в поисковой строке), при следующем визите Firefox подставит сохраненное значение. Чтобы запретить хранение и подстановку данных, установите:

browser.formfill.enable=false
browser.formfill.expire_days=0
browser.formfill.saveHttpsForms=false
Отключение синхронизации автозаполнения форм посредством Firefox Sync

services.sync.prefs.sync.browser.formfill.enable=false

Запрет OffscreenCanvas. Этот механизм обеспечивает возможность выполнения отрисовки через WebGL в отдельном потоке. Запуск WebGL в отдельном потоке производится с помощью API OffscreenCanvas, добавленного в систему Workers, предоставляющую средства для фонового выполнения длительных JavaScript-операций (даже при уже закрытом приложении!) Для отключения установите:

gfx.offscreencanvas.enabled=false (FF 44 и выше)


CACHE
Внимание: если вы настраиваете Firefox для Android или iOS, не изменяйте настройки, описываемые в данном разделе, особенно если на вашем устройстве нет достаточного (> 1 Гб) количества оперативной памяти (RAM)!

ГЛОБАЛЬНЫЙ ЗАПРЕТ КЭШИРОВАНИЯ:

Глобальный запрет кэширования файлов - на HDD и в RAM (в том числе - поступающих по защищенным соединениям):

network.http.use-cache=false  (начиная с FF 45, эта общая настройка может отсутствовать или устареть)
http://kb.mozillazine.org/Network.http.use-cache

КЭШИРОВАНИЕ В RAM:

Внимание: Разрешение кэширования в оперативную память может привести к отслеживанию браузера по "цифровым отпечаткам", создаваемым при помощи E-Tag!

Разрешение хранения кэша в оперативной памяти (в том числе и данных, полученных по шифрованным SSL-соединениям):

browser.cache.memory.enable=true
http://kb.mozillazine.org/Browser.cache.memory.enable

Внимание: Кэширование данных в RAM (browser.cache.memory.enable=true) НЕ будет работать, если кэширование запрещено глобально (network.http.use-cache=false)

Определение количества оперативной памяти, выделяемой под кэш (в зависимости от общего объема RAM):

browser.cache.memory.capacity=-1 (автоматическое определение; рекомендуется)
Допустимые значения:

0 - оперативная память не используется (не рекомендуется; см. примечание ниже);

n (целое цифровое значение) - количество килобайт, выделенных на кэш.

Примечание: Требует browser.cache.memory.enable=true

http://kb.mozillazine.org/Browser.cache.memory.capacity

Отключение геолокации. Firefox располагает встроенными средствами передачи геоданных (вашего местонахождения). При этом используются сведения, получаемые от геолокационных средств операционной системы, сетей Wi-Fi, телефонных и интернет-операторов, а также реальный IP-адрес.
browser.geolocation.warning.infoURL=

Отключение автоподстановки при поиске (автоматической передачи текста, набираемого в окне поиска, на поисковый сайт - без явного подтверждения со стороны пользователя). Эту функцию рекомендовано заблокировать:

browser.search.suggest.enabled=false
http://kb.mozillazine.org/Browser.search.suggest.enabled

Отключение геопозиционирования браузера (GeoIP) при работе с поисковыми серверами. Firefox располагает встроенными средствами передачи геоданных (вашего местонахождения). При этом используются сведения, получаемые от геолокационных средств операционной системы, сетей Wi-Fi, телефонных и интернет-операторов, а также реальный IP-адрес. Кроме того, вышеперечисленные данные отсылаются на серверы Google. Необходимо установить:

browser.search.geoSpecificDefaults=false
browser.search.geoip.url=false (настройка может отсутствовать или устареть)
browser.search.countryCode=US (настройка может отсутствовать или устареть)
browser.search.region=US (настройка может отсутствовать или устареть)


Отключение предложения "предпочтительных дополнений". Firefox рекламирует сторонние дополнения и темы, обращаясь к серверу Mozilla и передавая ему для анализа пользовательские метаданные. Установите:

extensions.getAddons.recommended.url=
extensions.getAddons.getWithPerformance.url=
extensions.webservice.discoverURL=
http://kb.mozillazine.org/Extensions.getAddons.recommended.url

Отключение добавления списка закачанных файлов в список "Последние документы":

browser.download.manager.addToRecentDocs=false
https://developer.mozilla.org/en-US/docs/Download_Manager_preferences

http://kb.mozillazine.org/Browser.download.manager.addToRecentDocs

Запрет на открытие небезопасных типов файлов при их загрузке (*.jar, *.zip, etc.)

Mozilla поддерживает jar: - протокол, который позволяет браузеру "напрямую" загружать файлы из jar-архивов. Их открытие/исполнение может привести к проблемам в безопасности. Установите:

network.jar.open-unsafe-types=false
http://kb.mozillazine.org/Network.jar.open-unsafe-types

“Do Not Track” - механизм, который пытается сообщить сайтам о том, что пользователь браузера не желает, чтобы посещаемые им ресурсы отслеживали его активность, используя рекламные и аналитические сервисы. Учитывая агрессивность политики таких сервисов, “Do Not Track” - одна из самых бесполезных браузерных функций, поскольку подобная "просьба о неотслеживании" ни к чему не обязывает владельцев следящих сайтов. Необходимо установить:

privacy.donottrackheader.enabled=false
privacy.donottrackheader.value=1
user_pref("privacy.trackingprotection.enabled", true);
http://kb.mozillazine.org/Privacy.donottrackheader.enabled

http://kb.mozillazine.org/Privacy.donottrackheader.value

Отключение загрузки списка следящих сайтов и механизма trackingprotection. Firefox скачивает с сайта Mozilla список "следящих" сайтов и пытается блокировать их, если пользователь работает в режиме "Private Browsing". Это увеличивает расходуемый трафик и гипотетически может раскрыть ваши пользовательские предпочтения, в частности - список посещаемых сайтов. Этот механизм тоже следует отключить (учитывая общую бесполезность сервиса “Do Not Track”):
privacy.trackingprotection.enabled=false
browser.trackingprotection.gethashURL=
browser.trackingprotection.updateURL=
https://developer.mozilla.org/en-US/Firefox/Privacy/Tracking_Protection

Блокирование Firefox Discover Apps (Firefox Marketplace):
browser.apps.URL=
dom.mozApps.signed_apps_installable_from=

Отключение библиотеки шрифтов Graphite: gfx.font_rendering.graphite.enabled=false

http://kb.mozillazine.org/Network.proxy.type



HSTS
Запрет отслеживания с помощью технологии HSTS. Эта функция включена по умолчанию и не имеет встроенных настроек для ее блокирования. Механизм HSTS позволяет защищать соединения между сервером и браузером, принудительно активируя обращение к сайтам по протоколу HTTPS, и препятствует атакам, связанным с понижением уровня защиты (downgrade attack). Однако реализация HSTS аналогично внедрению в браузер т.н. supercookie ("неудаляемых cookie") и служит дополнительным средством отслеживания пользовательской активности. Firefox сохраняет данные HSTS в текстовом файле, расположенном в корне профиля браузера: SiteSecurityServiceState.txt
Это реальные "цифровые отпечатки" вашего браузера - серьезный источник утечек и слежения за пользователем; его следует отключить.

Для предотвращения отслеживания:
Закрыть браузер.
Открыть файл SiteSecurityServiceState.txt и удалить в нём все строки.
Сохранить и закрыть файл.
Сделать файл доступным только для чтения:
например (только в Linux): chmod 400 SiteSecurityServiceState.txt


camera.control.face_detection.enabled=false

MOBILE VERSION ONLY
user_pref("media.audio_data.enabled", false);  // Android
user_pref("device.camera.enabled", false);  // Android
user_pref("network.http.sendSecureXSiteReferrer", false); // Android
user_pref("media.plugins.enabled", false); // Android
user_pref("plugin.disable", true); // Android
user_pref("browser.snippets.enabled", false); // Android
user_pref("browser.snippets.syncPromo.enabled", false); // Android
user_pref("browser.snippets.geoUrl", ""); // Android
user_pref("browser.snippets.statsUrl", ""); // Android
user_pref("browser.snippets.updateUrl", ""); // Android

media.plugins.enabled=false  (Android)
plugin.disable=true  (Android)
browser.snippets.countryCode=US (Android)
browser.snippets.enabled=false  (Android)
browser.snippets.syncPromo.enabled=false  (Android)
browser.snippets.geoUrl=  (Android)
browser.snippets.statsUrl=  (Android)
browser.snippets.updateUrl=  (Android)
*/

/* Отключает Offline App Cache (автономный кэш).
Демо можно посмотреть (http://appcache.offline.technology/demo/index.html) мониторя использование, выполнив в адресной строке about:cache > appcache и меняя настройки. */
user_pref("browser.cache.offline.enable", false);
user_pref("browser.cache.offline.capacity", 0);
/* Запрос разрешения на использование бесполезен при отключенном Offline App Cache, но все равно будет появляться, если его не отключить этой настройкой: */
user_pref("browser.offline-apps.notify", false);
/* Эта настройка тоже нужна тут, иначе у всех сайтов по умолчанию будет permission "offline-app", и при попытке воспользоваться Offline App Cache, они будут появляться в списке «Автономное вэб-содержимое и данные пользователя» (меню браузера > Настройки > Дополнительные > Сеть), хоть и не смогут ничего хранить в выключенном кэше. */
user_pref("offline-apps.allow_by_default", false);

/* Отключает установку дефолтных пермишнов (resource://app/defaults/permissions) в Permission Manager. Среди которых есть пермишн install для AMO, из-за чего браузер в AMO > Themes (со включенным JS) скачивает и применяет темы по mouseover, без подтверждения установки. Еще в том списке есть пермишн remote-troubleshooting, позволяющий скриптам на сайтах, которым он задан (support.mozilla.org и input.mozilla.org), читать часть информации, перечисленной в about:support, когда пользователь заходит на эти сайты (со включенным JS). Причем пермишны remote-troubleshooting, в отличие от install, не видны через UI браузера (Page Info > Permissions). Протестировать этот механизм и узнать, какая именно информация доступна, можно здесь (https://hg.mozilla.org/releases/mozilla-esr38/raw-file/569b611715e0/browser/base/content/test/general/test_remoteTroubleshoot.html), задав hg.mozilla.org пермишн remote-troubleshooting путем присвоения этой настройке строки (data:text/plain,host%09remote-troubleshooting%091%09hg.mozilla.org) и перезапуска браузера.
Отключение установки пермишнов из дефолтного списка решает обе вышеописанные проблемы. */
user_pref("permissions.manager.defaultsUrl", "");

/* Если указан SOCKS5-прокси, делать DNS-запросы через него, а не напрямую со своего IP.
Полезно, например при работе с TOR, чтобы обойти обращения к DNS провайдера. */

Отправка DNS-запросов на удаленный сервер для предотвращения их утечки или спуфинга веб-адреса:
Внимание: Данная настройка действует только(!) если вы работаете через удаленный сервер; например, при использовании "луковичной" маршрутизации:

Как отправить DNS запросы через туннель SOCKS (proxy)?
Firefox (как и другие браузеры) не производит проксификацию DNS запросов, т.е. сторонний наблюдатель может увидеть к каким сайтам Вы обращаетесь

true - браузер осуществляет поиск DNS на удаленном сервере;
false - происходит поиск DNS на localhost (как правило, осуществляется прямое получение DNS от интернет-провайдера).

user_pref("network.proxy.socks_remote_dns", true);

/* Количество страниц, которые держатся в памяти уже в виде DOM для быстрого перехода по back/forward. Другими словами все посещённые страницы сохраняются уже просчитанными и отрисованными в кэше для того, чтобы избежать (уменьшить) необходимость повторной загрузки с сервера страницы, на которую вы решили повторно вернуться. По умолчанию браузер полностью кеширует в памяти 5 последних страниц (по-умолчанию стоит значение -1, которое само определяет размер оперативной памяти от количества памяти в коммпьютере) открытых в текущей вкладке, что приводит к ощутимым затратам памяти. Уменьшение снизит потребление памяти.
// Также немного уменьшает потребление памяти.
user_pref("memory.free_dirty_pages", true);

В зависимости от объёма памяти допускаются следующие значения:


Память		Страницы
32 MB	0
64 MB	1
128 MB	2
256 MB	3
512 MB	5
1 GB	8
2 GB	8
4 GB	8

Запретить полное кэширование отрендеренного образа прошлых страниц можно
установив эту переменную в 0, тем самым в памяти не будут сохраняться страницы.
Определение количества недавно посещенных страниц, которые станут хранится в памяти и не будут рендериться заново. Улучшает работу команд "Назад" и "Вперед". Эта опция отличается от сходной опцией, связанной кэшированием в оперативной памяти (RAM). Значение "-1" ("минус один") автоматически определяет количество страниц и зависит от общего размера RAM:

browser.sessionhistory.max_total_viewers=-1 (по умолчанию; рекомендовано)

*/
user_pref("browser.sessionhistory.max_total_viewers", 2);

/* Убирает задержку в диалоговом окне «Сохранить файл» */
user_pref("security.dialog_enable_delay", 0);


/* Disable WebRTC
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.navigator.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");
*/

/* Disable IPv6:
Some texts on why IPv6 is no good for privacy: 
https://www.defcon.org/images/defcon-15/dc15-presentations/Lindqvist/Whitepaper/dc-15-lindqvist-WP.pdf
https://iapp.org/news/a/2011-09-09-facing-the-privacy-implications-of-ipv6
https://www.christopher-parsons.com/ipv6-and-the-future-of-privacy/
http://www.zdnet.com/article/security-versus-privacy-with-ipv6-deployment/
user_pref("network.dns.disableIPv6", true);
http://knowipv6.digitalelement.com/?p=66
user_pref("network.http.fast-fallback-to-IPv4", true);
*/

// Show Punycode for international domain names, prevent some phishing attempts:
    // http://kb.mozillazine.org/Network.IDN_show_punycode
user_pref("network.IDN_show_punycode", true);

// Prevent sites from sniffing clipboard content:
    // https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/dom.event.clipboardevents.enabled
user_pref("dom.event.clipboardevents.enabled", false);

// Browser test sites: 
    // https://www.ssllabs.com/ssltest/viewMyClient.html
    // https://www.howsmyssl.com/
    // https://badssl.com/

// Block mixed content:
user_pref("security.mixed_content.block_active_content", true); // (eg. insecure CSS or JS on a HTTPS page - this is enabled by default)
// user_pref("security.mixed_content.block_display_content", true); // ("passive" content - eg. insecure images on a HTTPS page)

// Enforce public key pinning for CAs
    // https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning
user_pref("security.cert_pinning.enforcement_level", 2);

// General SSL/TLS preferences:
user_pref("security.ssl.errorReporting.enabled", false); // https://gecko.readthedocs.org/en/latest/browser/base/sslerrorreport/preferences.html
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true); // https://wiki.mozilla.org/Security:Renegotiation#security.ssl.treat_unsafe_negotiation_as_broken
user_pref("security.tls.unrestricted_rc4_fallback", false); // No thanks, I'd rather fall back to ROT13...

// Reject SHA1 certs
    // https://bugzilla.mozilla.org/show_bug.cgi?id=942515#c32
    // http://www.scmagazine.com/mozilla-pulls-back-on-rejecting-sha-1-certs-outright/article/463913/
user_pref("security.pki.sha1_enforcement_level", 1);

// Load searches from right-click context menu in background tab:
    // https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/browser.search.context.loadInBackground
user_pref("browser.search.context.loadInBackground", true);

// Remove "(site) is now fullscreen" nag message:
    // If you fear this might "facilitate phishing", you might not want to be on the internet at all.
    // Before FF43:
// user_pref("full-screen-api.approval-required", false);
    // Since FF43:
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

// Prevent sites from disabling the default right-click menu:
user_pref("dom.event.contextmenu.enabled", false);

// Start searching while typing:
user_pref("accessibility.typeaheadfind", true); // http://kb.mozillazine.org/Accessibility.typeaheadfind
user_pref("accessibility.typeaheadfind.flashBar", 0); // http://kb.mozillazine.org/Accessibility.typeaheadfind.flashBar

// Better legible default fonts (for Windows, at least - might require ttf-mscorefonts on *nix):
    // As an alternative, the free Ubuntu and Droid font families are pretty good as well.
// user_pref("font.name.monospace.x-unicode", "Lucida Console");
// user_pref("font.name.monospace.x-western", "Lucida Console");
// user_pref("font.name.sans-serif.x-unicode", "Segoe UI");
// user_pref("font.name.sans-serif.x-western", "Segoe UI");
// user_pref("font.name.serif.x-unicode", "Georgia");
// user_pref("font.name.serif.x-western", "Georgia");

// Disable EME, Adobe "Primetime Content Decryption Module" DRM malware:
    // http://techdows.com/2015/04/how-to-uninstall-or-remove-adobe-primetime-decryption-module-plugin-from-firefox-38.html
    // Additionally, you might want to delete all traces of "gmp-eme" from your Firefox profile folder.
    // Or simply use "EME-free" builds of Firefox (Windows only): https://ftp.mozilla.org/pub/firefox/releases/latest/win32-EME-free/en-US/
user_pref("media.gmp-eme-adobe.autoupdate", false);
user_pref("media.gmp-eme-adobe.enabled", false);
user_pref("media.eme.apiVisible", false);
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);

// Disable "Firefox Hello" TokBox/Telefonica WebRTC PUP:
    // https://www.mozilla.org/en-US/privacy/firefox-hello/
    // https://security.stackexchange.com/questions/94284/how-secure-is-firefox-hello
user_pref("loop.CSP", "");
user_pref("loop.enabled", false);
user_pref("loop.feedback.baseUrl", "");
user_pref("loop.oauth.google.scope", ""); // What's Google doing in there as well?
user_pref("loop.server", "");

// Disable "Pocket" bloatware:
    // http://venturebeat.com/2015/06/09/mozilla-responds-to-firefox-user-backlash-over-pocket-integration/
    // https://www.gnu.gl/blog/Posts/multiple-vulnerabilities-in-pocket/
user_pref("browser.pocket.api", "");
user_pref("browser.pocket.enabled", false);
user_pref("browser.pocket.oAuthConsumerKey", "");
user_pref("browser.pocket.site", "");

// Disable "social" crap:
    // http://www.ghacks.net/2013/04/10/mozilla-adds-cliqz-msnnow-and-mixi-as-social-providers-to-firefox/
user_pref("social.directories", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.toast-notifications.enabled", false);
user_pref("social.whitelist", "");

// Disable "Reader Mode":
user_pref("reader.parse-on-load.enabled", false);
// user_pref("readinglist.server", "");

// Disable integrated PDF reader:
    // https://blog.mozilla.org/security/2015/08/06/firefox-exploit-found-in-the-wild/
    // If you're going to use an external PDF reader, *don't* use Adobe PDF bloatware. Use a sane reader, such as SumatraPDF.
user_pref("pdfjs.disabled", true);
    // If you're gonna stick with pdfjs, at least disable its WebGL attack surface:
user_pref("pdfjs.enableWebGL", false);

// Disable various useless and/or intrusive web APIs:
    // https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections
user_pref("beacon.enabled", false); // https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
user_pref("device.sensors.enabled", false); // https://wiki.mozilla.org/Sensor_API
user_pref("dom.battery.enabled", false); // https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager
user_pref("dom.cellbroadcast.enabled", false);
user_pref("dom.enable_performance", false); // https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
user_pref("dom.gamepad.enabled", false); // https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API
user_pref("dom.netinfo.enabled", false); // https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
user_pref("dom.telephony.enabled", false); // https://wiki.mozilla.org/WebAPI/Security/WebTelephony
user_pref("dom.vibrator.enabled", false);
user_pref("dom.vr.enabled", false); // https://developer.mozilla.org/en-US/Firefox/Releases/36#Interfaces.2FAPIs.2FDOM
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.oculus050.enabled", false);
user_pref("dom.webnotifications.enabled", false); // https://developer.mozilla.org/en-US/docs/Web/API/notification
user_pref("dom.webnotifications.serviceworker.enabled", false); // https://developer.mozilla.org/en-US/docs/Web/API/notification
user_pref("media.webspeech.recognition.enable", false); // https://wiki.mozilla.org/HTML5_Speech_API

// Remove default feed content handlers:
    // http://kb.mozillazine.org/Browser.contentHandlers.types.*.uri
    // Yahoo RSS handler:
user_pref("browser.contentHandlers.types.0.title", "");
user_pref("browser.contentHandlers.types.0.type", "");
user_pref("browser.contentHandlers.types.0.uri", "");

// Remove default website protocol handlers:
    // http://kb.mozillazine.org/Gecko.handlerService.schemes.%28protocol%29.*.uriTemplate
    // Mibbit:
user_pref("gecko.handlerService.schemes.irc.0.name", "");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.name", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
    // Yahoo Mail:
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
    // Gmail:
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
    // 30 Boxes:
user_pref("gecko.handlerService.schemes.webcal.0.name", "");
user_pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");

// Disable "Snippets" (Mozilla content shown on about:home screen):
    // https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_mozilla-content
user_pref("browser.aboutHomeSnippets.updateUrl", "");

// ----------------------------------------------------
// NEEDS MORE RESEARCH
// ----------------------------------------------------

// FF45 disables .onion DNS lookup (for good reason). Probably shouldn't be re-enabled:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1228457
// user_pref("network.dns.blockDotOnion", true);

// Web push:
    // https://en.wikipedia.org/wiki/Push_technology
    // https://unicorn-wg.github.io/webpush-protocol/
    // https://www.ietf.org/mail-archive/web/webpush/current/threads.html#00182
// user_pref("dom.push.connection.enabled", false);
// user_pref("dom.push.enabled", false);
// user_pref("dom.push.serverURL", "");
// user_pref("dom.push.udp.wakeupEnabled", false);
// user_pref("dom.push.userAgentID", "");

// SPDY:
    // https://en.wikipedia.org/wiki/SPDY
    // https://security.stackexchange.com/questions/29632/what-should-i-know-about-spdy-before-enabling-it
    // http://readwrite.com/2012/04/19/what-web-users-need-to-know-ab
// user_pref("network.http.spdy.allow-push", false);
// user_pref("network.http.spdy.enabled", false);
// user_pref("network.http.spdy.enabled.deps", false);
// user_pref("network.http.spdy.enabled.http2", false);
// user_pref("network.http.spdy.enabled.v3-1", false);

// Improve the abysmal performance of Firefox - without using e10s. 
    // Unfortunately, very few addons are compatible with e10s at the moment: http://arewee10syet.com/
    // https://wiki.mozilla.org/Electrolysis
    // Not working for me: CM Send Link, Disconnect (?), 

// So, reluctantly disabling e10s for now? This will "fix" addon compatibilty, but break image drag & drop on many sites:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1147156
    // https://bugzilla.mozilla.org/show_bug.cgi?id=960783
// user_pref("browser.tabs.remote.autostart", false); // default setting (in FF43/44)
// user_pref("browser.tabs.remote.autostart.1", false); // default setting (in FF43/44)
// user_pref("browser.tabs.remote.autostart.2", false); // This breaks image drag & drop on many sites! (in FF43/44)

// Improve the abysmal Javascript/AJAX performance. 
    // I'm not talking about meaningless synthetic benchmark results here. 
    // As seen in reality, on sites like Tweetdeck - which barely works in Firefox, compared to Vivaldi, Chromium, or even IE11.
    // Most info found is outdated, the prefs don't exist anymore (eg. javascript.options.methodjit), or there is contradictory evidence about their usefulness.


Tor Browser Bundle about:config Null Advisory;

- https://tornull.org/tbbnull.php


How to EDIT the Tor Browser Bundle about:config - http://kb.mozillazine.org/About:config


network.http.sendRefererHeader ; 1 - http://kb.mozillazine.org/Network.http.sendRefererHeader

browser.sessionhistory.max_entries ; 2

dom.storage.enabled ; false - http://kb.mozillazine.org/Dom.storage.enabled

dom.vibrator.enabled ; false

webgl.disabled ; true

browser.cache.memory.enable ; false - http://kb.mozillazine.org/Browser.cache.memory.enable

network.http.use-cache ; false - http://kb.mozillazine.org/Network.http.use-cache

browser.cache.disk.capacity ; 0

browser.cache.offline.capacity ; 0

browser.cache.disk_cache_ssl ; false - http://kb.mozillazine.org/Browser.cache.disk_cache_ssl

places.history.enabled ; false

network.prefetch-next ; false - http://kb.mozillazine.org/Network.prefetch-next

browser.send_pings.require_same_host ; true - http://kb.mozillazine.org/Browser.send_pings.require_same_host

browser.send_pings.max_per_link ; 0

beacon.enabled ; false

clipboard.autocopy ; false - http://kb.mozillazine.org/Clipboard.autocopy

dom.event.clipboardevents.enabled ; false - https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/dom.event.clipboardevents.enabled

layout.css.visited_links_enabled ; false - https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/

browser.sessionhistory.max_total_viewers ; 0 - http://kb.mozillazine.org/Browser.sessionhistory.max_total_viewers


How to Stop Firefox making Automatic Connections - https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections

browser.newtabpage.directory.ping ; set a blank string

browser.newtabpage.directory.source ; set a blank string

browser.aboutHomeSnippets.updateUrl ; set a blank string

browser.startup.homepage_override.mstone ; ignore

browser.selfsupport.url ; set a blank string


Additional (optional) :

extensions.blocklist.enabled ; false

experiments.enabled ; false

experiments.supported ; false

network.allow-experiments ; false


How to fully disable Google 'Safe' Browsing and Reporting - http://kb.mozillazine.org/Browser.safebrowsing.enabled

browser.safebrowsing.appRepURL ; set a blank string

browser.safebrowsing.downloads.enabled ; false

browser.safebrowsing.gethashURL ; set a blank string

browser.safebrowsing.malware.reportURL ; set a blank string

browser.safebrowsing.reportErrorURL ; set a blank string

browser.safebrowsing.reportGenericURL ; set a blank string

browser.safebrowsing.reportMalwareErrorURL ; set a blank string

browser.safebrowsing.reportMalwareURL ; set a blank string

browser.safebrowsing.reportPhishURL ; set a blank string

browser.safebrowsing.reportURL ; set a blank string

browser.safebrowsing.updateURL ; set a blank string

services.sync.prefs.sync.browser.safebrowsing.enabled ; false

services.sync.prefs.sync.browser.safebrowsing.malware.enabled ; false


Pipelining Optimizations :

network.http.pipelining.maxrequests ; 32

network.http.pipelining.max-optimistic-requests ; 8


Tab Optimizations :

browser.tabs.animate ; false

browser.panorama.animate_zoom ; false



security.ssl.require_safe_negotiation` -- ломается Instagram, многие другие
