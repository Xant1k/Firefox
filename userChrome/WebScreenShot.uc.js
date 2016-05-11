// ==UserScript==
// @name		WebScreenShot.uc.js
// @description		Simple screenshot webpage
// @include		main
// ==/UserScript==



(function(){

var shotMenu =document.createElement("menupopup");
shotMenu.setAttribute("id","leftclickpopup");

var label1=document.createElement("menuitem");
label1.setAttribute("label","Full Page");
label1.setAttribute("oncommand","WebScreenShot.captureAll()");

var label2=document.createElement("menuitem");
label2.setAttribute("label","Current View");
label2.setAttribute("oncommand","WebScreenShot.capturePage()");

var label3=document.createElement("menuitem");
label3.setAttribute("label","Free Marker");
label3.setAttribute("oncommand","WebScreenShotByClipping.init()");

var label4=document.createElement("menuitem");
label4.setAttribute("label","Highlighted Object");
label4.setAttribute("oncommand","WebScreenShotByClick.init()");

shotMenu.appendChild(label1);
shotMenu.appendChild(label2);
shotMenu.appendChild(label3);
shotMenu.appendChild(label4);

var menu = document.createElement('menu');
menu.id = 'WebScreenShotMenu';
menu.setAttribute('label', 'Screenshot Menu');
menu.appendChild(shotMenu);

var RightMenu = document.getElementById("contentAreaContextMenu");
RightMenu.appendChild(menu);

var labelImg = document.createElement("menuitem");
labelImg.setAttribute("id","WebScreenShotOnImage");
labelImg.setAttribute("label","Copy Image as Base64");
labelImg.setAttribute("insertafter","context-copyimage-contents");
labelImg.setAttribute("oncommand","WebScreenShot.onImage(gContextMenu.target)");
RightMenu.appendChild(labelImg);

})();

var WebScreenShot= {
        capture : function(win, x, y, width, height, isCopy){
                var mainWindow = document.getElementById('main-window');
                var scrollbox = document.createElement('scrollbox');
                scrollbox.width = '1';
                scrollbox.height = '1';
                mainWindow.appendChild(scrollbox);
                var canvas = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
                canvas.style.display = 'inline';
                canvas.width = width;
                canvas.height = height;
                scrollbox.appendChild(canvas);

                var ctx = canvas.getContext("2d");
                ctx.clearRect(0, 0, width, height);
                ctx.save();
                ctx.scale(1.0, 1.0);
                ctx.drawWindow(win, x, y, width, height, "rgb(255,255,255)");
                ctx.restore();

                var base64 = canvas.toDataURL("image/png");
                if (isCopy){
                        Cc['@mozilla.org/widget/clipboardhelper;1'].getService(Ci.nsIClipboardHelper).copyString(base64);
                        alert('Copy Image as Base64');
                }else{
                        gBrowser.selectedTab = gBrowser.addTab(base64);
                }
                mainWindow.removeChild(scrollbox);
        },
        captureAll : function(){
                var win = content;
                WebScreenShot.capture(win, 0, 0, win.innerWidth + win.scrollMaxX, win.innerHeight + win.scrollMaxY);
        },
        capturePage : function(){
                var win = content, doc = win.document, body = doc.body, html = doc.documentElement;
                var scrX = (body.scrollLeft || html.scrollLeft) - html.clientLeft;
                var scrY = (body.scrollTop || html.scrollTop) - html.clientTop;
                WebScreenShot.capture(win, scrX, scrY, win.innerWidth, win.innerHeight);
        },
        onImage : function(image){
                var doc = image.ownerDocument;

                var canvas = doc.createElement('canvas');
                canvas.width = image.width;
                canvas.height = image.height;
                doc.body.appendChild(canvas);

                var ctx = canvas.getContext('2d');
                ctx.drawImage(image, 0, 0);
                var base64 = canvas.toDataURL('image/png');
                doc.body.removeChild(canvas);
                Cc['@mozilla.org/widget/clipboardhelper;1'].getService(Ci.nsIClipboardHelper).copyString(base64);
                alert('Graphic patterns as Base64 code.');
        },
        handleEvent : function(event){
                if (event.target != event.currentTarget) return;
                document.getElementById('WebScreenShotOnImage').hidden = !gContextMenu.onImage;
        },
        init : function(){
                document.getElementById('contentAreaContextMenu').addEventListener('popupshowing', this, false);
        },
};

var WebScreenShotByClipping = {
        capture : WebScreenShot.capture,
        handleEvent : function(event){
                if (event.button != 0) return false;
                event.preventDefault();
                event.stopPropagation();
                switch(event.type){
                        case 'mousedown':
                                this.downX = event.pageX;
                                this.downY = event.pageY;
                                this.bs.left = this.downX + 'px';
                                this.bs.top  = this.downY + 'px';
                                this.body.appendChild(this.box);
                                this.flag = true;
                                break;
                        case 'mousemove':
                                if (!this.flag) return;
                                this.moveX = event.pageX;
                                this.moveY = event.pageY;
                                if (this.downX > this.moveX) this.bs.left = this.moveX + 'px';
                                if (this.downY > this.moveY) this.bs.top  = this.moveY + 'px';
                                this.bs.width  = Math.abs(this.moveX - this.downX) + 'px';
                                this.bs.height = Math.abs(this.moveY - this.downY) + 'px';
                                break;
                        case 'mouseup':
                                this.uninit();
                                break;
                }
        },
        init : function(){
                this.win = document.commandDispatcher.focusedWindow;
                if (this.win == window) this.win = content;
                this.doc = this.win.document;
                this.body = this.doc.body;
                if (!this.body instanceof HTMLBodyElement){
                        alert("No picture available!");
                        return false;
                }
                this.flag = null;
                this.box = this.doc.createElement('div');
                this.bs = this.box.style;
                this.bs.border = '#0f0 dashed 2px';
                this.bs.position = 'absolute';
                this.bs.zIndex = '2147483647';
                this.defaultCursor = getComputedStyle(this.body, '').cursor;
                this.body.style.cursor = 'crosshair';
                this.doc.addEventListener('mousedown', this, true);
                this.doc.addEventListener('mousemove', this ,true);
                this.doc.addEventListener('mouseup', this ,true);
                this.doc.addEventListener('click', this, true);
        },
        uninit : function(){
                var pos = [this.win, parseInt(this.bs.left), parseInt(this.bs.top), parseInt(this.bs.width), parseInt(this.bs.height)];
                this.doc.removeEventListener('mousedown', this, true);
                this.doc.removeEventListener('mousemove', this, true);
                this.doc.removeEventListener('mouseup', this, true);
                this.doc.removeEventListener('click', this, true);
                this.body.style.cursor = this.defaultCursor;
                this.body.removeChild(this.box);
                this.capture.apply(this, pos);
        },
}
var WebScreenShotByClick = {
        capture : WebScreenShot.capture,
        getPosition : function(){
                var html = this.doc.documentElement;
                var body = this.doc.body;
                var rect = this.target.getBoundingClientRect();
                return [
                        this.win
                        , Math.round(rect.left) + (body.scrollLeft || html.scrollLeft) - html.clientLeft
                        , Math.round(rect.top) + (body.scrollTop || html.scrollTop) - html.clientTop
                        , parseInt(rect.width)
                        , parseInt(rect.height)
                ];
        },
        highlight : function(){
                this.orgStyle = this.target.hasAttribute('style')? this.target.style.cssText : false;
                this.target.style.cssText += 'outline: red 2px solid; outline-offset: 2px; -moz-outline-radius: 2px;';
        },
        lowlight : function(){
                if (this.orgStyle) this.target.style.cssText = this.orgStyle;
                else this.target.removeAttribute('style');
        },
        handleEvent : function(event){
                switch(event.type){
                        case 'click':
                                if (event.button != 0) return;
                                event.preventDefault();
                                event.stopPropagation();
                                this.lowlight();
                                var pos = this.getPosition();
                                this.capture.apply(this, pos);
                                this.uninit();
                                break;
                        case 'mouseover':
                                if (this.target) this.lowlight();
                                this.target = event.target;
                                this.highlight();
                                break;
                }
        },
        init : function(){
                this.win = content;
                this.doc = content.document;
                this.doc.addEventListener('mouseover', this, true);
                this.doc.addEventListener('click', this, true);
        },
        uninit : function(){
                this.doc.removeEventListener('mouseover', this, true);
                this.doc.removeEventListener('click', this, true);
        },
}

WebScreenShot.init();