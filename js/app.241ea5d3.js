(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},s={app:0},r=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"52984e5d","chunk-03a53858":"48d5f1d0","chunk-1a517a1a":"de415768","chunk-2d216214":"f98ebe23"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1,"chunk-03a53858":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"729b759e","chunk-03a53858":"a5dfbaf9","chunk-1a517a1a":"31d6cfe0","chunk-2d216214":"31d6cfe0"}[t]+".css",s=l.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===n||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[t],p.parentNode.removeChild(p),a(r)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){i[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}s[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/app-ofn-plakaty/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"0418":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{class:"navbar navbar-expand-lg navbar-"+t.light+" bg-"+t.light},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/",href:"#"}},[t._v("Ukázková aplikace k Otevřeným formálním normám ")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Turistický cíl "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/o-projektu"}},[t._v("O projektu")])],1)])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],s={props:{light:String}},r=s,o=a("2877"),l=Object(o["a"])(r,n,i,!1,null,null,null);e["a"]=l.exports},1848:function(t,e,a){"use strict";var n=a("e956"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],r=(a("034f"),a("2877")),o={},l=Object(r["a"])(o,i,s,!1,null,null,null),c=l.exports,u=a("9483");Object(u["a"])("".concat("/app-ofn-plakaty/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var d=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Landmark",{attrs:{msg:"MVČR Open Data App"}})],1)},m=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header",{attrs:{light:"dark"}}),t.loadError?a("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[a("strong",[t._v("Problém se zobrazením!")]),t._v(" "),a("span",[t._v(t._s(t.errorMessage))]),t._m(0)]):t._e(),t._l(t.listItems,(function(e,n){return a("span",{key:n},[a("button",{staticClass:"btn btn-secondary m-1",attrs:{type:"button"},on:{click:function(a){return t.loadIri(e.iri)}}},[t._v(t._s(e["název"].cs))])])})),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"d-flex justify-content-center m-5"},[a("div",{ref:"pdf",staticClass:"pdf-container",attrs:{id:"pdf"}},[a("div",{attrs:{id:"top"}},[a("img",{attrs:{src:t.item.photo,id:"photo"}}),a("div",{staticClass:"carousel-caption",attrs:{id:"name"}},[a("h1",[a("span",{staticClass:"badge badge-primary",style:t.badgeStyle},[t._v(" "+t._s(t.item.name)+" ")])])])]),a("div",{attrs:{id:"middle"}},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"col-9 p-5 content-center d-flex align-items-center bg-info text-white"},[a("div",[a("div",{staticClass:"row"},[a("h4",{},[t._v("🛈")]),a("span",{style:t.descriptionStyle},[t._v(" "+t._s(t.item.description)+" ")])]),a("div",{staticClass:"row middle-link pb-3 text-light"},[t.item.link?a("span",[t._v("🔗")]):t._e(),a("span",{staticClass:"pl-3"},[a("small",[t._v(t._s(t.item.link))])])])])]),a("div",{staticClass:"col-3 p-5 content-center d-flex align-items-center bg-secondary text-white"},[a("div",[a("div",{},[a("div",{staticClass:"row"},[t.item.open?a("h3",[a("strong",[t._v("⏰")])]):t._e()]),a("div",{staticClass:"row"},[t._v(" "+t._s(t.item.open)+" ")])]),t._m(1)])])])]),a("div",{attrs:{id:"map-wrap"}},[a("l-map",{ref:"theMap",attrs:{zoom:t.zoom,center:t.item.center,options:{zoomControl:!1}}},[a("l-tile-layer",{attrs:{url:t.map_url}}),a("l-marker",{attrs:{"lat-lng":t.item.center}})],1)],1)])])]),a("div",{staticClass:"col-lg-4"},[t._m(2),a("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"home",role:"tabpanel","aria-labelledby":"home-tab"}},[a("div",{staticClass:"form-group p-3"},[a("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Barevná varianta:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.bootswatch,expression:"bootswatch"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.bootswatch=e.target.multiple?a:a[0]},t.swatch]}},t._l(t.bootswatches,(function(e,n){return a("option",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"btn btn-primary btn-block pl-5 pr-5",on:{click:t.download}},[t._v("Vytvořit a stáhnout PDF"),a("br"),t._v("(+ vytvořit PNG)")]),a("div",{staticClass:"p-2"},[a("a",{class:t.pngClass,attrs:{href:t.pngData,id:"pngLink",download:t.pngName,disabled:""}},[t._v("Stáhnout PNG")])])])])]),a("hr"),a("div",{staticClass:"tab-pane fade",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}},[a("h3",[t._v(" Nastavení turistického cíle ")]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"nameInput"}},[t._v("Jméno: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.name,expression:"item.name"}],staticClass:"form-control",attrs:{type:"text",id:"nameInput"},domProps:{value:t.item.name},on:{input:function(e){e.target.composing||t.$set(t.item,"name",e.target.value)}}})]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"nameSizeInput"}},[t._v("Velikost jména: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fsize,expression:"fsize"}],staticClass:"form-control",attrs:{type:"number",id:"nameSizeInput"},domProps:{value:t.fsize},on:{input:function(e){e.target.composing||(t.fsize=e.target.value)}}})]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"photoInput"}},[t._v("Foto: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.photo,expression:"item.photo"}],staticClass:"form-control",attrs:{type:"url",id:"photoInput"},domProps:{value:t.item.photo},on:{input:function(e){e.target.composing||t.$set(t.item,"photo",e.target.value)}}})]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"descriptionInput"}},[t._v("Popis:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.description,expression:"item.description"}],staticClass:"form-control",attrs:{type:"text",id:"descriptionInput",row:"7"},domProps:{value:t.item.description},on:{input:function(e){e.target.composing||t.$set(t.item,"description",e.target.value)}}})]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"descriptionSizeInput"}},[t._v("Velikost popisu: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fdsize,expression:"fdsize"}],staticClass:"form-control",attrs:{type:"number",id:"descriptionSizeInput"},domProps:{value:t.fdsize},on:{input:function(e){e.target.composing||(t.fdsize=e.target.value)}}})]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"linkInput"}},[t._v("🔗 Link: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.link,expression:"item.link"}],staticClass:"form-control",attrs:{type:"text",id:"linkInput"},domProps:{value:t.item.link},on:{input:function(e){e.target.composing||t.$set(t.item,"link",e.target.value)}}})]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"linkInput"}},[t._v("⏰ Otevřeno: ")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.open,expression:"item.open"}],staticClass:"form-control",attrs:{type:"text",id:"linkInput",row:"7"},domProps:{value:t.item.open},on:{input:function(e){e.target.composing||t.$set(t.item,"open",e.target.value)}}})]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"linkInput"}},[t._v("♿ 🍼 Přístupnost: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.access,expression:"item.access"}],staticClass:"form-control",attrs:{type:"text",id:"linkInput"},domProps:{value:t.item.access},on:{input:function(e){e.target.composing||t.$set(t.item,"access",e.target.value)}}})])])])])]),a("div",{staticStyle:{display:"none"},attrs:{id:"img"}},[t._v(" "+t._s(t.loadedItems)+" ")]),a("Footer")],2)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row middle-link pb-3 text-light"},[a("h3",[t._v("♿ 🍼")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav nav-tabs"},[a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("a",{staticClass:"nav-link active",attrs:{id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"}},[t._v("Základ")])]),a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("a",{staticClass:"nav-link",attrs:{id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"}},[t._v("Detaily")])])])}],h=(a("a4d3"),a("e01a"),a("b0c0"),a("b64b"),a("ac1f"),a("3ca3"),a("5319"),a("9911"),a("ddb0"),a("2b3d"),a("53ca")),b=a("b85c"),g=a("8baf"),y=a("c0e9"),k=a.n(y),C=a("bc3a"),_=a.n(C),w=a("2699"),x=a("a40a"),j=a("4e2b"),I=(a("6cc5"),a("e11e")),z=a("0418"),O=a("fd2d"),E={name:"home",data:function(){return{item:{center:[50,13.5],name:"",description:"",link:"",open:"",photo:"",access:"♿ 🍼",info:{},url:""},map_url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:13,bootswatch:"journal",bootswatches:["journal","cosmo","cerulean","cyborg","darkly","flatly","litera","lumen","lux","materia","minty","pulse","sandstone","siplex","sketchy","slate","solar","spacelab","superhero","united","yeti"],s:0,ss:0,fsize:150,fdsize:75,pngData:"",pngName:"",pngClass:"btn btn-secondary disabled",listLinks:[],listItems:[],defaultUrls:{url:"https://michalskop.gitlab.io/ofnapp/data/konvent.json",dataurl:"https://michalskop.gitlab.io/ofnapp/data/konvent.json"},loadError:!1,errorMessage:""}},mounted:function(){delete I["Icon"].Default.prototype._getIconUrl,I["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")}),this.listLinks=[this.listUrl],this.listItems=this.getListItems()},computed:{listUrl:function(){if("undefined"!==typeof this.$route.query.dataurl)return this.$route.query.dataurl;var t=new URL(this.defaultUrls.dataurl);return t.href},loadedItems:function(){var t=this.ss;return Array.isArray(this.listItems)?"undefined"!==typeof this.$route.query.iri?this.loadIri(this.$route.query.iri):this.listItems.length>0?this.loadIri(this.listItems[0].iri):this.load(this.defaultUrls.dataurl):this.load(this.item.url),t},badgeStyle:function(){return"font-size:"+this.fsize+"%"},descriptionStyle:function(){return"font-size:"+this.fdsize+"%"}},methods:{getListItems:function(){var t,e=this,a=[],n=this,i=Object(b["a"])(n.listLinks);try{for(i.s();!(t=i.n()).done;){var s=t.value;_.a.get(n.corsLink(s)).then((function(t){if(Array.isArray(t.data)){var e,n=Object(b["a"])(t.data);try{for(n.s();!(e=n.n()).done;){var i=e.value;a.push(i)}}catch(s){n.e(s)}finally{n.f()}}else a.push(t.data)})).catch((function(t){console.log("catching error"),e.loadError=!0,e.errorMessage=t}))}}catch(r){i.e(r)}finally{i.f()}return a},extractLinks:function(t){var e,a=[],n=Object(b["a"])(t);try{for(n.s();!(e=n.n()).done;){var i=e.value;"undefined"!=typeof i["odkazKeStažení"]&&"undefined"!=typeof i["odkazKeStažení"]["type"]&&"uri"==i["odkazKeStažení"]["type"]&&a.push(i["odkazKeStažení"]["value"])}}catch(s){n.e(s)}finally{n.f()}return a},corsLink:function(t){return t},swatch:function(){var t=document.getElementsByTagName("head")[0],e=document.createElement("link");if(e.href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/"+this.bootswatch+"/bootstrap.min.css",e.type="text/css",e.rel="stylesheet",e.id="swatch-"+(this.s+1),t.append(e),this.s>0){var a=document.getElementById("swatch-"+this.s);a.remove()}this.s++,this.pngClass="btn btn-secondary disabled"},existCs:function(t,e,a){return"object"===Object(h["a"])(t)&&"undefined"!=typeof t[e]&&"undefined"!=typeof t[e]["cs"]?t[e]["cs"]:a},existInArr:function(t,e,a,n){var i,s=Object(b["a"])(t[e]);try{for(s.s();!(i=s.n()).done;){var r=i.value;if("object"===Object(h["a"])(r)&&"undefined"!=typeof r[a])return r[a]}}catch(o){s.e(o)}finally{s.f()}return n},loadIri:function(t){this.pngClass="btn btn-secondary disabled";var e,a={},n=Object(b["a"])(this.listItems);try{for(n.s();!(e=n.n()).done;){var i=e.value;if(t==i.iri){a=i;break}}}catch(r){n.e(r)}finally{n.f()}if(Object.keys(a).length>0){this.item.info=a,this.item.center=[this.item.info["umístění"]["geometrie"]["coordinates"][1],this.item.info["umístění"]["geometrie"]["coordinates"][0]],this.item.name=this.existCs(this.item.info,"název","Turistický cíl"),this.item.description=this.existCs(this.item.info,"popis","Ideální turistický cíl"),this.item.link=this.existInArr(this.item.info,"kontakt","url",null).replace("https://","").replace("http://","").replace(/\/$/,""),this.item.open=this.item.info["open"],this.item.photo=this.existInArr(this.item.info,"příloha","url",null),this.item.url="";var s=Object.assign({},this.$route.query);this.item.info.iri!=this.$route.query.iri&&(s.iri=this.item.info.iri,this.$router.replace({query:s}))}},load:function(t){var e=this,a=Object.assign({},this.$route.query);a.dataurl=t,this.pngClass="btn btn-secondary disabled","undefined"!=t&&"object"!==Object(h["a"])(t)||(t=this.url),_.a.get(this.corsLink(t)).then((function(a){e.item.info=a.data,e.item.center=[e.item.info["umístění"]["geometrie"]["coordinates"][1],e.item.info["umístění"]["geometrie"]["coordinates"][0]],e.item.name=e.existCs(e.item.info,"název","Turistický cíl"),e.item.description=e.existCs(e.item.info,"popis","Ideální turistický cíl"),e.item.link=e.existInArr(e.item.info,"kontakt","url",null).replace("https://","").replace("http://","").replace(/\/$/,""),e.item.open=e.item.info["open"],e.item.photo=e.existInArr(e.item.info,"příloha","url",null),e.url=t}))},download:function(){var t=this;k()(document.getElementById("pdf"),{scale:1,allowTaint:!0,useCORS:!0,scrollX:-window.scrollX-2*(window.devicePixelRatio-1),scrollY:-window.scrollY}).then((function(e){var a=e.toDataURL("image/png",.8),n=new Image;n.src=a,document.getElementById("img").appendChild(n),n.addEventListener("load",(function(){t.pngName=t.item.name+"-"+t.bootswatch+".png",t.pngData=n.src.replace("image/png","image/octet-stream"),t.pngClass="btn btn-secondary";var e=new g["a"]({unit:"pt",format:[Math.floor(3*Math.floor(n.width)/4),Math.floor(3*Math.floor(n.height)/4)]});e.addImage(n.src,"PNG",-1,-1),e.save(t.item.name+"-"+t.bootswatch+".pdf")}))}))}},components:{LMap:w["a"],LTileLayer:x["a"],LMarker:j["a"],Header:z["a"],Footer:O["a"]}},S=E,N=(a("1848"),Object(r["a"])(S,f,v,!1,null,"404b08a4",null)),P=N.exports,$={name:"Home",components:{Landmark:P}},L=$,A=Object(r["a"])(L,p,m,!1,null,null,null),T=A.exports;n["a"].use(d["a"]);var M=[{path:"/",name:"Home",title:"OFN app",component:T},{path:"/sport",name:"Sportoviště",component:function(){return a.e("about").then(a.bind(null,"3a0c"))}},{path:"/o-projektu",name:"O projektu",component:function(){return a.e("chunk-03a53858").then(a.bind(null,"84ba"))}}],U=new d["a"]({base:"/app-ofn-plakaty/",routes:M}),q=U,D=a("2f62");n["a"].use(D["a"]);var F=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:q,store:F,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,a){},e956:function(t,e,a){},fd2d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container text-justify"},[a("hr"),a("p",[a("a",{attrs:{href:"https://github.com/opendata-mvcr/app-ofn-plakaty"}},[t._v("Repozitář se zdrojovým kódem")])]),a("p",[t._v("Tato aplikace vznikla v rámci projektu OPZ č. CZ.03.4.74/0.0/0.0/15_025/0013983.")]),a("p",[a("img",{attrs:{src:"https://data.gov.cz/images/ozp_logo_cz.jpg",alt:"Evropská unie - Evropský sociální fond - Operační program Zaměstnanost"}})])])}],s=a("2877"),r={},o=Object(s["a"])(r,n,i,!1,null,null,null);e["a"]=o.exports}});
//# sourceMappingURL=app.241ea5d3.js.map