(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{155:function(t,e,r){var n=r(158);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(19).default)("2aa3933d",n,!0,{})},156:function(t,e,r){var n=r(160);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(19).default)("7a78b854",n,!0,{})},157:function(t,e,r){"use strict";var n=r(155);r.n(n).a},158:function(t,e,r){(t.exports=r(18)(!1)).push([t.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},159:function(t,e,r){"use strict";var n=r(156);r.n(n).a},160:function(t,e,r){(t.exports=r(18)(!1)).push([t.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},161:function(t,e,r){"use strict";var n,o=r(6),i=r(33),a=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),l=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeUrl="",e.expandInfo={},e}return a(e,t),e.prototype.mounted=function(){var t=this;this.items.forEach(function(e){t.$set(t.expandInfo,e.id,!1)})},e.prototype.setActiveLink=function(t){this.activeUrl=t},e.prototype.setExpandInfo=function(t){var e=this;this.items.forEach(function(r){r.id===t?1==e.expandInfo[r.id]?e.$set(e.expandInfo,t,!1):e.$set(e.expandInfo,t,!0):1==e.expandInfo[r.id]&&e.$set(e.expandInfo,r.id,!1)})},e.prototype.onMenuClick=function(t){var e=t.target,r=Number(e.dataset.id);this.setExpandInfo(r)},e=l([Object(o.Component)({props:{items:Array}})],e)}(o.Vue),u=(r(157),r(9)),p=Object(u.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"margin-top-50px"},t._l(t.items,function(e){return r("div",{key:e.id,staticClass:"treeview-parent",class:{active:e.url===t.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==e.childs||0==e.childs.length},attrs:{"data-id":e.id},on:{click:t.onMenuClick}},[t._v("\n            "+t._s(!0===t.expandInfo[e.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),t._v(" "),r("div",{staticClass:"text",attrs:{"data-id":e.id},on:{click:t.onMenuClick}},["null"!=e.url?r("a",{attrs:{"data-id":e.id,href:"/tutorial/"+e.url}},[t._v(t._s(e.text))]):r("span",{attrs:{"data-id":e.id}},[t._v(" "+t._s(e.text))])]),t._v(" "),null!=e.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===t.expandInfo[e.id],expression:"expandInfo[item.id] === true"}]},t._l(e.childs,function(e){return r("li",{key:e.id,class:{"link-active":e.url===t.activeUrl}},[r("a",{attrs:{href:"/tutorial/"+e.url}},[t._v(t._s(e.text))])])})):t._e()])}))},[],!1,null,null,null);p.options.__file="treeview.vue";var d=p.exports,c=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View",url:"view"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Components",url:"components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:10,text:"Concepts",url:"null",childs:[{id:1,text:"Cookie",url:"cookie"},{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File",url:"file"}]},{id:11,text:"Types",url:"null",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"},{id:3,text:"HttpRequest",url:"http-request"},{id:4,text:"HttpResponse",url:"http-response"},{id:5,text:"ViewEngineData",url:"view-engine-data"},{id:6,text:"HttpFormatResult",url:"http-format-result"}]},{id:12,text:"Advanced",url:"null",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"},{id:4,text:"View Engine",url:"view-engine"},{id:5,text:"Swagger",url:"swagger"},{id:6,text:"GraphQl",url:"graphql"},{id:7,text:"Socket.io",url:"socket-io"}]},{id:13,text:"Deployment",url:"deployment"}],f=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),h=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},x=function(t){function e(){var e=t.call(this)||this;return e.version=2,e.showMenu=!1,e.searchValue="",e.searchResult="",e.catchEvents(),e}return f(e,t),e.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){},e.prototype.isNullOrEmpty=function(t){return null==t||0==t.length},e.prototype.mounted=function(){var t,e=this,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(n){if(null!=n.childs){var o=n.childs.find(function(t){return r===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=o)return t=o.url,e.$refs.linkContainer.setExpandInfo(n.id),!1}return!e.isNullOrEmpty(t)||r!==(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")||(t=n.url,n.childs&&n.childs.length>0&&e.$refs.linkContainer.setExpandInfo(n.id),!1)}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.head=function(){return{title:"FortJs - "+this.pageTitle}},e.prototype.getVersion=function(){return"1"},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return c},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e=h([Object(o.Component)({components:{TreeView:d},props:{innerHtml:String,pageTitle:String}})],e)}(i.a),g=(r(159),Object(u.a)(x,function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":this.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[e("TreeView",{ref:"linkContainer",attrs:{items:this.links}})],1),this._v(" "),e("v-flex",{class:{"padding-left-15px":this.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",l7:"",xl6:""}},[e("div",{staticClass:"margin-top-20px",domProps:{innerHTML:this._s(this.tutorialHtml)}})]),this._v(" "),e("v-flex",{staticClass:"md2 margin-top-50px text-center"})],1)},[],!1,null,null,null));g.options.__file="tutorial.vue";e.a=g.exports},199:function(t,e,r){"use strict";r.r(e);var n,o=r(6),i=r(161),a=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),l=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EGuard%20is%20security%20layer%20on%20top%20of%20Worker.%20It%20contols%20whether%20a%20request%20should%20be%20allowed%20to%20call%20the%20%3Cstrong%3EWorker%3C/strong%3E.%3C/p%3E%0A%3Cp%3EThe%20guard%20is%20useful%20for%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EValidation%20of%20data.%20%3C/li%3E%0A%3Cli%3EAuthentication%20at%20Worker%20level.%3C/li%3E%0A%3Cli%3EDoing%20some%20task%20and%20passing%20it%20to%20worker.%20In%20this%20case%20-%20guard%20will%20be%20used%20as%20subordinate.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0AThere%20can%20be%20multiple%20guards%20for%20a%20worker%20&amp;%20they%20are%20called%20in%20respective%20order,%20when%20a%20request%20wants%20to%20access%20the%20particular%20worker.%3C/p%3E%0A%3Cp%3EA%20guard%20has%20following%20member%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ERequest%20-%20%3Ca%20href=%22/tutorial/http-request%22%3Erequest%3C/a%3E%3C/li%3E%0A%3Cli%3EResponse%20-%20%3Ca%20href=%22/tutorial/http-response%22%3Eresponse%3C/a%3E%3C/li%3E%0A%3Cli%3ECookie%20-%20%3Ca%20href=%22/tutorial/cookie%22%3Ecookie%3C/a%3E%3C/li%3E%0A%3Cli%3ESession%20-%20%3Ca%20href=%22/tutorial/session%22%3Esession%3C/a%3E%3C/li%3E%0A%3Cli%3EQuery%20string%20data%20-%20%3Ca%20href=%22/tutorial/query%22%3Equery%3C/a%3E%3C/li%3E%0A%3Cli%3EPost%20data%20-%20%3Ca%20href=%22body%22%3Ebody%3C/a%3E%3C/li%3E%0A%3Cli%3ERoute%20parameter%20-%20%20%3Ca%20href=%22/tutorial/param%22%3Eparam%3C/a%3E%3C/li%3E%0A%3Cli%3EData%20from%20other%20components%20-%20%3Ca%20href=%22/tutorial/data%22%3Edata%3C/a%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22creatingguard%22%3ECreating%20guard%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%0AGuard%20is%20a%20class%20which%20extends%20the%20class%20%22Guard%22%20from%20fortjs.%3C/p%3E%0A%3Ch2%20id=%22example%22%3EExample%3C/h2%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Guard,%20HttpResult,%20MIME_TYPE,%20HTTP_STATUS_CODE%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20validate%20%7D%20from%20%22class-validator%22;%0Aimport%20%7B%20User%20%7D%20from%20%22../../models/user%22;%0A%0Aexport%20class%20ModelUserGuard%20extends%20Guard%20%7B%0A%20%20%20%20async%20check()%20%7B%0A%20%20%20%20%20%20%20%20const%20user:%20User%20=%20%7B%20//%20extracted%20the%20info%20from%20request%20body%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20this.body.name,%0A%20%20%20%20%20%20%20%20%20%20%20%20gender:%20this.body.gender,%0A%20%20%20%20%20%20%20%20%20%20%20%20address:%20this.body.address,%0A%20%20%20%20%20%20%20%20%20%20%20%20emailId:%20this.body.emailId%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20const%20errors%20=%20await%20validate(user);%0A%20%20%20%20%20%20%20%20if%20(errors.length%20===%200)%20%7B%20//%20user%20is%20valid%20so%20allow%20to%20call%20the%20worker%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20returning%20null%20means%20-%20this%20guard%20allows%20request%20to%20pass%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20null;%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20else%20%7B%20//%20user%20is%20not%20valid,%20so%20block%20the%20call%20to%20worker%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20contentType:%20MIME_TYPE.Text,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20statusCode:%20HTTP_STATUS_CODE.BadRequest,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20responseData:%20%22Invalid%20Request%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20as%20HttpResult;%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20you%20have%20defined%20the%20guard%20but%20in%20order%20to%20use%20this%20guard,%20you%20need%20to%20assign%20it%20to%20some%20worker.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%0A%20%20%20%20Controller,%0A%20%20%20%20Guards%20%0A%7D%20from%20%22fortjs%22;%0Aimport%20%7B%0A%20%20%20%20ModelUserGuard%0A%7D%20from%20%22location%20where%20guard%20is%20defined%22;%0A%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%20%20%20%20@Guards(%5BModelUserGuard%5D)%0A%20%20%20%20addUser()%7B%0A%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3ENote:-%3C/strong%3E%20A%20guard%20can%20be%20assigned%20to%20multiple%20worker.%3C/p%3E",e.title="Guard",e}return a(e,t),e=l([Object(o.Component)({components:{Tutorial:i.a}})],e)}(o.Vue),u=r(9),p=Object(u.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);p.options.__file="guard.vue";e.default=p.exports}}]);