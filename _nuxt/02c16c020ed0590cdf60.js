(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{156:function(e,t,n){var r=n(159);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(20).default)("2aa3933d",r,!0,{})},157:function(e,t,n){var r=n(161);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(20).default)("7a78b854",r,!0,{})},158:function(e,t,n){"use strict";var r=n(156);n.n(r).a},159:function(e,t,n){(e.exports=n(19)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},160:function(e,t,n){"use strict";var r=n(157);n.n(r).a},161:function(e,t,n){(e.exports=n(19)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},162:function(e,t,n){"use strict";var r,o=n(6),i=n(33),s=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return s(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(n){n.id===e?1==t.expandInfo[n.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[n.id]&&t.$set(t.expandInfo,n.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,n=Number(t.dataset.id);this.setExpandInfo(n)},t=a([Object(o.Component)({props:{items:Array}})],t)}(o.Vue),u=(n(158),n(9)),c=Object(u.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"margin-top-50px"},e._l(e.items,function(t){return n("div",{key:t.id,staticClass:"treeview-parent",class:{active:t.url===e.activeUrl}},[n("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n            "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),e._v(" "),n("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},["null"!=t.url?n("a",{attrs:{"data-id":t.id,href:"/tutorial/"+t.url}},[e._v(e._s(t.text))]):n("span",{attrs:{"data-id":t.id}},[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?n("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id] === true"}]},e._l(t.childs,function(t){return n("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[n("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);c.options.__file="treeview.vue";var d=c.exports,p=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View",url:"view"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Components",url:"components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:10,text:"Concepts",url:"null",childs:[{id:1,text:"Cookie",url:"cookie"},{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File",url:"file"},{id:8,text:"Dependency Injection",url:"dependency-injection"}]},{id:11,text:"Types",url:"null",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"},{id:3,text:"HttpRequest",url:"http-request"},{id:4,text:"HttpResponse",url:"http-response"},{id:5,text:"ViewEngineData",url:"view-engine-data"},{id:6,text:"HttpFormatResult",url:"http-format-result"}]},{id:12,text:"Advanced",url:"null",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"},{id:4,text:"View Engine",url:"view-engine"},{id:5,text:"Swagger",url:"swagger"},{id:6,text:"GraphQl",url:"graphql"},{id:7,text:"Socket.io",url:"socket-io"}]},{id:13,text:"Deployment",url:"deployment"},{id:14,text:"Test",url:"test"}],h=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},g=function(e){function t(){var t=e.call(this)||this;return t.version=1,t.showMenu=!1,t.searchValue="",t.searchResult="",t.catchEvents(),t}return h(t,e),t.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){},t.prototype.isNullOrEmpty=function(e){return null==e||0==e.length},t.prototype.mounted=function(){var e,t=this,n=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(r){if(null!=r.childs){var o=r.childs.find(function(e){return n===(""+t.relativeUrl+e.url.toLowerCase()).replace(/\//g,"")});if(null!=o)return e=o.url,t.$refs.linkContainer.setExpandInfo(r.id),!1}return!t.isNullOrEmpty(e)||n!==(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")||(e=r.url,r.childs&&r.childs.length>0&&t.$refs.linkContainer.setExpandInfo(r.id),!1)}),e&&e.length>0&&this.$refs.linkContainer.setActiveLink(e)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"FortJs - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(n){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this.allLinks_[this.getCurrentUrlIndex()];return e?e.url:null},enumerable:!0,configurable:!0}),t=f([Object(o.Component)({components:{TreeView:d},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(i.a),x=(n(160),Object(u.a)(g,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[n("TreeView",{ref:"linkContainer",attrs:{items:e.links}})],1),e._v(" "),n("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[n("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),n("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[null!=e.docToEdit?n("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/fortjs/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?n("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/fortjs.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("v-icon",{staticStyle:{display:"inline-flex"}},[e._v("edit")])],1):e._e()],1)],1)},[],!1,null,null,null));x.options.__file="tutorial.vue";t.a=x.exports},210:function(e,t,n){"use strict";n.r(t);var r,o=n(6),i=n(162),s=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EThere%20are%20multiple%20ways%20in%20which%20we%20can%20authenticate.%20But%20we%20will%20learn%20how%20to%20do%20session%20authentication%20based%20on%20userid/password%20combination.%3C/p%3E%0A%3Cp%3ESo%20the%20concept%20is%20simple%20-%20a%20registered%20user%20has%20userid%20and%20password%20and%20they%20can%20access%20the%20system%20once%20they%20have%20entered%20valid%20credential.%20We%20need%20to%20design%20a%20login%20page%20through%20which%20user%20can%20login.%3C/p%3E%0A%3Cp%3Elet's%20consider%20that%20our%20app%20has%20a%20default%20controller%20and%20it%20can%20be%20accessed%20by%20anyone%20without%20login.%20Basically%20it%20contains%20a%20home%20page,%20a%20login%20page,%20a%20registration%20page%20etc.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20DefaultController%20extends%20Controller%20%7B%0A%20%20%20%20@DefaultWorker()%0A%20%20%20%20async%20default()%20%7B%0A%20%20%20%20%20%20%20%20const%20result%20=%20await%20viewResult('controller:default,action:default');%0A%20%20%20%20%20%20%20%20return%20result;%0A%20%20%20%20%7D%0A%0A%20%20%20%20@Worker(%5BHTTP_METHOD.Get%5D)%0A%20%20%20%20@Route(%22/login%22)%0A%20%20%20%20async%20getloginForm()%20%7B%0A%20%20%20%20%20%20%20%20const%20result%20=%20viewResult(%22login_form%22);%0A%20%20%20%20%20%20%20%20return%20result;%0A%20%20%20%20%7D%20%0A%0A%20%20%20%20@Worker(%5BHTTP_METHOD.Post%5D)%0A%20%20%20%20async%20login()%20%7B%0A%20%20%20%20%20%20%20%20const%20emailId%20=%20this.body.emailId;%0A%20%20%20%20%20%20%20%20const%20pwd%20=%20this.body.password;%0A%20%20%20%20%20%20%20%20if%20(emailId%20!=%20null%20&amp;&amp;%20pwd%20!=%20null)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20userService%20=%20new%20UserService();%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20user%20=%20userService.getUserByEmail(emailId);%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(user%20!=%20null%20&amp;&amp;%20user.password%20===%20pwd)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.session.set('userId',%20user.id);%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.session.set('emailId',%20emailId);%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20textResult(%60Authenticated%60);%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20result%20=%20textResult(%22Invalid%20credential%22);%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20result;%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20result%20=%20textResult(%22Please%20make%20sure,%20you%20are%20sending%20emailId%20and%20password%22);%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20result;%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EYou%20can%20see%20-%20we%20have%20three%20worker.%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cstrong%3Edefault%3C/strong%3E%20-%20is%20used%20to%20show%20the%20home%20page%3C/li%3E%0A%3Cli%3E%3Cstrong%3EgetloginForm%3C/strong%3E%20-%20is%20used%20to%20show%20the%20login%20form%20when%20request%20is%20%22GET%22%3C/li%3E%0A%3Cli%3E%3Cstrong%3Elogin%3C/strong%3E%20-%20is%20%20used%20to%20login%20into%20the%20sytem%20through%20POST%20request.This%20method%20retrieve%20emailId%20and%20password%20from%20post%20and%20check%20whether%20emailId/password%20is%20correct.%20And%20if%20correct%20-%20it%20creates%20the%20session.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3EOnce%20the%20session%20has%20been%20set%20for%20a%20user.%20It%20can%20be%20accessed%20anywhere%20in%20the%20system%20(any%20controller/worker)%20using%20-%20%3Ccode%3Ethis.session.get('userId')%3C/code%3E%20%20or%20%3Ccode%3Ethis.session.isExist('userId')%3C/code%3E%3C/p%3E%0A%3Cp%3EIn%20order%20to%20not%20allow%20unauthenticated%20user%20to%20access%20restricted%20method%20:%20we%20can%20check%20in%20every%20worker%20-%20If%20session%20is%20set%20or%20not%20and%20then%20based%20on%20that%20take%20actions.%3C/p%3E%0A%3Cp%3Ee.g%20-%20if%20session%20is%20present%20then%20fulfill%20the%20request%20otherwise%20redirect%20to%20login%20page%20or%20send%20a%20text%20response%20with%20http%20code%20401.%3C/p%3E%0A%3Cp%3EWe%20can%20take%20the%20above%20concept%20and%20divide%20into%20%3Ca%20href=%22/tutorial/components%22%3Ecomponent%3C/a%3E.%20So%20that%20we%20dont%20need%20to%20write%20in%20every%20method.%20We%20can%20use%20shield%20or%20guard%20-%20this%20completely%20depends%20upon%20requirement.%3C/p%3E%0A%3Cp%3ELet's%20consider%20that%20we%20want%20to%20restrict%20at%20controller%20level%20and%20for%20this%20we%20need%20to%20create%20a%20%3Ca%20href=%22/tutorial/shield%22%3Eshield%3C/a%3E%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Shield,%20textResult,%20%20redirectResult%20%7D%20from%20%22fortjs%22;%0Aexport%20class%20AuthenticationShield%20extends%20Shield%20%7B%0A%20%20%20%20async%20protect()%20%7B%0A%0A%20%20%20%20%20%20%20%20const%20isExist%20=%20await%20this.session.isExist('userId');%0A%20%20%20%20%20%20%20%20if%20(exist)%20%7B%20//%20user%20is%20authenticated%20so%20allow%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20null;%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%20//user%20is%20not%20authenticated,%20so%20redirect%20to%20login%20page%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20redirectResult(%22/default/login%22);%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20we%20can%20add%20shield%20to%20any%20controllers%20where%20we%20need%20to%20restrict.%20Let's%20add%20this%20into%20user%20controller%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20Shields%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20AuthenticationShield%20%7D%20from%20%22location%20where%20shield%20is%20defined%22;%0A%0A@Shields(%5BAuthenticationShield%5D)%20%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20UserController%20wont%20be%20initiated%20until%20AuthenticationShield%20allows%20i.e%20user%20is%20authenticated.%3C/p%3E%0A%3Cp%3EIn%20the%20similar%20way%20-%20you%20can%20create%20a%20%3Ca%20href=%22/tutorial/guard%22%3Eguard%3C/a%3E%20to%20restrict%20at%20worker%20level.%3C/p%3E%0A%3Cp%3EWe%20have%20created%20example%20for%20you%20to%20understand%20in%20depth%20but%20we%20will%20recommend%20you%20to%20create%20a%20demo%20by%20yourself.%20Here%20is%20example%20link%20-%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/fortjs/tree/master/example/authentication%22%3EAuthentiction%20Example%3C/a%3E%3C/p%3E",t.title="Authentication",t.keywords="authentication, example, tutorial, fortjs, node",t.description="How to authenticate in nodejs using fortjs",t}return s(t,e),t=a([Object(o.Component)({components:{Tutorial:i.a}})],t)}(o.Vue),u=n(9),c=Object(u.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="authentication.vue";t.default=c.exports}}]);