new function (win, doc) {
    "use strict";

    this.loadfile = function (file, callback, onprocess, index, num) {
        var script = doc.createElement("script");
        script.onload = script.onreadystatechange = function () {
            if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
				index=index||0;
                index++;	
                onprocess && onprocess(index,num ?num: file instanceof Array ? file.length:1);
                if (file instanceof Array && file.length > 1) {
					
                    ducnghia.loadfile(file.slice(1, file.length), callback, onprocess, index, num || file.length);
                } else {
                    callback && callback(true);
                }
                this.onload = this.onreadystatechange = null;
                this.parentNode.removeChild(this);
            }
        };
        script.onerror = function (e) {
            callback && callback(false, e);
        };
        script.src = (file instanceof Array ? file[0] : file) + "?nghiait=" + this.createGUID();
        var head = doc.getElementsByTagName('head')[0];
        if (typeof head != "undefined") {
            head.appendChild(script);
        } else {
            doc.appendChild(scrip);
        }
    };

    this.loadFile = function (url, syne, type, callback, onerror) {
       

        var xmlHttp = "XMLHttpRequest" in window ? new XMLHttpRequest() : new ActiveXObject("Msxml2.XMLHTTP");

        type = type == null ? 'text/plain' : type;

        if (!("withCredentials" in xmlHttp)) {
            xmlHttp = new XDomainRequest();
            xmlHttp.onload = function () {
                callback(this.responseText);
            };
            xmlHttp.open("GET", url);
        } else {
            xmlHttp.open('GET', url, syne == null ? false : syne);

            xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        }

        if (type.indexOf("text") < 0) {
            xmlHttp.responseType = type;
        }
        xmlHttp.onerror = onerror || function () {
            throw new Error("File \"" + url + "\" failed to load");
        };
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status == 404) { this.onerror(); }
                if (callback) {
                    if (type.indexOf("text") < 0) {
                        callback(xmlHttp.response);
                    } else {
                        callback(xmlHttp.responseText);
                    }
                }
            }
        };
        xmlHttp.send(null);
    };

    this.createGUID = function () {
      
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16).toUpperCase();
        });
    };

    win.ducnghia = this;
}(window, document);