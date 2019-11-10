!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(2),t.exports=n(1)},function(t,e){},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=e,this.canvas.width=500,this.canvas.height=500,this.ctx=this.canvas.getContext("2d"),this.scaleUnit=50}var e,n,o;return e=t,(n=[{key:"grid",value:function(t){this.ctx.lineWidth=1,this.ctx.strokeStyle="#000000",this.ctx.setLineDash([1,3]),this.ctx.font="16px Arial",this.ctx.setTransform(t[0],0,0,t[1],0,this.canvas.height*(1-t[1])),this.ctx.beginPath();for(var e=this.scaleUnit;e<this.canvas.width*(1/t[0]);e+=this.scaleUnit)this.ctx.moveTo(e,0-this.canvas.height*(1/t[1]-1)),this.ctx.lineTo(e,this.canvas.height),this.ctx.fillText(e/this.scaleUnit,e+3,this.canvas.height-5),this.ctx.stroke();for(var n=this.scaleUnit;n<this.canvas.height;n+=this.scaleUnit)this.ctx.moveTo(0,n),this.ctx.lineTo(this.canvas.width*(1/t[0]),n),this.ctx.fillText((this.canvas.height-n)/this.scaleUnit,3,n-3),this.ctx.stroke();this.ctx.closePath()}},{key:"drawPoints",value:function(t,e,n){var r=this;this.ctx.lineWidth=1,this.ctx.setLineDash([]),this.ctx.strokeStyle=e,this.ctx.fillStyle=e,this.ctx.setTransform(n[0],0,0,n[1],0,this.canvas.height*(1-n[1])),t.forEach((function(t,e){r.ctx.beginPath(),r.ctx.arc(t[0]*r.scaleUnit,r.canvas.height-t[1]*r.scaleUnit,r.scaleUnit/10,0,2*Math.PI),r.ctx.fill(),r.ctx.stroke(),r.ctx.closePath()}))}},{key:"drawLines",value:function(t,e,n){var r=this;this.ctx.lineWidth=1,this.ctx.setLineDash([]),this.ctx.strokeStyle=e,this.ctx.fillStyle=e,this.ctx.setTransform(n[0],0,0,n[1],0,this.canvas.height*(1-n[1])),this.ctx.beginPath(),t.forEach((function(t,e){0==e?r.ctx.moveTo(t[0]*r.scaleUnit,r.canvas.height-t[1]*r.scaleUnit):r.ctx.lineTo(t[0]*r.scaleUnit,r.canvas.height-t[1]*r.scaleUnit),r.ctx.stroke()})),this.ctx.closePath()}}])&&r(e.prototype,n),o&&r(e,o),t}();function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=e}var e,n,r;return e=t,(n=[{key:"getPoint",value:function(t){return t}},{key:"getLine",value:function(t,e,n,r){var o=this;return a(new Array(r?101:Math.ceil(Math.abs(e-t)/n)+1).fill(t).map((function(t,e){return t+e*n}))).map((function(t){return[t,o.getPoint(t)]}))}}])&&c(e.prototype,n),r&&c(e,r),t}();function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,h(e).call(this,t))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),n=e,(r=[{key:"getPoint",value:function(t){return this.data.reduce((function(e,n,r,o){return e+n[1]*o.reduce((function(e,n,o){return r!=o?e*(t-n[0]):e}),1)/o.reduce((function(t,e,o){return r!=o?t*(n[0]-e[0]):t}),1)}),0)}}])&&s(n.prototype,r),o&&s(n,o),e}(u);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=g(this,v(e).call(this,t))).diff=n.getDiff(n.data.map((function(t){return t[1]}))).filter((function(t,e){return 0!=e})),n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(e,t),n=e,(r=[{key:"getDiff",value:function(t){return t.length>1?[t[0]].concat(m(this.getDiff(t.map((function(t,e,n){return e!=n.length-1?n[e+1]-t:null})).filter((function(t){return null!=t}))))):t}},{key:"getPoint",value:function(t){var e=this;return this.data[0][1]+this.diff.reduce((function(n,r,o){return n+_((t-e.data[0][0])/(e.data[1][0]-e.data[0][0]),o)*r/O(o+1)}),0)}}])&&b(n.prototype,r),o&&b(n,o),e}(u),O=function t(e){return e>=1?e*t(e-1):1},_=function t(e,n){return n>0?e*t(e-1,n-1):e};function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var L=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=A(this,P(e).call(this,t))).h=(n.data[n.data.length-1][0]-n.data[0][0])/(n.data.length-1),n.m=n.getDerivatives(),n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(e,t),n=e,(r=[{key:"getDerivatives",value:function(){var t=this;return[(-3*this.data[0][1]+4*this.data[1][1]-this.data[2][1])/(2*this.h)].concat(x(this.data.map((function(e,n,r){return 0!=n&&n!=r.length-1?(r[n+1][1]-r[n-1][1])/(2*t.h):null})).filter((function(t){return null!=t}))),[(3*this.data[this.data.length-1][1]-4*this.data[this.data.length-2][1]+this.data[this.data.length-3][1])/(2*this.h)])}},{key:"getPoint",value:function(t){var e=t<=this.data[this.data.length-1][0]?this.data.findIndex((function(e,n,r){return e[0]<=t&&r[n+1][0]>=t})):this.data.length-2;return Math.pow(this.data[e+1][0]-t,2)*(2*(t-this.data[e][0])+this.h)*this.data[e][1]/Math.pow(this.h,3)+Math.pow(t-this.data[e][0],2)*(2*(this.data[e+1][0]-t)+this.h)*this.data[e+1][1]/Math.pow(this.h,3)+Math.pow(this.data[e+1][0]-t,2)*(t-this.data[e][0])*this.m[e]/Math.pow(this.h,2)+Math.pow(t-this.data[e][0],2)*(t-this.data[e+1][0])*this.m[e+1]/Math.pow(this.h,2)}}])&&S(n.prototype,r),o&&S(n,o),e}(u);function T(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function M(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function C(t,e,n){return(C=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&q(o,n.prototype),o}).apply(null,arguments)}function q(t,e){return(q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function N(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var U=function(){document.querySelector(".args-count__add").addEventListener("click",(function(){return document.querySelectorAll(".args-table tr").forEach((function(t,e){t.childElementCount<11&&(0==e?t.appendChild(document.createElement("th")).appendChild(document.createTextNode(t.childElementCount-1)):t.appendChild(document.createElement("td")).appendChild(Object.assign(document.createElement("div"),{className:"args__td"})).appendChild(Object.assign(document.createElement("input"),{className:"args__input",type:"number",value:1,step:"any"})).parentElement.appendChild(Object.assign(document.createElement("div"),{className:"args-value"})).appendChild(Object.assign(document.createElement("input"),{className:"blue-btn args-value__more",type:"submit",value:""})).parentElement.appendChild(Object.assign(document.createElement("input"),{className:"blue-btn args-value__less",type:"submit",value:""})))}))})),document.querySelector(".args-count__rem").addEventListener("click",(function(){return document.querySelectorAll(".args-table tr").forEach((function(t){t.childElementCount>2&&t.removeChild(N(t.children).pop())}))})),document.addEventListener("click",(function(t){N(t.target.classList).includes("args-value__more")&&N(t.target.parentElement.parentElement.children).find((function(t){return N(t.classList).includes("args__input")})).value++,N(t.target.classList).includes("args-value__less")&&N(t.target.parentElement.parentElement.children).find((function(t){return N(t.classList).includes("args__input")})).value--})),document.querySelector(".args__play").addEventListener("click",(function(){return document.dispatchEvent(new Event("argsInputed"))}))};function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function D(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var F=function(){var t=document.querySelector(".js-dots__further").checked,e=function(t,e,n,r){return[].concat(D(new Array(r?101:Math.ceil(Math.abs(e-t)/n)).fill(t).map((function(t,e){return t+e*n}))),[e]).map((function(t){return[t,Math.log(Math.pow(t,2)+t+1)]}))}(0,10,.1,t),n=new Array(parseInt(document.querySelector(".js-dots__quantity").value)).fill(1).map((function(t,n){return e[Math.floor(n*document.querySelector(".js-dots__step").value/.1)]})),r=T(document.querySelector(".js-checkboxs-methods").children).filter((function(t){return"LABEL"==t.tagName})).map((function(t){return T(t.children).find((function(t){return"INPUT"==t.tagName})).checked?T(t.classList).find((function(t){return/(js-checkboxs-methods)/g.test(t)})).split("-").pop():null})).filter((function(t){return null!=t}));new Array("lagrange","newton","spline").map((function(t){return{name:t,exists:r.includes(t)}})).forEach((function(t){return document.querySelector(".js-group-".concat(t.name)).style=t.exists?"":"display: none"}));var i=Object.assign.apply(Object,[{}].concat(D(Object.entries({lagrange:{array:new p(n).getLine(n[0][0],n[n.length-1][0],.1,t).map((function(t){return t.map((function(t){return parseFloat(t.toFixed(5))}))}))},newton:{array:new j(n).getLine(n[0][0],n[n.length-1][0],.1,t).map((function(t){return t.map((function(t){return parseFloat(t.toFixed(5))}))}))},spline:{array:new L(n).getLine(n[0][0],n[n.length-1][0],.1,t).map((function(t){return t.map((function(t){return parseFloat(t.toFixed(5))}))}))}}).map((function(t){return Object(I({},t[0],Object.assign(t[1],{diff:t[1].array.map((function(t,n){return parseFloat(Math.abs(t[1]-e[n][1]).toFixed(5))}))})))})))));r.forEach((function(t){return function(t,e,n){try{n&&(M(e.children).find((function(t){return"TBODY"==t.tagName})).innerHTML="")}catch(t){}t.forEach((function(t){try{var n=M(e.children).find((function(t){return"TBODY"==t.tagName})).appendChild(document.createElement("tr"));t.forEach((function(t){return n.appendChild(document.createElement("td")).appendChild(document.createTextNode(t))}))}catch(t){}}))}(i[t].array.map((function(e,n){return[].concat(D(e),[i[t].diff[n]])})),document.querySelector(".output-table-".concat(t)),!0)})),r.forEach((function(t){var e;return function(t){try{Object.keys(t).forEach((function(e){return M(document.querySelectorAll(".".concat(e))).forEach((function(n){return n.innerHTML=t[e]}))}))}catch(t){}}((I(e={},"output-table-".concat(t,"-values__max"),Math.max.apply(Math,D(i[t].diff))),I(e,"output-table-".concat(t,"-values__min"),Math.min.apply(Math,D(i[t].diff))),I(e,"output-table-".concat(t,"-values__avg"),parseFloat(i[t].diff.reduce((function(t,e,n,r){return t+e/r.length}),0).toFixed(5))),e))}));var a=new o(document.querySelector("canvas"));a.grid([1,1]),a.drawPoints(n,"#000000",[1,1]),a.drawLines(e,"#000000",[1,1]);var c={lagrange:"#ff0000",newton:"#00ff00",spline:"#0000ff"};r.forEach((function(t,e){return a.drawLines(i[t].array,c[t],[1,1])}))},R=function(t){var e,n=document.querySelector(".js-dots__further").checked,r=i(document.querySelectorAll(".args tbody tr")).map((function(t){return i(t.children).filter((function(t){return null!=i(t.children)[0]&&"INPUT"==t.children[0].children[0].tagName&&"number"==t.children[0].children[0].getAttribute("type")})).map((function(t){return parseFloat(t.children[0].children[0].value)}))})).reduce((function(t,e,n){return 0!=n?t.map((function(t,n){return[t,e[n]]})):e}),0);switch(t){case"Lagrange":e=new p(r).getLine(r[0][0],r[r.length-1][0],.1,n);break;case"Newton":e=new j(r).getLine(r[0][0],r[r.length-1][0],.1,n);break;case"Spline":e=new L(r).getLine(r[0][0],r[r.length-1][0],.1,n)}var a=new o(document.querySelector("canvas"));a.grid([1,1]),a.drawPoints(r,"#000000",[1,1]),a.drawLines(e,"#ff0000",[1,1])},B={home:{onload:function(){},start:function(){}},comparison:{onload:function(){C(Array,N(document.querySelectorAll('.js-checkboxs-methods label input[type="checkbox"]'))).forEach((function(t){return t.addEventListener("click",(function(){return document.dispatchEvent(new Event("allowedMethodsChanged"))}))})),document.querySelector('.js-dots input[type="submit"]').addEventListener("click",(function(){return document.dispatchEvent(new Event("comparisonPointsChanged"))})),F()},start:function(){F()}},lagrange:{onload:function(){U(),R("Lagrange")},start:function(){R("Lagrange")}},newton:{onload:function(){U(),R("Newton")},start:function(){R("Newton")}},spline:{onload:function(){U(),R("Spline")},start:function(){R("Spline")}}};document.addEventListener("DOMContentLoaded",(function(){B[document.body.id].onload()})),document.addEventListener("argsInputed",(function(){B[document.body.id].start()})),document.addEventListener("allowedMethodsChanged",(function(t){B[document.body.id].start()})),document.addEventListener("comparisonPointsChanged",(function(t){B[document.body.id].start()}))}]);
//# sourceMappingURL=bundle.js.map