(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{156:function(t,e,n){var r=n(159);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(20).default)("2aa3933d",r,!0,{})},157:function(t,e,n){var r=n(161);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(20).default)("7a78b854",r,!0,{})},158:function(t,e,n){"use strict";var r=n(156);n.n(r).a},159:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},160:function(t,e,n){"use strict";var r=n(157);n.n(r).a},161:function(t,e,n){(t.exports=n(19)(!1)).push([t.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},162:function(t,e,n){"use strict";var r,o=n(6),i=n(33),l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t,e,n,r){var o,i=arguments.length,l=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(i<3?o(l):i>3?o(e,n,l):o(e,n))||l);return i>3&&l&&Object.defineProperty(e,n,l),l},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeUrl="",e.expandInfo={},e}return l(e,t),e.prototype.mounted=function(){var t=this;this.items.forEach(function(e){t.$set(t.expandInfo,e.id,!1)})},e.prototype.setActiveLink=function(t){this.activeUrl=t},e.prototype.setExpandInfo=function(t){var e=this;this.items.forEach(function(n){n.id===t?1==e.expandInfo[n.id]?e.$set(e.expandInfo,t,!1):e.$set(e.expandInfo,t,!0):1==e.expandInfo[n.id]&&e.$set(e.expandInfo,n.id,!1)})},e.prototype.onMenuClick=function(t){var e=t.target,n=Number(e.dataset.id);this.setExpandInfo(n)},e=a([Object(o.Component)({props:{items:Array}})],e)}(o.Vue),p=(n(158),n(9)),u=Object(p.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"margin-top-50px"},t._l(t.items,function(e){return n("div",{key:e.id,staticClass:"treeview-parent",class:{active:e.url===t.activeUrl}},[n("i",{staticClass:"material-icons",class:{"not-visible":null==e.childs||0==e.childs.length},attrs:{"data-id":e.id},on:{click:t.onMenuClick}},[t._v("\n            "+t._s(!0===t.expandInfo[e.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),t._v(" "),n("div",{staticClass:"text",attrs:{"data-id":e.id},on:{click:t.onMenuClick}},["null"!=e.url?n("a",{attrs:{"data-id":e.id,href:"/tutorial/"+e.url}},[t._v(t._s(e.text))]):n("span",{attrs:{"data-id":e.id}},[t._v(" "+t._s(e.text))])]),t._v(" "),null!=e.childs?n("ul",{directives:[{name:"show",rawName:"v-show",value:!0===t.expandInfo[e.id],expression:"expandInfo[item.id] === true"}]},t._l(e.childs,function(e){return n("li",{key:e.id,class:{"link-active":e.url===t.activeUrl}},[n("a",{attrs:{href:"/tutorial/"+e.url}},[t._v(t._s(e.text))])])})):t._e()])}))},[],!1,null,null,null);u.options.__file="treeview.vue";var c=u.exports,d=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View",url:"view"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Logger",url:"logger"},{id:10,text:"Components",url:"components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:11,text:"Concepts",url:"null",childs:[{id:1,text:"Cookie",url:"cookie"},{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File",url:"file"},{id:8,text:"Dependency Injection",url:"dependency-injection"}]},{id:12,text:"Types",url:"null",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"},{id:3,text:"HttpRequest",url:"http-request"},{id:4,text:"HttpResponse",url:"http-response"},{id:5,text:"ViewEngineData",url:"view-engine-data"},{id:6,text:"HttpFormatResult",url:"http-format-result"}]},{id:13,text:"Advanced",url:"null",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"},{id:4,text:"View Engine",url:"view-engine"},{id:5,text:"Swagger",url:"swagger"},{id:6,text:"GraphQl",url:"graphql"},{id:7,text:"Socket.io",url:"socket-io"}]},{id:14,text:"Deployment",url:"deployment"},{id:15,text:"Test",url:"test"}],f=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(t,e,n,r){var o,i=arguments.length,l=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(i<3?o(l):i>3?o(e,n,l):o(e,n))||l);return i>3&&l&&Object.defineProperty(e,n,l),l},g=function(t){function e(){var e=t.call(this)||this;return e.version=1,e.showMenu=!1,e.searchValue="",e.searchResult="",e.catchEvents(),e}return f(e,t),e.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){},e.prototype.isNullOrEmpty=function(t){return null==t||0==t.length},e.prototype.mounted=function(){var t,e=this,n=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(r){if(null!=r.childs){var o=r.childs.find(function(t){return n===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=o)return t=o.url,e.$refs.linkContainer.setExpandInfo(r.id),!1}return!e.isNullOrEmpty(t)||n!==(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")||(t=r.url,r.childs&&r.childs.length>0&&e.$refs.linkContainer.setExpandInfo(r.id),!1)}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.head=function(){return{title:"FortJs - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},e.prototype.getVersion=function(){return"1"},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e.prototype.getCurrentUrlIndex=function(){var t=this,e=this.$route.path;this.relativeUrl;return this.links.findIndex(function(n){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(e.prototype,"docToEdit",{get:function(){var t=this.allLinks_[this.getCurrentUrlIndex()];return t?t.url:null},enumerable:!0,configurable:!0}),e=h([Object(o.Component)({components:{TreeView:c},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],e)}(i.a),C=(n(160),Object(p.a)(g,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},[n("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),t._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":t.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[n("TreeView",{ref:"linkContainer",attrs:{items:t.links}})],1),t._v(" "),n("v-flex",{class:{"padding-left-15px":t.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[n("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.tutorialHtml)}})]),t._v(" "),n("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[null!=t.docToEdit?n("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/fortjs/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("i",{staticClass:"fab fa-gitter"})]):t._e(),t._v(" "),null!=t.docToEdit?n("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/fortjs.docs/edit/master/docs/tutorial/"+t.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("v-icon",{staticStyle:{display:"inline-flex"}},[t._v("edit")])],1):t._e()],1)],1)},[],!1,null,null,null));C.options.__file="tutorial.vue";e.a=C.exports},209:function(t,e,n){"use strict";n.r(e);var r,o=n(6),i=n(162),l=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t,e,n,r){var o,i=arguments.length,l=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(i<3?o(l):i>3?o(e,n,l):o(e,n))||l);return i>3&&l&&Object.defineProperty(e,n,l),l},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EComponents%20are%20most%20important%20part%20of%20fort%20application.%20They%20are%20independent%20&amp;%20every%20component%20has%20its%20own%20lifecycle%20and%20scope.%20It%20helps%20you%20to%20modularize%20your%20app%20&amp;%20reutilize%20codes.%3C/p%3E%0A%3Cp%3EThere%20are%20three%20types%20of%20components%20-%20%3C/p%3E%0A%3Col%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22/tutorial/wall%22%3EWall%3C/a%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22/tutorial/shield%22%3EShield%3C/a%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22/tutorial/guard%22%3EGuard%3C/a%3E%3C/p%3E%3C/li%3E%0A%3C/ol%3E%0A%3Ch1%20id=%22concept%22%3EConcept%3C/h1%3E%0A%3Cp%3E%3Cimg%20src=%22/img/fort_component.png%22%20alt=%22FortJs%20Architecture%22%20style=%22height:600px;%22/%3E%3C/p%3E%0A%3Cp%3E%3Cstrong%3EThe%20above%20picture%20shows%20the%20architecture%20of%20fortjs%20app%20and%20flow%20of%20http%20request%20inside%20app%20-%3C/strong%3E%20%3C/p%3E%0A%3Cul%3E%0A%20%20%20%20%3Cli%3E%0A%20%20%20%20When%20a%20http%20request%20comes%20to%20your%20app%20-%20it%20has%20to%20go%20through%20sequence%20of%20components%20i.e%20%3Ca%20href=%22/tutorial/wall%22%3EWall%3C/a%3E,%20%3Ca%20target=%22_blank%22%20href=%22/tutorial/shield%22%3EShield%3C/a%3E%20&%20%3Ca%20target=%22_blank%22%20href=%22/tutorial/guard%22%3EGuard%3C/a%3E%20and%20if%20everyone%20allows%20then%20request%20is%20transferred%20to%20Worker%20inside%20%3Ca%20target=%22_blank%22%20href=%22/tutorial/controller%22%3EController%3C/a%3E%20where%20the%20actual%20resource%20is%20present.%0A%20%20%20%20%3C/li%3E%0A%20%20%20%20%3Cli%3EThe%20Http%20Request%20has%20to%20first%20go%20through%20component%20%3Ca%20href=%22/tutorial/wall%22%3EWall%3C/a%3E.%20The%20incoming%20event%20of%20wall%20is%20called%20and%20if%20wall%20%0A%20%20%20%20%20%20%20%20%3Cul%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3EAllows%20-%20It%20is%20sent%20to%20next%20lower%20level%20component%20which%20is%20%3Ca%20target=%22_blank%22%20href=%22/tutorial/shield%22%3EShield%3C/a%3E%3C/li%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3ERejects%20-%20The%20result%20is%20considered%20as%20final%20result%20and%20result%20is%20sent%20as%20http%20response%20&%20its%20lifecycle%20is%20ended%20there.%3C/li%3E%0A%20%20%20%20%20%20%20%20%3C/ul%3E%0A%20%20%20%20%3C/li%3E%0A%20%20%20%20%3Cli%3E%0A%20%20%20%20%20%20%20%20After%20%3Ca%20href=%22/tutorial/wall%22%3EWall%3C/a%3E%20allows%20the%20request,%20it%20is%20sent%20to%20%3Ca%20target=%22_blank%22%20href=%22/tutorial/shield%22%3EShield%3C/a%3E%20and%20if%20shield%20%0A%20%20%20%20%20%20%20%20%3Cul%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3EAllows%20-%20It%20is%20sent%20to%20next%20component%20which%20is%20%3Ca%20target=%22_blank%22%20href=%22/tutorial/guard%22%3EGuard%3C/a%3E%20%3C/li%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%20Rejects%20-%20The%20result%20is%20considered%20as%20final%20result.%20The%20result%20has%20to%20go%20through%20wall%20outgoing%20event%20and%20finally%20http%20response%20is%20sent.%3C/li%3E%0A%20%20%20%20%20%20%20%20%3C/ul%3E%0A%20%20%20%20%3C/li%3E%0A%20%20%20%20%3Cli%3E%0A%20%20%20%20%20%20%20%20After%20%3Ca%20target=%22_blank%22%20href=%22/tutorial/shield%22%3EShield%3C/a%3E%20allows%20-%20the%20request%20is%20allowed%20to%20go%20inside%20%3Ca%20target=%22_blank%22%20href=%22/tutorial/controller%22%3EController%3C/a%3E%20&%20control%20is%20transferred%20to%20%3Ca%20target=%22_blank%22%20href=%22/tutorial/guard%22%3EGuard%3C/a%3E%20&%20if%20guard%0A%20%20%20%20%20%20%20%20%3Cul%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3EAllows%20-%20It%20is%20sent%20to%20Worker%20where%20the%20actual%20resource%20is%20present.%3C/li%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%20Rejects%20-%20The%20result%20is%20considered%20as%20final%20result.%20The%20result%20has%20to%20go%20through%20wall%20outgoing%20event%20and%20finally%20http%20response%20is%20sent.%3C/li%3E%0A%20%20%20%20%20%20%20%20%3C/ul%3E%0A%20%20%20%20%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22importantpoints%22%3EImportant%20points%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3EIt%20is%20not%20necessary%20to%20create%20any%20components,%20you%20can%20have%20just%20Controller%20and%20Worker.%20But%20it%20is%20highly%20recommended%20to%20use%20components%20since%20components%20helps%20to%20modularize%20your%20app%20into%20small%20dedicated%20features%20making%20your%20code%20cleaner,%20reutilizable%20&amp;%20testable.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EHere%20we%20saw%20Components%20are%20being%20used%20to%20block%20the%20request,%20but%20it%20can%20be%20also%20used%20to%20do%20some%20work%20and%20pass%20the%20result%20from%20one%20component%20to%20another.%20Check%20out%20particular%20component%20to%20know%20more.%20%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3Ee.g%20-%20The%20validation%20of%20data,%20extracting%20some%20information%20like%20ip%20address%20&amp;%20passing%20from%20one%20component%20to%20another%20etc.%3C/p%3E%0A%3Cstyle%3E%0Ali%7B%0A%20%20%20%20padding-top:10px;%0A%7D%0Aul%7B%0A%20%20%20%20margin-left:10px;%0A%7D%0A%3C/style%3E",e.title="Components",e.keywords="components, modularize, app, fortjs, node",e.description="Description about components of fortjs",e}return l(e,t),e=a([Object(o.Component)({components:{Tutorial:i.a}})],e)}(o.Vue),p=n(9),u=Object(p.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);u.options.__file="components.vue";e.default=u.exports}}]);