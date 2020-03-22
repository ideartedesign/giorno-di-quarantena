/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{151:function(e,t,n){var content=n(152);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(40).default)("7372a3d1",content,!0,{sourceMap:!1})},152:function(e,t,n){(t=n(39)(!1)).push([e.i,"/*! modern-normalize v0.6.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,:after,:before{box-sizing:border-box}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji}hr{height:0}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}",""]),e.exports=t},155:function(e,t){function n(e,t,n,r,o,c,l){try{var f=e[c](l),d=f.value}catch(e){return void n(e)}f.done?t(d):Promise.resolve(d).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,c){var l=e.apply(t,r);function f(e){n(l,o,c,f,d,"next",e)}function d(e){n(l,o,c,f,d,"throw",e)}f(void 0)}))}}},156:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e}).apply(this,arguments)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=o(n(157));t.default=function(e){void 0===e&&(e={});var t=r({space:2},e);return{beforeCreate:function(){this.$options&&"function"==typeof this.$options.jsonld&&(this.$options.head=c.default.call(this,t))}}}},157:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t,n=this;return this.$options?(this.$options.computed=this.$options.computed||{},this.$options.computed.$jsonld=(t=e,function(){var e,n=this.$options.jsonld.call(this);if(null===n)return{};var r=JSON.stringify(n,null,t.space),o=0===t.space?r:"\n"+r+"\n",c="nuxt-jsonld-"+this._uid;return{script:[{hid:c,type:"application/ld+json",innerHTML:o}],__dangerouslyDisableSanitizersByTagID:(e={},e[c]=["innerHTML"],e)}}),this.$options.head&&("function"==typeof this.$options.head?this.$options.computed.$head=this.$options.head:this.$head=this.$options.head),function(){return r(r({},n.$head),n.$jsonld)}):function(){}}},158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.options||{};t.methods&&t.methods.jsonld&&"function"==typeof t.methods.jsonld&&(t.jsonld=t.methods.jsonld,delete t.methods.jsonld)}},22:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},23:function(e,t,n){"use strict";var r={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(e,t){var n=t.parent,r=t.slots,o=t.props,c=r(),l=c.default;void 0===l&&(l=[]);var f=c.placeholder;return n._isMounted?l:(n.$once("hook:mounted",(function(){n.$forceUpdate()})),o.placeholderTag&&(o.placeholder||f)?e(o.placeholderTag,{class:["no-ssr-placeholder"]},o.placeholder||f):l.length>0?l.map((function(){return e(!1)})):e(!1))}};e.exports=r},39:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var content=function(e,t){var content=e[1]||"",n=e[3];if(!n)return content;if(t&&"function"==typeof btoa){var r=(c=n,l=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(data," */")),o=n.sources.map((function(source){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(source," */")}));return[content].concat(o).concat([r]).join("\n")}var c,l,data;return[content].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(content,"}"):content})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var f=[].concat(e[l]);r&&o[f[0]]||(n&&(f[2]?f[2]="".concat(n," and ").concat(f[2]):f[2]=n),t.push(f))}},t}},40:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],c=o[0],l={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(l):n.push(r[c]={id:c,parts:[l]})}return n}n.r(t),n.d(t,"default",(function(){return v}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c={},head=o&&(document.head||document.getElementsByTagName("head")[0]),l=null,f=0,d=!1,y=function(){},h=null,m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,o){d=n,h=o||{};var l=r(e,t);return w(l),function(t){for(var n=[],i=0;i<l.length;i++){var o=l[i];(f=c[o.id]).refs--,n.push(f)}t?w(l=r(e,t)):l=[];for(i=0;i<n.length;i++){var f;if(0===(f=n[i]).refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete c[f.id]}}}}function w(e){for(var i=0;i<e.length;i++){var t=e[i],n=c[t.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](t.parts[r]);for(;r<t.parts.length;r++)n.parts.push(j(t.parts[r]));n.parts.length>t.parts.length&&(n.parts.length=t.parts.length)}else{var o=[];for(r=0;r<t.parts.length;r++)o.push(j(t.parts[r]));c[t.id]={id:t.id,refs:1,parts:o}}}}function O(){var e=document.createElement("style");return e.type="text/css",head.appendChild(e),e}function j(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(d)return y;r.parentNode.removeChild(r)}if(m){var o=f++;r=l||(l=O()),t=x.bind(null,r,o,!1),n=x.bind(null,r,o,!0)}else r=O(),t=k.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var S,P=(S=[],function(e,t){return S[e]=t,S.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=P(t,o);else{var c=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(c,l[t]):e.appendChild(c)}}function k(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),h.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},5:function(e,t,n){"use strict";function r(e,t,n,r,o,c,l){try{var f=e[c](l),d=f.value}catch(e){return void n(e)}f.done?t(d):Promise.resolve(d).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,c){var l=e.apply(t,n);function f(e){r(l,o,c,f,d,"next",e)}function d(e){r(l,o,c,f,d,"throw",e)}f(void 0)}))}}n.d(t,"a",(function(){return o}))},57:function(e,t,n){"use strict";var r={name:"ClientOnly",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(e,t){var n=t.parent,r=t.slots,o=t.props,c=r(),l=c.default;void 0===l&&(l=[]);var f=c.placeholder;return n._isMounted?l:(n.$once("hook:mounted",(function(){n.$forceUpdate()})),o.placeholderTag&&(o.placeholder||f)?e(o.placeholderTag,{class:["client-only-placeholder"]},o.placeholder||f):l.length>0?l.map((function(){return e(!1)})):e(!1))}};e.exports=r},94:function(e,t,n){"use strict";t.a=function(e,t){return t=t||{},new Promise((function(n,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var c in s.open(t.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,n){o.push(t=t.toLowerCase()),u.push([t,n]),i[t]=i[t]?i[t]+","+n:n})),n(a())},s.onerror=r,s.withCredentials="include"==t.credentials,t.headers)s.setRequestHeader(c,t.headers[c]);s.send(t.body||null)}))}},96:function(e,t,n){"use strict";var r=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)};var o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function c(e,t){return!1!==t.clone&&t.isMergeableObject(e)?h((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function l(e,source,t){return e.concat(source).map((function(element){return c(element,t)}))}function f(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(symbol){return e.propertyIsEnumerable(symbol)})):[]}(e))}function d(object,e){try{return e in object}catch(e){return!1}}function y(e,source,t){var n={};return t.isMergeableObject(e)&&f(e).forEach((function(r){n[r]=c(e[r],t)})),f(source).forEach((function(r){(function(e,t){return d(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,r)||(d(e,r)&&t.isMergeableObject(source[r])?n[r]=function(e,t){if(!t.customMerge)return h;var n=t.customMerge(e);return"function"==typeof n?n:h}(r,t)(e[r],source[r],t):n[r]=c(source[r],t))})),n}function h(e,source,t){(t=t||{}).arrayMerge=t.arrayMerge||l,t.isMergeableObject=t.isMergeableObject||r,t.cloneUnlessOtherwiseSpecified=c;var n=Array.isArray(source);return n===Array.isArray(e)?n?t.arrayMerge(e,source,t):y(e,source,t):c(source,t)}h.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return h(e,n,t)}),{})};var m=h;e.exports=m},97:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},{$vue:null,id:null,router:null,fields:{},customIdFields:{},ignoreRoutes:[],linkers:[],commands:{},disabled:!1,customResourceURL:null,set:[],require:[],ecommerce:{enabled:!1,options:null,enhanced:!1},autoTracking:{screenview:!1,shouldRouterUpdate:null,skipSamePath:!1,exception:!1,exceptionLogs:!0,page:!0,transformQueryString:!0,pageviewOnLoad:!0,pageviewTemplate:null,untracked:!0,prependBase:!0},debug:{enabled:!1,trace:!1,sendHitTask:!0},batch:{enabled:!1,delay:500,amount:2},checkDuplicatedScript:!1,disableScriptLoader:!1,beforeFirstHit:s,ready:s,untracked:[]});function u(e){!function e(t,n){return Object.keys(n).forEach((function(r){var o=t[r]&&Object.prototype.toString.call(t[r]);"[object Object]"!==o&&"[object Array]"!==o?t[r]=n[r]:e(t[r],n[r])})),t}(a,e)}function o(){return a.id?[].concat(a.id):[]}var c=a;function s(){}var p=function(e){console.warn("[vue-analytics] ".concat(e))};function l(e,t){return new Promise((function(n,r){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");if(i.async=!0,i.src=e,i.charset="utf-8",t){var c=document.createElement("link");c.href=t,c.rel="preconnect",o.appendChild(c)}o.appendChild(i),i.onload=n,i.onerror=r}))}function f(e){return e.name||e.replace(/-/gi,"")}function b(e,t){if(o().length>1){var n=f(t);return"".concat(n,".").concat(e)}return e}var d,y=function(e){if(e.then)return e;if("function"==typeof e){var t=e();return t.then?t:Promise.resolve(t)}return Promise.resolve(e)};function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=[];function m(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];"undefined"!=typeof window&&o().forEach((function(t){var r,o={m:b(e,t),a:n};window.ga?c.batch.enabled?(h.push(o),d||(d=setInterval((function(){h.length?h.splice(0,c.batch.amount).forEach((function(e){var t;(t=window).ga.apply(t,[e.m].concat(g(e.a)))})):(clearInterval(d),d=null)}),c.batch.delay))):(r=window).ga.apply(r,[b(e,t)].concat(n)):c.untracked.push(o)}))}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"object"!==v(t[0])||t[0].constructor!==Object?m("set",t[0],t[1]):m("set",t[0])}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(){2!=arguments.length?m("require",arguments.length<=0?void 0:arguments[0]):m("require",arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1])};function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0];if(1===t.length&&"string"==typeof r)return m("send","screenview",{screenName:r});m.apply(void 0,["send","screenview"].concat(t))}function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r;t.length&&!t[0]||(t.length&&t[0].currentRoute&&(r=t[0].currentRoute),t.length&&function(e){return e.query&&e.params}(t[0])&&(r=t[0]),r?E(r):(w("page","object"===k(t[0])?t[0].page:t[0]),m.apply(void 0,["send","pageview"].concat(t))))}function E(e){if(![(t=e).name,t.path].filter(Boolean).find((function(e){return-1!==c.ignoreRoutes.indexOf(e)}))){var t,n=c.autoTracking,r=e.meta.analytics,o=(void 0===r?{}:r).pageviewTemplate||n.pageviewTemplate;if(n.screenview&&!e.name)throw new Error("[vue-analytics] Route name is mandatory when using screenview.");if(n.screenview)x(e.name);else if(o)q(o(e));else{var i=c.router,l=c.autoTracking,a=l.transformQueryString,u=l.prependBase,f=function(e){var t=Object.keys(e).reduce((function(t,n,r,o){var i=r===o.length-1,c=e[n];return null==c?t:t+="".concat(n,"=").concat(c).concat(i?"":"&")}),"");return""!==t?"?".concat(t):""}(e.query),s=i&&i.options.base,p=u&&s,d=e.path+(a?f:"");q(d=p?function(e,t){var n=t.split("/"),r=e.split("/");return""===n[0]&&"/"===e[e.length-1]&&n.shift(),r.join("/")+n.join("/")}(s,d):d)}}}var A=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];"undefined"!=typeof window&&o().forEach((function(t){window["ga-disable-".concat(t)]=e}))},T=function(){if("undefined"!=typeof document&&"undefined"!=typeof window){if(c.id){var e,t,n=[y(c.id),y(c.disabled)];if(e=c.checkDuplicatedScript,t=c.disableScriptLoader,[Boolean(window&&window.ga),e&&!(Array.prototype.slice.call(document.getElementsByTagName("script")).filter((function(e){return-1!==e.src.indexOf("analytics")||-1!==e.src.indexOf("gtag")})).length>0),!t].some(Boolean)){var r="https://www.google-analytics.com",d=c.debug.enabled?"analytics_debug":"analytics",i=c.customResourceURL?l(c.customResourceURL):l("".concat(r,"/").concat(d,".js"),r);n.push(i.catch((function(){p("An error occured! Please check your connection or disable your AD blocker")})))}return Promise.all(n).then((function(e){var t,n,r;u({id:e[0],disabled:e[1]}),A(c.disabled),function(){if(window.ga||!c.debug.enabled){if(window.ga){var e=o();c.debug.enabled&&(window.ga_debug={trace:c.debug.trace}),e.forEach((function(t){var n=f(t),r=c.customIdFields[t]||{},o=e.length>1?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c.fields,{},r,{name:n}):c.fields;window.ga("create",t.id||t,"auto",o)})),c.beforeFirstHit();var t=c.ecommerce;if(t.enabled){var n=t.enhanced?"ec":"ecommerce";t.options?m("require",n,t.options):m("require",n)}c.linkers.length>0&&(m("require","linker"),m("linker:autoLink",c.linkers)),c.debug.sendHitTask||w("sendHitTask",null)}}else p("Google Analytics has probably been blocked.")}(),function(){var e;c.set.forEach((function(e){var t=e.field,n=e.value;if(void 0===t||void 0===n)throw new Error('[vue-analytics] Wrong configuration in the plugin options.\nThe "set" array requires each item to have a "field" and a "value" property.');w(t,n)})),e=["ec","ecommerce"],c.require.forEach((function(t){if(-1!==e.indexOf(t)||-1!==e.indexOf(t.name))throw new Error("[vue-analytics] The ecommerce features are built-in in the plugin. \nFollow the ecommerce instructions available in the documentation.");if("string"!=typeof t&&"object"!==P(t))throw new Error('[vue-analytics] Wrong configuration in the plugin options. \nThe "require" array requires each item to be a string or to have a "name" and an "options" property.');var n=t.name||t;t.options?S(n,t.options):S(n)}))}(),c.untracked.forEach((function(e){m.apply(void 0,[e.m].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(e.a)))})),t=c.router,n=c.autoTracking,r=c.$vue,n.page&&t&&t.onReady((function(){n.pageviewOnLoad&&t.history.ready&&E(t.currentRoute),t.afterEach((function(e,o){var i=n.skipSamePath,c=n.shouldRouterUpdate;i&&e.path===o.path||("function"!=typeof c||c(e,o))&&r.nextTick().then((function(){E(t.currentRoute)}))}))})),c.ready()})).catch((function(e){c.debug.enabled&&p(e.message)}))}p('Missing the "id" parameter. Add at least one tracking domain ID')}},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];m("send","exception",{exDescription:e,exFatal:t})},_=function(e){if(c.autoTracking.exception){window.addEventListener("error",(function(e){M(e.message)}));var t=e.config.errorHandler;e.config.errorHandler=function(e,n,r){M(e.message),c.autoTracking.exceptionLogs&&console.error(e),"function"==typeof t&&t.call(void 0,e,n,r)}}},R=M;function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(e){return"".concat(c.ecommerce.enhanced?"ec":"ecommerce",":").concat(e)},C=["addItem","addTransaction","addProduct","addImpression","setAction","addPromo","send"].reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,D({},t,(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];m.apply(void 0,[L(t)].concat(n))})))}),{}),I={event:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];m.apply(void 0,["send","event"].concat(t))},exception:R,page:q,query:m,require:S,set:w,social:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];m.apply(void 0,["send","social"].concat(t))},time:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];m.apply(void 0,["send","timing"].concat(t))},screenview:x,ecommerce:C,disable:function(){return A(!0)},enable:function(){return A(!1)},commands:c.commands},z={inserted:function(e,t,n){var r=Object.keys(t.modifiers);0===r.length&&r.push("click"),r.forEach((function(r){e.addEventListener(r,(function(){var e="string"==typeof t.value?c.commands[t.value]:t.value;if(!e)throw new Error("[vue-analytics] The value passed to v-ga is not defined in the commands list.");e.apply(n.context)}))}))}};function U(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e){u(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{$vue:e})),e.directive("ga",z),e.prototype.$ga=e.$ga=I,_(e),T()}n.d(t,"default",(function(){return H})),n.d(t,"analyticsMiddleware",(function(){return F})),n.d(t,"onAnalyticsReady",(function(){return J})),n.d(t,"event",(function(){return G})),n.d(t,"ecommerce",(function(){return W})),n.d(t,"set",(function(){return Q})),n.d(t,"page",(function(){return X})),n.d(t,"query",(function(){return K})),n.d(t,"screenview",(function(){return V})),n.d(t,"time",(function(){return Y})),n.d(t,"require",(function(){return Z})),n.d(t,"exception",(function(){return ee})),n.d(t,"social",(function(){return te}));var F=function(e){e.subscribe((function(e){var t=e.payload;if(t&&t.meta&&t.meta.analytics){var n=t.meta.analytics;if(!Array.isArray(n))throw new Error('The "analytics" property needs to be an array');n.forEach((function(e){var t,n,r=e.shift(),o=e;if(r.includes(":")){var i=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r.split(":"),2);r=i[0],t=i[1]}if(!(r in I))throw new Error('[vue-analytics:vuex] The type "'.concat(r,"\" doesn't exist."));if(t&&!(t in I[r]))throw new Error('[vue-analytics:vuex] The type "'.concat(r,'" has not method "').concat(t,'".'));if("ecommerce"===r&&!t)throw new Error('[vue-analytics:vuex] The type "'.concat(r,'" needs to call a method. Check documentation.'));t?(n=I[r])[t].apply(n,U(o)):I[r].apply(I,U(o))}))}}))},J=function(){return new Promise((function(e,t){var n=setInterval((function(){"undefined"!=typeof window&&window.ga&&(e(),clearInterval(n))}),10)}))},G=I.event,W=I.ecommerce,Q=I.set,X=I.page,K=I.query,V=I.screenview,Y=I.time,Z=I.require,ee=I.exception,te=I.social}])},98:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(156)),c=r(n(158));t.Jsonld=c.default,t.default={install:function(e,t){e.mixin(o.default(t))}}}}]);