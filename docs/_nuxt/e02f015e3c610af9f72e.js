(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{245:function(e,t,n){var content=n(269);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(39).default)("039bc0de",content,!0,{sourceMap:!1})},268:function(e,t,n){"use strict";var o=n(245);n.n(o).a},269:function(e,t,n){(t=n(38)(!1)).push([e.i,".page[data-v-7c44ddad]{display:flex;flex:1 1 100%;flex-direction:column;justify-content:center;width:100%}",""]),e.exports=t},291:function(e,t,n){"use strict";n.r(t);n(13);var o=n(108),d={name:"homepage",components:{countdown:Object(o.a)((function(){return n.e(10).then(n.bind(null,287))}))},data:function(){return{title:"Giorno di quarantena".toUpperCase(),value:Date.now(),timezone:{type:"+",value:2},END_DATE:"2020-05-03T00:00:00.000Z",START_DATE:"2020-03-09T00:00:00.000Z"}}},r=(n(268),n(40)),component=Object(r.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"page container"},[n("div",{staticClass:"margin--tb-32"},[n("countdown",{attrs:{"start-date":e.START_DATE,"end-date":e.END_DATE,disabled:"","distance-from-start":"","show-percentage-value":"","hide-days-label":"","hide-days-separator":"","hide-hours":"","hide-minutes":"","hide-seconds":"",type:"neomorphism"},scopedSlots:e._u([{key:"title",fn:function(){return[n("h1",{domProps:{textContent:e._s(e.title)}})]},proxy:!0}])})],1),n("countdown",{attrs:{timezone:e.timezone,"start-date":e.START_DATE,"end-date":e.END_DATE},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)}),[],!1,null,"7c44ddad",null);t.default=component.exports}}]);