(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t,e,r){"use strict";r.d(e,"j",(function(){return d})),r.d(e,"l",(function(){return f})),r.d(e,"k",(function(){return m})),r.d(e,"e",(function(){return y})),r.d(e,"b",(function(){return v})),r.d(e,"q",(function(){return x})),r.d(e,"g",(function(){return w})),r.d(e,"h",(function(){return _})),r.d(e,"d",(function(){return $})),r.d(e,"p",(function(){return O})),r.d(e,"r",(function(){return k})),r.d(e,"m",(function(){return T})),r.d(e,"o",(function(){return D})),r.d(e,"f",(function(){return P})),r.d(e,"c",(function(){return S})),r.d(e,"i",(function(){return R})),r.d(e,"n",(function(){return A})),r.d(e,"a",(function(){return F}));r(134),r(20),r(135),r(139),r(10),r(140),r(93),r(94),r(142),r(144),r(145),r(31);var n=r(5),o=r(22),c=r(0);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}function f(t){return t.then(t=>t.default||t)}function m(t){return t.$options&&"function"==typeof t.$options.fetch&&!t.$options.fetch.length}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=t.$children||[];for(var n of r)n.$fetch?e.push(n):n.$children&&y(n,e);return e}function v(t,e){if(e||!t.options.__hasNuxtData){var r=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=r,t.options.data=function(){var data=r.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),h({},data,{},e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function x(t){return t.options&&t._Ctor===t||(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file)),t}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"components";return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t[r]).map(o=>(e&&e.push(n),t[r][o]))))}function _(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return w(t,e,"instances")}function $(t,e){return Array.prototype.concat.apply([],t.matched.map((t,r)=>Object.keys(t.components).reduce((n,o)=>(t.components[o]?n.push(e(t.components[o],t.instances[o],t,o,r)):delete t.components[o],n),[])))}function O(t,e){return Promise.all($(t,function(){var t=Object(n.a)((function*(t,r,n,o){return"function"!=typeof t||t.options||(t=yield t()),n.components[o]=t=x(t),"function"==typeof e?e(t,r,n,o):t}));return function(e,r,n,o){return t.apply(this,arguments)}}()))}function C(t){return j.apply(this,arguments)}function j(){return(j=Object(n.a)((function*(t){if(t)return yield O(t),h({},t,{meta:w(t).map((e,r)=>h({},e.options.meta,{},(t.matched[r]||{}).meta))})}))).apply(this,arguments)}function k(t,e){return E.apply(this,arguments)}function E(){return(E=Object(n.a)((function*(t,e){t.context||(t.context={isStatic:!0,isDev:!1,isHMR:!1,app:t,payload:e.payload,error:e.error,base:"/",env:{TITLE:"Giorno di quarantena",DESCRIPTION:"Giorno di quarantena",GA_ID:"ASD"}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,r)=>{if(e){t.context._redirected=!0;var n=typeof path;if("number"==typeof e||"undefined"!==n&&"object"!==n||(r=path||{},n=typeof(path=e),e=302),"object"===n&&(path=t.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=U(path,r),window.location.replace(path),new Error("ERR_REDIRECT");t.context.next({path:path,query:r,status:e})}},t.context.nuxtState=window.__NUXT__);var[r,n]=yield Promise.all([C(e.route),C(e.from)]);e.route&&(t.context.route=r),e.from&&(t.context.from=n),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!1,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}))).apply(this,arguments)}function T(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():D(t[0],e).then(()=>T(t.slice(1),e))}function D(t,e){var r;return(r=2===t.length?new Promise(r=>{t(e,(function(t,data){t&&e.error(t),r(data=data||{})}))}):t(e))&&r instanceof Promise&&"function"==typeof r.then?r:Promise.resolve(r)}function P(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function S(t,e){return function(t,e){for(var r=new Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(r[i]=new RegExp("^(?:"+t[i].pattern+")$",B(e)));return function(e,n){for(var path="",data=e||{},o=(n||{}).pretty?L:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!=typeof l){var h=data[l.name||"pathMatch"],d=void 0;if(null==h){if(l.optional){l.partial&&(path+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(h)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var f=0;f<h.length;f++){if(d=o(h[f]),!r[c].test(d))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(d)+"`");path+=(0===f?l.prefix:l.delimiter)+d}}else{if(d=l.asterisk?L(h,!0):o(h),!r[c].test(d))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+d+'"');path+=l.prefix+d}}else path+=l}return path}}(function(t,e){var r,n=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(r=N.exec(t));){var h=r[0],d=r[1],f=r.index;if(path+=t.slice(c,f),c=f+h.length,d)path+=d[1];else{var m=t[c],y=r[2],v=r[3],x=r[4],w=r[5],_=r[6],$=r[7];path&&(n.push(path),path="");var O=null!=y&&null!=m&&m!==y,C="+"===_||"*"===_,j="?"===_||"*"===_,k=r[2]||l,pattern=x||w;n.push({name:v||o++,prefix:y||"",delimiter:k,optional:j,repeat:C,partial:O,asterisk:Boolean($),pattern:pattern?M(pattern):$?".*":"[^"+I(k)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&n.push(path);return n}(t,e),e)}function R(t,e){var r={},n=h({},t,{},e);for(var o in n)String(t[o])!==String(e[o])&&(r[o]=!0);return r}function A(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(r){e="[".concat(t.constructor.name,"]")}return h({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=t=>{window.onNuxtReadyCbs.push(t)};var N=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t,e){var r=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(r,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function I(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function M(t){return t.replace(/([=!:$/()])/g,"\\$1")}function B(t){return t&&t.sensitive?"":"i"}function U(t,e){var r,n=t.indexOf("://");-1!==n?(r=t.substring(0,n),t=t.substring(n+3)):t.startsWith("//")&&(t=t.substring(2));var o,c=t.split("/"),l=(r?r+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");return 2===(c=path.split("#")).length&&([path,o]=c),l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{var r=t[e];return null==r?"":Array.isArray(r)?r.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+r}).filter(Boolean).join("&")}(e)),l+=o?"#"+o:""}function F(t,e,r){t.$options[e]||(t.$options[e]=[]),t.$options[e].push(r)}},100:function(t,e,r){"use strict";r(10);var n=r(5),o=r(0),c=r(1),l=window.__NUXT__;function h(){if(!this._hydrated)return this.$fetch()}function d(){if((t=this).$vnode&&t.$vnode.elm&&t.$vnode.elm.dataset&&t.$vnode.elm.dataset.fetchKey){var t;this._hydrated=!0,this._fetchKey=+this.$vnode.elm.dataset.fetchKey;var data=l.fetch[this._fetchKey];if(data&&data._error)this.$fetchState.error=data._error;else for(var e in data)o.a.set(this.$data,e,data[e])}}function f(){return m.apply(this,arguments)}function m(){return(m=Object(n.a)((function*(){this.$nuxt.nbFetching++,this.$fetchState.pending=!0,this.$fetchState.error=null,this._hydrated=!1;var t=null,e=Date.now();try{yield this.$options.fetch.call(this)}catch(e){t=Object(c.n)(e)}var r=this._fetchDelay-(Date.now()-e);r>0&&(yield new Promise(t=>setTimeout(t,r))),this.$fetchState.error=t,this.$fetchState.pending=!1,this.$fetchState.timestamp=Date.now(),this.$nextTick(()=>this.$nuxt.nbFetching--)}))).apply(this,arguments)}e.a={beforeCreate(){Object(c.k)(this)&&(this._fetchDelay="number"==typeof this.$options.fetchDelay?this.$options.fetchDelay:200,o.a.util.defineReactive(this,"$fetchState",{pending:!1,error:null,timestamp:Date.now()}),this.$fetch=f.bind(this),Object(c.a)(this,"created",d),Object(c.a)(this,"beforeMount",h))}}},102:function(t,e,r){t.exports=r(103)},103:function(t,e,r){"use strict";r.r(e),function(t){r(20),r(78),r(10),r(87),r(130),r(31);var e=r(5),n=r(0),o=r(95),c=r(57),l=r(1),h=r(13),d=r(100),f=r(44);n.a.__nuxt__fetch__mixin__||(n.a.mixin(d.a),n.a.__nuxt__fetch__mixin__=!0),n.a.component(f.a.name,f.a),n.a.component("NLink",f.a),t.fetch||(t.fetch=o.a);var m,y,v=[],x=window.__NUXT__||{};Object.assign(n.a.config,{silent:!0,performance:!1});var w=n.a.config.errorHandler||console.error;function _(t,e,r){for(var n=component=>{var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,r=new Array(e>2?e-2:0),n=2;n<e;n++)r[n-2]=arguments[n];return option(...r)}return option}(component,"transition",e,r)||{};return"string"==typeof t?{name:t}:t},o=r?Object(l.g)(r):[],c=Math.max(t.length,o.length),h=[],d=function(i){var e=Object.assign({},n(t[i])),r=Object.assign({},n(o[i]));Object.keys(e).filter(t=>void 0!==e[t]&&!t.toLowerCase().includes("leave")).forEach(t=>{r[t]=e[t]}),h.push(r)},i=0;i<c;i++)d(i);return h}function $(t,e,r){return O.apply(this,arguments)}function O(){return(O=Object(e.a)((function*(t,e,r){this._routeChanged=Boolean(m.nuxt.err)||e.name!==t.name,this._paramChanged=!this._routeChanged&&e.path!==t.path,this._queryChanged=!this._paramChanged&&e.fullPath!==t.fullPath,this._diffQuery=this._queryChanged?Object(l.i)(t.query,e.query):[],(this._routeChanged||this._paramChanged)&&this.$loading.start&&!this.$loading.manual&&this.$loading.start();try{if(this._queryChanged)(yield Object(l.p)(t,(t,e)=>({Component:t,instance:e}))).some(r=>{var{Component:n,instance:o}=r,c=n.options.watchQuery;return!0===c||(Array.isArray(c)?c.some(t=>this._diffQuery[t]):"function"==typeof c&&c.apply(o,[t.query,e.query]))})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start();r()}catch(l){var n=l||{},o=n.statusCode||n.status||n.response&&n.response.status||500,c=n.message||"";if(/^Loading( CSS)? chunk (\d)+ failed\./.test(c))return void window.location.reload(!0);this.error({statusCode:o,message:c}),this.$nuxt.$emit("routeChanged",t,e,n),r()}}))).apply(this,arguments)}function C(t){var path=Object(l.f)(t.options.base,t.options.mode);return Object(l.d)(t.match(path),function(){var t=Object(e.a)((function*(t,e,r,n,o){"function"!=typeof t||t.options||(t=yield t());var c=function(t,e){return x.serverRendered&&e&&Object(l.b)(t,e),t._Ctor=t,t}(Object(l.q)(t),x.data?x.data[o]:null);return r.components[n]=c,c}));return function(e,r,n,o,c){return t.apply(this,arguments)}}())}function j(t,e,r){var n=[],o=!1;if(void 0!==r&&(n=[],(r=Object(l.q)(r)).options.middleware&&(n=n.concat(r.options.middleware)),t.forEach(t=>{t.options.middleware&&(n=n.concat(t.options.middleware))})),n=n.map(t=>"function"==typeof t?t:("function"!=typeof c.a[t]&&(o=!0,this.error({statusCode:500,message:"Unknown middleware "+t})),c.a[t])),!o)return Object(l.m)(n,e)}function k(t,e,r){return E.apply(this,arguments)}function E(){return(E=Object(e.a)((function*(t,e,r){if(!1===this._routeChanged&&!1===this._paramChanged&&!1===this._queryChanged)return r();if(t===e)v=[];else{var n=[];v=Object(l.g)(e,n).map((t,i)=>Object(l.c)(e.matched[n[i]].path)(e.params))}var o=!1;yield Object(l.r)(m,{route:t,from:e,next:(path=>{e.path===path.path&&this.$loading.finish&&this.$loading.finish(),e.path!==path.path&&this.$loading.pause&&this.$loading.pause(),o||(o=!0,r(path))}).bind(this)}),this._dateLastError=m.nuxt.dateErr,this._hadError=Boolean(m.nuxt.err);var c=[],d=Object(l.g)(t,c);if(!d.length){if(yield j.call(this,d,m.context),o)return;var f=(h.a.options||h.a).layout,y=yield this.loadLayout("function"==typeof f?f.call(h.a,m.context):f);if(yield j.call(this,d,m.context,y),o)return;return m.context.error({statusCode:404,message:"This page could not be found"}),r()}d.forEach(t=>{t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(_(d,t,e));try{if(yield j.call(this,d,m.context),o)return;if(m.context._errored)return r();var x=d[0].options.layout;if("function"==typeof x&&(x=x(m.context)),x=yield this.loadLayout(x),yield j.call(this,d,m.context,x),o)return;if(m.context._errored)return r();var w,$=!0;try{for(var O of d)if("function"==typeof O.options.validate&&!($=yield O.options.validate(m.context)))break}catch(t){return this.error({statusCode:t.statusCode||"500",message:t.message}),r()}if(!$)return this.error({statusCode:404,message:"This page could not be found"}),r();yield Promise.all(d.map((r,i)=>{r._path=Object(l.c)(t.matched[c[i]].path)(t.params),r._dataRefresh=!1;var n=r._path!==v[i];if(this._routeChanged&&n)r._dataRefresh=!0;else if(this._paramChanged&&n){var o=r.options.watchParam;r._dataRefresh=!1!==o}else if(this._queryChanged){var h=r.options.watchQuery;!0===h?r._dataRefresh=!0:Array.isArray(h)?r._dataRefresh=h.some(t=>this._diffQuery[t]):"function"==typeof h&&(w||(w=Object(l.h)(t)),r._dataRefresh=h.apply(w[i],[t.query,e.query]))}if(this._hadError||!this._isMounted||r._dataRefresh){var d=[],f=r.options.asyncData&&"function"==typeof r.options.asyncData,y=Boolean(r.options.fetch)&&r.options.fetch.length,x=f&&y?30:45;if(f){var _=Object(l.o)(r.options.asyncData,m.context).then(t=>{Object(l.b)(r,t),this.$loading.increase&&this.$loading.increase(x)});d.push(_)}if(this.$loading.manual=!1===r.options.loading,y){var p=r.options.fetch(m.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(t=>{this.$loading.increase&&this.$loading.increase(x)}),d.push(p)}return Promise.all(d)}})),o||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r())}catch(n){var C=n||{};if("ERR_REDIRECT"===C.message)return this.$nuxt.$emit("routeChanged",t,e,C);v=[],Object(l.j)(C);var k=(h.a.options||h.a).layout;"function"==typeof k&&(k=k(m.context)),yield this.loadLayout(k),this.error(C),this.$nuxt.$emit("routeChanged",t,e,C),r()}}))).apply(this,arguments)}function T(t,e){Object(l.d)(t,(t,e,r,o)=>("object"!=typeof t||t.options||((t=n.a.extend(t))._Ctor=t,r.components[o]=t),t))}function D(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?(h.a.options||h.a).layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(m.context)),this.setLayout(e)}function P(t,e){if(!1!==this._routeChanged||!1!==this._paramChanged||!1!==this._queryChanged){var r=Object(l.h)(t),o=Object(l.g)(t);n.a.nextTick(()=>{r.forEach((t,i)=>{if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&o[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var r in e)n.a.set(t.$data,r,e[r]);window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}),D.call(this,t)})}}function S(t){window.onNuxtReadyCbs.forEach(e=>{"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),y.afterEach((e,r)=>{n.a.nextTick(()=>t.$nuxt.$emit("routeChanged",e,r))})}function R(){return(R=Object(e.a)((function*(t){m=t.app,y=t.router;var e=new n.a(m),r=x.layout||"default";yield e.loadLayout(r),e.setLayout(r);var o=()=>{e.$mount("#__nuxt"),y.afterEach(T),y.afterEach(P.bind(e)),n.a.nextTick(()=>{S(e)})},c=yield Promise.all(C(y));if(e.setTransitions=e.$options.nuxt.setTransitions.bind(e),c.length&&(e.setTransitions(_(c,y.currentRoute)),v=y.currentRoute.matched.map(t=>Object(l.c)(t.path)(y.currentRoute.params))),e.$loading={},x.error&&e.error(x.error),y.beforeEach($.bind(e)),y.beforeEach(k.bind(e)),x.serverRendered&&x.routePath===e.context.route.path)o();else{var h=()=>{T(y.currentRoute,y.currentRoute),D.call(e,y.currentRoute),o()};k.call(e,y.currentRoute,y.currentRoute,path=>{if(path){var t=y.afterEach((e,r)=>{t(),h()});y.push(path,void 0,t=>{t&&w(t)})}else h()})}}))).apply(this,arguments)}Object(h.b)().then((function(t){return R.apply(this,arguments)})).catch(w)}.call(this,r(19))},13:function(t,e,r){"use strict";r.d(e,"b",(function(){return Q})),r.d(e,"a",(function(){return T}));r(78),r(10);var n=r(5),o=r(22),c=r(0),l=r(96),h=r(58),d=r.n(h),f=r(23),m=r.n(f),y=r(32),v=r(1);"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",()=>{window.history.scrollRestoration="auto"}),window.addEventListener("load",()=>{window.history.scrollRestoration="manual"}));var x=()=>{},w=y.a.prototype.push;y.a.prototype.push=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,r=arguments.length>2?arguments[2]:void 0;return w.call(this,t,e,r)},c.a.use(y.a);var _={mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,r){var n=!1,o=Object(v.g)(t);(o.length<2&&o.every(t=>!1!==t.options.scrollToTop)||o.some(t=>t.options.scrollToTop))&&(n={x:0,y:0}),r&&(n=r);var c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick(()=>c.$emit("triggerScroll")),new Promise(e=>{c.$once("triggerScroll",()=>{if(t.hash){var r=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(r="#"+window.CSS.escape(r.substr(1)));try{document.querySelector(r)&&(n={selector:r})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(n)})})},routes:[{path:"/",component:()=>Object(v.l)(r.e(2).then(r.bind(null,170))),name:"index"}],fallback:!1};function $(){return new y.a(_)}var O={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,e){var{parent:r,data:data,props:n}=e,o=r.$createElement;data.nuxtChild=!0;for(var c=r,l=r.$nuxt.nuxt.transitions,h=r.$nuxt.nuxt.defaultTransition,d=0;r;)r.$vnode&&r.$vnode.data.nuxtChild&&d++,r=r.$parent;data.nuxtChildDepth=d;var f=l[d]||h,m={};C.forEach(t=>{void 0!==f[t]&&(m[t]=f[t])});var y={};j.forEach(t=>{"function"==typeof f[t]&&(y[t]=f[t].bind(c))});var v=y.beforeEnter;if(y.beforeEnter=t=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),v)return v.call(c,t)},!1===f.css){var x=y.leave;(!x||x.length<2)&&(y.leave=(t,e)=>{x&&x.call(c,t),c.$nextTick(e)})}var w=o("routerView",data);return n.keepAlive&&(w=o("keep-alive",{props:n.keepAliveProps},[w])),o("transition",{props:m,on:y},[w])}},C=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],j=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],k={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}}},E=(r(148),r(21)),T=Object(E.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,D=(r(20),r(93),r(94),r(31),{name:"Nuxt",components:{NuxtChild:O,NuxtError:T},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(v.c)(this.$route.matched[0].path)(this.$route.params);var[t]=this.$route.matched;if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var{options:r}=e;if(r.key)return"function"==typeof r.key?r.key(this.$route):r.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick(()=>this.errorFromNuxtError=!1),t("div",{},[t("h2","An error occured while showing the error page"),t("p","Unfortunately an error occured and while showing the error page another error occured"),t("p","Error details: ".concat(this.errorFromNuxtError.toString())),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick(()=>this.displayingNuxtError=!1),t(T,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}}),P={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(t){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100||this.percent<=0)&&(this.skipTimerCount=1,this.reversed=!this.reversed))},100)}},render(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},S=(r(150),Object(E.a)(P,void 0,void 0,!1,null,null,null).exports),R=(r(152),r(154),{name:"default",data:()=>({isDarkModeAvailable:!1,isDarkTheme:!1}),mounted(){"not all"!==window.matchMedia("(prefers-color-scheme)").media&&(this.isDarkModeAvailable=!0,this.isDarkTheme=!!window.getComputedStyle(document.documentElement).getPropertyValue("--color-mode"))},head(){return{bodyAttrs:{class:"theme--".concat(this.isDarkTheme?"dark":"light")}}}}),A=(r(156),{_default:Object(E.a)(R,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layout"},[r("header",[r("nuxt-link",{attrs:{to:"/",title:"Giorno di quarantena",exact:""}},[t._v(" #giornodiquarantena ")]),r("button",{class:{"theme--light":!t.isDarkTheme,"theme--dark":t.isDarkTheme},attrs:{type:"button",title:"Theme toggle"},on:{click:function(e){t.isDarkTheme=!t.isDarkTheme}}},[t._v(" Theme toggle ")])],1),r("main",[r("nuxt")],1),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("span",[this._v(" © 2020 "),e("a",{attrs:{href:"https://giornodiquarantena.it",title:"Giorno di quarantena",rel:"noopener",target:"_blank"}},[this._v(" giornodiquarantena.it ")])]),e("a",{attrs:{href:"https://ideartedesign.com",title:"IDEARTE Design LAB",rel:"noopener",target:"_blank"}},[this._v(" Made by "),e("strong",[this._v("IDEARTE LAB")])])])}],!1,null,"6dd2069d",null).exports}),N={render(t,e){var r=t("NuxtLoading",{ref:"loading"}),n=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[n]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[r,c])},data:()=>({isOnline:!0,layout:null,layoutName:"",nbFetching:0}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error,this.context=this.$options.context},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline},isFetching(){return this.nbFetching>0}},methods:{refreshOnlineStatus(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},refresh(){var t=this;return Object(n.a)((function*(){var e=Object(v.h)(t.$route);if(e.length){t.$loading.start();var r=e.map(e=>{var p=[];if(e.$options.fetch&&e.$options.fetch.length&&p.push(Object(v.o)(e.$options.fetch,t.context)),e.$fetch)p.push(e.$fetch());else for(var component of Object(v.e)(e.$vnode.componentInstance))p.push(component.$fetch());return e.$options.asyncData&&p.push(Object(v.o)(e.$options.asyncData,t.context).then(t=>{for(var r in t)c.a.set(e.$data,r,t[r])})),Promise.all(p)});try{yield Promise.all(r)}catch(e){t.$loading.fail(e),Object(v.j)(e),t.error(e)}t.$loading.finish()}}))()},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(this.nuxt.err),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&A["_"+t]||(t="default"),this.layoutName=t,this.layout=A["_"+t],this.layout},loadLayout:t=>(t&&A["_"+t]||(t="default"),Promise.resolve(A["_"+t]))},components:{NuxtLoading:S}},L=r(59),I=r.n(L),M=r(98),B=r.n(M);function U(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var F=function(){var t=Object(n.a)((function*(t,e){var r={dev:!0,debug:{sendHitTask:!0},id:void 0};"function"==typeof r.asyncID&&(r.id=yield r.asyncID(t)),c.a.use(B.a,function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?U(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):U(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},{router:t.app.router},{},r)),t.$ga=c.a.$ga,e("ga",c.a.$ga)}));return function(e,r){return t.apply(this,arguments)}}(),z=r(99),K=r.n(z);function H(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function G(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?H(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):H(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}c.a.use(K.a,{space:0}),c.a.component(d.a.name,d.a),c.a.component(m.a.name,G({},m.a,{render:(t,e)=>(m.a._warned||(m.a._warned=!0,console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),m.a.render(t,e))})),c.a.component(O.name,O),c.a.component("NChild",O),c.a.component(D.name,D),c.a.use(l.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var J={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function Q(t){return V.apply(this,arguments)}function V(){return(V=Object(n.a)((function*(t){var e,r=yield $(),n=G({head:{htmlAttrs:{lang:"en"},title:"@ideartedesign/giorno-di-quarantena",meta:[{once:!0,hid:"description",name:"description",content:void 0},{once:!0,hid:"color-scheme",name:"color-scheme",content:"light dark"},{hid:"charset",charset:"utf-8"},{hid:"viewport",name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"@ideartedesign/giorno-di-quarantena"},{hid:"author",name:"author",content:"IDEARTE Design"},{hid:"theme-color",name:"theme-color",content:"black"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"@ideartedesign/giorno-di-quarantena"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"@ideartedesign/giorno-di-quarantena"},{hid:"og:description",name:"og:description",property:"og:description",content:"Generative Art is the idea realized as genetic code of artificial events, as construction of dynamic complex systems able to generate endless variations. This is also a nuxt-module to make it easy to do."}],links:[{once:!0,hid:"favicon",rel:"shortcut icon",type:"image/x-icon",href:"/favicon.ico"}],noscript:[{once:!0,hid:"noscript-fonts",innerHTML:'<link rel="stylesheet" href="/fonts/inter.css">'}],__dangerouslyDisableSanitizersByTagID:{"noscript-fonts":["innerHTML"]},link:[{rel:"manifest",href:"/_nuxt/manifest.091ef76e.json"}],style:[],script:[]},router:r,nuxt:{defaultTransition:J,transitions:[J],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},J,{name:t}):Object.assign({},J,t):J),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,n.context._errored=Boolean(e),e=e?Object(v.n)(e):null;var r=n.nuxt;return this&&(r=this.nuxt||this.$options.nuxt),r.dateErr=Date.now(),r.err=e,t&&(t.nuxt.error=e),e}}},N),o=t?t.next:t=>n.router.push(t);if(t)e=r.resolve(t.url).route;else{var path=Object(v.f)(r.options.base,r.options.mode);e=r.resolve(path).route}yield Object(v.r)(n,{route:e,next:o,error:n.nuxt.error.bind(n),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t});var l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject('".concat(t,"', value) has no value provided"));n[t="$"+t]=e;var r="__nuxt_"+t+"_installed__";c.a[r]||(c.a[r]=!0,c.a.use(()=>{Object.prototype.hasOwnProperty.call(c.a,t)||Object.defineProperty(c.a.prototype,t,{get(){return this.$root.$options[t]}})}))};return"function"==typeof I.a&&(yield I()(n.context,l)),"function"==typeof F&&(yield F(n.context,l)),{app:n,router:r}}))).apply(this,arguments)}},148:function(t,e,r){"use strict";var n=r(41);r.n(n).a},149:function(t,e,r){(e=r(24)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""]),t.exports=e},150:function(t,e,r){"use strict";var n=r(42);r.n(n).a},151:function(t,e,r){(e=r(24)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""]),t.exports=e},154:function(t,e,r){var content=r(155);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("5a194fe4",content,!0,{sourceMap:!1})},155:function(t,e,r){(e=r(24)(!1)).push([t.i,":root{--color-primary:#88889b;--color-text:#aeaec0;--color-background:#f0f0f3;--color-box-shadow-start:#fff;--color-box-shadow-end:rgba(174,174,192,0.4);--duration:.36s;--timing:ease;font-size:16px}@media (prefers-color-scheme:dark){:root{--color-mode:dark;--color-primary:#88889b;--color-text:#f0f0f3;--color-background:#333;--color-box-shadow-start:#fff;--color-box-shadow-end:rgba(174,174,192,0.4)}}*{min-width:0}html{min-height:100%;margin:0;padding:0}body{color:#aeaec0;color:var(--color-text,#aeaec0);font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji;background-color:#f0f0f3;background-color:var(--color-background,#f0f0f3);transition:color .36s ease,background-color .36s ease;transition:color var(--duration,.5s) var(--timing,ease),background-color var(--duration,.5s) var(--timing,ease)}@supports (font-variation-settings:normal){body{font-family:Inter Var,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji}}body.theme--light{--color-primary:#88889b;--color-text:#aeaec0;--color-background:#f0f0f3;--color-box-shadow-start:#fff;--color-box-shadow-end:rgba(174,174,192,0.4)}body.theme--dark{--color-mode:dark;--color-primary:#88889b;--color-text:#f0f0f3;--color-background:#333;--color-box-shadow-start:#fff;--color-box-shadow-end:rgba(174,174,192,0.4)}body,body .layout,body>div:first-child,body>div:first-child>div:first-child,html{min-height:100vh}.layout{padding:env(safe-area-inset-top,0) env(safe-area-inset-right,0) env(safe-area-inset-bottom,0) env(safe-area-inset-left,0)}a{text-decoration:none}a,button{color:#aeaec0;color:var(--color-text,#aeaec0);background-color:#f0f0f3;background-color:var(--color-background,#f0f0f3);border-color:#aeaec0;border-color:var(--color-text,#aeaec0);transition:color .36s ease,background-color .36s ease;transition:color var(--duration,.5s) var(--timing,ease),background-color var(--duration,.5s) var(--timing,ease)}h1{font-weight:inherit;font-size:inherit}.container{width:100%;max-width:600px;margin:0 auto}",""]),t.exports=e},156:function(t,e,r){"use strict";var n=r(43);r.n(n).a},157:function(t,e,r){(e=r(24)(!1)).push([t.i,".layout[data-v-6dd2069d]{display:flex;flex:1 1 100%;flex-direction:column}.layout header[data-v-6dd2069d]{display:flex;flex:0 1 100%;flex-direction:row;justify-content:space-between;width:100%;padding:16px}.layout main[data-v-6dd2069d]{display:flex;flex:1 1 100%;flex-direction:column;width:100%;text-align:center}.layout footer[data-v-6dd2069d]{display:flex;flex:0 1 100%;flex-direction:row;justify-content:space-between;width:100%;padding:16px}",""]),t.exports=e},41:function(t,e,r){var content=r(149);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("12e00c06",content,!0,{sourceMap:!1})},42:function(t,e,r){var content=r(151);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("e3e6e6f4",content,!0,{sourceMap:!1})},43:function(t,e,r){var content=r(157);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("ced60a6c",content,!0,{sourceMap:!1})},44:function(t,e,r){"use strict";r(20),r(10),r(87),r(31);var n=r(0),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))})}),1)},c=window.cancelIdleCallback||function(t){clearTimeout(t)},l=window.IntersectionObserver&&new window.IntersectionObserver(t=>{t.forEach(t=>{var{intersectionRatio:e,target:link}=t;e<=0||link.__prefetch()})});e.a={name:"NuxtLink",extends:n.a.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}},mounted(){this.prefetch&&!this.noPrefetch&&(this.handleId=o(this.observe,{timeout:2e3}))},beforeDestroy(){c(this.handleId),this.__observed&&(l.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe(){l&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetchLink.bind(this),l.observe(this.$el),this.__observed=!0)},shouldPrefetch(){return this.getPrefetchComponents().length>0},canPrefetch(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(t=>t.components.default).filter(t=>"function"==typeof t&&!t.options&&!t.__prefetched)},prefetchLink(){if(this.canPrefetch()){l.unobserve(this.$el);var t=this.getPrefetchComponents();for(var e of t){var r=e();r instanceof Promise&&r.catch(()=>{}),e.__prefetched=!0}}}}}},57:function(t,e,r){"use strict";e.a={}},59:function(t,e,r){r(10);var n=r(158);function o(){return(o=n((function*(){if(!1 in navigator)throw new Error("serviceWorker is not supported in current browser!");var{Workbox:t}=yield r.e(6).then(r.bind(null,162)),e=new t("/sw.js",{scope:"/"});return yield e.register(),e}))).apply(this,arguments)}window.$workbox=function(){return o.apply(this,arguments)}().catch(t=>{})}},[[102,3,1,4]]]);