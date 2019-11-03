!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(2),t.exports=n(1)},function(t,e){},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=e,this.canvas.width=500,this.canvas.height=500,this.ctx=this.canvas.getContext("2d"),this.scaleUnit=50}var e,n,a;return e=t,(n=[{key:"grid",value:function(t){this.ctx.lineWidth=1,this.ctx.strokeStyle="#000000",this.ctx.setLineDash([1,3]),this.ctx.font="16px Arial",this.ctx.setTransform(t[0],0,0,t[1],0,this.canvas.height*(1-t[1])),this.ctx.beginPath();for(var e=this.scaleUnit;e<this.canvas.width*(1/t[0]);e+=this.scaleUnit)this.ctx.moveTo(e,0-this.canvas.height*(1/t[1]-1)),this.ctx.lineTo(e,this.canvas.height),this.ctx.fillText(e/this.scaleUnit,e+3,this.canvas.height-5),this.ctx.stroke();for(var n=this.scaleUnit-this.canvas.height*(1/t[1]-1);n<this.canvas.height;n+=this.scaleUnit)this.ctx.moveTo(0,n),this.ctx.lineTo(this.canvas.width*(1/t[0]),n),this.ctx.fillText((this.canvas.width-n)/this.scaleUnit,3,n-3),this.ctx.stroke();this.ctx.closePath()}},{key:"drawDots",value:function(t,e,n){var r=this;this.ctx.lineWidth=1,this.ctx.setLineDash([]),this.ctx.strokeStyle=e,this.ctx.fillStyle=e,this.ctx.setTransform(n[0],0,0,n[1],0,this.canvas.height*(1-n[1])),t.forEach((function(t,e){r.ctx.beginPath(),r.ctx.arc(t[0]*r.scaleUnit,r.canvas.height-t[1]*r.scaleUnit,r.scaleUnit/10,0,2*Math.PI),r.ctx.fill(),r.ctx.stroke(),r.ctx.closePath()}))}},{key:"drawLines",value:function(t,e,n){var r=this;this.ctx.lineWidth=1,this.ctx.setLineDash([]),this.ctx.strokeStyle=e,this.ctx.fillStyle=e,this.ctx.setTransform(n[0],0,0,n[1],0,this.canvas.height*(1-n[1])),this.ctx.beginPath(),t.forEach((function(t,e){0==e?r.ctx.moveTo(t[0]*r.scaleUnit,r.canvas.height-t[1]*r.scaleUnit):r.ctx.lineTo(t[0]*r.scaleUnit,r.canvas.height-t[1]*r.scaleUnit),r.ctx.stroke()})),this.ctx.closePath()}}])&&r(e.prototype,n),a&&r(e,a),t}();function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(){return i(document.querySelectorAll(".args tbody tr")).map((function(t){return i(t.children).filter((function(t){return null!=i(t.children)[0]&&("INPUT"==t.children[0].children[0].tagName&&"number"==t.children[0].children[0].getAttribute("type"))})).map((function(t){return parseFloat(t.children[0].children[0].value)}))})).reduce((function(t,e,n){return 0!=n?t.map((function(t,n){return[t,e[n]]})):e}),0)};function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=e}var e,n,r;return e=t,(n=[{key:"calculate",value:function(t){return this.data.reduce((function(e,n,r,a){return e+n[1]*a.reduce((function(e,n,a){return r!=a?e*(t-n[0]):e}),1)/a.reduce((function(t,e,a){return r!=a?t*(n[0]-e[0]):t}),1)}),0)}},{key:"approximation",value:function(t,e,n){var r=this;return[].concat(o(new Array(Math.ceil(Math.abs(e-t)/n)).fill(t).map((function(t,e){return t+e*n}))),[e]).map((function(t){return[t,r.calculate(t)]}))}}])&&u(e.prototype,n),r&&u(e,r),t}();function s(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=e,this.diff=this.calculateDiff(this.data.map((function(t){return t[1]}))).filter((function(t,e){return 0!=e}))}var e,n,r;return e=t,(n=[{key:"calculateDiff",value:function(t){return t.length>1?[t[0]].concat(s(this.calculateDiff(t.map((function(t,e,n){return e!=n.length-1?n[e+1]-t:null})).filter((function(t){return null!=t}))))):t}},{key:"calculate",value:function(t){var e=this;return this.data[0][1]+this.diff.reduce((function(n,r,a){return n+p((t-e.data[0][0])/(e.data[1][0]-e.data[0][0]),a)*r/d(a+1)}),0)}},{key:"approximation",value:function(t,e,n){var r=this;return[].concat(s(new Array(Math.ceil(Math.abs(e-t)/n)).fill(t).map((function(t,e){return t+e*n}))),[e]).map((function(t){return[t,r.calculate(t)]}))}}])&&f(e.prototype,n),r&&f(e,r),t}(),d=function t(e){return e>=1?e*t(e-1):1},p=function t(e,n){return n>0?e*t(e-1,n-1):e};function m(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var v=function(){document.querySelector(".args-count__add").addEventListener("click",(function(){document.querySelectorAll(".args-table tr").forEach((function(t,e){t.childElementCount<11&&(0==e?t.appendChild(document.createElement("th")).appendChild(document.createTextNode(t.childElementCount-1)):t.appendChild(document.createElement("td")).appendChild(Object.assign(document.createElement("div"),{className:"args__td"})).appendChild(Object.assign(document.createElement("input"),{className:"args__input",type:"number",value:1,step:"any"})).parentElement.appendChild(Object.assign(document.createElement("div"),{className:"args-value"})).appendChild(Object.assign(document.createElement("input"),{className:"blue-btn args-value__more",type:"submit",value:""})).parentElement.appendChild(Object.assign(document.createElement("input"),{className:"blue-btn args-value__less",type:"submit",value:""})))}))})),document.querySelector(".args-count__rem").addEventListener("click",(function(){document.querySelectorAll(".args-table tr").forEach((function(t){t.childElementCount>2&&t.removeChild(m(t.children).pop())}))})),document.querySelector(".args__play").addEventListener("click",(function(){document.dispatchEvent(new Event("argsInputed"))})),document.addEventListener("click",(function(t){m(t.target.classList).includes("args-value__more")&&m(t.target.parentElement.parentElement.children).find((function(t){return m(t.classList).includes("args__input")})).value++,m(t.target.classList).includes("args-value__less")&&m(t.target.parentElement.parentElement.children).find((function(t){return m(t.classList).includes("args__input")})).value--}))},y=function(){var t=c(),e=new l(t).approximation(t[0][0],t[t.length-1][0],.1),n=new a(document.querySelector("canvas"));n.grid([1,1]),n.drawDots(t,"#000000",[1,1]),n.drawLines(e,"#ff0000",[1,1])},g=function(){var t=c(),e=new h(t).approximation(t[0][0],t[t.length-1][0],.1),n=new a(document.querySelector("canvas"));n.grid([1,1]),n.drawDots(t,"#000000",[1,1]),n.drawLines(e,"#ff0000",[1,1])},b={home:{onload:function(){},start:function(){}},lab1:{onload:function(){v(),y()},start:function(){y()}},newton:{onload:function(){v(),g()},start:function(){g()}}};document.addEventListener("DOMContentLoaded",(function(){b[document.body.id].onload()})),document.addEventListener("argsInputed",(function(){b[document.body.id].start()}))}]);
//# sourceMappingURL=bundle.js.map