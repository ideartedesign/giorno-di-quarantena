(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{200:function(t,e,n){var content=n(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("fe835b7c",content,!0,{sourceMap:!1})},205:function(t,e,n){"use strict";var o=n(8),r=n(4),l=n(74),d=n(15),c=n(10),h=n(21),f=n(146),_=n(48),m=n(5),v=n(75),x=n(49).f,y=n(22).f,w=n(11).f,N=n(206).trim,D=r.Number,S=D.prototype,L="Number"==h(v(S)),C=function(t){var e,n,o,r,l,d,c,code,h=_(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=N(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+h}for(d=(l=h.slice(2)).length,c=0;c<d;c++)if((code=l.charCodeAt(c))<48||code>r)return NaN;return parseInt(l,o)}return+h};if(l("Number",!D(" 0o1")||!D("0b1")||D("+0x1"))){for(var T,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(L?m((function(){S.valueOf.call(n)})):"Number"!=h(n))?f(new D(C(e)),n,E):C(e)},I=o?x(D):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;I.length>A;A++)c(D,T=I[A])&&!c(E,T)&&w(E,T,y(D,T));E.prototype=S,S.constructor=E,d(r,"Number",E)}},206:function(t,e,n){var o=n(14),r="["+n(207)+"]",l=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),c=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},207:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},208:function(t,e,n){"use strict";n(2)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},209:function(t,e,n){"use strict";var o=n(200);n.n(o).a},210:function(t,e,n){(e=n(33)(!1)).push([t.i,".countdown[data-v-ee274762]{display:flex;flex:0 1 auto;flex-direction:column;align-content:center;justify-content:center;width:100%;margin:0 auto}.countdown__header[data-v-ee274762]{font-weight:400;font-size:14px;line-height:17px;letter-spacing:2px;text-transform:uppercase}.countdown__outer[data-v-ee274762]{position:relative}.countdown__outer[data-v-ee274762],.countdown__progress[data-v-ee274762]{transition:all .5s ease;transition:var(--transition,all var(--duration,.5s) var(--timing,ease))}.countdown__progress[data-v-ee274762]{position:absolute;top:-16px;right:-16px;bottom:-16px;left:-16px;z-index:-1;overflow:hidden;border-radius:50%;box-shadow:-16px -16px 32px 0 #fff,16px 16px 32px 0 rgba(174,174,192,.4);box-shadow:-16px -16px 32px 0 var(--color-box-shadow-start,#fff),16px 16px 32px 0 var(--color-box-shadow-end,rgba(174,174,192,.4))}.countdown__progress svg[data-v-ee274762]{margin:-6px;transition:all .5s ease;transition:var(--transition,all var(--duration,.5s) var(--timing,ease));fill:rgba(51,51,51,.4);fill:var(--color-background,rgba(51,51,51,.4));stroke:#fff;stroke:var(--color-box-shadow-start,#fff);stroke-width:4px;stroke-dashoffset:0}.countdown__time[data-v-ee274762]{display:flex;flex:1 1 100%;flex-direction:row;width:100%}.countdown__time__slot[data-v-ee274762]{display:flex;flex:1 1 100%;flex-direction:column;width:100%}.countdown__time__slot span[data-v-ee274762]{display:inline-block}.countdown__time__slot>.number[data-v-ee274762]{font-size:48px;line-height:57px}.countdown__time__slot>.label[data-v-ee274762]{font-weight:400;font-size:16px;line-height:19px;text-transform:lowercase}.countdown--type-neomorphism .countdown__outer[data-v-ee274762]{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;min-width:375px;min-height:375px;margin:0 auto;border-radius:999999px;box-shadow:-16px -16px 32px 0 #fff,16px 16px 32px 0 rgba(174,174,192,.4);box-shadow:-16px -16px 32px 0 var(--color-box-shadow-start,#fff),16px 16px 32px 0 var(--color-box-shadow-end,rgba(174,174,192,.4))}.countdown--type-neomorphism .countdown__time__slot>.number[data-v-ee274762]{font-size:120px;line-height:144px}",""]),t.exports=e},212:function(t,e,n){"use strict";n.r(e);n(205),n(12),n(35),n(208);var o=n(69),main=n(147),r={name:"countdown",inheritAttrs:!1,props:{value:{type:[Number,Date,String],default:Date.now()},startDate:{type:[Number,Date,String],default:null},endDate:{type:[Number,Date,String],default:null},milliseconds:{type:[String,Number],default:1e3},locale:{type:Object,default:function(){return{DAY_PLURAL:"giorni",DAY_SINGULAR:"giorni",HOUR_PLURAL:"ore",HOUR_SINGULAR:"ore",MINUTE_PLURAL:"minuti",MINUTE_SINGULAR:"minuti",SECOND_PLURAL:"secondi",SECOND_SINGULAR:"secondi"}}},separator:{type:String,default:":"},type:{type:String,default:null},disabled:{type:Boolean,default:!1},distanceFromStart:{type:Boolean,default:!1},distanceEndFromStart:{type:Boolean,default:!1},showPercentage:{type:Boolean,default:!1},hideDays:{type:Boolean,default:!1},hideHours:{type:Boolean,default:!1},hideMinutes:{type:Boolean,default:!1},hideSeconds:{type:Boolean,default:!1},hideDaysSeparator:{type:Boolean,default:!1},hideHoursSeparator:{type:Boolean,default:!1},hideMinutesSeparator:{type:Boolean,default:!1},hideDaysLeadingZero:{type:Boolean,default:!1},hideHoursLeadingZero:{type:Boolean,default:!1},hideMinutesLeadingZero:{type:Boolean,default:!1},hideSecondsLeadingZero:{type:Boolean,default:!1},hideDaysValue:{type:Boolean,default:!1},hideDaysLabel:{type:Boolean,default:!1},hideHoursValue:{type:Boolean,default:!1},hideHoursLabel:{type:Boolean,default:!1},hideMinutesValue:{type:Boolean,default:!1},hideMinutesLabel:{type:Boolean,default:!1},hideSecondsValue:{type:Boolean,default:!1},hideSecondsLabel:{type:Boolean,default:!1}},computed:{classes:function(){return Object(o.a)({},"countdown--type-".concat(this.type||"default"),!!this.type)},valueToNumber:function(){if(!this.value)return 0;var t=0;return(t=this.value instanceof Date?this.value.getTime():"string"==typeof this.value?new Date(this.value).getTime():this.value)<=0?0:t},startDateToNumber:function(){if(!this.startDate)return this.valueToNumber;var t=0;return(t=this.startDate instanceof Date?this.startDate.getTime():"string"==typeof this.startDate?new Date(this.startDate).getTime():this.startDate)<=0?0:t},endDateToNumber:function(){if(!this.endDate)return this.valueToNumber;var t=0;return(t=this.endDate instanceof Date?this.endDate.getTime():"string"==typeof this.endDate?new Date(this.endDate).getTime():this.endDate)<=0?0:t},valueToString:function(){return new Date(this.valueToNumber).toJSON()},distanceFromEndToStart:function(){return this.endDateToNumber-this.startDateToNumber},distanceFromStartToValue:function(){return this.valueToNumber-this.startDateToNumber},distanceFromEndToValue:function(){return this.valueToNumber?this.endDateToNumber-this.valueToNumber:0},distance:function(){if(this.startDate){if(this.distanceFromStart)return this.distanceFromStartToValue;if(this.distanceEndFromStart)return this.distanceFromEndToStart}return this.distanceFromEndToValue},percentage:function(){return this.startDate?Math.round(100*this.distanceFromStartToValue/this.distanceFromEndToStart):0},ticking:function(){if(this.distance<=0)return{days:{label:this.locale.DAY_PLURAL,value:0},hours:{label:this.locale.HOUR_PLURAL,value:0},minutes:{label:this.locale.MINUTE_PLURAL,value:0},seconds:{label:this.locale.SECOND_PLURAL,value:0}};var t=Math.floor(this.distance/864e5),e=Math.floor(this.distance%864e5/36e5),n=Math.floor(this.distance%36e5/6e4),o=Math.floor(this.distance%6e4/1e3);return{days:{label:t>1||t<=0?this.locale.DAY_PLURAL:this.locale.DAY_SINGULAR,value:this.hideDaysLeadingZero||1!==t.toString().length?t:"0".concat(t)},hours:{label:e>1||e<=0?this.locale.HOUR_PLURAL:this.locale.HOUR_SINGULAR,value:this.hideHoursLeadingZero||1!==e.toString().length?e:"0".concat(e)},minutes:{label:n>1||n<=0?this.locale.MINUTE_PLURAL:this.locale.MINUTE_SINGULAR,value:this.hideMinutesLeadingZero||1!==n.toString().length?n:"0".concat(n)},seconds:{label:o>1||o<=0?this.locale.SECOND_PLURAL:this.locale.SECOND_SINGULAR,value:this.hideSecondsLeadingZero||1!==o.toString().length?o:"0".concat(o)}}},days:function(){return this.ticking.days},hours:function(){return this.ticking.hours},minutes:function(){return this.ticking.minutes},seconds:function(){return this.ticking.seconds},slotsData:function(){return{distance:this.distance,days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,isEnded:this.isEnded}},isEnded:function(){return this.distance<=0},millisecondsToNumber:function(){return"string"==typeof this.milliseconds?parseInt(this.milliseconds):this.milliseconds}},created:function(){this.$interval=null},mounted:function(){this.$interval=Object(main.setInterval)(this.onTick,this.millisecondsToNumber)},beforeDestroy:function(){this.clearInterval()},methods:{newTick:function(){if(this.value instanceof Date||"string"==typeof this.value){var t=new Date(Date.now());return this.value instanceof Date?this.value.getTime():t.toJSON()}return Date.now()},onTick:function(){this.disabled||(this.$emit("input",this.newTick()),this.isEnded&&(this.clearInterval(),this.$emit("ended")))},clearInterval:function(){this.$interval&&Object(main.clearInterval)(this.$interval)}}},l=(n(209),n(30)),d=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"countdown",class:t.classes},[n("div",{staticClass:"countdown__outer"},[t.showPercentage?n("div",{staticClass:"countdown__progress",attrs:{"aria-valuenow":t.percentage,role:"progressbar","aria-valuemin":"0","aria-valuemax":"100"}},[n("svg",{attrs:{viewBox:"0 0 100 100"}},[n("path",{attrs:{d:"M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94","fill-opacity":"0","stroke-dashoffset":"0","stroke-dasharray":296*t.percentage/100}})])]):t._e(),n("div",{staticClass:"countdown__content"},[t.$slots.title||t.$scopedSlots.title?n("header",{staticClass:"countdown__header"},[t._t("title",null,{data:t.slotsData})],2):t._e(),n("time",{staticClass:"countdown__time",attrs:{datetime:t.valueToString}},[t._t("default",[t.hideDays?t._e():[t._t("days",[n("div",{staticClass:"countdown__time__slot days"},[n("div",{staticClass:"number"},[t.hideDaysValue?t._e():n("span",{staticClass:"value",domProps:{textContent:t._s(t.days.value)}})]),t.hideDaysLabel?t._e():n("span",{staticClass:"label",domProps:{textContent:t._s(t.days.label)}})])],{data:{days:t.days,isEnded:t.isEnded}}),t.separator&&!t.hideDaysSeparator?n("div",{staticClass:"countdown__time__slot separator"},[n("div",{staticClass:"number",domProps:{textContent:t._s(t.separator)}})]):t._e()],t.hideHours?t._e():[t._t("hours",[n("div",{staticClass:"countdown__time__slot hours"},[n("div",{staticClass:"number"},[t.hideHoursValue?t._e():n("span",{staticClass:"value",domProps:{textContent:t._s(t.hours.value)}})]),t.hideHoursLabel?t._e():n("span",{staticClass:"label",domProps:{textContent:t._s(t.hours.label)}})])],{data:{hours:t.hours,isEnded:t.isEnded}}),t.separator&&!t.hideHoursSeparator?n("div",{staticClass:"countdown__time__slot separator"},[n("div",{staticClass:"number",domProps:{textContent:t._s(t.separator)}})]):t._e()],t.hideMinutes?t._e():[t._t("minutes",[n("div",{staticClass:"countdown__time__slot minutes"},[n("div",{staticClass:"number"},[t.hideMinutesValue?t._e():n("span",{staticClass:"value",domProps:{textContent:t._s(t.minutes.value)}})]),t.hideMinutesLabel?t._e():n("span",{staticClass:"label",domProps:{textContent:t._s(t.minutes.label)}})])],{data:{minutes:t.minutes,isEnded:t.isEnded}}),t.separator&&!t.hideMinutesSeparator?n("div",{staticClass:"countdown__time__slot separator"},[n("div",{staticClass:"number",domProps:{textContent:t._s(t.separator)}})]):t._e()],t.hideSeconds?t._e():t._t("seconds",[n("div",{staticClass:"countdown__time__slot seconds"},[n("div",{staticClass:"number"},[t.hideSecondsValue?t._e():n("span",{staticClass:"value",domProps:{textContent:t._s(t.seconds.value)}})]),t.hideSecondsLabel?t._e():n("span",{staticClass:"label",domProps:{textContent:t._s(t.seconds.label)}})])],{data:{seconds:t.seconds,isEnded:t.isEnded}})],{data:{distance:t.distance,days:t.days,hours:t.hours,minutes:t.minutes,seconds:t.seconds,isEnded:t.isEnded}})],2)])]),t._t("footer",null,{data:t.slotsData})],2)}),[],!1,null,"ee274762",null).exports;e.default=d}}]);