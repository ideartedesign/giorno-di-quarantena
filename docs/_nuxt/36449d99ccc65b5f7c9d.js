(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{243:function(t,e,r){var content=r(265);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("193ac4e8",content,!0,{sourceMap:!1})},244:function(t,e,r){var content=r(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("26c51eea",content,!0,{sourceMap:!1})},264:function(t,e,r){"use strict";var n=r(243);r.n(n).a},265:function(t,e,r){(e=r(38)(!1)).push([t.i,".page[data-v-0d9804b5]{display:flex;flex:1 1 100%;flex-direction:column;justify-content:center;width:100%}",""]),t.exports=e},266:function(t,e,r){"use strict";var n=r(244);r.n(n).a},267:function(t,e,r){(e=r(38)(!1)).push([t.i,".page .articles[data-v-0d9804b5]{display:flex;flex-direction:column;width:100%;margin:24px auto}",""]),t.exports=e},283:function(t,e,r){"use strict";r.r(e);r(17),r(43),r(109),r(49),r(13);var n=r(104);var o=r(148);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r(32);var l=r(6),d=r(108),m={name:"notizie",components:{notizia:Object(d.a)((function(){return r.e(13).then(r.bind(null,286))}))},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app.$axios,e.prev=1,n=[{urlToImage:"https://www.google.com/covid19/mobility/static/image.png",title:"Scopri come la tua community si muove in modo diverso a causa del COVID-19",description:" Google Maps potrebbe essere uno strumento utile per prendere decisioni critiche per affrontare il virus: queste relazioni sulla mobilità della comunità hanno lo scopo di fornire spunti su ciò che è cambiato in risposta alle politiche volte a combattere COVID-19. I rapporti tracciano nel tempo le tendenze di movimento per area geografica, attraverso diverse categorie di luoghi come negozi e attività ricreative, generi alimentari e farmacie, parchi, stazioni di transito, luoghi di lavoro e residenziali.",publishedAt:"2020-03-29",url:"https://www.gstatic.com/covid19/mobility/2020-03-29_IT_Mobility_Report_en.pdf"}],e.next=5,r.$get("/top-headlines",{params:{q:"COVID",from:"2020-04-01",sortBy:"publishedAt",country:"it",apiKey:"9cb49b6191fa452ab24f301c11e6b517",pageSize:20,page:1}});case 5:return o=e.sent,l=o.articles,e.next=9,r.$get("/everything",{params:{q:"COVID",from:"2020-04-01",sortBy:"publishedAt",language:"it",apiKey:"9cb49b6191fa452ab24f301c11e6b517",pageSize:10,page:1}});case 9:return d=e.sent,m=d.articles,n.push.apply(n,c(l||[]).concat(c(m||[]))),e.abrupt("return",{totalResults:n.length,totalArticles:n});case 15:e.prev=15,e.t0=e.catch(1),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))()},data:function(){return{totalResults:0,totalArticles:[]}},head:function(){return{titleTemplate:"Articoli e notizie - %s",link:[{once:!0,hid:"preconnect-corona-api",rel:"preconnect",href:"https://newsapi.org",crossorigin:!0}]}},jsonld:function(){return this.totalArticles.length?{"@context":"http://schema.org","@type":"ItemList",itemListElement:this.totalArticles.map((function(t,e){return{"@type":"ListItem",position:e+1,url:t.url,name:t.title,image:t.urlToImage,description:t.description}}))}:null}},f=(r(264),r(266),r(40)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"page container"},[t.totalArticles.length?r("div",{staticClass:"totalArticles"},t._l(t.totalArticles,(function(t){return r("notizia",{key:t.id,attrs:{item:t}})})),1):t._e(),r("div",{staticClass:"actions"},[r("h1",[t._v(t._s(t.totalResults)+" Articoli e notizie")]),r("a",{staticClass:"btn margin padding",attrs:{title:"Powered by News API",rel:"noopener",href:"https://newsapi.org/",target:"_blank"}},[t._v(" Powered by News API ")])])])}),[],!1,null,"0d9804b5",null);e.default=component.exports}}]);