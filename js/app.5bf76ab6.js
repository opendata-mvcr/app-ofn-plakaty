(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},o={app:0},r=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"63cb1ba0","chunk-1a517a1a":"de415768","chunk-2d216214":"f98ebe23"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"729b759e","chunk-1a517a1a":"31d6cfe0","chunk-2d216214":"31d6cfe0"}[t]+".css",o=l.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===n||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[t],p.parentNode.removeChild(p),a(r)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){i[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}o[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/app-ofn-plakaty/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"0aee":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Turistický cíl")]),t._v(" | "),a("router-link",{attrs:{to:"/sport"}},[t._v("Sportoviště")])],1),a("router-view")],1)},o=[],r=(a("034f"),a("2877")),s={},l=Object(r["a"])(s,i,o,!1,null,null,null),c=l.exports,u=a("9483");Object(u["a"])("".concat("/app-ofn-plakaty/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var d=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Landmark",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.listItems,(function(e,n){return a("span",{key:n},[a("button",{staticClass:"btn btn-secondary m-1",attrs:{type:"button"},on:{click:function(a){return t.loadIri(e.iri)}}},[t._v(t._s(e["název"].cs))])])})),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"d-flex justify-content-center m-5"},[a("div",{ref:"pdf",staticClass:"pdf-container",attrs:{id:"pdf"}},[a("div",{attrs:{id:"top"}},[a("img",{attrs:{src:t.item.photo,id:"photo"}}),a("div",{staticClass:"carousel-caption",attrs:{id:"name"}},[a("h1",[a("span",{staticClass:"badge badge-primary",style:t.badgeStyle},[t._v(" "+t._s(t.item.name)+" ")])])])]),a("div",{attrs:{id:"middle"}},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"col-9 p-5 content-center d-flex align-items-center bg-info text-white"},[a("div",[a("div",{staticClass:"row"},[a("h4",{},[t._v("🛈")]),a("span",{style:t.descriptionStyle},[t._v(" "+t._s(t.item.description)+" ")])]),a("div",{staticClass:"row middle-link pb-3 text-light"},[t.item.link?a("span",[t._v("🔗")]):t._e(),a("span",{staticClass:"pl-3"},[a("small",[t._v(t._s(t.item.link))])])])])]),a("div",{staticClass:"col-3 p-5 content-center d-flex align-items-center bg-secondary text-white"},[a("div",[a("div",{},[a("div",{staticClass:"row"},[t.item.open?a("h3",[a("strong",[t._v("⏰")])]):t._e()]),a("div",{staticClass:"row"},[t._v(" "+t._s(t.item.open)+" ")])]),t._m(0)])])])]),a("div",{attrs:{id:"map-wrap"}},[a("l-map",{ref:"theMap",attrs:{zoom:t.zoom,center:t.item.center,options:{zoomControl:!1}}},[a("l-tile-layer",{attrs:{url:t.map_url}}),a("l-marker",{attrs:{"lat-lng":t.item.center}})],1)],1)])])]),a("div",{staticClass:"col-lg-4"},[t._m(1),a("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"home",role:"tabpanel","aria-labelledby":"home-tab"}},[a("div",{staticClass:"form-group p-3"},[a("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Barevná varianta:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.bootswatch,expression:"bootswatch"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.bootswatch=e.target.multiple?a:a[0]},t.swatch]}},t._l(t.bootswatches,(function(e,n){return a("option",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"btn btn-primary btn-block pl-5 pr-5",on:{click:t.download}},[t._v("Vytvořit a stáhnout PDF"),a("br"),t._v("(+ vytvořit PNG)")]),a("div",{staticClass:"p-2"},[a("a",{class:t.pngClass,attrs:{href:t.pngData,id:"pngLink",download:t.pngName,disabled:""}},[t._v("Stáhnout PNG")])])])])]),a("hr"),a("div",{staticClass:"tab-pane fade",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}},[a("h3",[t._v(" Nastavení turistického cíle ")]),a("div",{staticClass:"form-group p-3"},[a("label",{attrs:{for:"urlInput"}},[t._v("Adresa (JSON):")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.url,expression:"item.url"}],staticClass:"form-control",attrs:{type:"url",id:"urlInput"},domProps:{value:t.item.url},on:{input:function(e){e.target.composing||t.$set(t.item,"url",e.target.value)}}}),a("button",{staticClass:"btn btn-warning m-1",on:{click:t.load}},[t._v("Nahrát nový turistický cíl")])]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"nameInput"}},[t._v("Jméno: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.name,expression:"item.name"}],staticClass:"form-control",attrs:{type:"text",id:"nameInput"},domProps:{value:t.item.name},on:{input:function(e){e.target.composing||t.$set(t.item,"name",e.target.value)}}})]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"nameSizeInput"}},[t._v("Velikost jména: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fsize,expression:"fsize"}],staticClass:"form-control",attrs:{type:"number",id:"nameSizeInput"},domProps:{value:t.fsize},on:{input:function(e){e.target.composing||(t.fsize=e.target.value)}}})]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"photoInput"}},[t._v("Foto: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.photo,expression:"item.photo"}],staticClass:"form-control",attrs:{type:"url",id:"photoInput"},domProps:{value:t.item.photo},on:{input:function(e){e.target.composing||t.$set(t.item,"photo",e.target.value)}}})]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"descriptionInput"}},[t._v("Popis:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.description,expression:"item.description"}],staticClass:"form-control",attrs:{type:"text",id:"descriptionInput",row:"7"},domProps:{value:t.item.description},on:{input:function(e){e.target.composing||t.$set(t.item,"description",e.target.value)}}})]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"descriptionSizeInput"}},[t._v("Velikost popisu: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fdsize,expression:"fdsize"}],staticClass:"form-control",attrs:{type:"number",id:"descriptionSizeInput"},domProps:{value:t.fdsize},on:{input:function(e){e.target.composing||(t.fdsize=e.target.value)}}})]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"linkInput"}},[t._v("🔗 Link: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.link,expression:"item.link"}],staticClass:"form-control",attrs:{type:"text",id:"linkInput"},domProps:{value:t.item.link},on:{input:function(e){e.target.composing||t.$set(t.item,"link",e.target.value)}}})]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"linkInput"}},[t._v("⏰ Otevřeno: ")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.open,expression:"item.open"}],staticClass:"form-control",attrs:{type:"text",id:"linkInput",row:"7"},domProps:{value:t.item.open},on:{input:function(e){e.target.composing||t.$set(t.item,"open",e.target.value)}}})]),a("div",{staticClass:"form-group m-3"},[a("label",{staticClass:"mb-2",attrs:{for:"linkInput"}},[t._v("♿ 🍼 Přístupnost: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.access,expression:"item.access"}],staticClass:"form-control",attrs:{type:"text",id:"linkInput"},domProps:{value:t.item.access},on:{input:function(e){e.target.composing||t.$set(t.item,"access",e.target.value)}}})])])])])]),a("div",{staticStyle:{display:"none"},attrs:{id:"img"}},[t._v(" "+t._s(t.loadedItems)+" ")])],2)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row middle-link pb-3 text-light"},[a("h3",[t._v("♿ 🍼")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav nav-tabs"},[a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("a",{staticClass:"nav-link active",attrs:{id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"}},[t._v("Základ")])]),a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("a",{staticClass:"nav-link",attrs:{id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"}},[t._v("Detaily")])])])}],h=(a("a4d3"),a("e01a"),a("b0c0"),a("b64b"),a("ac1f"),a("3ca3"),a("5319"),a("9911"),a("ddb0"),a("2b3d"),a("53ca")),b=a("b85c"),g=a("8baf"),y=a("c0e9"),k=a.n(y),w=a("bc3a"),C=a.n(w),_=a("2699"),x=a("a40a"),I=a("4e2b"),j=(a("6cc5"),a("e11e")),S={name:"home",data:function(){return{item:{center:[50,13.5],name:"",description:"",link:"",open:"",photo:"",access:"♿ 🍼",info:{},url:"https://michalskop.gitlab.io/ofnapp/data/konvent.json"},map_url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:13,bootswatch:"journal",bootswatches:["journal","cosmo","cerulean","cyborg","darkly","flatly","litera","lumen","lux","materia","minty","pulse","sandstone","siplex","sketchy","slate","solar","spacelab","superhero","united","yeti"],s:0,ss:0,fsize:150,fdsize:100,pngData:"",pngName:"",pngClass:"btn btn-secondary disabled",listLinks:[],listItems:[],defaultUrls:{url:"https://michalskop.gitlab.io/ofnapp/data/konvent.json",dataurl:"https://oha03.mvcr.gov.cz/sparql",dataquery:"PREFIX dcterms: <http://purl.org/dc/terms/>\n        PREFIX dcat: <http://www.w3.org/ns/dcat#>\n        SELECT ?odkazKeStažení\n        WHERE {\n          ?datová_sada a dcat:Dataset ;\n            dcterms:conformsTo <https://ofn.gov.cz/turistické-cíle/2020-07-01/> ;\n            dcat:distribution ?distribuce .\n          ?distribuce a dcat:Distribution ;\n            dcterms:format <http://publications.europa.eu/resource/authority/file-type/JSON_LD> ;\n            dcat:downloadURL ?odkazKeStažení . \n        }",dataformat:"application/json"}}},mounted:function(){var t=this;delete j["Icon"].Default.prototype._getIconUrl,j["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")}),C.a.get(this.listUrl).then((function(e){t.listLinks=t.extractLinks(e.data.results.bindings),t.listItems=t.getListItems(),t.ss++})).catch((function(t){console.log(t)}))},computed:{listUrl:function(){if("undefined"!==typeof this.$route.query.dataurl)return this.$route.query.dataurl;var t=new URL(this.defaultUrls.dataurl);return t.searchParams.append("query",this.defaultUrls.dataquery),t.searchParams.append("format",this.defaultUrls.dataformat),t.href},loadedItems:function(){var t=this.ss;return Array.isArray(this.listItems)&&"undefined"!==typeof this.$route.query.iri?this.loadIri(this.$route.query.iri):this.load(this.item.url),t},badgeStyle:function(){return"font-size:"+this.fsize+"%"},descriptionStyle:function(){return"font-size:"+this.fdsize+"%"}},methods:{getListItems:function(){var t,e=[],a=this,n=Object(b["a"])(a.listLinks);try{for(n.s();!(t=n.n()).done;){var i=t.value;C.a.get(a.corsLink(i)).then((function(t){if(Array.isArray(t.data)){var a,n=Object(b["a"])(t.data);try{for(n.s();!(a=n.n()).done;){var i=a.value;e.push(i)}}catch(o){n.e(o)}finally{n.f()}}else e.push(t.data)}))}}catch(o){n.e(o)}finally{n.f()}return e},extractLinks:function(t){var e,a=[],n=Object(b["a"])(t);try{for(n.s();!(e=n.n()).done;){var i=e.value;"undefined"!=typeof i["odkazKeStažení"]&&"undefined"!=typeof i["odkazKeStažení"]["type"]&&"uri"==i["odkazKeStažení"]["type"]&&a.push(i["odkazKeStažení"]["value"])}}catch(o){n.e(o)}finally{n.f()}return a},corsLink:function(t){return"https://cors-anywhere.herokuapp.com/"+t},swatch:function(){var t=document.getElementsByTagName("head")[0],e=document.createElement("link");if(e.href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/"+this.bootswatch+"/bootstrap.min.css",e.type="text/css",e.rel="stylesheet",e.id="swatch-"+(this.s+1),t.append(e),this.s>0){var a=document.getElementById("swatch-"+this.s);a.remove()}this.s++,this.pngClass="btn btn-secondary disabled"},existCs:function(t,e,a){return"object"===Object(h["a"])(t)&&"undefined"!=typeof t[e]&&"undefined"!=typeof t[e]["cs"]?t[e]["cs"]:a},existInArr:function(t,e,a,n){var i,o=Object(b["a"])(t[e]);try{for(o.s();!(i=o.n()).done;){var r=i.value;if("object"===Object(h["a"])(r)&&"undefined"!=typeof r[a])return r[a]}}catch(s){o.e(s)}finally{o.f()}return n},loadIri:function(t){this.pngClass="btn btn-secondary disabled";var e,a={},n=Object(b["a"])(this.listItems);try{for(n.s();!(e=n.n()).done;){var i=e.value;if(t==i.iri){a=i;break}}}catch(r){n.e(r)}finally{n.f()}if(Object.keys(a).length>0){this.item.info=a,this.item.center=[this.item.info["umístění"]["geometrie"]["coordinates"][1],this.item.info["umístění"]["geometrie"]["coordinates"][0]],this.item.name=this.existCs(this.item.info,"název","Turistický cíl"),this.item.description=this.existCs(this.item.info,"popis","Ideální turistický cíl"),this.item.link=this.existInArr(this.item.info,"kontakt","url",null).replace("https://","").replace("http://","").replace(/\/$/,""),this.item.open=this.item.info["open"],this.item.photo=this.existInArr(this.item.info,"příloha","url",null),this.item.url="";var o=Object.assign({},this.$route.query);this.item.info.iri!=this.$route.query.iri&&(o.iri=this.item.info.iri,this.$router.replace({query:o}))}},load:function(t){var e=this;this.pngClass="btn btn-secondary disabled","undefined"!=t&&"object"!==Object(h["a"])(t)||(t=this.url),C.a.get(t).then((function(a){e.item.info=a.data,e.item.center=[e.item.info["umístění"]["geometrie"]["coordinates"][1],e.item.info["umístění"]["geometrie"]["coordinates"][0]],e.item.name=e.existCs(e.item.info,"název","Turistický cíl"),e.item.description=e.existCs(e.item.info,"popis","Ideální turistický cíl"),e.item.link=e.existInArr(e.item.info,"kontakt","url",null).replace("https://","").replace("http://","").replace(/\/$/,""),e.item.open=e.item.info["open"],e.item.photo=e.existInArr(e.item.info,"příloha","url",null),e.url=t}))},download:function(){var t=this;k()(document.getElementById("pdf"),{scale:1,allowTaint:!0,useCORS:!0,scrollX:-window.scrollX-2*(window.devicePixelRatio-1),scrollY:-window.scrollY}).then((function(e){var a=e.toDataURL("image/png",.8),n=new Image;n.src=a,document.getElementById("img").appendChild(n),n.addEventListener("load",(function(){t.pngName=t.item.name+"-"+t.bootswatch+".png",t.pngData=n.src.replace("image/png","image/octet-stream"),t.pngClass="btn btn-secondary";var e=new g["a"]({unit:"pt",format:[Math.floor(3*Math.floor(n.width)/4),Math.floor(3*Math.floor(n.height)/4)]});e.addImage(n.src,"PNG",-1,-1),e.save(t.item.name+"-"+t.bootswatch+".pdf")}))}))}},components:{LMap:_["a"],LTileLayer:x["a"],LMarker:I["a"]}},z=S,O=(a("a39f"),Object(r["a"])(z,f,v,!1,null,"22c95a88",null)),N=O.exports,P={name:"Home",components:{Landmark:N}},L=P,E=Object(r["a"])(L,p,m,!1,null,null,null),$=E.exports;n["a"].use(d["a"]);var A=[{path:"/",name:"Home",title:"OFN app",component:$},{path:"/sport",name:"Sportoviště",component:function(){return a.e("about").then(a.bind(null,"3a0c"))}}],T=new d["a"]({base:"/app-ofn-plakaty/",routes:A}),q=T,U=a("2f62");n["a"].use(U["a"]);var D=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:q,store:D,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,a){},a39f:function(t,e,a){"use strict";var n=a("0aee"),i=a.n(n);i.a}});
//# sourceMappingURL=app.5bf76ab6.js.map