(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{199:function(t,e,n){var content=n(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("1260583b",content,!0,{sourceMap:!1})},202:function(t,e,n){"use strict";var o=n(8),r=n(4),l=n(75),d=n(14),c=n(10),h=n(21),f=n(146),_=n(50),m=n(5),v=n(76),y=n(51).f,N=n(22).f,x=n(11).f,D=n(203).trim,w=r.Number,C=w.prototype,S="Number"==h(v(C)),L=function(t){var e,n,o,r,l,d,c,code,h=_(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=D(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+h}for(d=(l=h.slice(2)).length,c=0;c<d;c++)if((code=l.charCodeAt(c))<48||code>r)return NaN;return parseInt(l,o)}return+h};if(l("Number",!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var T,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(S?m((function(){C.valueOf.call(n)})):"Number"!=h(n))?f(new w(L(e)),n,E):L(e)},I=o?y(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;I.length>A;A++)c(w,T=I[A])&&!c(E,T)&&x(E,T,N(w,T));E.prototype=C,C.constructor=E,d(r,"Number",E)}},203:function(t,e,n){var o=n(13),r="["+n(204)+"]",l=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),c=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},204:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},205:function(t,e,n){"use strict";n(2)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},206:function(t,e,n){"use strict";var o=n(199);n.n(o).a},207:function(t,e,n){(e=n(37)(!1)).push([t.i,".countdown[data-v-65e07987]{position:relative;display:flex;flex:0 1 auto;flex-direction:column;align-content:center;justify-content:center;width:100%;margin:0 auto}.countdown__header[data-v-65e07987]{font-weight:400;font-size:14px;line-height:17px;letter-spacing:2px;text-transform:uppercase}.countdown__time[data-v-65e07987]{display:flex;flex:1 1 100%;flex-direction:row;width:100%}.countdown__time__slot[data-v-65e07987]{display:flex;flex:1 1 100%;flex-direction:column;width:100%}.countdown__time__slot span[data-v-65e07987]{display:inline-block;vertical-align:middle}.countdown__time__slot>.number[data-v-65e07987]{position:relative;font-size:48px;line-height:57px}.countdown__time__slot>.label[data-v-65e07987]{font-weight:400;font-size:16px;line-height:19px;text-transform:lowercase}.countdown--type-skeuomorphism .countdown__outer[data-v-65e07987]{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;min-width:375px;min-height:375px;margin:0 auto;border-radius:999999px;box-shadow:-12px -12px 32px 0 #fff,12px 12px 32px 0 rgba(174,174,192,.4);box-shadow:-12px -12px 32px 0 var(--color-box-shadow-start,#fff),12px 12px 32px 0 var(--color-box-shadow-end,rgba(174,174,192,.4));transition:box-shadow .5s ease;transition:box-shadow var(--duration,.5s) var(--timing,ease)}.countdown--type-skeuomorphism .countdown__time__slot>.number[data-v-65e07987]{font-size:120px;line-height:144px}",""]),t.exports=e},209:function(t,e,n){"use strict";n.r(e);n(202),n(205);var o=n(34),main=n(147),r={name:"countdown",inheritAttrs:!1,props:{value:{type:[Number,Date,String],default:Date.now()},startDate:{type:[Number,Date,String],default:null},endDate:{type:[Number,Date,String],default:null},milliseconds:{type:[String,Number],default:1e3},locale:{type:Object,default:function(){return{DAY_PLURAL:"giorni",DAY_SINGULAR:"giorni",HOUR_PLURAL:"ore",HOUR_SINGULAR:"ore",MINUTE_PLURAL:"minuti",MINUTE_SINGULAR:"minuti",SECOND_PLURAL:"secondi",SECOND_SINGULAR:"secondi"}}},separator:{type:String,default:":"},type:{type:String,default:null},disabled:{type:Boolean,default:!1},distanceFromStart:{type:Boolean,default:!1},showPercentage:{type:Boolean,default:!1},hideDays:{type:Boolean,default:!1},hideHours:{type:Boolean,default:!1},hideMinutes:{type:Boolean,default:!1},hideSeconds:{type:Boolean,default:!1},hideDaysSeparator:{type:Boolean,default:!1},hideHoursSeparator:{type:Boolean,default:!1},hideMinutesSeparator:{type:Boolean,default:!1},hideDaysValue:{type:Boolean,default:!1},hideDaysLabel:{type:Boolean,default:!1},hideHoursValue:{type:Boolean,default:!1},hideHoursLabel:{type:Boolean,default:!1},hideMinutesValue:{type:Boolean,default:!1},hideMinutesLabel:{type:Boolean,default:!1},hideSecondsValue:{type:Boolean,default:!1},hideSecondsLabel:{type:Boolean,default:!1}},computed:{classes:function(){return Object(o.a)({},"countdown--type-".concat(this.type||"default"),!!this.type)},valueToNumber:function(){if(!this.value)return 0;var t=0;return(t=this.value instanceof Date?this.value.getTime():"string"==typeof this.value?new Date(this.value).getTime():this.value)<=0?0:t},startDateToNumber:function(){if(!this.startDate)return this.valueToNumber;var t=0;return(t=this.startDate instanceof Date?this.startDate.getTime():"string"==typeof this.startDate?new Date(this.startDate).getTime():this.startDate)<=0?0:t},endDateToNumber:function(){if(!this.endDate)return this.valueToNumber;var t=0;return(t=this.endDate instanceof Date?this.endDate.getTime():"string"==typeof this.endDate?new Date(this.endDate).getTime():this.endDate)<=0?0:t},valueToString:function(){return new Date(this.valueToNumber).toJSON()},distance:function(){return this.startDate&&this.distanceFromStart?this.startDateToNumber?this.endDateToNumber-this.startDateToNumber:0:this.valueToNumber?this.endDateToNumber-this.valueToNumber:0},percentage:function(){return Math.round(100*(this.valueToNumber-this.startDateToNumber)/this.distanceFromStart)},ticking:function(){if(this.distance<=0)return{days:{label:this.locale.DAY_PLURAL,value:0},hours:{label:this.locale.HOUR_PLURAL,value:0},minutes:{label:this.locale.MINUTE_PLURAL,value:0},seconds:{label:this.locale.SECOND_PLURAL,value:0}};var t=Math.floor(this.distance/864e5),e=Math.floor(this.distance%864e5/36e5),n=Math.floor(this.distance%36e5/6e4),o=Math.floor(this.distance%6e4/1e3);return{days:{label:t>1||t<=0?this.locale.DAY_PLURAL:this.locale.DAY_SINGULAR,value:t},hours:{label:e>1||e<=0?this.locale.HOUR_PLURAL:this.locale.HOUR_SINGULAR,value:e},minutes:{label:n>1||n<=0?this.locale.MINUTE_PLURAL:this.locale.MINUTE_SINGULAR,value:n},seconds:{label:o>1||o<=0?this.locale.SECOND_PLURAL:this.locale.SECOND_SINGULAR,value:o}}},days:function(){return this.ticking.days},hours:function(){return this.ticking.hours},minutes:function(){return this.ticking.minutes},seconds:function(){return this.ticking.seconds},slotsData:function(){return{distance:this.distance,days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,isEnded:this.isEnded}},isEnded:function(){return this.distance<=0},millisecondsToNumber:function(){return"string"==typeof this.milliseconds?parseInt(this.milliseconds):this.milliseconds}},created:function(){this.$interval=null},mounted:function(){this.$interval=Object(main.setInterval)(this.onTick,this.millisecondsToNumber)},beforeDestroy:function(){this.clearInterval()},methods:{newTick:function(){if(this.value instanceof Date||"string"==typeof this.value){var t=new Date(Date.now());return this.value instanceof Date?this.value.getTime():t.toJSON()}return Date.now()},onTick:function(){this.disabled||(this.$emit("input",this.newTick()),this.isEnded&&(this.clearInterval(),this.$emit("ended")))},clearInterval:function(){this.$interval&&Object(main.clearInterval)(this.$interval)}}},l=(n(206),n(33)),d=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"countdown",class:t.classes},[n("div",{staticClass:"countdown__outer"},[n("div",{staticClass:"countdown__content"},[t.$slots.title||t.$scopedSlots.title?n("header",{staticClass:"countdown__header"},[t._t("title",null,{data:t.slotsData})],2):t._e(),n("time",{staticClass:"countdown__time",attrs:{datetime:t.valueToString}},[t._t("default",[t.hideDays?t._e():[t._t("days",[n("div",{staticClass:"countdown__time__slot days"},[n("div",{staticClass:"number"},[t.hideDaysValue?t._e():n("span",{staticClass:"value",domProps:{textContent:t._s(t.days.value)}})]),t.hideDaysLabel?t._e():n("span",{staticClass:"label",domProps:{textContent:t._s(t.days.label)}})])],{data:{days:t.days,isEnded:t.isEnded}}),t.separator&&!t.hideDaysSeparator?n("div",{staticClass:"countdown__time__slot separator"},[n("div",{staticClass:"number",domProps:{textContent:t._s(t.separator)}})]):t._e()],t.hideHours?t._e():[t._t("hours",[n("div",{staticClass:"countdown__time__slot hours"},[n("div",{staticClass:"number"},[t.hideHoursValue?t._e():n("span",{staticClass:"value",domProps:{textContent:t._s(t.hours.value)}})]),t.hideHoursLabel?t._e():n("span",{staticClass:"label",domProps:{textContent:t._s(t.hours.label)}})])],{data:{hours:t.hours,isEnded:t.isEnded}}),t.separator&&!t.hideHoursSeparator?n("div",{staticClass:"countdown__time__slot separator"},[n("div",{staticClass:"number",domProps:{textContent:t._s(t.separator)}})]):t._e()],t.hideMinutes?t._e():[t._t("minutes",[n("div",{staticClass:"countdown__time__slot minutes"},[n("div",{staticClass:"number"},[t.hideMinutesValue?t._e():n("span",{staticClass:"value",domProps:{textContent:t._s(t.minutes.value)}})]),t.hideMinutesLabel?t._e():n("span",{staticClass:"label",domProps:{textContent:t._s(t.minutes.label)}})])],{data:{minutes:t.minutes,isEnded:t.isEnded}}),t.separator&&!t.hideMinutesSeparator?n("div",{staticClass:"countdown__time__slot separator"},[n("div",{staticClass:"number",domProps:{textContent:t._s(t.separator)}})]):t._e()],t.hideSeconds?t._e():t._t("seconds",[n("div",{staticClass:"countdown__time__slot seconds"},[n("div",{staticClass:"number"},[t.hideSecondsValue?t._e():n("span",{staticClass:"value",domProps:{textContent:t._s(t.seconds.value)}})]),t.hideSecondsLabel?t._e():n("span",{staticClass:"label",domProps:{textContent:t._s(t.seconds.label)}})])],{data:{seconds:t.seconds,isEnded:t.isEnded}})],{data:{distance:t.distance,days:t.days,hours:t.hours,minutes:t.minutes,seconds:t.seconds,isEnded:t.isEnded}})],2)])]),t._t("footer",null,{data:t.slotsData})],2)}),[],!1,null,"65e07987",null).exports;e.default=d}}]);