(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{212:function(t,e,o){var content=o(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("74e4b40c",content,!0,{sourceMap:!1})},239:function(t,e,o){"use strict";var n=o(212);o.n(n).a},240:function(t,e,o){(e=o(25)(!1)).push([t.i,'.notizia[data-v-d865c0a0]{position:relative;margin:16px 0;padding:16px;overflow:hidden;text-align:justify;border-radius:16px;box-shadow:-16px -16px 32px 0 #fff,16px 16px 32px 0 #242529;box-shadow:-16px -16px 32px 0 var(--color-box-shadow-start,#fff),16px 16px 32px 0 var(--color-box-shadow-end,#242529);transition:all .5s ease;transition:var(--transition,all var(--duration,.5s) var(--timing,ease))}.notizia__content[data-v-d865c0a0],.notizia__footer[data-v-d865c0a0],.notizia__header[data-v-d865c0a0]{position:relative;z-index:1;display:flex;flex:1 1 100%;flex-direction:row;align-items:center;justify-content:space-between;padding:12px 0}.notizia__img[data-v-d865c0a0]{position:absolute;top:0;right:0;left:0;display:block}.notizia__img img[data-v-d865c0a0]{width:100%;height:auto}.notizia__img__container[data-v-d865c0a0]{position:relative;top:0;right:0;left:0;z-index:0;margin:-16px -16px 0;padding-top:56.25%;overflow:hidden;font-size:0;text-align:center}.notizia__img__container--loading[data-v-d865c0a0]:after{position:absolute;top:calc(50% - 12px);right:0;bottom:0;left:calc(50% - 12px);z-index:1;display:block;width:24px;height:24px;background-color:#fff;background-color:var(--color-text,#fff);border-radius:50%;-webkit-animation:rotate-data-v-d865c0a0 2.4s cubic-bezier(0,.2,.8,1) infinite;animation:rotate-data-v-d865c0a0 2.4s cubic-bezier(0,.2,.8,1) infinite;content:"";mix-blend-mode:difference}.notizia__title[data-v-d865c0a0]{font-weight:700;font-size:1.18rem}.notizia__badge[data-v-d865c0a0]{display:inline-block;width:8px;height:8px;margin:0 8px;vertical-align:middle;background-color:#fff;background-color:var(--color-text,#fff);border-radius:50%}.notizia__badge--type-highlight[data-v-d865c0a0]{background-color:#27ae60}.notizia__badge--type-top[data-v-d865c0a0]{background-color:#2980b9}.notizia__content[data-v-d865c0a0]{flex-direction:column}.notizia__footer[data-v-d865c0a0]{border-top:1px solid #fff;border-top:1px solid var(--color-text,#fff)}@-webkit-keyframes rotate-data-v-d865c0a0{0%,to{-webkit-animation-timing-function:cubic-bezier(.5,0,1,.5);animation-timing-function:cubic-bezier(.5,0,1,.5)}0%{transform:rotateY(0deg)}50%{transform:rotateY(5turn);-webkit-animation-timing-function:cubic-bezier(0,.5,.5,1);animation-timing-function:cubic-bezier(0,.5,.5,1)}to{transform:rotateY(10turn)}}@keyframes rotate-data-v-d865c0a0{0%,to{-webkit-animation-timing-function:cubic-bezier(.5,0,1,.5);animation-timing-function:cubic-bezier(.5,0,1,.5)}0%{transform:rotateY(0deg)}50%{transform:rotateY(5turn);-webkit-animation-timing-function:cubic-bezier(0,.5,.5,1);animation-timing-function:cubic-bezier(0,.5,.5,1)}to{transform:rotateY(10turn)}}',""]),t.exports=e},247:function(t,e,o){"use strict";o.r(e);var n={name:"notizia",inheritAttrs:!1,props:{item:{type:Object,required:!0}},data:()=>({loading:!0})},r=(o(239),o(27)),d=Object(r.a)(n,(function(){var t,e=this,o=e.$createElement,n=e._self._c||o;return n("article",{staticClass:"notizia"},[e.item.urlToImage?n("div",{staticClass:"notizia__img__container",class:{"notizia__img__container--loading":e.loading}},[n("a",{staticClass:"notizia__img",attrs:{href:e.item.url?e.item.url:"#",title:e.item.title,rel:"noopener",target:"_blank"}},[n("img",{attrs:{src:e.item.urlToImage,alt:e.item.title,loading:"lazy"},on:{load:function(t){e.loading=!1}}})])]):e._e(),n("header",{staticClass:"notizia__header"},[e.item.title?n("h2",{staticClass:"notizia__title",domProps:{textContent:e._s(e.item.title)}}):e._e()]),e.item.description?n("p",{staticClass:"notizia__content",domProps:{textContent:e._s(e.item.description)}}):e._e(),e.item.publishedAt?n("footer",{staticClass:"notizia__footer"},[n("div",{staticClass:"notizia__meta"},[e.item.type?n("i",{staticClass:"notizia__badge",class:(t={},t["notizia__badge--type-"+e.item.type]=e.item.type,t),attrs:{title:"Notizia verificata"}}):e._e(),e.item.publishedAt?n("time",{attrs:{datetime:e.$options.filters.date(e.item.publishedAt)}},[n("small",{staticClass:"notizia__date",domProps:{textContent:e._s(e.$options.filters.date(e.item.publishedAt))}})]):e._e()]),e.item.url?n("a",{attrs:{href:e.item.url,title:"Leggi di più",rel:"noopener",target:"_blank"}},[e._v(" leggi di più > ")]):e._e()]):e._e()])}),[],!1,null,"d865c0a0",null).exports;e.default=d}}]);