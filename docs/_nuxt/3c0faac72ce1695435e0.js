(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{172:function(t,e,o){var content=o(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("2d95c82c",content,!0,{sourceMap:!1})},185:function(t,e,o){"use strict";o(10)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},186:function(t,e,o){"use strict";var n=o(172);o.n(n).a},187:function(t,e,o){(e=o(24)(!1)).push([t.i,".countdown[data-v-0d4d360c]{display:flex;flex:0 1 auto;flex-direction:column;align-content:center;justify-content:center;width:100%;margin:0 auto}.countdown__header[data-v-0d4d360c]{font-weight:400;font-size:14px;line-height:17px;letter-spacing:2px;text-transform:uppercase}.countdown__outer[data-v-0d4d360c]{position:relative}.countdown__outer[data-v-0d4d360c],.countdown__progress[data-v-0d4d360c]{transition:all .5s ease;transition:var(--transition,all var(--duration,.5s) var(--timing,ease))}.countdown__progress[data-v-0d4d360c]{position:absolute;top:-16px;right:-16px;bottom:-16px;left:-16px;z-index:-1;overflow:hidden;border-radius:50%;box-shadow:-16px -16px 32px 0 #fff,16px 16px 32px 0 rgba(174,174,192,.4);box-shadow:-16px -16px 32px 0 var(--color-box-shadow-start,#fff),16px 16px 32px 0 var(--color-box-shadow-end,rgba(174,174,192,.4))}.countdown__progress svg[data-v-0d4d360c]{margin:-2px;transition:all .5s ease;transition:var(--transition,all var(--duration,.5s) var(--timing,ease));fill:rgba(51,51,51,.4);fill:var(--color-background,rgba(51,51,51,.4));stroke:#fff;stroke:var(--color-box-shadow-start,#fff);stroke-width:4px;stroke-dashoffset:0}@media screen and (min-width:600px){.countdown__progress svg[data-v-0d4d360c]{margin:-7px}}.countdown__time[data-v-0d4d360c]{display:flex;flex:1 1 100%;flex-direction:row;width:100%}.countdown__time__slot[data-v-0d4d360c]{display:flex;flex:1 1 100%;flex-direction:column;width:100%}.countdown__time__slot span[data-v-0d4d360c]{display:inline-block}.countdown__time__slot>.number[data-v-0d4d360c]{font-size:30px;line-height:40px}@media screen and (min-width:600px){.countdown__time__slot>.number[data-v-0d4d360c]{font-size:48px;line-height:57px}}.countdown__time__slot>.label[data-v-0d4d360c]{font-weight:400;font-size:11px;line-height:15px;text-transform:lowercase}@media screen and (min-width:600px){.countdown__time__slot>.label[data-v-0d4d360c]{font-size:16px;line-height:19px}}.countdown--type-neomorphism .countdown__outer[data-v-0d4d360c]{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;min-width:270px;min-height:270px;margin:0 auto;border-radius:9999px;box-shadow:-16px -16px 32px 0 #fff,16px 16px 32px 0 rgba(174,174,192,.4);box-shadow:-16px -16px 32px 0 var(--color-box-shadow-start,#fff),16px 16px 32px 0 var(--color-box-shadow-end,rgba(174,174,192,.4))}@media screen and (min-width:600px){.countdown--type-neomorphism .countdown__outer[data-v-0d4d360c]{min-width:400px;min-height:400px}}.countdown--type-neomorphism .countdown__time__slot>.number[data-v-0d4d360c]{font-size:120px;line-height:144px}",""]),t.exports=e},190:function(t,e,o){"use strict";o.r(e);o(61),o(185);var main=o(103),n={name:"countdown",inheritAttrs:!1,props:{value:{type:[Number,Date,String],default:Date.now()},startDate:{type:[Number,Date,String],default:null},endDate:{type:[Number,Date,String],default:null},milliseconds:{type:[String,Number],default:1e3},locale:{type:Object,default:()=>({DAY_PLURAL:"giorni",DAY_SINGULAR:"giorni",HOUR_PLURAL:"ore",HOUR_SINGULAR:"ore",MINUTE_PLURAL:"minuti",MINUTE_SINGULAR:"minuti",SECOND_PLURAL:"secondi",SECOND_SINGULAR:"secondi"})},separator:{type:String,default:":"},timezone:{type:Object,default:null},type:{type:String,default:null},disabled:{type:Boolean,default:!1},distanceFromStart:{type:Boolean,default:!1},distanceEndFromStart:{type:Boolean,default:!1},showPercentage:{type:Boolean,default:!1},hideDays:{type:Boolean,default:!1},hideHours:{type:Boolean,default:!1},hideMinutes:{type:Boolean,default:!1},hideSeconds:{type:Boolean,default:!1},hideDaysSeparator:{type:Boolean,default:!1},hideHoursSeparator:{type:Boolean,default:!1},hideMinutesSeparator:{type:Boolean,default:!1},hideDaysLeadingZero:{type:Boolean,default:!1},hideHoursLeadingZero:{type:Boolean,default:!1},hideMinutesLeadingZero:{type:Boolean,default:!1},hideSecondsLeadingZero:{type:Boolean,default:!1},hideDaysValue:{type:Boolean,default:!1},hideDaysLabel:{type:Boolean,default:!1},hideHoursValue:{type:Boolean,default:!1},hideHoursLabel:{type:Boolean,default:!1},hideMinutesValue:{type:Boolean,default:!1},hideMinutesLabel:{type:Boolean,default:!1},hideSecondsValue:{type:Boolean,default:!1},hideSecondsLabel:{type:Boolean,default:!1}},computed:{classes(){return{["countdown--type-".concat(this.type||"default")]:!!this.type}},valueToNumber(){if(!this.value)return 0;var t=0;return t=this.value instanceof Date?this.value.getTime():"string"==typeof this.value?new Date(this.value).getTime():this.value,this.timezoneToMilliseconds&&(t+=this.timezoneToMilliseconds),t<=0?0:t},startDateToNumber(){if(!this.startDate)return this.valueToNumber;var t=0;return(t=this.startDate instanceof Date?this.startDate.getTime():"string"==typeof this.startDate?new Date(this.startDate).getTime():this.startDate)<=0?0:t},endDateToNumber(){if(!this.endDate)return this.valueToNumber;var t=0;return(t=this.endDate instanceof Date?this.endDate.getTime():"string"==typeof this.endDate?new Date(this.endDate).getTime():this.endDate)<=0?0:t},valueToString(){return new Date(this.valueToNumber).toJSON()},timezoneToMilliseconds(){var t;if(!(null===(t=this.timezone)||void 0===t?void 0:t.type))return 0;var e=60*this.timezone.value*60*1e3,o=0;switch(this.timezone.type){case"-":o-=e;break;case"+":default:o+=e}return o},distanceFromEndToStart(){return this.endDateToNumber-this.startDateToNumber},distanceFromStartToValue(){return this.valueToNumber-this.startDateToNumber},distanceFromEndToValue(){return this.valueToNumber?this.endDateToNumber-this.valueToNumber:0},distance(){if(this.startDate){if(this.distanceFromStart)return this.distanceFromStartToValue;if(this.distanceEndFromStart)return this.distanceFromEndToStart}return this.distanceFromEndToValue},percentage(){return this.startDate?Math.round(100*this.distanceFromStartToValue/this.distanceFromEndToStart):0},ticking(){if(this.distance<=0)return{days:{label:this.locale.DAY_PLURAL,value:0},hours:{label:this.locale.HOUR_PLURAL,value:0},minutes:{label:this.locale.MINUTE_PLURAL,value:0},seconds:{label:this.locale.SECOND_PLURAL,value:0}};var t=Math.floor(this.distance/864e5),e=Math.floor(this.distance%864e5/36e5),o=Math.floor(this.distance%36e5/6e4),n=Math.floor(this.distance%6e4/1e3);return{days:{label:t>1||t<=0?this.locale.DAY_PLURAL:this.locale.DAY_SINGULAR,value:this.hideDaysLeadingZero||1!==t.toString().length?t:"0".concat(t)},hours:{label:e>1||e<=0?this.locale.HOUR_PLURAL:this.locale.HOUR_SINGULAR,value:this.hideHoursLeadingZero||1!==e.toString().length?e:"0".concat(e)},minutes:{label:o>1||o<=0?this.locale.MINUTE_PLURAL:this.locale.MINUTE_SINGULAR,value:this.hideMinutesLeadingZero||1!==o.toString().length?o:"0".concat(o)},seconds:{label:n>1||n<=0?this.locale.SECOND_PLURAL:this.locale.SECOND_SINGULAR,value:this.hideSecondsLeadingZero||1!==n.toString().length?n:"0".concat(n)}}},days(){return this.ticking.days},hours(){return this.ticking.hours},minutes(){return this.ticking.minutes},seconds(){return this.ticking.seconds},slotsData(){return{distance:this.distance,days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,isEnded:this.isEnded}},isEnded(){return this.distance<=0},millisecondsToNumber(){return"string"==typeof this.milliseconds?parseInt(this.milliseconds):this.milliseconds}},created(){this.$interval=null},mounted(){this.$interval=Object(main.setInterval)(this.onTick,this.millisecondsToNumber)},beforeDestroy(){this.clearInterval()},methods:{newTick(){var t=Date.now();if(this.value instanceof Date||"string"==typeof this.value){var e=new Date(t);return this.value instanceof Date?e.getTime():e.toJSON()}return t},onTick(){this.disabled||(this.$emit("input",this.newTick()),this.isEnded&&(this.clearInterval(),this.$emit("ended")))},clearInterval(){this.$interval&&Object(main.clearInterval)(this.$interval)}}},d=(o(186),o(21)),r=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"countdown",class:t.classes},[o("div",{staticClass:"countdown__outer"},[t.showPercentage?o("div",{staticClass:"countdown__progress",attrs:{"aria-valuenow":t.percentage,role:"progressbar","aria-valuemin":"0","aria-valuemax":"100"}},[o("svg",{attrs:{viewBox:"0 0 100 100"}},[o("path",{attrs:{d:"M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94","fill-opacity":"0","stroke-dashoffset":"0","stroke-dasharray":296*t.percentage/100}})])]):t._e(),o("div",{staticClass:"countdown__content"},[t.$slots.title||t.$scopedSlots.title?o("header",{staticClass:"countdown__header"},[t._t("title",null,{data:t.slotsData})],2):t._e(),o("time",{staticClass:"countdown__time",attrs:{datetime:t.valueToString}},[t._t("default",[t.hideDays?t._e():[t._t("days",[o("div",{staticClass:"countdown__time__slot days"},[o("div",{staticClass:"number"},[t.hideDaysValue?t._e():o("span",{staticClass:"value",domProps:{textContent:t._s(t.days.value)}})]),t.hideDaysLabel?t._e():o("span",{staticClass:"label",domProps:{textContent:t._s(t.days.label)}})])],{data:{days:t.days,isEnded:t.isEnded}}),t.separator&&!t.hideDaysSeparator?o("div",{staticClass:"countdown__time__slot separator"},[o("div",{staticClass:"number",domProps:{textContent:t._s(t.separator)}})]):t._e()],t.hideHours?t._e():[t._t("hours",[o("div",{staticClass:"countdown__time__slot hours"},[o("div",{staticClass:"number"},[t.hideHoursValue?t._e():o("span",{staticClass:"value",domProps:{textContent:t._s(t.hours.value)}})]),t.hideHoursLabel?t._e():o("span",{staticClass:"label",domProps:{textContent:t._s(t.hours.label)}})])],{data:{hours:t.hours,isEnded:t.isEnded}}),t.separator&&!t.hideHoursSeparator?o("div",{staticClass:"countdown__time__slot separator"},[o("div",{staticClass:"number",domProps:{textContent:t._s(t.separator)}})]):t._e()],t.hideMinutes?t._e():[t._t("minutes",[o("div",{staticClass:"countdown__time__slot minutes"},[o("div",{staticClass:"number"},[t.hideMinutesValue?t._e():o("span",{staticClass:"value",domProps:{textContent:t._s(t.minutes.value)}})]),t.hideMinutesLabel?t._e():o("span",{staticClass:"label",domProps:{textContent:t._s(t.minutes.label)}})])],{data:{minutes:t.minutes,isEnded:t.isEnded}}),t.separator&&!t.hideMinutesSeparator?o("div",{staticClass:"countdown__time__slot separator"},[o("div",{staticClass:"number",domProps:{textContent:t._s(t.separator)}})]):t._e()],t.hideSeconds?t._e():t._t("seconds",[o("div",{staticClass:"countdown__time__slot seconds"},[o("div",{staticClass:"number"},[t.hideSecondsValue?t._e():o("span",{staticClass:"value",domProps:{textContent:t._s(t.seconds.value)}})]),t.hideSecondsLabel?t._e():o("span",{staticClass:"label",domProps:{textContent:t._s(t.seconds.label)}})])],{data:{seconds:t.seconds,isEnded:t.isEnded}})],{data:{distance:t.distance,days:t.days,hours:t.hours,minutes:t.minutes,seconds:t.seconds,isEnded:t.isEnded}})],2)])]),t._t("footer",null,{data:t.slotsData})],2)}),[],!1,null,"0d4d360c",null).exports;e.default=r}}]);