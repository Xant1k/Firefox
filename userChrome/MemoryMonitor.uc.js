// ==UserScript==
// @name		Memory Monitor mod.uc.js
// @description		Simple Memory Monitor
// @include		main
// @charset		UTF-8
// @author		RunningCheese
// ==/UserScript==

var ucjsMM = {
	_interval : 10000,
	//Memory refresh period, in ms
	_Warningvalue : 900,  //Memory warning , the unit MB
	_Warningcolor : 'red',//red or #f46060
	_Stdvalue2 : 700,  //Colour2
	_Stdcolor2 : 'orange',//orange or #ed6c44
	_Stdvalue1 : 500,  //Color 1
	_Stdcolor1 : 'green',//blue or #69cc56
	_MemoryValue : 0,  //The initial value of the memory
	_Memorycolor : 'grey',//grey or #3e3e3e
	_prefix : 'MB',    //Memory Unit

	interval : null,
	init : function () {
		var toolbar = document.getElementById('toolbar-menubar');//Put behind the address bar
		/*var toolbar = document.getElementById('identity-box').parentNode;//Put in front of the address bar*/
		var memoryPanel = document.createElement('statusbarpanel');
		memoryPanel.id = 'MemoryDisplay';
		memoryPanel.setAttribute('label', ucjsMM._MemoryValue + ucjsMM._prefix);
		memoryPanel.setAttribute('tooltiptext', 'Memory monitor , click Open about:memory');
		toolbar.insertBefore(memoryPanel, toolbar.childNodes[2]);
		document.insertBefore(document.createProcessingInstruction('xml-stylesheet', 'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent('\
			#MemoryDisplay{\
				-moz-appearance: none;\
			  padding: 0;\
				border: none;\
				font-size:12px;\
			}\
			#MemoryDisplay .statusbarpanel-text{\
				margin:0;\
				padding: 3px 5px 3px 5px;\
				height: 24px;\
			  color:#000;\
        background-color:#f6f6f6;\
			}\
        #MemoryDisplay .statusbarpanel-text:hover{\
        background-color:#efefef;\
			}\
		') + '"'), document.documentElement);
		this.start();
		this.interval = setInterval(this.start, this._interval);
	},
	start : function () {
		try {
			const Cc = Components.classes;
			const Ci = Components.interfaces;
			var MemReporters = Cc['@mozilla.org/memory-reporter-manager;1'].getService(Ci.nsIMemoryReporterManager);
			var workingSet = MemReporters.resident;
			ucjsMM._MemoryValue = Math.round(workingSet / (1024 * 1024));
			var memoryPanel = document.getElementById('MemoryDisplay');
			memoryPanel.setAttribute('label', ucjsMM._MemoryValue + ucjsMM._prefix);
			memoryPanel.setAttribute('onclick', "openUILinkIn('about:memory','tab')");
			if (ucjsMM._MemoryValue > ucjsMM._Warningvalue) {
				memoryPanel.style.color = ucjsMM._Warningcolor;
				memoryPanel.style.borderColor = ucjsMM._Warningcolor;
			} else {
				if (ucjsMM._MemoryValue > ucjsMM._Stdvalue3){
					memoryPanel.style.color = ucjsMM._Stdcolor3;
					memoryPanel.style.borderColor = ucjsMM._Stdcolor3;
				}
				else {
					if (ucjsMM._MemoryValue > ucjsMM._Stdvalue2){
						memoryPanel.style.color = ucjsMM._Stdcolor2;
						memoryPanel.style.borderColor = ucjsMM._Stdcolor2;
					}
					else {
						if (ucjsMM._MemoryValue > ucjsMM._Stdvalue1){
							memoryPanel.style.color = ucjsMM._Stdcolor1;
							memoryPanel.style.borderColor = ucjsMM._Stdcolor1;
						}
						else{
							memoryPanel.style.color = ucjsMM._Memorycolor;
							memoryPanel.style.borderColor = ucjsMM._Memorycolor;
						}
					}
				}
			}
		} catch (ex) {
			clearInterval(ucjsMM.interval);
		}
	},
	addFigure : function (str) {
		var num = new String(str).replace(/,/g, '');
		while (num != (num = num.replace(/^(-?\d+)(\d{3})/, '$1,$2')));
		return num;
	}
}
ucjsMM.init();
