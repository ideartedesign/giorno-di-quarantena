(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{207:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("2a7217fa",content,!0,{sourceMap:!1})},208:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5cb61b88",content,!0,{sourceMap:!1})},229:function(t,e,n){"use strict";var o=n(207);n.n(o).a},230:function(t,e,n){(e=n(25)(!1)).push([t.i,".page[data-v-e36b43ba]{display:flex;flex:1 1 100%;flex-direction:column;justify-content:center;width:100%}",""]),t.exports=e},231:function(t,e,n){"use strict";var o=n(208);n.n(o).a},232:function(t,e,n){(e=n(25)(!1)).push([t.i,".page .articles[data-v-e36b43ba]{display:flex;flex-direction:column;width:100%;margin:24px auto}",""]),t.exports=e},252:function(t,e,n){"use strict";n.r(e);n(10);var o=n(5),r=n(67),c={name:"notizie",components:{notizia:Object(r.a)(()=>n.e(13).then(n.bind(null,247)))},asyncData:t=>Object(o.a)((function*(){var{app:{$axios:e}}=t;try{var{totalResults:n,articles:o}=yield e.$get("/top-headlines",{params:{q:"COVID",from:"2020-04-01",sortBy:"publishedAt",country:"it",apiKey:"9cb49b6191fa452ab24f301c11e6b517",pageSize:20,page:1}});return{totalResults:n,articles:o}}catch(t){console.error(t)}}))(),data:()=>({totalResults:0,articles:[]}),head:()=>({titleTemplate:"Notizie - %s",link:[{once:!0,hid:"preconnect-corona-api",rel:"preconnect",href:"https://newsapi.org",crossorigin:!0}]})},l=(n(229),n(231),n(27)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page container"},[t.articles.length?n("div",{staticClass:"articles"},t._l(t.articles,(function(t){return n("notizia",{key:t.id,attrs:{item:t}})})),1):t._e(),n("div",{staticClass:"actions"},[n("h1",[t._v(t._s(t.totalResults)+" Articoli")]),n("a",{staticClass:"btn margin padding outline rounded",attrs:{title:"Powered by News API",rel:"noopener",href:"https://newsapi.org/",target:"_blank"}},[t._v(" scopri di più > ")])])])}),[],!1,null,"e36b43ba",null);e.default=component.exports}}]);