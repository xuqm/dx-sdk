!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.dx=o():e.dx=o()}(window,function(){return function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){"use strict";t.r(o);var n={};window.__callbackMessageFromNative=function(e){n[e.callBackId](e)};var r=n,s=function(e,o){e.callBackId;var t=e.data,n=e.status,r=e.message,s=o.resolve,i=o.reject;"success"===n?s(t):i(r)},i=function(e){var o=void 0===e?{count:9,sourceType:"album"}:e,t=o.count,n=void 0===t?9:t,i=o.sourceType,c=void 0===i?"album":i;return"camera"===c?new Promise(function(e,o){if(window.dchat)window.dchat.getPictureForCamera("openCam");else{if(!window.webkit.messageHandlers.getPictureForCamera)return void o("Unsupported browsers");window.webkit.messageHandlers.getPictureForCamera.postMessage("openCam")}r.openCam=function(t){s(t,{resolve:e,reject:o})}}):"album"===c?function(e){return new Promise(function(o,t){if(window.dchat)window.dchat.getPicture("selectPictureForAppoint",e);else{if(!window.webkit.messageHandlers.getPicture)return void t("Unsupported browsers");window.webkit.messageHandlers.getPicture.postMessage("selectPictureForAppoint",e)}r.selectPictureForAppoint=function(e){s(e,{resolve:o,reject:t})}})}(n):void 0},c=function(){throw window.dchat?window.dchat.close():window.webkit.messageHandlers.close&&window.webkit.messageHandlers.close.postMessage(null),new Error("Unsupported browsers")},u=function(e){var o=(void 0===e?{coorType:"wgs84"}:e).coorType;return new Promise(function(e,t){if(window.dchat)window.dchat.getLocation("getLocationForType",o);else{if(!window.webkit.messageHandlers.getLocation)return void t("Unsupported browsers");window.webkit.messageHandlers.getLocation.postMessage("getLocationForType",o)}r.getLocationForType=function(o){s(o,{resolve:e,reject:t})}})},a=function(){return new Promise(function(e,o){if(window.dchat)window.dchat.scanQRCode("scanQRCode");else{if(!window.webkit.messageHandlers.scanQRCode)return void o("Unsupported browsers");window.webkit.messageHandlers.readQRCode.postMessage("scanQRCode",null)}r.scanQRCode=function(t){s(t,{resolve:e,reject:o})}})},d=function(){return new Promise(function(e,o){if(window.dchat)window.dchat.selectPeoplesDefault("selectPeoplesDefault");else{if(!window.webkit.messageHandlers.selectPeoplesDefault)return void o("Unsupported browsers");window.webkit.messageHandlers.selectPeoplesDefault.postMessage(null)}r.selectPeoplesDefault=function(t){s(t,{resolve:e,reject:o})}})},l=function(e){var o=e.url,t=void 0===o?"":o;if(window.dchat)window.dchat.showPicture("showPicture",t);else{if(!window.webkit.messageHandlers.showPicture)throw new Error("Unsupported browsers");window.webkit.messageHandlers.showPicture.postMessage("showPicture",t)}},w=function(e){var o=(void 0===e?{sourceType:"local"}:e).sourceType,t=void 0===o?"local":o;return new Promise(function(e,o){return"netDisk"===t?new Promise(function(e,o){if(window.dchat)window.dchat.selectFileFromDisk("selectFileFromDisk");else{if(!window.webkit.messageHandlers.selectFileFromDisk)return void o("Unsupported browsers");window.webkit.messageHandlers.selectFileFromDisk.postMessage("selectFileFromDisk",null)}r.selectFileFromDisk=function(t){s(t,{resolve:e,reject:o})}}):(t="local")?new Promise(function(e,o){window.dchat?(window.dchat.selectFileFromLocal("selectFileFromLocal"),r.selectFileFromLocal=function(t){s(t,{resolve:e,reject:o})}):o("Unsupported browsers")}):void 0})};t.d(o,"chooseImage",function(){return i}),t.d(o,"closeWindow",function(){return c}),t.d(o,"getLocation",function(){return u}),t.d(o,"scanQRCode",function(){return a}),t.d(o,"selectPeoples",function(){return d}),t.d(o,"previewImage",function(){return l}),t.d(o,"chooseFile",function(){return w})}])});