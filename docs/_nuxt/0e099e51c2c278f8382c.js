(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{203:function(e,t,r){var content=r(222);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("57c27358",content,!0,{sourceMap:!1})},204:function(e,t,r){var content=r(224);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("3bbe1416",content,!0,{sourceMap:!1})},218:function(e,t,r){"use strict";var n=r(13),o=r(124),c=[].reverse,l=[1,2];n({target:"Array",proto:!0,forced:String(l)===String(l.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),c.call(this)}})},219:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(220),o=e=>e.json();class c{constructor(){this.baseURL="https://disease.sh/v2"}async all(e){return e&&e.yesterday?n.default(`${this.baseURL}/all?yesterday=${e.yesterday}`).then(o):n.default(`${this.baseURL}/all`).then(o)}async countryNames(){return(await this.countries()).map(e=>e.country)}async countries(e,t){if(e&&!t)return n.default(`${this.baseURL}/countries/${e}`).then(o);if(!e&&t){if(t.sort&&!t.yesterday&&!t.strict)return n.default(`${this.baseURL}/countries?sort=${t.sort}`).then(o);if(t.sort&&t.yesterday&&!t.strict)return n.default(`${this.baseURL}/countries?yesterday=${t.yesterday}&sort=${t.sort}`).then(o);if(!t.sort&&t.yesterday&&!t.strict)return n.default(`${this.baseURL}/countries?yesterday=${t.yesterday}`).then(o)}else if(e&&t){if(!t.sort&&t.yesterday&&!t.strict)return n.default(`${this.baseURL}/countries/${e}?yesterday=${t.yesterday}`).then(o);if(!t.sort&&t.yesterday&&t.strict)return n.default(`${this.baseURL}/countries/${e}?yesterday=${t.yesterday}&strict=${t.strict}`).then(o);if(!t.sort&&!t.yesterday&&t.strict)return n.default(`${this.baseURL}.countries/${e}?strict=${t.strict}`).then(o)}return n.default(`${this.baseURL}/countries`).then(o)}async states(e,t){return e&&!t?n.default(`${this.baseURL}/states/${e}`).then(o):!e&&t?t.sort&&!t.yesterday?n.default(`${this.baseURL}/states?sort=${t.sort}`).then(o):!t.sort&&t.yesterday?n.default(`${this.baseURL}/states?yesterday=${t.yesterday}`).then(o):n.default(`${this.baseURL}/states?sort=${t.sort}&yesterday=${t.yesterday}`).then(o):e&&t&&t.yesterday&&!t.sort?n.default(`${this.baseURL}/states/${e}?yesterday=${t.yesterday}`).then(o):n.default(`${this.baseURL}/states`).then(o)}async continents(e,t){if(e&&!t)return n.default(`${this.baseURL}/continents/${e}`).then(o);if(!e&&t)return!t.sort||t.yesterday||t.strict?t.sort||!t.yesterday||t.strict?n.default(`${this.baseURL}/continents?sort=${t.sort}&yesterday=${t.yesterday}`).then(o):n.default(`${this.baseURL}/continents?yesterday=${t.yesterday}`).then(o):n.default(`${this.baseURL}/continents?sort=${t.sort}`).then(o);if(e&&t){if(!t.sort&&t.yesterday&&!t.strict)return n.default(`${this.baseURL}/continents/${e}?yesterday=${t.yesterday}`).then(o);if(!t.sort&&t.yesterday&&t.strict)return n.default(`${this.baseURL}/continents/${e}?yesterday=${t.yesterday}&strict=${t.strict}`).then(o);if(!t.sort&&!t.yesterday&&t.strict)return n.default(`${this.baseURL}/continents/${e}?strict=${t.strict}`).then(o)}return n.default(`${this.baseURL}/continents`).then(o)}async historicalUSA(e){return e?n.default(`${this.baseURL}/historical/usacounties/${e}`).then(o):n.default(`${this.baseURL}/historical/usacounties`).then(o)}async historical(e,t,r){return!t||r||e?t&&r&&!e?n.default(`${this.baseURL}/historical/${t}/${r}`).then(o):e?n.default(`${this.baseURL}/historical/all`).then(o):n.default(`${this.baseURL}/historical`).then(o):n.default(`${this.baseURL}/historical/${t}`).then(o)}async jhucsse(e,t){return e&&!t?n.default(`${this.baseURL}/jhucsse/counties`).then(o):e&&t?n.default(`${this.baseURL}/jhucsse/counties/${t}`).then(o):n.default(`${this.baseURL}/jhucsse`).then(o)}async nytState(e){return e?n.default(`${this.baseURL}/nyt/states/${e}`).then(o):n.default(`${this.baseURL}/nyt/states`).then(o)}async nytCounties(e){return e?n.default(`${this.baseURL}/nyt/counties/${e}`).then(o):n.default(`${this.baseURL}/nyt/counties`).then(o)}async nytUSA(){return n.default(`${this.baseURL}/nyt/usa`).then(o)}}t.NovelCovid=c,t.default=c},220:function(e,t,r){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,t.default=n.fetch.bind(n),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},221:function(e,t,r){"use strict";var n=r(203);r.n(n).a},222:function(e,t,r){(t=r(25)(!1)).push([e.i,".page[data-v-3095aa74]{display:flex;flex:1 1 100%;flex-direction:column;justify-content:center;width:100%}",""]),e.exports=t},223:function(e,t,r){"use strict";var n=r(204);r.n(n).a},224:function(e,t,r){(t=r(25)(!1)).push([e.i,".page .title[data-v-3095aa74]{font-weight:bolder;font-size:45px}.page .subtitle[data-v-3095aa74]{margin:8px auto;color:#27ae60;font-weight:700;font-size:25px}.page .countries[data-v-3095aa74]{display:flex;flex-direction:column;width:100%;margin:24px auto}",""]),e.exports=t},250:function(e,t,r){"use strict";r.r(t);r(22),r(218),r(123),r(125),r(10),r(50),r(122),r(28);var n=r(9),o=r(5),c=r(219),l=r(67);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=new c.NovelCovid,y={name:"io-resto-positivo",components:{"country-item":Object(l.a)(()=>r.e(11).then(r.bind(null,246)))},asyncData:()=>Object(o.a)((function*(){var e,t,r,n,o,c=e=>Object.keys(e).map(t=>e[t]),l=(e,t,r)=>e/(t-r)*100;try{var d=yield f.countries(),y=(n=(d||[]).filter(e=>"World"!==e.country),o=[],n.forEach(e=>{if(e.cases>1e3){var t=l(e.recovered,e.cases,e.deaths||0),r=l(e.critical,e.cases,e.deaths||0),n=100-r,c=l(e.active,e.cases,e.deaths||0);o.push(h({},e,{recoveredPercent:t,criticalPercent:r,nonCriticalPercent:n,activePercent:c}))}}),o),v=yield(e=>{var t=e.map(e=>{var{country:t}=e;return f.historical(null,t).catch(console.error)});return Promise.all(t)})(y),$=(e=>{var t=[];return e.forEach(e=>{var r,n=[];if(null==e||null===(r=e.timeline)||void 0===r?void 0:r.deaths)for(var o in e.timeline.deaths)Object.prototype.hasOwnProperty.call(e.timeline.deaths,o)&&n.push(e.timeline.deaths[o]);t.push(n.slice(n.length-7))}),t})(v),m=(e=$,t=v,r=[],y.forEach((n,i)=>{var o,d,f=0;e[i]&&e[i].reverse().forEach((t,r)=>{t===e[i][0]&&0!==r&&t!==e[i][r+1]&&(f=r+1)}),t.forEach(e=>{if(n.country&&e.country&&n.country.toUpperCase()===e.country.toUpperCase()){var t,r,h,f=c(null!==(t=null==e||null===(r=e.timeline)||void 0===r?void 0:r.deaths)&&void 0!==t?t:[])[c(null!==(h=e.timeline.deaths)&&void 0!==h?h:[]).length-1],y=c(e.timeline.cases)[c(e.timeline.cases).length-1],v=c(e.timeline.recovered)[c(e.timeline.recovered).length-1];o=l(v,y,f),d=Math.abs(n.recoveredPercent-o)}}),r.push(h({},n,{historicalData:e[i],daysWithoutDeaths:f,recoveredYesterday:o,recoveredDifference:d}))}),r),R=((data,e)=>{var t=new Date(data.updated);return h({},data,{recoveredPercent:l(data.recovered,data.cases,data.deaths),updated:t,mostRecovered:e.sort((a,b)=>b.recoveredPercent-a.recoveredPercent).slice(0,3),noDeaths:e.filter(e=>e.daysWithoutDeaths>0&&0===e.todayDeaths),criticalLessThanFive:e.filter(e=>e.nonCriticalPercent>95).length/e.length*100,recoveredMostDifference:e.filter(e=>e.recoveredYesterday>0&&e.recoveredYesterday!==e.recoveredPercent).sort((a,b)=>b.recoveredDifference-a.recoveredDifference)[0]})})(yield f.all(),m);return{countriesData:m.slice().sort((a,b)=>a.recoveredPercent<b.recoveredPercent?1:-1),globalData:R}}catch(e){console.error(e)}}))(),data:()=>({countriesData:[],globalData:{},search:""}),computed:{searchToUppercase(){return this.search.toUpperCase()},dataFiltered(){return this.search?this.countriesData.filter(e=>{var{country:t}=e;return t.toUpperCase().includes(this.searchToUppercase)}):this.countriesData}},head:()=>({titleTemplate:"Io resto positivo - %s",link:[{once:!0,hid:"preconnect-corona-api",rel:"preconnect",href:"https://corona.lmao.ninja",crossorigin:!0}]}),jsonld(){return this.countriesData.length?{"@context":"http://schema.org","@type":"ItemList",itemListElement:this.countriesData.map((e,t)=>({"@type":"ListItem",position:t+1,image:e.countryInfo&&e.countryInfo.flag,name:e.country,descriptions:"Recuperate ".concat(this.$options.filters.number(e.recovered)," persone dal coronavirus")}))}:null}},v=(r(221),r(223),r(27)),component=Object(v.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"page container"},[e.globalData?r("div",{staticClass:"global-data"},[e.globalData.cases?r("h2",{staticClass:"title"},[e._v(" Casi totali: "+e._s(e._f("number")(e.globalData.cases))+" ")]):e._e(),e.globalData.recovered?r("h3",{staticClass:"subtitle"},[e._v(" Recuperati: "+e._s(e._f("number")(e.globalData.recovered))+" ↑ ("+e._s(e._f("number")(e.globalData.recoveredPercent))+"%) ")]):e._e(),e.globalData.updated?r("h6",{staticClass:"date"},[r("time",{attrs:{datetime:e.$options.filters.date(e.globalData.updated)}},[r("small",[r("em",[r("strong",[e._v("Aggiornato al")]),e._v(": "+e._s(e._f("date")(e.globalData.updated))+" ")])])])]):e._e(),r("div",{staticClass:"search_container"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text","aria-label":"Cerca",placeholder:"Cerca ..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})])]):e._e(),e.countriesData.length?r("div",{staticClass:"countries"},[e._l(e.dataFiltered,(function(e){return r("country-item",{key:e.country,attrs:{item:e}})})),e._m(0)],2):e._e(),e._m(1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"margin"},[t("small",[t("em",[this._v(" N.B.: sono mostrati solo gli stati con più di 1000 casi, ordinati per tasso di recupero ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"actions"},[t("h1",[this._v("#IoRestoPositivo")]),t("a",{staticClass:"btn margin padding outline rounded",attrs:{title:"Corona virus API Data",rel:"noopener",href:"https://www.worldometers.info/coronavirus/",target:"_blank"}},[this._v(" scopri di più > ")])])}],!1,null,"3095aa74",null);t.default=component.exports}}]);