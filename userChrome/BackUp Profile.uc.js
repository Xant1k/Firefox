// ==UserScript==
// @name           BackUp Profile.uc.js
// @description    Button for backup profile.
// @charset        UTF-8
// @author         defpt
// @version        v2014.07.27
/*===Instructions=====
	Указать абсолютный путь для: 7-Zip, Firefox и папки с архивом бэкапа.
	Соответственно строки: ToolPath, YourFF, ArchivePath
	В случае использования ярлыка для запуска программы необходимо в YourFF заменить расширение .exe на .lnk (расширение ярлыков).
*/
(function () {
	// Setting 7-Zip program path
	var ToolPath = 'C:\\"Program Files"\\7-Zip\\7z.exe';
	// Set the path to the backup storage
	var ArchivePath = 'C:\\Users\\XXL\\Downloads\\';
	// Setting Firefox program path
	var YourFF = '"C:\\Users\\XXL\\Downloads\\Firefox\\firefox.exe"';
	//var YourFF = '""C:\Program Files\\firefox\\firefox.exe""';
	CustomizableUI.createWidget({
		id : "Backup-button",
		defaultArea : CustomizableUI.AREA_NAVBAR,
		label : "Backup Configuration",
		tooltiptext : "Back up your current configuration",
		onClick : function () {
			var ProfilePath = FileUtils.getFile('ProfD',['']).path;
			var localnow = new Date().toLocaleFormat("%Y%m%d");
			var ArchiveName = ArchivePath + 'Profiles_' + localnow + '.7z';
			var BatText = '\
@echo off\n\
taskkill /im firefox.exe\n\
ping -n 3 127.1>nul\n\
cd /d %ProfilePath%\n\
%ToolPath% u -up1q3r2x2y2z2w2 %ArchiveName% * -x!bookmarkbackups -x!*cache* -x!crashes -x!fftmp -x!*healthreport* -x!minidumps -x!safebrowsing -x!*webapps* -x!saved-telemetry-pings -x!*thumbnails* -x!*session* -x!*Telemetry* -x!*hotfix* -x!*.sqlite-shm -x!*.sqlite-wal -x!*.bak -x!parent.lock -x!blocklist.xml -x!*content* -x!directoryLinks.json -x!mimeTypes.rdf -x!compatibility.ini -x!formhistory.sqlite\n\
start "" %YourFF%\n\
			';
			BatText = BatText.replace('%ToolPath%', ToolPath)
								.replace('%ArchiveName%', ArchiveName)
								.replace('%YourFF%', YourFF)
								.replace('%ProfilePath%', ProfilePath);
			
			runNative(createTempFile(BatText, "BackupProfiles.bat"),[]);
			
			function runNative(exePath, args, blocking) {
				if (typeof blocking == 'undefined') blocking = false;
				var exeFile = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
				exeFile.initWithPath(exePath);
				if (exeFile.exists()) {
					var proc = Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
					proc.init(exeFile);
					proc["runw" in proc ? "runw" : "run"](blocking, args, args.length);
					return 0;
				} else {
					return -1;
				}
			}
			function createTempFile(data, filename, charset) {
				var file = Cc["@mozilla.org/file/directory_service;1"].getService(Ci.nsIProperties).get("TmpD", Ci.nsIFile);
				file.append(filename);
				file.createUnique(Ci.nsIFile.NORMAL_FILE_TYPE, FileUtils.PERMS_FILE);

				var foStream = Cc["@mozilla.org/network/file-output-stream;1"].createInstance(Ci.nsIFileOutputStream);
				foStream.init(file, 0x02 | 0x08 | 0x20, 0700, 0);
				var converter = Cc["@mozilla.org/intl/converter-output-stream;1"].createInstance(Ci.nsIConverterOutputStream);
				converter.init(foStream, charset || "gbk", 0, "?".charCodeAt(0));
				converter.writeString(data);
				converter.close();

				return file.path;
			}
		}
	});

	var cssStr = '@-moz-document url("chrome://browser/content/browser.xul"){'
		 + '#Backup-button .toolbarbutton-icon {'
		 + 'list-style-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHQSURBVFhH7VbhSsJgFPURgpCMZU2dojk1ExtGZdO2cqmrF+gNgv4F/nFB9iuxN7Yd/S5sy41900WBBw58997jvWfb3TCxhRfPr2/zOMnG+GM0+ZrHxf9hIA78PwOtjv4hHlfHWflknK/UrZvBYIr8TirVRqOiLGuIqTERuVWgemgDzqZE5PO1hoWzbpoLQ14NiLwXVON+BPRDRevNEOcqtYWBUr1pUb2lahM6gzh7QTUuA9f94czbVDWMKWKpejpGjHO33/+ks1PrBNVCG1D13tOqhkq7O0EOu4GYNKu0TlA90g4U7KtVjeUSSvZg5BqXbddtBxH7gTRrL2GuvNyBO/PRtYQ4B4F03Eu4KfwJAy+j93AGIMIzp+e8CXAboFvGUoHAXuC1LDWaFhlHjI8Wk8RngJbSj0wWnwGxKC9eSz8y2e/cAZb6gdRR1iDNxg3o9vcgSGsP71Ed3BWEDiv5g8dA0144P62QLbiG7x1m7lkpGDwG6NPs1SYPxFvKg0ImH244wGOA/h84tcm0qFMODH3lBB4DXqQlyTVcuVKHrBQeUQ3sZyTNObyunPMPB5wGorLSODNZO36sa6DUunhgraIBBqJSLNd01maLkEgkvgF6HhaHvcF79AAAAABJRU5ErkJggg==)'
		 + '}}';
	var sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService);
	var ios = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);
	sss.loadAndRegisterSheet(ios.newURI("data:text/css;base64," + btoa(cssStr), null, null), sss.USER_SHEET);
})();
