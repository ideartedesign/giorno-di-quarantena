(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{182:function(t,e,o){var content=o(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("291c4802",content,!0,{sourceMap:!1})},203:function(t,e,o){"use strict";var r=o(182);o.n(r).a},204:function(t,e,o){(e=o(23)(!1)).push([t.i,".country-item[data-v-5f477ac1]{margin:16px 0;padding:8px 24px;overflow:hidden;text-align:left;border-radius:16px;box-shadow:-16px -16px 32px 0 #fff,16px 16px 32px 0 rgba(174,174,192,.4);box-shadow:-16px -16px 32px 0 var(--color-box-shadow-start,#fff),16px 16px 32px 0 var(--color-box-shadow-end,rgba(174,174,192,.4));transition:all .5s ease;transition:var(--transition,all var(--duration,.5s) var(--timing,ease))}.country-item__footer[data-v-5f477ac1],.country-item__header[data-v-5f477ac1],.country-item__meta[data-v-5f477ac1]{display:flex;flex:1 1 100%;flex-direction:row;align-items:center;padding:12px 0}.country-item__header__flag+.country-item__header__title[data-v-5f477ac1]{margin-left:16px}.country-item__header__title[data-v-5f477ac1]{line-height:1}.country-item__meta__col[data-v-5f477ac1]{flex-basis:33%;width:33%}.country-item__meta__col>*[data-v-5f477ac1]{margin:8px 0}.country-item__meta__col>h6[data-v-5f477ac1]{font-weight:700}.country-item__meta__col>p[data-v-5f477ac1]{min-height:36px}.country-item__badge[data-v-5f477ac1]{padding:3px;color:#fff;border-radius:6px}.country-item__footer[data-v-5f477ac1]{justify-content:space-between}.country-item--text-good[data-v-5f477ac1]{color:#e74c3c}.country-item--text-bad[data-v-5f477ac1]{color:#27ae60}.country-item--bg-good[data-v-5f477ac1]{background-color:#27ae60}.country-item--bg-bad[data-v-5f477ac1]{background-color:#e74c3c}",""]),t.exports=e},210:function(t,e,o){"use strict";o.r(e);var r={name:"country-item",inheritAttrs:!1,props:{item:{type:Object,required:!0}}},c=(o(203),o(25)),n=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"country-item"},[o("header",{staticClass:"country-item__header"},[t.item.countryInfo.flag?o("img",{staticClass:"country-item__header__flag",attrs:{src:t.item.countryInfo.flag,alt:"Flag of "+t.item.country,width:"36",height:"24",loading:"lazy"}}):t._e(),t.item.country?o("h2",{staticClass:"country-item__header__title",domProps:{textContent:t._s(t.item.country)}}):t._e()]),o("div",{staticClass:"country-item__meta"},[t.item.recoveredPercent?o("div",{staticClass:"country-item__meta__col"},[o("h6",[t._v("Recuperati:")]),o("p",{class:{"country-item--text-bad":t.item.recoveredPercent>t.item.recoveredYesterday,"country-item--text-good":t.item.recoveredPercent<=t.item.recoveredYesterday}},[t._v(" "+t._s(t._f("number")(t.item.recoveredPercent))+"% "),o("span",{domProps:{innerHTML:t._s(t.item.recoveredPercent>t.item.recoveredYesterday?"&#8593;":"&#8595;")}}),t._v(" ("+t._s(t._f("number")(t.item.recovered))+") ")])]):t._e(),t.item.activePercent?o("div",{staticClass:"country-item__meta__col"},[o("h6",[t._v("Casi attivi:")]),o("p",[t._v(" "+t._s(t._f("number")(t.item.active))+" ")])]):t._e(),t.item.cases?o("div",{staticClass:"country-item__meta__col"},[o("h6",[t._v("Casi totali:")]),o("p",{domProps:{textContent:t._s(t.$options.filters.number(t.item.cases))}})]):t._e()]),0===t.item.todayDeaths&&0===t.item.todayCases||t.item.daysWithoutDeaths>1&&t.item.daysWithoutDeaths<7&&0===t.item.todayDeaths||0===t.item.todayDeaths&&t.item.todayCases>0?o("footer",{staticClass:"country-item__footer"},[0===t.item.todayDeaths&&0===t.item.todayCases?o("small",{staticClass:"country-item__badge country-item--bg-bad"},[t._v(" Nessun dato nuovo da ieri ")]):t._e(),t.item.daysWithoutDeaths>1&&t.item.daysWithoutDeaths<7&&0===t.item.todayDeaths?o("small",{staticClass:"country-item__badge  country-item--bg-good"},[t._v(" Nessuna morte segnalata negli scorsi "+t._s(t.item.daysWithoutDeaths)+" giorni! ")]):0===t.item.todayDeaths&&t.item.todayCases>0?o("small",{staticClass:"country-item__badge  country-item--bg-good"},[t._v(" Nessun deceduto registrato oggi! ")]):t._e()]):t._e()])}),[],!1,null,"5f477ac1",null).exports;e.default=n}}]);