(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{207:function(t,e,o){var content=o(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("a442d1ca",content,!0,{sourceMap:!1})},208:function(t,e,o){var content=o(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("886f518a",content,!0,{sourceMap:!1})},229:function(t,e,o){"use strict";var r=o(207);o.n(r).a},230:function(t,e,o){(e=o(25)(!1)).push([t.i,".page[data-v-2dfadf7a]{display:flex;flex:1 1 100%;flex-direction:column;justify-content:center;width:100%}",""]),t.exports=e},231:function(t,e,o){"use strict";var r=o(208);o.n(r).a},232:function(t,e,o){(e=o(25)(!1)).push([t.i,".page .articles[data-v-2dfadf7a]{display:flex;flex-direction:column;width:100%;margin:24px auto}",""]),t.exports=e},252:function(t,e,o){"use strict";o.r(e);o(125),o(22),o(10),o(28);var r=o(5),n=o(67),l={name:"notizie",components:{notizia:Object(n.a)(()=>o.e(13).then(o.bind(null,247)))},asyncData:t=>Object(r.a)((function*(){var{app:{$axios:e}}=t;try{var o=[{urlToImage:"https://www.google.com/covid19/mobility/static/image.png",title:"Scopri come la tua community si muove in modo diverso a causa del COVID-19",description:" Google Maps potrebbe essere uno strumento utile per prendere decisioni critiche per affrontare il virus: queste relazioni sulla mobilità della comunità hanno lo scopo di fornire spunti su ciò che è cambiato in risposta alle politiche volte a combattere COVID-19. I rapporti tracciano nel tempo le tendenze di movimento per area geografica, attraverso diverse categorie di luoghi come negozi e attività ricreative, generi alimentari e farmacie, parchi, stazioni di transito, luoghi di lavoro e residenziali.",publishedAt:"2020-03-29",url:"https://www.gstatic.com/covid19/mobility/2020-03-29_IT_Mobility_Report_en.pdf"}],{articles:r}=yield e.$get("/top-headlines",{params:{q:"COVID",from:"2020-04-01",sortBy:"publishedAt",country:"it",apiKey:"9cb49b6191fa452ab24f301c11e6b517",pageSize:20,page:1}});return o.push(...r||[]),{totalResults:o.length,totalArticles:o}}catch(t){console.error(t)}}))(),data:()=>({totalResults:0,totalArticles:[]}),head:()=>({titleTemplate:"Notizie - %s",link:[{once:!0,hid:"preconnect-corona-api",rel:"preconnect",href:"https://newsapi.org",crossorigin:!0}]}),jsonld(){return this.totalArticles.length?{"@context":"http://schema.org","@type":"ItemList",itemListElement:this.totalArticles.map((t,e)=>({"@type":"ListItem",position:e+1,url:t.url,name:t.title,image:t.urlToImage,description:t.description}))}:null}},c=(o(229),o(231),o(27)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"page container"},[t.totalArticles.length?o("div",{staticClass:"totalArticles"},t._l(t.totalArticles,(function(t){return o("notizia",{key:t.id,attrs:{item:t}})})),1):t._e(),o("div",{staticClass:"actions"},[o("h1",[t._v(t._s(t.totalResults)+" Articoli")]),o("a",{staticClass:"btn margin padding outline rounded",attrs:{title:"Powered by News API",rel:"noopener",href:"https://newsapi.org/",target:"_blank"}},[t._v(" scopri di più > ")])])])}),[],!1,null,"2dfadf7a",null);e.default=component.exports}}]);