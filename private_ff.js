/* ��������� User Timing API - ������ � ���������������� �������, ��� ������ �������� ����� ���� ������������ ������������� ������������� ���� �� �������������������� JS-����. */
user_pref("dom.enable_user_timing", false);
user_pref("dom.performance.enable_user_timing_logging", false);

/* ��������� Web Speech API, �������������� ��� ������������� � ������� ����.*/
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);

/* ��������� CSS Font Loading API, ��������������� ��� ������������ ��������� ������� �� ��������. */
user_pref("layout.css.font-loading-api.enabled", false);

/* ��������� Battery API - ��������� ����������� ��������� �������������� ������� � ��� ����� �������� ����������. */
user_pref("dom.battery.enabled", false);

/* ��������� Push API, ����������� ���-����������� �������������� ������������� �� ������� �������, ����� ���� ���������� �������� ��� �����������, ������� ������������ �������, ����� ������ ������.
����� ������ ����� ����� � ���������� ������������ ��������� push-����������, ���� ���� ������� ������). */
user_pref("dom.push.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.adaptive.enabled", false);
user_pref("dom.push.udp.wakeupEnabled", false);
user_pref("dom.push.maxQuotaPerSubscription", 0);

/* ��������� Selection Events, ����������� �������� ����������� �� ��������� ������������� ������ �� ���. ��� Selection API ��� ��������� �� ��������� � window.getSelection() ��� ��� ����� ��������. */
user_pref("dom.select_events.enabled", false);

/* ��������� Simple Push API - ������������� ������������ Push API �� Mozilla. */
user_pref("services.push.enabled", false);
user_pref("services.push.serverURL", "");

/* ��������� API ��������. ����������� ����� ����� ������� ���������� � �������� ����������. */
user_pref("device.sensors.enabled", false);

/* ��������� Device Storage API, ������� �������� ���-��������� �������� ������ � �������� ������� � ��������������� ������ ����� ������������ ��� ������ � ���. */
user_pref("device.storage.enabled", false);

/* ��������� ImageCapture API ��� ������ ����������� � ���-������. */
user_pref("dom.imagecapture.enabled", false);

/* ��������� Resource Timing API (��������� ���������� � ���, � ����� ��������� �������������� �������� �����). */
user_pref("dom.enable_resource_timing", false);

/* ������ �������� �������� ������������ ������ ������������. */
user_pref("dom.disable_window_open_feature.personalbar", true);

/* ������ �������� �������� ������� ����. */
user_pref("dom.disable_window_open_feature.resizable", true);

/* ������ �������� �������� ������ ���������. */
user_pref("dom.disable_window_open_feature.scrollbars", true);

/* ������ �������� �������� ������ ���������. */
user_pref("dom.disable_window_open_feature.status", true);

/* ������ �������� �������� ���� ����. */
user_pref("dom.disable_window_open_feature.menubar", true);

/* ������ �������� ����������� ������ ����������� ����. */
user_pref("dom.disable_window_open_feature.minimizable", true);

/* ������ �������� ��������� ����. */
user_pref("dom.allow_scripts_to_close_windows", false);

/* ������ �������� �������� ������ ����. */
user_pref("dom.disable_window_move_resize", true);

/* ������ �������� �����������/������������� ����. */
user_pref("dom.disable_window_flip", true);

/* ������ �������� ���������� ����� � ������ �������. */
user_pref("dom.disable_window_status_change", true);

/* ������ �������� ��������� ����. */
user_pref("dom.disable_window_open_feature.close", true);

/* ������ �������� �������� ������ ������. */
user_pref("dom.disable_window_open_feature.location", true);

/* ������ �������� �������� ��������� ����. */
user_pref("dom.disable_window_open_feature.titlebar", true);

/* ������ �������� �������� ������ ������������. */
user_pref("dom.disable_window_open_feature.toolbar", true);

/* ��������� �������������� ��� �������� �������. */
user_pref("browser.tabs.warnOnOpen", false);

/* ��������� ����� ���������� � ��������� ����������� ��� ���������� ��� ������ ��������. */
user_pref("extensions.update.notifyUser", false);

/* ��������� ����������� �������������� �� ���������� ���������� ��� ��������� �������� �������. */
user_pref("plugin.default_plugin_disabled", true);

/* ��������� ����������� �� ����������� ��������. */
user_pref("plugins.update.notifyUser", false);

/* ��������� ��������� ����������� ���� � ������� ���������� �� ������ ��������� ��� �������� ������ �������. */
user_pref("profile.confirm_automigration", false);

/* ��������� ��������� �� ���������� ��������: "��������� �������, ������������ �� ���� �������� ��������" (��� ��������). */
user_pref("plugins.hide_infobar_for_outdated_plugin", true);

/* ��������� �������������� � �������� ���������� ������� �������� ���������. */
user_pref("browser.tabs.warnOnCloseOtherTabs", false);

/* ��������� ������ ��������� ��� ������ ���������� ������, ������ ��� ����������� ���� ��������?�. */
user_pref("plugins.hideMissingPluginsNotification", false);

/* ��������� �������������� � ������������� Flash ������, ���� �� ����� ���� ���������� ������������ ���. ����������� ����: "��� ������������ �����...". */
user_pref("plugins.notifyMissingFlash", false);

/* ��������� �������� URL �� ������ ������ �� ������� �� ������ � Linux, ������� ������ ��� �������� ���� ������ � ��������� ������ �� ������. */
user_pref("middlemouse.contentLoadURL", false);

/* ��������� ���������������� �� ����� � ������� ��������� �������� �������� � �������� �����. */
user_pref("browser.tabs.animate", false);
user_pref("browser.fullscreen.animateUp", 0);

/* ��������� �������������� ��������� ����, ����������� ��� ��� �������������� ����� �������, � �������� ���������� ��� � ������ �����. */
user_pref("nglayout.enable_drag_images", false);

/* ��������� �������� ��� �������, �������� �� Firefox ��������� �� ���������.
��������� ����� �������� � ���� �������� > ��������� > �������� > ������ ���������, �������� �� Firefox ����� ��������� �� ��������� */
user_pref("browser.shell.checkDefaultBrowser", false);

/* ��������� �������� ���������� ��� ���������� �������. */
user_pref("extensions.getAddons.cache.enabled", false);

/* ��������� ����������� ������� ������ Firefox � ��������� ������������� Mozilla. */
user_pref("browser.selfsupport.url", "");

/* ��������� �������������� �������� ��� ������ ������� �������� � ����� ��������. */
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");

/* ��������� �������������� �������� ������� � ��������� ��������� � ����� ������ ����� ����������. */
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_override_url", "");

/* ���������� ���������� �������. */
user_pref("dom.idle-observers-api.enabled", false);

/* �� ������������� ������������ � ��������� ��������� Windows. */
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.download.manager.addToRecentDocs", false);

/* ��������� �������� JAR ������. */
user_pref("network.jar.open-unsafe-types", false);

/* ������� �������, ������, �������, ����, cookies � ��. ��� ������ �� ��������. */
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// �������������� ��������� �������:
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.passwords", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);

/* �������� ����������� ���� � �������������� ������� �� �������� about:plugins
false ������������� ������ ���������� �� ������������� ��������. */
user_pref("plugin.expose_full_path", true);

/* ��������� IPv6 DNS-������� */
user_pref("network.dns.disableIPv6", true);

/* ��������� �������� ��������� ���������� � ������� ������ � ��������� �������� �������� (�� ��������� ����� ���������� ������������� ������-������� ��� ���� TOR).
���� ��������� ��������� ����� ����� ������������ ���� ��������, �� ���� ����������� �������� ��������� �������� � ����� �� �������� ��� ����� ����������� ��������� ����������� ��������. */
user_pref("dom.enable_performance", false);

/* ��������� �������� ������� ��������� � ��������. */
user_pref("places.history.enabled", false);

/* ��������� ��������������� ��������� ��������� �������� ����������� � ��������� � ��� ���������������� ����� ������� DNS-����. */
user_pref("network.notify.changed", false);

/* ���������� �������������� ������ Stylish. */
user_pref("extensions.stylish.updatesEnabled", false);

/* ���������� ��������� ���������� ��������� �� ����������, �� �������, �� ��� �������������, ������� ������������.
����� ������� ��������� Predictor - ��������, ������������ ����� ����� �������, � ������� ������������� ������� ��� ���� ��� ����� URL (��������, �������� ������ � ������ �� ��������), � ��� ��������� ����������� ������� ������������� �� ����� �������, ������� �����������. */
user_pref("network.predictor.enable-hover-on-ssl", false);
user_pref("network.predictor.enabled", false);

/* ���������� �������������� ������������� ������� (���� ����������� ���������/���������).
��������� ���������� ��������� ����� ��� ������ ����������� www � ������ TLD. */
user_pref("browser.fixup.alternate.enabled", false);

/* ���������� ��������������� ���������� ��������. */
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false);
user_pref("app.update.service.enabled", false);
user_pref("app.update.checkInstallTime", false);
user_pref("app.update.url", "");
user_pref("app.update.silent", false);
user_pref("app.update.staging.enabled", false);
user_pref("app.update.badge", false);

/* ��������� ���������� �������� �������. ����� ���������� ������� ������� ����������� ������, ���������� � ����� logins.json ������� ������������ � ����� ������� (��� ����� ��������� > ������). */
user_pref("signon.rememberSignons", false);
user_pref("signon.storeWhenAutocompleteOff", false);


/* ��������� Firefox Hello. */
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

/* ��������� ����� ������ ������ �� ����� �� ��������������� ���� ����� � ������, ������������ ��������� ��������� ������. */
user_pref("signon.rememberSignons.visibilityToggle", false);

/* ��������� �������������� ����������� ����������� ������ � ����� ������.
������ ��� Linux-������. */
user_pref("clipboard.autocopy", false);

/* �������� ����� ����� ���������� � ���� �� ������� �������, ���������� � ������� back/forward �������.
�� ���������� ������� �� ������. ���� URL �� ���� ������� ���������� �� JS, �� �� ���������� ����� � window.history.length, ��� ����� ������������ ��� ���������������.
�� ��������� 50. �������� 1 �������� �������� ������ ������ ������� ��������. */
user_pref("browser.sessionhistory.max_entries", 2);

/* �������� ��������� ������������� �������. */
user_pref("xpinstall.signatures.required", false);

/* ��������� ���������� � ���������� ������� ������ � ���������� :visited, ��� ������������� ����������� ��������, ����� URL ���� � ������������ � ������� ��������. */
user_pref("layout.css.visited_links_enabled", false);


/* ��������� �������� ������ ����, �������� �� ���������. */
user_pref("browser.formfill.expire_days", 0);

/* ��������� ����������� captive portal - ������� ���� ������������� ������������� ������� �� �������� ����������. ��� ������� ������������ � ������ ���������� Wi-Fi � ���������� ����������� ��� ������������ ��� ������ ������������ �����-���� ���������� (��������, � ������������� ��������� ����). ����������� ���������� ����� ������������� ���������� ����� � ������� ���������. */
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.captive-portal-service.minInterval", 0);
user_pref("captivedetect.canonicalURL", "");
user_pref("captivedetect.maxRetryCount", 0);

/* ��������� ��������������� �������. */
user_pref("plugins.click_to_play", true); // ������ ��������������� ����������� �������� (��� ������ ��������) ������ ����� ������������� ������������.
user_pref("plugin.sessionPermissionNow.intervalInMinutes", 0);
user_pref("plugin.persistentPermissionAlways.intervalInDays", 0);
user_pref("plugin.default.state", 0); // 1=��������� �� ���������. ��� ���� ������� ������� "������������ �� ������?". 2=�� ������ �������������� ��������� �������. 0=���������.
user_pref("plugin.defaultXpi.state", 0);
user_pref("plugin.state.flash", 0);
user_pref("plugin.state.java", 0);

/* ��������� ��� �������.
������ ��� Windows-������. */
user_pref("plugin.scan.plid.all", false);
user_pref("plugin.scan.Acrobat", "30000.0");
user_pref("plugin.scan.Quicktime", "30000.0");
user_pref("plugin.scan.WindowsMediaPlayer", "30000.0");

/* ��������� ����������� ������������ �������� ����� window.navigator.plugins */
user_pref("plugins.enumerable_names", "");
user_pref("plugins.load_appdir_plugins", false);
user_pref("plugins.update.url", "");
user_pref("pfs.datasource.url", ""); // ������� ������ ������ ������

/* ���������� ���� ��������. */
user_pref("plugin.allowed_types", " "); // ������ ������, � �� ������ ������. ������ ������ ������ "��������� ���".

/* ������ javascript-�� ���������� � ��������. */
user_pref("security.xpconnect.plugin.unrestricted", false);
user_pref("application.use_ns_plugin_finder", false);

/* ��������� �������� PDF ���������� ��������. */
user_pref("pdfjs.disabled", true);
user_pref("pdfjs.enableWebGL", false);

/* ��������� WebGL, ����������� ������ ������ ���������� ������������ � �� �������. */
user_pref("webgl.enable-debug-renderer-info", false);

/* ������ �������� ������ ��������� ���������� � ����������� ������������ �������. */
user_pref("webgl.disable-extensions", true);
user_pref("webgl.min_capability_mode", true);

/* ������ ���������� WebGL.  */
user_pref("webgl.disabled", true);
user_pref("webgl.force-enabled", false);

/* ��������� ���������� ������ �������� Pocket. */
user_pref("browser.pocket.enabled", false);
user_pref("browser.pocket.api", "");
user_pref("browser.pocket.site", "");
user_pref("browser.pocket.oAuthConsumerKey", "");
user_pref("browser.pocket.enabledLocales", "");
user_pref("browser.toolbarbuttons.introduced.pocket-button", false);
user_pref("browser.uiCustomization.state", "");
user_pref("browser.pocket.useLocaleList", false);

/* ��������� Reader View (������ � ������� � �������� ������). */
user_pref("reader.parse-on-load.enabled", false);
user_pref("reader.parse-on-load.force-enabled", false);
user_pref("reader.errors.includeURLs", false);
/* ��� ������ ��������� window.location �������� ������������ � ���� ����������, ����� ������ UI-��� �� ������ ������. �������� ����� ��������� ������������ ��� ������� ��� �������� �� ������ ������, ������� �������� ��� ������. ������ ����� ����� ������������ �������, ������������ ��� ����� ������ false. */
user_pref("browser.uitour.readerViewTrigger", ".^");

/* ��������� �������������� �������� ���������� ��������������� ������� �� ���� ��� ������, ������������ ��� ������������ ��������� ���������. */
user_pref("browser.search.suggest.enabled", false); // ���������� ��������������� ��������� �������� � ���� ������.
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.maxCharsForSearchSuggestions", 0);

/* ��������� ����������� �������� ��������� ���������. */
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);

/* ��������� ����� ����� �������� ������ ��� �������� ����������� ���������-���������.
������: mozilla.org > http://mozilla.org/ */
user_pref("keyword.enabled", false);

/* ��������� ���������� ���������. */
user_pref("layers.acceleration.disabled", true);

/* ������ ����� ��������� ������ �� ����� �����. */
user_pref("browser.display.focus_ring_width", 0);
user_pref("browser.display.focus_ring_on_anything", false);

/* ��������� ������ ������� ������� �������� � ����������� � ������� ������ �� ��� ������ ������. */
user_pref("browser.slowStartup.notificationDisabled", true);

/* ��������� ����� URL � ��������� �������, ��������� � Windows 10, � ������������� ���������. */
user_pref("browser.usedOnWindows10", true);
user_pref("browser.usedOnWindows10.introURL", "");

/* ��������� �������������� ������ �� ������� � ��������. */
user_pref("browser.urlbar.autocomplete.enabled", false);

/* ��������� ���������� ��������� ����� �������� ��������.
�� ��������� 10.
0=��������� ����������.
-1=����� ��������� ����������� ���-�� ��������� �����. */
user_pref("browser.bookmarks.max_backups", 1);

/* ��������� ������� ���������. */
user_pref("general.smoothScroll", false);

/* ��������� ����� �������� AMO (https://addons.mozilla.org/ru/firefox/) ��� ����� � �������� ���������� �� ������� �������� ����������. */
user_pref("extensions.webservice.discoverURL", "");

/* ��������� ����� ���������� ������������������ ������������� HTML5-�����.
���������� � ����� � Show Statistics ������������ ���� ������. */
user_pref("media.video_stats.enabled", false);

/* ��������� ��������� �������� ������.
���������� ��������:
about:blank � �������� ������ ��������;
about:newtab � ����� ���������� ����� (�� �������������);
about:home � ��������� �������� (��� �� �������� �������� �� ���������);
http://site.com � �������� �� ���������� ����;
file:///file.name � �������� �� ��������� ���� � �������� txt, htm(l).
*/
user_pref("browser.startup.homepage", "about:blank");

/* ��������� ����������� ������� ���� (���� �������� > ��������� > ����������� > �������), ������ �������� � ����� ���-�������� � ������ ��������� �������.
���� ��� ������ ���� ��������, ������� ������� ������� ���� formhistory.sqlite �� ����� �������.
Firefox ������ ������� ���������� � �����, ���������� ����� ������ � ��������� name input-��������, ���� ���� ����� ��� ������, ��� �������� � ������, �� ������� ���� �����. ��-�� ����� � ���������� ��������� ������� ���� ������ ����� ����� ��������� ��������, ��������� �� ���������� ������, ���� � ���� ������� input ��� � ����� �� ��������� name (��������, ���������������� "email"). */
user_pref("browser.formfill.enable", false);
user_pref("browser.formfill.saveHttpsForms", false);

/* ��������� �������� ������������ �� ���� ����� �����, � �� ������ � ����� �����.
�� ��������� Firefox ���������� �������� ������������ ������ � ������������� ����� �����, ��������� ������������, � ������� ����� ��������� ����� ��������� �������� ������, ���� �������� � � ��� ������������ ����� �����.
��������:
0=��������� �������� ������������
1=�������� ������������ �������� � "�������" ����� �����
2=�������� ������������ �������� �� ���� ����� �����
*/
user_pref("layout.spellcheckDefault", 2);

/* �������� ����� ������� ��������� �������� � �������������.
��� ���������� ���������, �� ���� �������� ����� ��� ��� ������� ����� �������� ����� �� ������� � ������� ����������� � ���� �������� (����� ������� ��������� ��������). ����� ��������� ����� �0� �.�. ��� �������� ��� �������� ������ � ��� ����������� ����� ��������. */
user_pref("nglayout.initialpaint.delay", 0);

/* �������������� ��������� ���� �������� ������ ��� ��������� � �� ������� (�������� � Linux). */
user_pref("browser.urlbar.clickSelectsAll", true);

/* ��������� �������������� ���������� ��������� ��������. */
user_pref("browser.search.update", false);

/* ��������� ���������� ��� ��������. */
user_pref("lightweightThemes.update.enabled", false);

/* ������������ �������� �off� �������� �autocomplete� � ��������� ����� ���� (<input type=�text� autocomplete=�off�>). */
user_pref("signon.overrideAutocomplete", true);

/* ����������� ��� ����������� ���� ���������� ���������.
�������� ��� ������������� ��������� "�������� ��� ���������������" �� ������, ��� ������������ ������ ����������� ���������: "��������� ��� www.example.com ������ ������� Adobe Flash?" */
user_pref("privacy.popups.disable_from_plugins", 3);

/* ��������� ���������� ��� �������� ������� ������ � ����� ����������� �������, ��� ������ ������ URL.
� ������ ��������� ����������� ���������� ������������ �������������.
��� ���������� ������ ������ ������� ����� ��������� ������� ��������� �������� �-1�
*/
user_pref("browser.urlbar.maxRichResults", 0);

/* ��������� New Tab Page Tiles - ������������ ������ �������� ������ � ����� ����������� �������, ������� ���������� ������������ ����� � ��������� �������� ����� ������ �������. */
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);

/* ��������� ������ ��������� � ��������� ������, ��� ��������� �� �� ������������� ������ �������� ������.
�������� �������� ��� ��������� �� ������ ���� http://127.0.0.1:631, ������������ ��� ������������ ��������� ����� CUPS � ������ ��������� */
user_pref("network.proxy.no_proxies_on", "");

/* ��������� ��������� ��������� WebRTC, ������� ���������� �������� ��������� ��������� ��� ������������ �������� ������ IP-������� � ��� ��������� ����. � ����� ������ ��� �������� IP �� ������/Tor/VPN � NAT. ������ Firefox Hello.
��� ���������.��� �������� ���������� IP ����������� ��������: https://diafygi.github.io/webrtc-ips/
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.Identity.timeout", 1);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.video.h264_enabled", false);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.default_iceservers", "[]"); // ��� [{"url": "127.0.0.1"}]
user_pref("media.peerconnection.use_document_iceservers", false);

/* ��������� ������������ WebRTC �� ���� ����������� ����� loopback. */
user_pref("media.peerconnection.ice.force_interface", "lo");

/* ��������� ��������������� ����� ������������ � ������ � ����� ������ (����� �������� � ������ � ����� ���� �����), ����� ��� ����� ����� ��������� ������ ���� �� ����. ������ ����� ���������� ����� ����� ������. */
user_pref("signon.autofillForms", false);

/* ��������� Java. */
user_pref("security.enable_java", false);

/* ���������� ���������� �������� �����, ������������ � �������� �������� ���������. �� ��������� ������� �������� �� 10 ��������� �������� �������. */
user_pref("browser.sessionstore.max_tabs_undo", 25);

/* �������� ����������� ���� � ��������, ��������� ����������� ������� �� ��������� ������ ��� ���. */
user_pref("browser.showQuitWarning", false);

/* ��������� ����� ������� ����������� ������������ ��� �������������� ������.
��� �������� ������� ��������� �������� ���������� browser.sessionstore.restore_on_demand (������� �������) � browser.sessionstore.restore_pinned_tabs_on_demand (����������� �������) ������������� ��������� �������� false. */
user_pref("browser.sessionstore.max_concurrent_tabs", 0); // ���� ��������� ��������� �������� 0, �� ������� ����� �����������, ����� �� ��� ��������������.

/* ���������� ������ ��� ������� ��� �������������� ������ ����������� ���� ���� �������, � ��������� ������ ��� �������� �� ��. */
user_pref("browser.sessionstore.restore_on_demand", false); // ������� �������.
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", false); // ����������� �������.

/* ���������� "������ �" � �������� ������. */
user_pref("browser.urlbar.unifiedcomplete", false);

/* ������������� �������� � ������������� ����� ���������� ��������� �� ������� �������� � ���������� ������������ ����������� �������.
0 = ������������ ����������� ����������� ������� ��� ��������� �� ���� ��������� ����.
*/
user_pref("ui.submenuDelay", 0);

/* ������������� �������� � �������� � ���������� ���� ��������� �������� � �������.
������� �������� ����� ���������� ������� � ��������. */
user_pref("security.dialog_enable_delay", 0);

/* ������ ������ ����������� ��� (���������� ������ ��������� ��� ������� �� ����). ��������� Do Not Track. ��������� ����� ��� ����������. */
user_pref("privacy.donottrackheader.enabled", true);

/* ���������� ���� ��� �������� ������. */
user_pref("browser.download.useDownloadDir", false);

/* ���������� �������� �������� ��� �������� ��������� �������. */
user_pref("browser.tabs.closeWindowWithLastTab", false);

/* ��������� ����������� ������� ������ � �������� ������. */
user_pref("browser.urlbar.trimURLs", false); // ��������� ������ �������� http://

/* ���������� �������������� ��� ������ � about:config */
user_pref("general.warnOnAboutConfig", false);

/* ���������� �������������� � �������� ���� ��� ������ �� ��������. */
user_pref("browser.warnOnQuit", false);


/* �� �������� ������ ������ ��� ��������� ���� �� "�������� �����".
����������, ��� ����� ���������� ����� ��� ������� ������ �� ����.
��������� ��������:
�	true = ��� ������� ������ �� ����� �������� ��� � ��������, ������� ���������� ������.
�	false = ������ �� ���������� ��� ������� ������ �� �����.
*/
user_pref("layout.word_select.eat_space_to_next_word", false);

/* ���������� ���������������� HTML5-����� � �����. */
user_pref("media.autoplay.enabled", false);

/* ��������� Shared Workers. ��� ����� ����� ���������, ���� ����������� � ������ CDN ����������� ������� ��������� � ������ ������ �� �������� � ������������ �������, ��� ��� ����� Workers ����� ����� �������� (�.�. ������ � ������ ���� �����). */
user_pref("dom.workers.sharedWorkers.enabled", false);

/* ��������� ����������� � �������� canvas. */
user_pref("canvas.capturestream.enabled", false);

/* ��������� ������ ���������� ��� ������ � ����������� MIME �����, � ���������� ����� ����������� ��� ��������� � ���� �����. */
user_pref("browser.helperapps.alwaysask.force", true);

/* ���������� �������������� ��������� ���������� �������. ����� ����������� ������� ������� ����� ���������� ����������. */
user_pref("extensions.update.autoUpdateDefault", false);

/* ���������� ������������� �������� ���������� ������������� �������. */
user_pref("extensions.update.enabled", false);
user_pref("extensions.update.url", "");
user_pref("extensions.update.background.url", "");
user_pref("extensions.systemAddon.update.url", "");

/* ���������� �������������� � �������� ������. */
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill.typed", false);

/* ��������� �������� ����������. �� ��������� 100. 300 ����� ������ ��������� ����� ����������. */
user_pref("mousewheel.default.delta_multiplier_y", 300);

/* ���������� ��������� ��������� "Mozilla Firefox is free and open source software from the non-profit Mozilla Foundation." � ������� "Know your rights..." ��� �������� ������� ��� ������ ������� ��������. */
user_pref("browser.rights.3.shown", true);

/* ���������� ��������� � �������� �������� � ������������� �����. */
user_pref("full-screen-api.warning.timeout", 0);

/* ��������� ������������ ������, �� ������� �� ������ �������� �� ����������� ��������. ���������� ������� ������ ����� ��������� ��� ������, ������������ �� ������� ��������.
���� �������� ��� �����, �������, ���������� rel="prefetch", ������� ������������� ������������� � �������� ����� ��������� �������� ������� ��������. ����� ����� ��������� ��������� Link: <http://example.com>; rel=prefetch ��� ������� �� �� ����� ����� meta-���: <meta http-equiv="Link" content="<http://example.com>; rel=prefetch"> */
user_pref("network.prefetch-next", false);
// � ��������������� ��������� �� ������� ����. ����� ������� ��������� ��������������� ������ DNS ��� ���� ������ �� �������� ��������, ���� �� ������. ��� ����� �������� � ������ DNS-������� ��� ������ ����� ��������������� ������-������.
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
// � ��������������� ������� � ������. ������������ ��� ������������� ������ ������
user_pref("network.http.speculative-parallel-limit", 0);

/* ������ �������� JAR-������ ��������� �������� ��������� JAR-����� ������ ����������. */
user_pref("network.jar.block-remote-files", true);

/* ��������� ������ WebRTC � ������ P2P, �������� �� ������ ����� ������ ������� �������, ��� ������������� ������ IP-������� ���� ������� ����������� ����������. */
user_pref("media.peerconnection.ice.relay_only", true);

/* ��������� ������ WebRTC ������ �� ��������� ������� ����������, ���������� ���� ��
���������� ��������� ���������� IP ������������, ������������� VPN.
���� ��� �� �������� ������ � E10S */
//user_pref("media.peerconnection.ice.default_address_only", true);

/* ��������� ���������� � New Tab Page Tiles ������ ��������� Mozilla � ���� ���������� ������ �� ���. ����� ���������� ������� ������� directoryLinks.json
� about:cache -> <���������� �� ������� ���� cache2>, ����� ��� ����������� ������� �� ������������. */
user_pref("browser.newtabpage.directory.ping", "");
// Firefox �� ��������� ��� ����� �� ������ ������ � XHR �������� �������� � �������, ���� ��� ������.
user_pref("browser.newtabpage.directory.source", "data:application/json,{}");
user_pref("browser.newtabpage.directory.source",	 "data:text/plain,{}");
user_pref("browser.newtabpage.enhanced", false);
// ��������� �������������� � ������������� ������� ��� ������ �������� New Tab Page.
user_pref("browser.newtabpage.introShown", true);
// ��������� �������� ������� �������� �� ����� Mozilla (Sync, Hello, ������ ��� Android) � about:home
user_pref("browser.aboutHomeSnippets.updateUrl", "");

/* ��������� ��� HTTP-��������� Referer (� ����� DOM-�������� document.referrer), ����������� URL ��������, � ������� ������������ ������� �� ������ ���, �������� �� �������, �������� �������� ������� ��� �� ����������� ������� (��������, �����, �������, ������, etc). � ���������, ����� ������ ����� (� ��������� UserJS) ��������� �� �������, �������������� � ������� ����� (jQuery, reCAPTCHA, Analytics), ��������� ���� ����, ���������� ��������� Referer, ������ ���������� ������������� URL, ���� ���� ��� ��������� �� ��� �� �� ������ �����. ������������ ���������� ������� ��� ������ �� �����������, ������� ������� ��� ����� �� ���������. ������� ������� �������������� ��� ������ ������ RefControl, ������ � Firefox ���� � �������� ����������� ���������� ��������� ��� ���������� ����������, ������� ����� ���� ������������, ���� ��������� ������� ������ ������������. ���������� ����� �������� spoofSource � ��������� trimmingPolicy � 2, � ��������� �� ������� � ����� ��� ����� ������� �������� ��� ������� ������ ����� ���������� � Referer �� ����������� ������ ������ URL ����������� �� ��� ��������. PS: ����� ��� �������� � ������, ������������ �������. ��������� - Referer � ����� "r", �������� DOM - � �������� "r", ��������� Firefox ����� ����� - � ����� "r", ���� - � ��������. */
user_pref("network.http.referer.spoofSource", true); // "false=real referer, true=spoof referer (use target URI as referer)"
user_pref("network.http.referer.trimmingPolicy", 2); // "0=full URI, 1=scheme+host+port+path, 2=scheme+host+port"
user_pref("network.http.sendRefererHeader", 2); // "0=don't send any, 1=send only on clicks, 2=send on image requests as well"
/* ��������� ����������, ����� �������� Referer header (�.�. ���� ���� �� ������� ������� URI-������ ���� �������, � �������� ���������� ���� �� ������ ��� �� ������� ����������� �����������).
��������:
0=������� �� �������� HTTP referer ��� �������� ����������
1=�������� ������ ��� ������
2=�������� ��� ������ � ����������� (�������� �� ���������)
��������: ������ �� ������� Referer headers ����� ������� ��������� � ������ ��������� ������ (��������, ����� �� ������������ ��������, � �.�. � �����). */
user_pref("network.http.referer.XOriginPolicy", 0); // "0=always send, 1=send iff base domains match, 2=send iff hosts match"
user_pref("network.http.sendSecureXSiteReferrer", true); // false=��������� �������� ��������� HTTPS referer ��� �������������� ����������.


/* ��������� �������������� ������ ���������� ���������� ������� � ����������� �� �� ����. ��� ��������� ������������ � �������� ������ � New Tab Page Tiles � � Ctrl+Tab (browser.ctrlTab.previews). ��� ���������� New Tab Page Tiles � ��������� �������� ���� �����, ���������� ��� � �������������� ������� ����� ����� ��������� ������������� ������ ��� ��������� �� ������. ���� Tiles ���������, ������ ��� ����� �����������, ����� ������������ ��� ������� �� ���� �� ����� ���������� ������. ��������� ������� �� ����, ���� ���� ��� ��������� ��������. �������� ��� � �������� thumbnails, ������������� �� ������� ���� �������� ����, ���������� � about:cache.
��������� ���� ��������� ������ ��� ������������� ��������. */
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("pageThumbs.enabled", false);

/* ��������� ������� ������ ����� ����, ��������� ��� ������ � ��������. */
user_pref("browser.link.open_newwindow.restriction", 0);

/* ��������� <a ping>(����-��������), ������� ���������� ������ �� ���������� ���������� ������ (� ����� ��������) ��� ������� �� ������.
����-������� ��������� ������� ����� ����������� �������� ������������. */
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

/* ������ ������ ��������� ���������� �� ���������� ������ �����, ������� I2P � Tor. */
user_pref("network.security.ports.banned", "4444,9050,9051");

/* ��������� ���������� ����-����������� ������, ������� ��������� ������� uBlock � ���������������� ���������� � �������� ����� ����������� (�.�. ������� �� ������ �� Disconnect). */
user_pref("privacy.trackingprotection.enabled", false); // ��������� ����� �������� ������ ������.
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("browser.trackingprotection.updateURL", "");
user_pref("browser.trackingprotection.gethashURL", "");
user_pref("browser.polaris.enabled", false);
user_pref("privacy.trackingprotection.introURL", "");
user_pref("privacy.trackingprotection.introCount", 1);


/* ��������� File Handle API, ������� ������������ ��������� � Indexed DB ��� Device Storage � ������������� ������ � ����� �������������� �������� ���������. */
user_pref("dom.fileHandle.enabled", false);

/* ��������� Cache API (Cache Storage), �������������� �� ���� ��������� �� ���������� ������������, ���� ������� ����� ���������� ����������. ��� �������� ������ ������������ Service Workers, �� ����� ���� ������������ � ��� ��� (����� window.caches). ����� ����, ������ ���� ����� �� ������ ������������ ������ �� ����, �� � ������������ ������. � ������� �� DOM Storage, Cache Storage �� ��������� ��� Clear Recent History, � ��� ���������� �� ����� � Developer Tools ��� �� �������� about:cache. ����� ��������� ������ �������� ������� ��� ������������� ����� ������ � ���������� � �������� > ���������� (�� �� � about:permissions) > Maintain Offline Storage � �������� ��� �� (����� ����� � Indexed DB, � ������� �� ���� ������). ��������� Cache Storage � ����� �������, �� ������ ����: storage/default/<�����>/cache/ */
user_pref("dom.caches.enabled", false);

/* ��������� sendBeacon() - API ��� �������� ���������� ����� ��������� ��������. */
user_pref("beacon.enabled", false);

/* ��������� Network Information API, ������� ����� ������ ���������� � ���� ����������� � ���������. */
user_pref("dom.netinfo.enabled", false);

/* ��������� Social API � ������ ��� ���������� � �������. */
user_pref("social.enabled", false);
user_pref("social.remote-install.enabled", false);
user_pref("social.toast-notifications.enabled", false);
user_pref("social.directories", "");
user_pref("social.whitelist", "");
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.shareDirectory", "");

/* ��������� �������� ��������� H.264-������ �� Cisco (����� �������������� GStreamer). */
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

/* ��������� ������ ������������������ ������� ������ 15 ������. ��� ������ ���� ����� �������� �������� �������� ��������. ���������� ������������ � Add-on Manager � ����: �[Add-on Name] might be making [Firefox version] run slowly�. */
user_pref("browser.addon-watch.interval", -1);

/* ���������� Vibration API. ��������� ������������ ��������, ���� �� ���������� ���������� ����������. ���� ��� �������� �� ���� ����� �������� ��������. */
user_pref("dom.vibrator.enabled", false);


/* ��������� Media Source Extensions. ������ ��������� ������ �� YouTube. */
user_pref("media.mediasource.enabled", false);
user_pref("media.mediasource.mp4.enabled", false);
user_pref("media.mediasource.webm.enabled", false);
user_pref("media.mediasource.webm.audio.enabled", false);
user_pref("media.mediasource.format-reader", false);
user_pref("media.mediasource.format-reader.mp4", false);
user_pref("media.mediasource.format-reader.webm", false);


/* �������� (����������) ����������� (�������) ������ ����� ������� ������.
true - ��� ������������ �������� ��� ��� ������ ����� ������������ �� ��� (����������� ������) � ����������� ������ (����������� �� ������ �����). ��� �������� ����������� ����������� ������, �� �������� �������� �������������� ��������.
false - ������ �� �����������, �� � �������� ������� (������ ��� ������������-��������������, � �� ������).
*/
user_pref("config.trim_on_minimize", true);

/* ���������� ����������, �� �������� ����������� �������������. */
user_pref("dom.storage.default_quota", 0);

/* ����������� �� �������� �������� � ������� �������� ����� � �������� ����� ������. */
user_pref("browser.sessionstore.max_windows_undo", 0);


/* ��������� getUserMedia API, ������� ������������ ��� ������ ����� � ���������, ����������� � ��������� � screen sharing (������ ���������� ���������� � ������ ������). ������ Firefox Hello.
���������: https://mozilla.github.io/webrtc-landing/gum_test.html
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

/* ������ ��������� Network API, � ������� �������� ����� ���������� ��� ����������� � ���� � ��������� ���������� ������������ � ����� (��� ���� ��������� ��� ����������: LAN, Wifi, 3G � ��� �����). ������ ��������� ��������� ���� ��� ��������� ������ Firefox. */
user_pref("dom.network.enabled", false);

/* ��������� History API, ����������� ��������� � ������� back/forward ������� ��������, ��������� �� URL � ��������������� � ���� state objects � ������������� �������. ��������� ����������� ��� ������������ �������� (structuredCloneState � recovery.js), ���� �������� �������������� ������. ����� ������������ ����� �������� ������� � ��������������� ��������� ������� ��� �������� �� back/forward �� ����, ������� ������ ��������� ����������� ������ �� window.history.state.
������� ������������� ������ � ��������� ������� back/forward �������, ������� ��������� �� ����� ������ ������������ �� �������, � �� ����� ������ � ����� �� URL.
� ���������, ����������� maxStateObjectSize 0, �� �������� History API �������, ���������� - ��� ���� pushState � replaceState, ���� � null ������ state object, ����� ����������� ����������. */
user_pref("browser.history.allowPopState", false);
user_pref("browser.history.allowPushState", false);
user_pref("browser.history.allowReplaceState", false);
user_pref("browser.history.maxStateObjectSize", 0);

/*
/* ��������� Indexed DB API, ����������� �������� ������� ���������� � �� SQLite �� ���������� ������������. ����� Indexed DB ����� ����������� ��������� ����� DOM Storage. "IndexedDB is completely disabled in private browsing mode." ��������� ���  ����� �� ������� �� MDN, �����: https://mdn.github.io/to-do-notifications/index.html
� ������� ���� ������ ������� "Database initialised.", � ��������� - "Error loading database.", ���� ��������� "TypeError: db is undefined" � �������. ����� � ������� ���� ������������� Indexed DB ������ ����� ������� ����� Page - Info Permissions (�� �� � about:permissions) -> Maintain Offline Storage � �������� ��� ��. Block, ����� ��� � Ask, ������-�� �� �������� ��� ��������� ������. � about:permissions > All Sites, Block �������� - ��� ��� ������ ������ ������������ dom.indexedDB.enabled � false. ��������� Indexed DB � �������, �� ������ ����: storage/default/<�����>/idb/
������������� Indexed DB �������� � ���� �� ���������� ����������� � ��� ��������� ����� ������ ��� ������ � ������ ������. */
user_pref("dom.indexedDB.enabled", false); ������ Twitter.
user_pref("dom.indexedDB.experimental", false);

// ��������� �������������� � ��������� �������, ������������ ����� <meta http-equiv="refresh"> (��������� ����� HTTP 3xx �� ���������)
http://kb.mozillazine.org/Accessibility.blockautorefresh
user_pref("accessibility.blockautorefresh", true);

/* ��������� Service Worker API, ����������� ������ ��������� �������, ������� ����� ���������� ��������� ������������ ����������������� � ������� ������, ���� ���� � ������������ �� ������� �� ����� ������� ����� �����.
����� ���� ���������� ServiceWorker ��� ��������� push-����������� � �������� � �������� ���������� ��������.
�������:
https://github.com/slightlyoff/ServiceWorker
https://serviceworke.rs/
���������� � ������� ������������� ������� Service Workers ����� ����� about:serviceworkers */
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.serviceWorkers.interception.enabled", false);
user_pref("dom.serviceWorkers.interception.opaque.enabled", false);
user_pref("dom.serviceWorkers.openWindow.enabled", false);
user_pref("dom.serviceWorkers.testUpdateOverOneDay", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

/* ��������� ������������� ��������� ������� ������� (��������� > ���������� > ������ � ����� > �������������). ����� �������������� ��������� ������������� � ���������� �������� (��������� > ���������� >  ������ � �����). ������������� �������������� ����� ������ ������������� �������: https://www.browserleaks.com/fonts
user_pref("browser.display.use_document_fonts", 0);

/* css ������� @font-face ��������� ���������� ��������� �������, � ����� ��������� ����������� ����� �� ��������� ������������.

���������� ����������� �������� ������������ �� ��������/�� �������� �������. �� �������� ������� �������� �����: 

��������: ����������/��������� gfx.downloadable_fonts.enabled �� ����� ������� ��������, ��� ��� � �� ����������, � �� ��������� ����� �������� ��������� ������ � ������������. ���������� �� �� ���� ���������� � �� ��������.

browser.display.use_document_fonts
0: Never use document's fonts
1: Allow documents to specify fonts to use
2: Always use document's fonts (deprecated)

gfx.downloadable_fonts.enabled
gfx.downloadable_fonts.fallback_delay
gfx.downloadable_fonts.sanitize
*/

/* ���������� �������� ������� �������. ��������� ����������� ������� ������. ������ ������ uBlock. � �������� �� �������� ������ ������ ����� �������� ������� "no-remote-fonts: * true" (��� �������) � My rules ������ uBlock. */
user_pref("gfx.downloadable_fonts.enabled", false);
user_pref("gfx.downloadable_fonts.woff2.enabled", false);

/* ���������� cookies ��� ��������� ������.
��������� ��������:
0 = ��� cookies ���������. �������� �� ���������.
3 = third-party cookies ��������� ������ ���� ���� ���� ������ ���� � ����������� ��������� (����������).
2 = ��������� ��������� ����� cookies (� ��� ����� - �� ��������� ������)
1 = ��������� cookies ������ � ���������� ������ (�� �������������!)
���� ����������� �������� 1 (��������� cookies ������ � ���������� ������), �� ���������� �������� ����� ������� cookies ��� �������� ��������:
network.cookie.lifetimePolicy = 2 // �������� cookies ������ �� ����� ������.
// �������� Cookies �� ����� �����.
network.cookie.lifetime.days = 1
Determines the number of days to keep cookies if network.cookie.lifetimePolicy is 3. Default value is 90.
*/
//user_pref("network.cookie.cookieBehavior", 0); // �������� �� ���������.
���������� ������ ������ cookies (� ��� ����� - �� ��������� ������):
network.cookie.cookieBehavior=2 (�������������)
http://kb.mozillazine.org/Network.cookie.cookieBehavior
����� cookie ������ � ����������� (�������������) �����. Cookie �� ��������� (third-party) �������� ����� �������������:

network.cookie.cookieBehavior=1 (�� �������������)
����������: � ��������� ������ (=1) ���������� ������������ ����� ����������� ����������� cookies ��� �������� ��������:
network.cookie.lifetimePolicy=2
http://kb.mozillazine.org/Network.cookie.lifetimePolicy

/* ����� RAM-���� (��� �������� ������� ��������� � ������) � ����������. */
user_pref("browser.cache.memory.capacity", 524288);

/* ������������� ���������� ���-�� ����������� ������, ��������� ��� ��� ��������.
browser.cache.memory.capacity
-1 - ������ ������������ ������������� � ��������� �� ����� ����������� ������;
0 - ����������� ������ ��� ���� �� ������������; (�� �������������; ��. ���������� ����);
����������: ������������� ������ (��������� �������� "0") �� �������� ���� ��� � ����������� ������, ��� � �� ���������� ����� �������� � ���������
n (����� �����) - ������������ ������ ���� ��������������� � n ��������. ���������� ��������, ���������� �� ���.

����. ��� ������ ���� ����� ��������� ���������� ��������� browser.cache.memory.enable �������� TRUE

// ������������ ����� ������ ��������.
user_pref("browser.cache.memory.max_entry_size", 52428);

browser.cache.memory.max_entry_size => -1
��� ���� ����� ����� ��������� �������� ���, ����� Firefox ������-�� ������ ������ � ���� ��� �� ���������� RAM-����.
user_pref("browser.cache.disk.enable", false); // true = ������������ �������� ���. False = �� ������������.
user_pref("browser.cache.disk.capacity", 0); // ������ ��������� ������������ ��� ��� �������� ( � ���������� ). ��� ������ ���� ����� ��������� ���������� ��������� browser.cache.disk.enable �������� true.
user_pref("browser.cache.disk_cache_ssl", false); // ���������� ���������� ���������� �������� (HTTPS/SSL) ��� ���. true � ���������. false � ���������. ��� ������ ���� ����� ��������� ���������� ��������� browser.cache.disk.enable �������� true.

// ������ ���������� �����������. ���������� ����� �������� ��������, ����� ������, ������� �� ������������ ���� ����. ���� ������� - ����� ������ ����� ����� �� ����, ��� ��������� �� �������. ��� ����� � �������� ������������ ������� ������ � ���� �� ��������� ���������� If-Modified-Since � If-None-Match, ������� ����� ����� ���� ������������ � ��� ������� �������� (������� ������������� ���� � ���������� Last-Modified �/��� ETag).
user_pref("network.http.use-cache", false);
user_pref("browser.cache.memory.enable", false); // ������������� ���� � ����������� ������. true = ������������ ��� � ����������� ������. false = �� ������������.
user_pref("browser.cache.memory.capacity", 0);
user_pref("media.cache_size", 0);
user_pref("image.cache.size", 0);

/* ���������� ��������� �����������. ���������� ����� �������� ��������, ����� ������, ������� �� ������������ ���� ����. ���� ������� - ����� ������ ����� ����� �� ����, ��� ��������� �� �������. ��� ����� � �������� ������������ ������� ������ � ���� �� ��������� ���������� If-Modified-Since � If-None-Match, ������� ����� ����� ���� ������������ � ��� ������� �������� (������� ������������� ���� � ���������� Last-Modified �/��� ETag).
user_pref("browser.cache.disk.enable", false); // true = ������������ �������� ���. false = �� ������������.
user_pref("browser.cache.disk.capacity", 0); // ������ ������� ������������ ��� ��� �������� (� ����������). ��� ������ ���� ����� ��������� ���������� ��������� browser.cache.disk.enable �������� true.
user_pref("browser.cache.disk.smart_size.enabled", false); ���������� ��������������� ���������� �������� �����
user_pref("browser.cache.disk_cache_ssl", false); // ���������� ���������� ���������� �������� (HTTPS/SSL) ��� ���. true � ���������. false � ���������. ��� ������ ���� ����� ��������� ���������� ��������� browser.cache.disk.enable �������� true.

/* ��������� ���� � ����� cache � ����� ��������.

����������: ���� ������������� ����� �������: X:\\����� 1\\����� 2\\

����������: ��� ������ ���� ����� ��������� ���������� ��������� browser.cache.disk.enable �������� true.
*/
browser.cache.disk.parent_directory


/* ��������� �������� ���, ���������� �� �����. � ���� �� �������� �� ����������� ��������� ETag.
E-TAGS FINGERPRINTING
E-Tag - ����� HTTP-���������: "������������" �������������, �������������� �������� ����������� ���-���� ��������. ���� ���������� �������� ���������� �� ����� ��������� � ���-�������, E-Tag �������� �� �����. ���� �������� ����� ����������� ����� ��� ������������� "����������� ����������" �������� � ���� � �������������� cookie. ��� �������������� ������������� ��������� ��������� ����������� ��������-������ �� HDD �(!) � RAM.

���� �� ��� �� ����������� ����������� ������ � RAM:

�) �� ���������� ��������� ����������� ������ ��������� (�������� - ������ ��������� ������� � Firefox): ��� �������� � ��������� �������� ������ � swap-������;

�) ���� �������������� ���� ������� � �������� ������.
����������: ������ ����� �������� ������ � browser.cache.disk.smart_size.enabled = false
*/
user_pref("browser.cache.disk.capacity", 0);


/* ������������ �������� � DNS-�������� ��� ��������� �������� � ������ � �������� ���� .onion
������� ������� Tor �� ����� �������� ��� DNS, � ��� ��������� ������������ ��������� DNS-������� ���������� � ���, ��� ������������ ������� �� .onion-������. */
network.dns.blockDotOnion


/* �������� ���������� ������� ��� � ������.
�	true = �������� ����� ������������
�	false = �������� ������������ �� �����
*/
browser.panorama.animate_zoom

/* ���������� ��� ��������� �������� ����� ����� ������������ ���� �������� � ����� �������. ����� ����� ������� ������� ������� ���� �� �������� (��� Ctrl+���).
�	true = ����� ������� ��������� � ����
�	false = ����� ����������� ������������ �� ����� �������
*/
browser.tabs.loadBookmarksInBackground

/* ����������, ��� ����� ����������� �������, ����������� ������ ����, � ����� ������ �� ������� ����������.
�	true = �������� ������� � ����
�	false = ������������� �� ����������� �������
*/
browser.tabs.loadDivertedInBackground


/* ����������� ������� (������ ��� Mac OS)
true=������������ ��������� ��������� Mac OS
false=���������� ��� ������
*/
gfx.use_text_smoothing_setting

/* ���������� SPDY. �������� SPDY ������������ ��� ���������� �������� �� ����� ���������� � ������ ��������������� ������� ����� ������������� � ��������.
SPDY ����� ������� ������������� � ������ ������������ ������ �������� ����������.

������������ SPDY. SPDY ��������, ������������� � �������� Google ��� ��������������� ���-��������. SPDY ������������ ���-������ � ����� ���������� ������� ��� �������� ����� ����������, ������������ � ��������� ����������� �����������. ����� ��������� ���, ��������:
*/
network.http.spdy.allow-push=false
media.http.spdy.enabled=false
network.http.spdy.enabled.deps=false

user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.v3-1", false);
user_pref("network.http.spdy.enabled.http2", false);
user_pref("network.http.spdy.enabled.http2draft", false);

��������� �� �������� ������ � ������� ������������ ����? 
(���������� ����� �������� ���������� online ����������, ��������)
// �� ���� ��������� ������������� � ����������� ��������� � ������������ ����. ������ Google Docs.
user_pref("dom.event.contextmenu.enabled", true);

��������� �� �������� ������ � ������ ������? (�������� ������������� �����, ����������� �����������) 
// ��������� Clipboard Events, ������� ��������� ��������� ��������, ����� �� ����� ���� ����������� � �����
// ������, ��������� �������������, ������������� ������� �� ������ � ����������� �� ��� ������ �������
// (�������� ��������� ����������� � ������ ������ �������� � ��������� ����� ��� ����).
// ������ ����������� ������ �� ��������� Stylish.
// https://w3c.github.io/clipboard-apis/#clipboard-event-interfaces
GitHub (������ ����������� ������ �� ���������).
user_pref("dom.event.clipboardevents.enabled", true);

��������� �� �������� �������� ��� ����� � ������ ������? 
(������ ������ flash-����� ���������� ��� �������, ��� ��������� �� �����) 
user_pref("dom.disable_location.hostname.set", true);

// ��������� ������� beforeunload, �� ������� ��������� �������� ������ ��������� �����: "��� �������� ������ ��� �����������, ��� �� ������ ����."
user_pref("dom.disable_beforeunload", true);

/* ��������� ������������� ����������� ����� GStreamer. */
user_pref("media.gstreamer.enabled", false);

// ����� ����, �� ������ ������� ������� ����������� � Firefox, �������������� Tor Browser ��� ����������� ������ ������������, � ���������� ������� ��������� ������ ����� �����������. ��� ��������� ������������ ������������ ����������� �������� ��� ����������� ���������� ���������� ������������ ����� �������������� ������������ ������ ��� ������ ������ ������������.
������ ������� ������������� ���������� opentype � ���� ����������� �������.
https://wiki.mozilla.org/SVGOpenTypeFonts
user_pref("gfx.font_rendering.opentype_svg.enabled", false);

������ ������� - ���������� WebAudio � asm.js.
user_pref("javascript.options.ion", false);
user_pref("javascript.options.asmjs", false);

��������� media.webaudio.enabled ������ �� ����������, ������� ������ ���.
user_pref("noscript.forbidMedia", true);

������ ������� - ���������� JIT-�����������, SVG � ��������� JavaScript ������ ��� HTTPS.
user_pref("javascript.options.baselinejit", false);
user_pref("gfx.font_rendering.graphite.enabled", false);

��������� ������� - ���������� ������� �������, JavaScript � ���� �������.

���������� ������� �������. �� ����� ���� �� ��������:
user_pref("gfx.downloadable_fonts.enabled", false);

��������� ��������� ��������������� ��������/�������.
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

// ��������� ������� �� URL ��� ������� �� ��������������� �������� ����������:
// Preferences -> Search -> Add more search engines...
user_pref("browser.search.searchEnginesURL", "");
// Edit Control -> Context Menu -> Languages -> Add dictionaries...
user_pref("browser.dictionaries.download.url", "");
// Customize -> Themes -> Get More Themes
user_pref("lightweightThemes.getMoreURL", "");

// ��������� ������������ � �������� �� ���������� ����� � ����� ��� �������� �� ������ ������
// �� .webm/.mp3/etc. ������ ������������ ��������� ���������� �����.
user_pref("media.play-stand-alone", false);

// ��������� Web Video Text Tracks (�������� ��� ���� video).
user_pref("media.webvtt.enabled", false);

// ��������� ������� ��������� �������� ���� ��������.
// http://kb.mozillazine.org/Dom.popup_maximum
user_pref("dom.popup_maximum", 5);
user_pref("dom.disable_open_during_load", true); ������������ ����������� ���� � ����� �������������� �� �� ������������: browser.popups.showPopupBlocker=true
user_pref("dom.allow_scripts_to_close_windows", false);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_flip", true);
user_pref("dom.disable_window_status_change", true);

// ��������� �������� �� ���� �������� ��������� ������ ������������ ����������� �������.
// https://wiki.mozilla.org/Platform/GFX/LayerScope
user_pref("gfx.layerscope.enabled", false);
user_pref("gfx.layerscope.port", 100000);

// ��������� UI-��� �� ������������ Australis, Hello � �.�. ��� �������� ������ �� UITour.onPageEvent() � �� ��������� �� ��� �� Reader View, ������� ���������� �������� ����� UITour.onLocationChange().
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("browser.uitour.themeOrigin", "");

// ��������� ���������� ����� ������� ����� � ����������� ����������� ���������� ����������� �������������� � ��������� � ���� ���������� � ����������� ������ ������� Wi-Fi.
user_pref("geo.enabled", false);
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("geo.wifi.scan", false);
user_pref("geo.cell.scan", false);
user_pref("geo.wifi.timeToWaitBeforeSending", 630720000);

// ��������� ���������� ��� ���������� ������������ �������� ������. ���������� ������������� ���� ���, ����� ���� ��� ������ ���������� � browser.search.countryCode � ���� ������ "US", "RU", etc. ��� �� ����� �������������, ���� ��� ������ ��� � browser.search.countryCode ��� ���� ������ ����������� ��� ��� URL.
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");
user_pref("browser.search.geoip.timeout", 0);
user_pref("browser.search.geoip.url", "");

// ��� ��������� �� ��������� XHR ����������, � ������ ���������� ������������ ��������.
user_pref("browser.search.geoSpecificDefaults", false);
// ����� ������� ������ � browser.search.geoip.url.
user_pref("browser.search.geoSpecificDefaults.url", "");


��������������
����� ������ �����������, ��� ������� �� ��������� ������ ����������� �������������� �� ������ ������������.
��������� ���� �� ������������ ��������� ����� �� ��������� ��������:

user_pref("gfx.direct2d.disabled",		true);


the default in Firefox for Linux is to use system proxy settings.
�� ��������� � Firefox ��� Linux �������� ������������� ��������� �������� ������-�������.
We change it to direct connection
//user_pref("network.proxy.type", 0);


http://asmjs.org/
user_pref("javascript.options.asmjs",		false);

https://wiki.mozilla.org/SVGOpenTypeFonts
the iSEC Partners Report recommends to disable this
user_pref("gfx.font_rendering.opentype_svg.enabled",		false);

https://feeding.cloud.geek.nz/posts/tweaking-cookies-for-privacy-in-firefox/

Always use private browsing
user_pref("browser.privatebrowsing.autostart",		true);

/* ��������� �������������� � �������� ����� � ������������� �����. */
full-screen-api.warning.timeout -> 0

���������� ������������� ������� ����������� Firefox Sync:
services.sync.prefs.sync.signon.rememberSignons=false

���������� �������������� ���-����: ��������� ������� �� �������� ��������� �������� � ������ ������, ��������� ����� � ��������� ���-�����. ����� �� ������� ������ � ����� ���-������� (��������, � ��������� ������), ��� ��������� ������ Firefox ��������� ����������� ��������. ����� ��������� �������� � ����������� ������, ����������:

browser.formfill.enable=false
browser.formfill.expire_days=0
browser.formfill.saveHttpsForms=false
���������� ������������� �������������� ���� ����������� Firefox Sync

services.sync.prefs.sync.browser.formfill.enable=false

������ OffscreenCanvas. ���� �������� ������������ ����������� ���������� ��������� ����� WebGL � ��������� ������. ������ WebGL � ��������� ������ ������������ � ������� API OffscreenCanvas, ������������ � ������� Workers, ��������������� �������� ��� �������� ���������� ���������� JavaScript-�������� (���� ��� ��� �������� ����������!) ��� ���������� ����������:

gfx.offscreencanvas.enabled=false (FF 44 � ����)


CACHE
��������: ���� �� ������������ Firefox ��� Android ��� iOS, �� ��������� ���������, ����������� � ������ �������, �������� ���� �� ����� ���������� ��� ������������ (> 1 ��) ���������� ����������� ������ (RAM)!

���������� ������ �����������:

���������� ������ ����������� ������ - �� HDD � � RAM (� ��� ����� - ����������� �� ���������� �����������):

network.http.use-cache=false  (������� � FF 45, ��� ����� ��������� ����� ������������� ��� ��������)
http://kb.mozillazine.org/Network.http.use-cache

����������� � RAM:

��������: ���������� ����������� � ����������� ������ ����� �������� � ������������ �������� �� "�������� ����������", ����������� ��� ������ E-Tag!

���������� �������� ���� � ����������� ������ (� ��� ����� � ������, ���������� �� ����������� SSL-�����������):

browser.cache.memory.enable=true
http://kb.mozillazine.org/Browser.cache.memory.enable

��������: ����������� ������ � RAM (browser.cache.memory.enable=true) �� ����� ��������, ���� ����������� ��������� ��������� (network.http.use-cache=false)

����������� ���������� ����������� ������, ���������� ��� ��� (� ����������� �� ������ ������ RAM):

browser.cache.memory.capacity=-1 (�������������� �����������; �������������)
���������� ��������:

0 - ����������� ������ �� ������������ (�� �������������; ��. ���������� ����);

n (����� �������� ��������) - ���������� ��������, ���������� �� ���.

����������: ������� browser.cache.memory.enable=true

http://kb.mozillazine.org/Browser.cache.memory.capacity

���������� ����������. Firefox ����������� ����������� ���������� �������� ��������� (������ ���������������). ��� ���� ������������ ��������, ���������� �� �������������� ������� ������������ �������, ����� Wi-Fi, ���������� � ��������-����������, � ����� �������� IP-�����.
browser.geolocation.warning.infoURL=

���������� ��������������� ��� ������ (�������������� �������� ������, ����������� � ���� ������, �� ��������� ���� - ��� ������ ������������� �� ������� ������������). ��� ������� ������������� �������������:

browser.search.suggest.enabled=false
http://kb.mozillazine.org/Browser.search.suggest.enabled

���������� ������������������� �������� (GeoIP) ��� ������ � ���������� ���������. Firefox ����������� ����������� ���������� �������� ��������� (������ ���������������). ��� ���� ������������ ��������, ���������� �� �������������� ������� ������������ �������, ����� Wi-Fi, ���������� � ��������-����������, � ����� �������� IP-�����. ����� ����, ����������������� ������ ���������� �� ������� Google. ���������� ����������:

browser.search.geoSpecificDefaults=false
browser.search.geoip.url=false (��������� ����� ������������� ��� ��������)
browser.search.countryCode=US (��������� ����� ������������� ��� ��������)
browser.search.region=US (��������� ����� ������������� ��� ��������)


���������� ����������� "���������������� ����������". Firefox ����������� ��������� ���������� � ����, ��������� � ������� Mozilla � ��������� ��� ��� ������� ���������������� ����������. ����������:

extensions.getAddons.recommended.url=
extensions.getAddons.getWithPerformance.url=
extensions.webservice.discoverURL=
http://kb.mozillazine.org/Extensions.getAddons.recommended.url

���������� ���������� ������ ���������� ������ � ������ "��������� ���������":

browser.download.manager.addToRecentDocs=false
https://developer.mozilla.org/en-US/docs/Download_Manager_preferences

http://kb.mozillazine.org/Browser.download.manager.addToRecentDocs

������ �� �������� ������������ ����� ������ ��� �� �������� (*.jar, *.zip, etc.)

Mozilla ������������ jar: - ��������, ������� ��������� �������� "��������" ��������� ����� �� jar-�������. �� ��������/���������� ����� �������� � ��������� � ������������. ����������:

network.jar.open-unsafe-types=false
http://kb.mozillazine.org/Network.jar.open-unsafe-types

�Do Not Track� - ��������, ������� �������� �������� ������ � ���, ��� ������������ �������� �� ������, ����� ���������� �� ������� ����������� ��� ����������, ��������� ��������� � ������������� �������. �������� ������������� �������� ����� ��������, �Do Not Track� - ���� �� ����� ����������� ���������� �������, ��������� �������� "������� � ��������������" �� � ���� �� ��������� ���������� �������� ������. ���������� ����������:

privacy.donottrackheader.enabled=false
privacy.donottrackheader.value=1
http://kb.mozillazine.org/Privacy.donottrackheader.enabled

http://kb.mozillazine.org/Privacy.donottrackheader.value

���������� �������� ������ �������� ������ � ��������� trackingprotection. Firefox ��������� � ����� Mozilla ������ "��������" ������ � �������� ����������� ��, ���� ������������ �������� � ������ "Private Browsing". ��� ����������� ����������� ������ � ������������� ����� �������� ���� ���������������� ������������, � ��������� - ������ ���������� ������. ���� �������� ���� ������� ��������� (�������� ����� ������������� ������� �Do Not Track�):
privacy.trackingprotection.enabled=false
browser.trackingprotection.gethashURL=
browser.trackingprotection.updateURL=
https://developer.mozilla.org/en-US/Firefox/Privacy/Tracking_Protection

������������ Firefox Discover Apps (Firefox Marketplace):
browser.apps.URL=
dom.mozApps.signed_apps_installable_from=

���������� ���������� ������� Graphite: gfx.font_rendering.graphite.enabled=false

http://kb.mozillazine.org/Network.proxy.type



HSTS
������ ������������ � ������� ���������� HSTS. ��� ������� �������� �� ��������� � �� ����� ���������� �������� ��� �� ������������. �������� HSTS ��������� �������� ���������� ����� �������� � ���������, ������������� ��������� ��������� � ������ �� ��������� HTTPS, � ������������ ������, ��������� � ���������� ������ ������ (downgrade attack). ������ ���������� HSTS ���������� ��������� � ������� �.�. supercookie ("����������� cookie") � ������ �������������� ��������� ������������ ���������������� ����������. Firefox ��������� ������ HSTS � ��������� �����, ������������� � ����� ������� ��������: SiteSecurityServiceState.txt
��� �������� "�������� ���������" ������ �������� - ��������� �������� ������ � �������� �� �������������; ��� ������� ���������.

��� �������������� ������������:
������� �������.
������� ���� SiteSecurityServiceState.txt � ������� � �� ��� ������.
��������� � ������� ����.
������� ���� ��������� ������ ��� ������:
�������� (������ � Linux): chmod 400 SiteSecurityServiceState.txt


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

/* ��������� Offline App Cache (���������� ���).
���� ����� ���������� (http://appcache.offline.technology/demo/index.html) �������� �������������, �������� � �������� ������ about:cache > appcache � ����� ���������. */
user_pref("browser.cache.offline.enable", false);
user_pref("browser.cache.offline.capacity", 0);
/* ������ ���������� �� ������������� ���������� ��� ����������� Offline App Cache, �� ��� ����� ����� ����������, ���� ��� �� ��������� ���� ����������: */
user_pref("browser.offline-apps.notify", false);
/* ��� ��������� ���� ����� ���, ����� � ���� ������ �� ��������� ����� permission "offline-app", � ��� ������� ��������������� Offline App Cache, ��� ����� ���������� � ������ ����������� ���-���������� � ������ ������������� (���� �������� > ��������� > �������������� > ����), ���� � �� ������ ������ ������� � ����������� ����. */
user_pref("offline-apps.allow_by_default", false);

/* ��������� ��������� ��������� ��������� (resource://app/defaults/permissions) � Permission Manager. ����� ������� ���� ������� install ��� AMO, ��-�� ���� ������� � AMO > Themes (�� ���������� JS) ��������� � ��������� ���� �� mouseover, ��� ������������� ���������. ��� � ��� ������ ���� ������� remote-troubleshooting, ����������� �������� �� ������, ������� �� ����� (support.mozilla.org � input.mozilla.org), ������ ����� ����������, ������������� � about:support, ����� ������������ ������� �� ��� ����� (�� ���������� JS). ������ �������� remote-troubleshooting, � ������� �� install, �� ����� ����� UI �������� (Page Info > Permissions). �������������� ���� �������� � ������, ����� ������ ���������� ��������, ����� ����� (https://hg.mozilla.org/releases/mozilla-esr38/raw-file/569b611715e0/browser/base/content/test/general/test_remoteTroubleshoot.html), ����� hg.mozilla.org ������� remote-troubleshooting ����� ���������� ���� ��������� ������ (data:text/plain,host%09remote-troubleshooting%091%09hg.mozilla.org) � ����������� ��������.
���������� ��������� ��������� �� ���������� ������ ������ ��� ������������� ��������. */
user_pref("permissions.manager.defaultsUrl", "");

/* ���� ������ SOCKS5-������, ������ DNS-������� ����� ����, � �� �������� �� ������ IP.
�������, �������� ��� ������ � TOR, ����� ������ ��������� � DNS ����������. */

�������� DNS-�������� �� ��������� ������ ��� �������������� �� ������ ��� �������� ���-������:
��������: ������ ��������� ��������� ������(!) ���� �� ��������� ����� ��������� ������; ��������, ��� ������������� "����������" �������������:

true - ������� ������������ ����� DNS �� ��������� �������;
false - ���������� ����� DNS �� localhost (��� �������, �������������� ������ ��������� DNS �� ��������-����������).

user_pref("network.proxy.socks_remote_dns", true);

/* ���������� �������, ������� �������� � ������ ��� � ���� DOM ��� �������� �������� �� back/forward. ������� ������� ��� ���������� �������� ����������� ��� ������������� � ������������� � ���� ��� ����, ����� �������� (���������) ������������� ��������� �������� � ������� ��������, �� ������� �� ������ �������� ���������. �� ��������� ������� ��������� �������� � ������ 5 ��������� ������� (��-��������� ����� �������� -1, ������� ���� ���������� ������ ����������� ������ �� ���������� ������ � �����������) �������� � ������� �������, ��� �������� � �������� �������� ������. ���������� ������ ����������� ������.
// ����� ������� ��������� ����������� ������.
user_pref("memory.free_dirty_pages", true);

� ����������� �� ������ ������ ����������� ��������� ��������:


������		��������
32 MB	0
64 MB	1
128 MB	2
256 MB	3
512 MB	5
1 GB	8
2 GB	8
4 GB	8

��������� ������ ����������� �������������� ������ ������� ������� �����
��������� ��� ���������� � 0, ��� ����� � ������ �� ����� ����������� ��������.
����������� ���������� ������� ���������� �������, ������� ������ �������� � ������ � �� ����� ����������� ������. �������� ������ ������ "�����" � "������". ��� ����� ���������� �� ������� ������, ��������� ������������ � ����������� ������ (RAM). �������� "-1" ("����� ����") ������������� ���������� ���������� ������� � ������� �� ������ ������� RAM:

browser.sessionhistory.max_total_viewers=-1 (�� ���������; �������������)

*/
user_pref("browser.sessionhistory.max_total_viewers", 2);

