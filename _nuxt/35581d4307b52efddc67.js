(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{159:function(e,t,r){var o=r(162);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(18).default)("2aa3933d",o,!0,{})},160:function(e,t,r){var o=r(164);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(18).default)("478f6032",o,!0,{})},161:function(e,t,r){"use strict";var o=r(159);r.n(o).a},162:function(e,t,r){(e.exports=r(17)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},163:function(e,t,r){"use strict";var o=r(160);r.n(o).a},164:function(e,t,r){(e.exports=r(17)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100%;height:auto\n}\n.search{padding:5px;margin-top:20px\n}\n.search i{vertical-align:middle\n}\n.search #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n.search ul{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);list-style:none;margin:0;padding:0;position:absolute;z-index:1000;background:#fff;width:95%\n}\n.search ul li a{padding:8px;width:100%;height:100%;display:inline-block;color:#000\n}",""])},165:function(e,t,r){"use strict";var o,n=r(6),i=r(33),a=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return a(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(r){r.id===e?1==t.expandInfo[r.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[r.id]&&t.$set(t.expandInfo,r.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,r=Number(t.dataset.id);this.setExpandInfo(r)},t=l([Object(n.Component)({props:{items:Array}})],t)}(n.Vue),d=(r(161),r(9)),u=Object(d.a)(s,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"margin-top-50px"},e._l(e.items,function(t){return r("div",{key:t.id,staticClass:"treeview-parent",class:{active:t.url===e.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n            "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),e._v(" "),r("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},["null"!=t.url?r("a",{attrs:{"data-id":t.id,href:"/tutorial/"+t.url}},[e._v(e._s(t.text))]):r("span",{attrs:{"data-id":t.id}},[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id] === true"}]},e._l(t.childs,function(t){return r("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);u.options.__file="treeview.vue";var p=u.exports,c=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View",url:"view"},{id:"validation",text:"Validation",url:"validation"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Logger",url:"logger"},{id:"middleware",text:"Middleware",url:"middleware"},{id:10,text:"Components",url:"components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:"decorator",text:"Decorators",url:"decorator",childs:[{id:"expect_body",url:"decorator/expect-body",text:"ExpectBody"},{id:"expect_query",url:"decorator/expect-query",text:"ExpectQuery"}]},{id:11,text:"Concepts",url:"null",childs:[{id:1,text:"Cookie",url:"cookie"},{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File",url:"file"},{id:8,text:"Dependency Injection",url:"dependency-injection"}]},{id:12,text:"Types",url:"null",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"},{id:3,text:"HttpRequest",url:"http-request"},{id:4,text:"HttpResponse",url:"http-response"},{id:5,text:"ViewEngineData",url:"view-engine-data"},{id:6,text:"HttpFormatResult",url:"http-format-result"}]},{id:13,text:"Advanced",url:"null",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"},{id:4,text:"View Engine",url:"view-engine"},{id:6,text:"GraphQl",url:"graphql"},{id:7,text:"Socket.io",url:"socket-io"}]},{id:14,text:"Swagger / Open API",url:"swagger",childs:[{id:1,text:"Initiate",url:"swagger/initiate"},{id:2,text:"Swagger Model",url:"swagger/model"}]},{id:15,text:"Deployment",url:"deployment"},{id:16,text:"Test",url:"test"}],h=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),C=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},f=function(e){function t(){var t=e.call(this)||this;return t.version=1,t.jsstoreText=["Store data in browser using jsstore","Improve your web app performance by storing data in client side","Easy indexeddb development using jsstore"],t.adIndex=-1,t.showMenu=!1,t.searchValue="",t.searchResult=[],t.linksWithChilds=[],t.catchEvents(),t}return h(t,e),t.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this;this.searchResult=this.linksWithChilds.filter(function(t){if(t.text.toLowerCase().indexOf(e.searchValue)>=0)return t})},t.prototype.isNullOrEmpty=function(e){return null==e||0==e.length},t.prototype.mounted=function(){var e=this;this.showAds(),this.setLinksWithChilds();var t,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(o){if(null!=o.childs){var n=o.childs.find(function(t){return r===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=n)return t=n.url,e.$refs.linkContainer.setExpandInfo(o.id),!1}return!e.isNullOrEmpty(t)||r!==(""+e.relativeUrl+o.url.toLowerCase()).replace(/\//g,"")||(t=o.url,o.childs&&o.childs.length>0&&e.$refs.linkContainer.setExpandInfo(o.id),!1)}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"FortJs - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return c},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this.allLinks_[this.getCurrentUrlIndex()];return e?e.url:null},enumerable:!0,configurable:!0}),t.prototype.showAds=function(){var e=this,t=++this.adIndex;t>=this.jsstoreText.length&&(t=this.adIndex=0),this.adIndex=t,setTimeout(function(){e.showAds()},2e3)},t.prototype.setLinksWithChilds=function(){var e=this;this.links.forEach(function(t){e.linksWithChilds.push(t),t.childs&&t.childs.forEach(function(t){e.linksWithChilds.push(t)})})},t=C([Object(n.Component)({components:{TreeView:p},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(i.a),E=(r(163),Object(d.a)(f,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:""}},[r("div",{staticClass:"search"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),r("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),r("ul",{staticClass:"search-results"},e._l(e.searchResult,function(t){return r("li",[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])}))])],1)],1),e._v(" "),r("TreeView",{ref:"linkContainer",attrs:{id:"divMenuContainer",items:e.links}})],1),e._v(" "),r("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),r("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[r("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://jsstore.net/"}},[r("img",{staticClass:"ad-image",attrs:{src:"http://jsstore.net/img/JsStore_350_155.png"}}),e._v(" "),r("div",[e._v(e._s(e.jsstoreText[e.adIndex]))])]),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-140px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/fortjs/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/fortjs.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",{staticStyle:{display:"inline-flex"}},[e._v("edit")])],1):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://twitter.com/ujjwal_kr_gupta",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-twitter"})]):e._e()],1)],1)},[],!1,null,null,null));E.options.__file="tutorial.vue";t.a=E.exports},227:function(e,t,r){"use strict";r.r(t);var o,n=r(6),i=r(165),a=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EThere%20are%20two%20parts%20of%20route%20in%20fortjs%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EParent%20Route%3C/li%3E%0A%3Cli%3EChild%20Route%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0ALet's%20understand%20this%20by%20examples.%20Consider%20an%20url%20-%20%22abc.com/user/add%22%20and%20let's%20split%20it%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Eabc.com%20-%20domain%20of%20the%20website%20%3C/li%3E%0A%3Cli%3Euser%20-%20parent%20route%3C/li%3E%0A%3Cli%3Eadd%20-%20child%20route%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0ALet's%20take%20another%20example%20-%20%22abc.com/user/1/2/3%22%20and%20split%20it%20again%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Eabc.com%20-%20domain%20of%20the%20website%3C/li%3E%0A%3Cli%3Euser%20-%20parent%20route%3C/li%3E%0A%3Cli%3E1%20-%20child%20route%3C/li%3E%0A%3Cli%3E2%20-%20child%20route%3C/li%3E%0A%3Cli%3E3%20-%20child%20route%20%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0ANow%20you%20must%20have%20understood,%20how%20parent%20and%20child%20route%20is%20divided.%3C/p%3E%0A%3Cp%3ELet's%20see%20how%20the%20route%20is%20configured%20in%20fortjs%20-%20%3C/p%3E%0A%3Ch2%20id=%22parentroute%22%3EParent%20Route%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0AIn%20order%20to%20create%20a%20parent%20route%20we%20must%20have%20a%20%3Ca%20href=%22/tutorial/controller%22%3Econtroller%3C/a%3E.%20This%20controller%20is%20mapped%20with%20a%20path.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Consider%20you%20have%20created%20a%20controller,%20let's%20say%20-%20%22UserController%22.%3C/p%3E%0A%3Cp%3EYou%20need%20to%20map%20Controller%20with%20a%20path.%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Fort%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20UserController%20%7D%20from%20%22./controllers%22;%0A%0Aclass%20App%20extends%20Fort%20%7B%0A%20%20%20%20constructor()%20%7B%0A%20%20%20%20%20%20%20%20super();%0A%20%20%20%20%20%20%20%20//%20here%20we%20have%20mapped%20UserController%20with%20path%20%22/user%22%0A%20%20%20%20%20%20%20%20this.routers%20=%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20controller:%20UserController,%0A%20%20%20%20%20%20%20%20%20%20%20%20path:%20%22/user%22%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20above%20example%20we%20are%20mapping%20%22UserContoller%22%20with%20a%20path%20%22/user%22%20inside%20the%20%22routers%22%20member%20of%20App.%20Since%20UserController%20is%20mapped%20with%20%22/user%22,%20so%20parent%20route%20is%20-%20%22user%22.%3C/p%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20If%20you%20have%20large%20no%20of%20controller%20(let's%20say%20more%20than%2010),%20it%20is%20recommended%20to%20define%20routers%20in%20a%20file%20as%20array%20(you%20can%20also%20divide%20your%20routers%20into%20multiple%20files)and%20then%20import%20those%20inside%20class%20App.%20The%20motive%20of%20this%20note%20is%20to%20keep%20your%20routers%20clean.%3C/p%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch2%20id=%22childroute%22%3EChild%20Route%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0AChild%20route%20is%20mapped%20to%20a%20%3Ca%20href=%22/tutorial/worker%22%3EWorker%3C/a%3E%20inside%20Controller.%0Ae.g%20-%20%3C/p%3E%0A%3Cp%3E%3Cstrong%3E%3Cu%3ECreating%20Child%20Route%3C/u%3E%3C/strong%3E%0A%3Cbr%3E%3Cbr%3E%0ALet's%20say%20we%20want%20to%20create%20the%20child%20route%20%22add%22%20-%20you%20need%20to%20create%20a%20method%20with%20the%20name%20%22add%22%20and%20add%20decoarator%20%22Worker%22%20above%20it%20.%20The%20decorator%20%22Worker%22%20add%20the%20method%20to%20route%20list%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20Worker,%20textResult%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%20%20%20%20@Worker()%0A%20%20%20%20async%20add%20()%20%7B%0A%20%20%20%20%20%20%20return%20textResult(%22add%20is%20called%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ESo,%20When%20url%20will%20be%20-%20%22abc.com/user/add%22%20then%20add%20method%20will%20be%20called.%3C/p%3E%0A%3Cdiv%20class=%22top-border%22%3E%3Cbr%3E%3C/div%3E%0A%3Cp%3E%3Cstrong%3E%3Cu%3ECustomizing%20route%3C/u%3E%3C/strong%3E%0A%3Cbr%3E%3Cbr%3E%0ABy%20default%20route%20is%20name%20of%20method,%20but%20you%20can%20customize%20the%20route%20using%20decorator%20%22Route%22.%20The%20%22Route%22%20decorator%20is%20used%20to%20customize%20the%20route%20in%20multiple%20ways%20-%20%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20Worker,%20textResult,%20Route%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%20%20%20%20@Worker()%0A%20%20%20%20@Route(%22/addCustom%22)%20//%20changing%20the%20route%20name%0A%20%20%20%20async%20add%20()%20%7B%0A%20%20%20%20%20%20%20return%20textResult(%22add%20is%20called%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EYou%20can%20see%20in%20the%20code%20,%20we%20have%20used%20'Route'%20decorator%20to%20override%20the%20route.%20So,%20now%20when%20url%20will%20be%20-%20%22abc.com/user/addCustom%22%20then%20add%20method%20will%20be%20called.%3C/p%3E%0A%3Cdiv%20class=%22top-border%22%3E%3Cbr%3E%3C/div%3E%0A%3Cp%3E%3Cstrong%3E%3Cu%3EFiltering%20the%20worker%20based%20on%20http%20method%3C/u%3E%3C/strong%3E%0A%3Cbr%3E%3Cbr%3E%3C/p%3E%0A%3Cp%3ECurrently%20with%20any%20of%20http%20methods%20(GET,POST,%20etc.)%20%22add%22%20method%20will%20be%20hit.%20But%20let's%20say%20you%20want%20to%20hit%20this%20only%20when%20http%20method%20is%20POST.%3C/p%3E%0A%3Cp%3EIn%20this%20case%20-%20you%20need%20to%20provide%20desired%20http%20methods%20to%20worker.%20Let's%20see%20an%20example%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20Worker,textResult,HTTP_METHOD%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%20%20%20%20@Worker(%5BHTTP_METHOD.POST%5D)%20//%20This%20method%20will%20be%20only%20hit%20when%20any%20of%20the%20http%20method%20specified%20in%20worker%20will%20match.%0A%20%20%20%20async%20add%20()%20%7B%0A%20%20%20%20%20%20%20return%20textResult(%22add%20is%20called%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cdiv%20class=%22top-border%22%3E%3Cbr%3E%3C/div%3E%0A%3Cp%3E%3Cstrong%3E%3Cu%3ESingle%20route%20&%20multiple%20http%20method%3C/u%3E%3C/strong%3E%0A%3Cbr%3E%3Cbr%3E%3C/p%3E%0A%3Cp%3EHow%20about%20you%20want%20to%20create%20a%20route%20%22add%22%20which%20will%20hit%20different%20worker%20based%20on%20http%20methods.%20This%20pattern%20is%20highly%20used%20in%20rest%20api%20implementation%20.%20Let's%20see%20an%20example%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20Worker,%20textResult,HTTP_METHOD,%20Route%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@Worker(%5BHTTP_METHOD.GET%5D)%0A%20%20%20%20@Route(%22/add%22)%0A%20%20%20%20async%20addWithGet()%20%7B%20//%20This%20will%20be%20called%20when%20method%20will%20be%20GET%0A%20%20%20%20%20%20%20return%20textResult(%22add%20with%20method%20get%20is%20called%22);%0A%20%20%20%20%7D%0A%0A%20%20%20%20@Worker(%5BHTTP_METHOD.POST%5D)%0A%20%20%20%20@Route(%22/add%22)%0A%20%20%20%20async%20addWithPost()%20%7B%20//%20This%20will%20be%20called%20when%20method%20will%20be%20POST%0A%20%20%20%20%20%20%20return%20textResult(%22add%20with%20method%20post%20is%20called%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cdiv%20class=%22top-border%22%3E%3Cbr%3E%3C/div%3E%0A%3Cp%3E%3Cstrong%3E%3Cu%3EParams%20in%20route%3C/u%3E%3C/strong%3E%0A%3Cbr%3E%3Cbr%3E%0A%3Cb%3E1.%20Constant%20param%20:%20%3C/b%3E%0A%3Cbr%3E%3Cbr%3E%0ASo%20far%20we%20have%20created%20a%20route%20-%20%22abc.com/user/add%22.%20How%20about%20little%20more%20complex%20route%20-%20%22abc.com/user/add/1%22.%20%3C/p%3E%0A%3Cp%3EFor%20this,%20we%20just%20need%20to%20modify%20our%20route.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20Worker,%20textResult,HTTP_METHOD,%20Route%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@Worker()%0A%20%20%20%20@Route(%22/add/1%22)%0A%20%20%20%20async%20add%20()%20%7B%0A%20%20%20%20%20%20%20return%20textResult(%22add%20is%20called%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cb%3E2.%20Variable%20param%20:%3C/b%3E%20%3Cbr%3E%3Cbr%3EIn%20the%20url%20-%20you%20can%20see%20%221%22%20is%20the%20constant%20value%20but%20in%20real%20life%20-%20the%20place%20where%201%20is%20present%20can%20be%20any%20value.%20%3C/p%3E%0A%3Cp%3Ee.g%20-%20%22abc.com/user/add/2%22,%20%22abc.com/user/add/hi%22,%20%22abc.com/user/add/1000%22%20etc.%3C/p%3E%0A%3Cp%3EBasically%20a%20part%20of%20the%20url%20is%20a%20variable%20which%20can%20hold%20any%20value.%3C/p%3E%0A%3Cp%3EYou%20can%20declare%20a%20variable%20in%20a%20route%20by%20using%20%3Ccode%3E%7B%7D%3C/code%3E.%20Let's%20see%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20Worker,%20textResult,HTTP_METHOD,%20Route%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@Worker()%0A%20%20%20%20@Route(%22/add/%7Bvalue%7D%22)%0A%20%20%20%20async%20add%20()%20%7B%0A%20%20%20%20%20%20%20const%20value%20=%20this.param.value;%20//%20placeholder%20values%20are%20present%20in%20'param'%20member%20of%20the%20controller.%0A%20%20%20%20%20%20%20return%20textResult(%22add%20is%20called%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cb%3E3.%20Variable%20&%20Constant%20:%3C/b%3E%20%3Cbr%3E%3Cbr%3EHow%20about%20a%20route%20where%20you%20want%20to%20return%20some%20file%20based%20on%20some%20extension.%20%3C/p%3E%0A%3Cp%3Ee.g%20-%20%22abc.com/file/scripts/jquery.js%22%20.%20In%20this%20example%20-%20%22jquery%22%20is%20variable%20value%20and%20%22.js%22%20is%20constant%20value%3C/p%3E%0A%3Cp%3ESo%20here%20:%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Eparent%20route%20is%20-%20'file'%3C/li%3E%0A%3Cli%3Echild%20route%20is%20-%20'scripts/jquery.js'%3C/li%3E%0A%3C/ul%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20Worker,%20textResult,HTTP_METHOD,%20Route%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20FileController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@Worker()%0A%20%20%20%20@Route(%22/scripts/%7BfileName%7D.js%22)%0A%20%20%20%20async%20getScripts%20()%20%7B%0A%20%20%20%20%20%20%20const%20value%20=%20this.param.value;%20//%20placeholder%20values%20are%20present%20in%20'param'%20member%20of%20the%20controller.%0A%20%20%20%20%20%20%20return%20textResult(%22add%20is%20called%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E",t.title="Route",t.keywords="route, customize, options, fortjs, node",t.description="Different types of route and how to customize them in fortjs",t}return a(t,e),t=l([Object(n.Component)({components:{Tutorial:i.a}})],t)}(n.Vue),d=r(9),u=Object(d.a)(s,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);u.options.__file="route.vue";t.default=u.exports}}]);