(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{239:function(e,t,r){var content=r(257);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("537906de",content,!0,{sourceMap:!1})},240:function(e,t,r){var content=r(259);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("098b9e60",content,!0,{sourceMap:!1})},254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(255),o=e=>e.json();t.NovelCovid=class{constructor(){this.baseURL="https://corona.lmao.ninja"}async all(){return n.default(`${this.baseURL}/all`).then(o)}async yesterday(e,t){return e?n.default(`${this.baseURL}/yesterday/${e}`).then(o):!e&&t?n.default(`${this.baseURL}/yesterday?sort=${t}`).then(o):n.default(`${this.baseURL}/yesterday`).then(o)}async countryNames(){return(await this.countries()).map(e=>e.country)}async countries(e,t){return e?n.default(`${this.baseURL}/countries/${e}`).then(o):!e&&t?n.default(`${this.baseURL}/countries?sort=${t}`).then(o):n.default(`${this.baseURL}/countries`).then(o)}async states(){return n.default(`${this.baseURL}/states`).then(o)}async historical(e,t,r){return!t||r||e?t&&r&&!e?n.default(`${this.baseURL}/v2/historical/${t}/${r}`).then(o):e?n.default(`${this.baseURL}/v2/historical/all`).then(o):n.default(`${this.baseURL}/v2/historical`).then(o):n.default(`${this.baseURL}/v2/historical/${t}`).then(o)}async jhucsse(e,t){return e&&!t?n.default(`${this.baseURL}/v2/jhucsse/counties`).then(o):e&&t?n.default(`${this.baseURL}/v2/jhucsse/counties/${t}`).then(o):n.default(`${this.baseURL}/v2/jhucsse`).then(o)}}},255:function(e,t,r){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,t.default=n.fetch.bind(n),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},256:function(e,t,r){"use strict";var n=r(239);r.n(n).a},257:function(e,t,r){(t=r(38)(!1)).push([e.i,".page[data-v-29aece4c]{display:flex;flex:1 1 100%;flex-direction:column;justify-content:center;width:100%}",""]),e.exports=t},258:function(e,t,r){"use strict";var n=r(240);r.n(n).a},259:function(e,t,r){(t=r(38)(!1)).push([e.i,".page .title[data-v-29aece4c]{font-weight:bolder;font-size:45px}.page .subtitle[data-v-29aece4c]{margin:8px auto;color:#27ae60;font-weight:700;font-size:25px}.page .countries[data-v-29aece4c]{display:flex;flex-direction:column;width:100%;margin:24px auto}",""]),e.exports=t},289:function(e,t,r){"use strict";r.r(t);r(16),r(24),r(25),r(49),r(50),r(41),r(42),r(32),r(13),r(51),r(26),r(52);var n=r(15),o=(r(33),r(6)),c=r(254),l=r(108);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=new c.NovelCovid,v={name:"io-resto-positivo",components:{"country-item":Object(l.a)((function(){return r.e(11).then(r.bind(null,285))}))},asyncData:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){var t,r,n,o,c,l,d,v,m,y,D,w,_,j,$,P;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e){return Object.keys(e).map((function(t){return e[t]}))},r=function(e,t,r){return e/(t-r)*100},n=function(e){var t=e.map((function(e){var t=e.country;return h.historical(null,t)}));return Promise.all(t)},o=function(e){var t=[];return e.forEach((function(e){var r,n=[];if(null==e||null===(r=e.timeline)||void 0===r?void 0:r.deaths){for(var o in e.timeline.deaths)Object.prototype.hasOwnProperty.call(e.timeline.deaths,o)&&n.push(e.timeline.deaths[o]);t.push(n.slice(n.length-7))}})),t},c=function(e,n,o){var c=[];return e.forEach((function(e,i){var l,d,h=0;n&&n[i]&&(n[i].reverse().forEach((function(e,t){e===n[i][0]&&0!==t&&e!==n[i][t+1]&&(h=t+1)})),o.forEach((function(n){if(e.country&&n.country&&e.country.toUpperCase()===n.country.toUpperCase()){var o,c,f,h=t(null!==(o=null==n||null===(c=n.timeline)||void 0===c?void 0:c.deaths)&&void 0!==o?o:[])[t(null!==(f=n.timeline.deaths)&&void 0!==f?f:[]).length-1],v=t(n.timeline.cases)[t(n.timeline.cases).length-1],m=t(n.timeline.recovered)[t(n.timeline.recovered).length-1];l=r(m,v,h),d=Math.abs(e.recoveredPercent-l)}})),c.push(f({},e,{historicalData:n[i],daysWithoutDeaths:h,recoveredYesterday:l,recoveredDifference:d})))})),c},l=function(data,e){var t=new Date(data.updated).toLocaleString("it-IT");return f({},data,{recoveredPercent:r(data.recovered,data.cases,data.deaths),updated:t,mostRecovered:e.sort((function(a,b){return b.recoveredPercent-a.recoveredPercent})).slice(0,3),noDeaths:e.filter((function(e){return e.daysWithoutDeaths>0&&0===e.todayDeaths})),criticalLessThanFive:e.filter((function(e){return e.nonCriticalPercent>95})).length/e.length*100,recoveredMostDifference:e.filter((function(e){return e.recoveredYesterday>0&&e.recoveredYesterday!==e.recoveredPercent})).sort((function(a,b){return b.recoveredDifference-a.recoveredDifference}))[0]})},d=function(data){var e=data.filter((function(e){return"World"!==e.country})),t=[];return e.forEach((function(e){if(e.cases>1e3){var n=r(e.recovered,e.cases,e.deaths||0),o=r(e.critical,e.cases,e.deaths||0),c=100-o,l=r(e.active,e.cases,e.deaths||0);t.push(f({},e,{recoveredPercent:n,criticalPercent:o,nonCriticalPercent:c,activePercent:l}))}})),t},e.prev=1,e.next=4,h.countries();case 4:return v=e.sent,m=d(v),e.next=8,n(m);case 8:return y=e.sent,D=o(y),w=c(m,D,y),e.next=13,h.all();case 13:return _=e.sent,j=l(_,w),$=w.slice().sort((function(a,b){return a.recoveredPercent<b.recoveredPercent?1:-1})),P=j,e.abrupt("return",{countriesData:$,globalData:P});case 20:e.prev=20,e.t0=e.catch(1),console.error(e.t0);case 23:case"end":return e.stop()}}),e,null,[[1,20]])})))()},data:function(){return{countriesData:[],globalData:{}}},head:function(){return{titleTemplate:"Io resto positivo - %s",link:[{once:!0,hid:"preconnect-corona-api",rel:"preconnect",href:"https://corona.lmao.ninja",crossorigin:!0}]}},jsonld:function(){var e=this;return this.countriesData.length?{"@context":"http://schema.org","@type":"ItemList",itemListElement:this.countriesData.map((function(t,r){return{"@type":"ListItem",position:r+1,image:t.countryInfo&&t.countryInfo.flag,name:t.country,descriptions:"Recuperate ".concat(e.$options.filters.number(t.recovered)," persone dal coronavirus")}}))}:null}},m=(r(256),r(258),r(40)),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"page container"},[e.globalData?r("div",{staticClass:"global-data"},[e.globalData.cases?r("h2",{staticClass:"title"},[e._v(" Casi totali: "+e._s(e._f("number")(e.globalData.cases))+" ")]):e._e(),e.globalData.recovered?r("h3",{staticClass:"subtitle"},[e._v(" Recuperati: "+e._s(e._f("number")(e.globalData.recovered))+" ↑ ("+e._s(e._f("number")(e.globalData.recoveredPercent))+"%) ")]):e._e(),e.globalData.updated?r("h6",{staticClass:"date"},[r("time",{attrs:{datetime:e.$options.filters.date(e.globalData.updated)}},[r("small",[r("em",[r("strong",[e._v("Aggiornato al")]),e._v(": "+e._s(e._f("date")(e.globalData.updated))+" ")])])])]):e._e()]):e._e(),e.countriesData.length?r("div",{staticClass:"countries"},[e._l(e.countriesData,(function(e){return r("country-item",{key:e.country,attrs:{item:e}})})),e._m(0)],2):e._e(),e._m(1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"margin"},[t("small",[t("em",[this._v(" N.B.: sono mostrati solo gli stati con più di 1000 casi, ordinati per tasso di recupero ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"actions"},[t("h1",[this._v("#IoRestoPositivo")]),t("a",{staticClass:"btn margin padding outline rounded",attrs:{title:"Corona virus API Data",rel:"noopener",href:"https://www.worldometers.info/coronavirus/",target:"_blank"}},[this._v(" scopri di più > ")])])}],!1,null,"29aece4c",null);t.default=component.exports}}]);