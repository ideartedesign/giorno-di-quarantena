(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{201:function(e,t,n){var content=n(215);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("2d93383d",content,!0,{sourceMap:!1})},202:function(e,t,n){var content=n(217);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("d0abc3de",content,!0,{sourceMap:!1})},214:function(e,t,n){"use strict";var r=n(201);n.n(r).a},215:function(e,t,n){(t=n(25)(!1)).push([e.i,".page[data-v-dc48281c]{display:flex;flex:1 1 100%;flex-direction:column;justify-content:center;width:100%}",""]),e.exports=t},216:function(e,t,n){"use strict";var r=n(202);n.n(r).a},217:function(e,t,n){(t=n(25)(!1)).push([e.i,".page[data-v-dc48281c]{overflow:hidden}.page canvas[data-v-dc48281c]{width:100%;height:100%;min-height:600px;border-radius:6px;pointer-events:none}",""]),e.exports=t},249:function(e,t,n){"use strict";n.r(t);n(10);var r=n(9),o=n(5),c=n(200);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={animate:!0,context:"webgl",attributes:{antialias:!0}},h={name:"three",data:()=>({loading:!0,fbxPath:"/fbx/coronavirus3d.fbx",sketchManager:null}),mounted(){var e=this;this.$nextTick(Object(o.a)((function*(){try{e.sketchManager=yield e.$sketch(function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},d,{canvas:e.$refs.canvas}),e.sketch)}catch(e){console.error(e)}})))},beforeDestroy(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch(e){var t=this;return Object(o.a)((function*(){var{context:r,canvas:canvas,width:o,height:l,pixelRatio:d}=e,{OrbitControls:h}=yield n.e(14).then(n.bind(null,244)).then(e=>e.default||e),{FBXLoader:f}=yield n.e(15).then(n.bind(null,254)).then(e=>e.default||e),v=o/l,w=d>3?3:d,x=new c.Y({context:r}),y=new c.D(45,v,.001,1e3),m=new h(y,canvas),O=new c.E(v,1,45,45),j=new c.L({uniforms:{time:{type:"f",value:0},resolution:{type:"v2",value:new c.U(o,l)},uvRate1:{value:new c.U(1,1)}}}),P=new c.x(O,j),k=new c.K;return x.setPixelRatio(w),x.setSize(o,l),y.position.set(1,1,90),y.updateProjectionMatrix(),(new f).load(t.fbxPath,object=>{t.loading=!1,object.scale.x=-5,object.scale.y=-5,object.scale.z=-5,console.info(object),k.add(object)}),{resize(e){var{pixelRatio:t,viewportWidth:n,viewportHeight:r}=e;x.setPixelRatio(t),x.setSize(n,r),j.uniforms.resolution.value.x=n,j.uniforms.resolution.value.y=r,y.aspect=n/r,y.updateProjectionMatrix()},render:e=>{var{time:time}=e;j.uniforms.time.value=time,P.rotateX(.001),P.rotateY(.001),m.update(),x.render(k,y)},unload(){x.dispose()}}}))()}},head(){return{titleTemplate:"Modello 3D Covid - %s",link:[{once:!0,hid:"preload-coronavirus-3d",rel:"preload",as:"fetch",href:this.fbxPath,crossorigin:!0}]}}},f=(n(214),n(216),n(27)),component=Object(f.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"page"},[this.loading?t("small",[this._v(" Caricamento .. ")]):this._e(),t("canvas",{ref:"canvas"}),this._m(0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"actions"},[t("h1",[this._v("Corona virus 3D Model")]),t("a",{staticClass:"btn margin padding outline rounded",attrs:{title:"Corona virus 3D Model",rel:"noopener",href:"https://spline.design/coronavirus3d/",target:"_blank"}},[this._v(" scopri di più > ")])])}],!1,null,"dc48281c",null);t.default=component.exports}}]);