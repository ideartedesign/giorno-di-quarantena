(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{166:function(e,t,n){var content=n(173);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("76182616",content,!0,{sourceMap:!1})},171:function(e,t,n){"use strict";n(10)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},172:function(e,t,n){"use strict";var o=n(166);n.n(o).a},173:function(e,t,n){(t=n(24)(!1)).push([e.i,".countdown[data-v-25de976d]{position:relative;display:flex;flex:0 1 auto;flex-direction:column;align-content:center;justify-content:center;width:100%;margin:0 auto}.countdown__header[data-v-25de976d]{font-weight:400;font-size:14px;line-height:17px;letter-spacing:2px;text-transform:uppercase}.countdown__time[data-v-25de976d]{display:flex;flex:1 1 100%;flex-direction:row;width:100%}.countdown__time__slot[data-v-25de976d]{display:flex;flex:1 1 100%;flex-direction:column;width:100%}.countdown__time__slot span[data-v-25de976d]{display:inline-block;vertical-align:middle}.countdown__time__slot>.number[data-v-25de976d]{position:relative;font-size:48px;line-height:57px}.countdown__time__slot>.label[data-v-25de976d]{font-weight:400;font-size:16px;line-height:19px;text-transform:lowercase}.countdown--type-skeuomorphism .countdown__outer[data-v-25de976d]{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;min-width:375px;min-height:375px;margin:0 auto;border-radius:999999px;box-shadow:-12px -12px 32px 0 #fff,12px 12px 32px 0 rgba(174,174,192,.4);box-shadow:-12px -12px 32px 0 var(--color-box-shadow-start,#fff),12px 12px 32px 0 var(--color-box-shadow-end,rgba(174,174,192,.4));transition:box-shadow .5s ease;transition:box-shadow var(--duration,.5s) var(--timing,ease)}.countdown--type-skeuomorphism .countdown__time__slot>.number[data-v-25de976d]{font-size:120px;line-height:144px}",""]),e.exports=t},175:function(e,t,n){"use strict";n.r(t);n(60),n(171);var main=n(102),o={name:"countdown",inheritAttrs:!1,props:{value:{type:[Number,Date,String],default:Date.now()},startDate:{type:[Number,Date,String],default:null},endDate:{type:[Number,Date,String],default:null},milliseconds:{type:[String,Number],default:1e3},locale:{type:Object,default:()=>({DAY_PLURAL:"giorni",DAY_SINGULAR:"giorni",HOUR_PLURAL:"ore",HOUR_SINGULAR:"ore",MINUTE_PLURAL:"minuti",MINUTE_SINGULAR:"minuti",SECOND_PLURAL:"secondi",SECOND_SINGULAR:"secondi"})},separator:{type:String,default:":"},type:{type:String,default:null},disabled:{type:Boolean,default:!1},distanceFromStart:{type:Boolean,default:!1},showPercentage:{type:Boolean,default:!1},hideDays:{type:Boolean,default:!1},hideHours:{type:Boolean,default:!1},hideMinutes:{type:Boolean,default:!1},hideSeconds:{type:Boolean,default:!1},hideDaysSeparator:{type:Boolean,default:!1},hideHoursSeparator:{type:Boolean,default:!1},hideMinutesSeparator:{type:Boolean,default:!1},hideDaysLeadingZero:{type:Boolean,default:!1},hideHoursLeadingZero:{type:Boolean,default:!1},hideMinutesLeadingZero:{type:Boolean,default:!1},hideSecondsLeadingZero:{type:Boolean,default:!1},hideDaysValue:{type:Boolean,default:!1},hideDaysLabel:{type:Boolean,default:!1},hideHoursValue:{type:Boolean,default:!1},hideHoursLabel:{type:Boolean,default:!1},hideMinutesValue:{type:Boolean,default:!1},hideMinutesLabel:{type:Boolean,default:!1},hideSecondsValue:{type:Boolean,default:!1},hideSecondsLabel:{type:Boolean,default:!1}},computed:{classes(){return{["countdown--type-".concat(this.type||"default")]:!!this.type}},valueToNumber(){if(!this.value)return 0;var e=0;return(e=this.value instanceof Date?this.value.getTime():"string"==typeof this.value?new Date(this.value).getTime():this.value)<=0?0:e},startDateToNumber(){if(!this.startDate)return this.valueToNumber;var e=0;return(e=this.startDate instanceof Date?this.startDate.getTime():"string"==typeof this.startDate?new Date(this.startDate).getTime():this.startDate)<=0?0:e},endDateToNumber(){if(!this.endDate)return this.valueToNumber;var e=0;return(e=this.endDate instanceof Date?this.endDate.getTime():"string"==typeof this.endDate?new Date(this.endDate).getTime():this.endDate)<=0?0:e},valueToString(){return new Date(this.valueToNumber).toJSON()},distance(){return this.startDate&&this.distanceFromStart?this.startDateToNumber?this.endDateToNumber-this.startDateToNumber:0:this.valueToNumber?this.endDateToNumber-this.valueToNumber:0},percentage(){return Math.round(100*(this.valueToNumber-this.startDateToNumber)/this.distanceFromStart)},ticking(){if(this.distance<=0)return{days:{label:this.locale.DAY_PLURAL,value:0},hours:{label:this.locale.HOUR_PLURAL,value:0},minutes:{label:this.locale.MINUTE_PLURAL,value:0},seconds:{label:this.locale.SECOND_PLURAL,value:0}};var e=Math.floor(this.distance/864e5),t=Math.floor(this.distance%864e5/36e5),n=Math.floor(this.distance%36e5/6e4),o=Math.floor(this.distance%6e4/1e3);return{days:{label:e>1||e<=0?this.locale.DAY_PLURAL:this.locale.DAY_SINGULAR,value:this.hideDaysLeadingZero||1!==e.toString().length?e:"0".concat(e)},hours:{label:t>1||t<=0?this.locale.HOUR_PLURAL:this.locale.HOUR_SINGULAR,value:this.hideHoursLeadingZero||1!==t.toString().length?t:"0".concat(t)},minutes:{label:n>1||n<=0?this.locale.MINUTE_PLURAL:this.locale.MINUTE_SINGULAR,value:this.hideMinutesLeadingZero||1!==n.toString().length?n:"0".concat(n)},seconds:{label:o>1||o<=0?this.locale.SECOND_PLURAL:this.locale.SECOND_SINGULAR,value:this.hideSecondsLeadingZero||1!==o.toString().length?o:"0".concat(o)}}},days(){return this.ticking.days},hours(){return this.ticking.hours},minutes(){return this.ticking.minutes},seconds(){return this.ticking.seconds},slotsData(){return{distance:this.distance,days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,isEnded:this.isEnded}},isEnded(){return this.distance<=0},millisecondsToNumber(){return"string"==typeof this.milliseconds?parseInt(this.milliseconds):this.milliseconds}},created(){this.$interval=null},mounted(){this.$interval=Object(main.setInterval)(this.onTick,this.millisecondsToNumber)},beforeDestroy(){this.clearInterval()},methods:{newTick(){if(this.value instanceof Date||"string"==typeof this.value){var e=new Date(Date.now());return this.value instanceof Date?this.value.getTime():e.toJSON()}return Date.now()},onTick(){this.disabled||(this.$emit("input",this.newTick()),this.isEnded&&(this.clearInterval(),this.$emit("ended")))},clearInterval(){this.$interval&&Object(main.clearInterval)(this.$interval)}}},l=(n(172),n(21)),d=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"countdown",class:e.classes},[n("div",{staticClass:"countdown__outer"},[n("div",{staticClass:"countdown__content"},[e.$slots.title||e.$scopedSlots.title?n("header",{staticClass:"countdown__header"},[e._t("title",null,{data:e.slotsData})],2):e._e(),n("time",{staticClass:"countdown__time",attrs:{datetime:e.valueToString}},[e._t("default",[e.hideDays?e._e():[e._t("days",[n("div",{staticClass:"countdown__time__slot days"},[n("div",{staticClass:"number"},[e.hideDaysValue?e._e():n("span",{staticClass:"value",domProps:{textContent:e._s(e.days.value)}})]),e.hideDaysLabel?e._e():n("span",{staticClass:"label",domProps:{textContent:e._s(e.days.label)}})])],{data:{days:e.days,isEnded:e.isEnded}}),e.separator&&!e.hideDaysSeparator?n("div",{staticClass:"countdown__time__slot separator"},[n("div",{staticClass:"number",domProps:{textContent:e._s(e.separator)}})]):e._e()],e.hideHours?e._e():[e._t("hours",[n("div",{staticClass:"countdown__time__slot hours"},[n("div",{staticClass:"number"},[e.hideHoursValue?e._e():n("span",{staticClass:"value",domProps:{textContent:e._s(e.hours.value)}})]),e.hideHoursLabel?e._e():n("span",{staticClass:"label",domProps:{textContent:e._s(e.hours.label)}})])],{data:{hours:e.hours,isEnded:e.isEnded}}),e.separator&&!e.hideHoursSeparator?n("div",{staticClass:"countdown__time__slot separator"},[n("div",{staticClass:"number",domProps:{textContent:e._s(e.separator)}})]):e._e()],e.hideMinutes?e._e():[e._t("minutes",[n("div",{staticClass:"countdown__time__slot minutes"},[n("div",{staticClass:"number"},[e.hideMinutesValue?e._e():n("span",{staticClass:"value",domProps:{textContent:e._s(e.minutes.value)}})]),e.hideMinutesLabel?e._e():n("span",{staticClass:"label",domProps:{textContent:e._s(e.minutes.label)}})])],{data:{minutes:e.minutes,isEnded:e.isEnded}}),e.separator&&!e.hideMinutesSeparator?n("div",{staticClass:"countdown__time__slot separator"},[n("div",{staticClass:"number",domProps:{textContent:e._s(e.separator)}})]):e._e()],e.hideSeconds?e._e():e._t("seconds",[n("div",{staticClass:"countdown__time__slot seconds"},[n("div",{staticClass:"number"},[e.hideSecondsValue?e._e():n("span",{staticClass:"value",domProps:{textContent:e._s(e.seconds.value)}})]),e.hideSecondsLabel?e._e():n("span",{staticClass:"label",domProps:{textContent:e._s(e.seconds.label)}})])],{data:{seconds:e.seconds,isEnded:e.isEnded}})],{data:{distance:e.distance,days:e.days,hours:e.hours,minutes:e.minutes,seconds:e.seconds,isEnded:e.isEnded}})],2)])]),e._t("footer",null,{data:e.slotsData})],2)}),[],!1,null,"25de976d",null).exports;t.default=d}}]);