(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{155:function(t,e,r){var n=r(158);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(19).default)("2aa3933d",n,!0,{})},156:function(t,e,r){var n=r(160);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(19).default)("7a78b854",n,!0,{})},157:function(t,e,r){"use strict";var n=r(155);r.n(n).a},158:function(t,e,r){(t.exports=r(18)(!1)).push([t.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}",""])},159:function(t,e,r){"use strict";var n=r(156);r.n(n).a},160:function(t,e,r){(t.exports=r(18)(!1)).push([t.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},161:function(t,e,r){"use strict";var n,o=r(6),i=r(33),l=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),a=function(t,e,r,n){var o,i=arguments.length,l=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(i<3?o(l):i>3?o(e,r,l):o(e,r))||l);return i>3&&l&&Object.defineProperty(e,r,l),l},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeUrl="",e.expandInfo={},e}return l(e,t),e.prototype.mounted=function(){var t=this;this.items.forEach(function(e){t.$set(t.expandInfo,e.id,!1)})},e.prototype.setActiveLink=function(t){this.activeUrl=t},e.prototype.setExpandInfo=function(t){var e=this;this.items.forEach(function(r){r.id===t?1==e.expandInfo[r.id]?e.$set(e.expandInfo,t,!1):e.$set(e.expandInfo,t,!0):1==e.expandInfo[r.id]&&e.$set(e.expandInfo,r.id,!1)})},e.prototype.onMenuClick=function(t){var e=t.target,r=Number(e.dataset.id);this.setExpandInfo(r)},e=a([Object(o.Component)({props:{items:Array}})],e)}(o.Vue),p=(r(157),r(9)),c=Object(p.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"margin-top-50px"},t._l(t.items,function(e){return r("div",{key:e.id,staticClass:"treeview-parent",class:{"link-active":e.url===t.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==e.childs||0==e.childs.length},attrs:{"data-id":e.id},on:{click:t.onMenuClick}},[t._v("\n      "+t._s(!0===t.expandInfo[e.id]?"keyboard_arrow_down":"chevron_right")+"\n    ")]),t._v(" "),r("div",{staticClass:"text",attrs:{"data-id":e.id},on:{click:t.onMenuClick}},[null!=e.url?r("a",{attrs:{href:"/tutorial/"+e.url}},[t._v(t._s(e.text))]):r("span",[t._v(" "+t._s(e.text))])]),t._v(" "),null!=e.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===t.expandInfo[e.id],expression:"expandInfo[item.id]===true"}]},t._l(e.childs,function(e){return r("li",{key:e.id,class:{"link-active":e.url===t.activeUrl}},[r("a",{attrs:{href:"/tutorial/"+e.url}},[t._v(t._s(e.text))])])})):t._e()])}))},[],!1,null,null,null);c.options.__file="treeview.vue";var u=c.exports,d=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View Engine",url:"view-engine"},{id:8,text:"Components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:9,text:"Concepts",childs:[{id:1,text:"Cookie",url:"cookie"},{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"data"},{id:4,text:"Route Param",url:"params"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File",url:"file"}]},{id:10,text:"Types",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"},{id:3,text:"HttpRequest",url:"http-request"},{id:4,text:"HttpResponse",url:"http-response"},{id:5,text:"ViewEngineData",url:"view-engine-data"},{id:6,text:"HttpFormatResult",url:"http-format-result"}]},{id:11,text:"Advanced",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"}]}],f=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),h=function(t,e,r,n){var o,i=arguments.length,l=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(i<3?o(l):i>3?o(e,r,l):o(e,r))||l);return i>3&&l&&Object.defineProperty(e,r,l),l},C=function(t){function e(){var e=t.call(this)||this;return e.version=2,e.showMenu=!1,e.searchValue="",e.searchResult="",e.catchEvents(),e}return f(e,t),e.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){},e.prototype.mounted=function(){var t,e=this,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(n){if(null!=n.childs){var o=n.childs.find(function(t){return r===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=o)return t=o.url,e.$refs.linkContainer.setExpandInfo(n.id),!1}else if(r===(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,""))return t=n.url,!1;return!0}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.head=function(){return{title:"FortJs - "+this.pageTitle}},e.prototype.getVersion=function(){return"1"},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e=h([Object(o.Component)({components:{TreeView:u},props:{innerHtml:String,pageTitle:String}})],e)}(i.a),x=(r(159),Object(p.a)(C,function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":this.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[e("TreeView",{ref:"linkContainer",attrs:{items:this.links}})],1),this._v(" "),e("v-flex",{class:{"padding-left-15px":this.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",l7:"",xl6:""}},[e("div",{staticClass:"margin-top-20px",domProps:{innerHTML:this._s(this.tutorialHtml)}})]),this._v(" "),e("v-flex",{staticClass:"md2 margin-top-50px text-center"})],1)},[],!1,null,null,null));x.options.__file="tutorial.vue";e.a=x.exports},211:function(t,e,r){"use strict";r.r(e);var n,o=r(6),i=r(161),l=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),a=function(t,e,r,n){var o,i=arguments.length,l=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(i<3?o(l):i>3?o(e,r,l):o(e,r))||l);return i>3&&l&&Object.defineProperty(e,r,l),l},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EController%20is%20like%20a%20section%20where%20a%20list%20of%20resource%20of%20particular%20types%20are%20available.%3C/p%3E%0A%3Cp%3Ee.g%20-%20A%20Fort%20may%20have%20sections%20-%20WeaponSection,%20LibrarySection,%20MeetingSection%20etc.%20Now%20consider%20a%20real%20world%20application%20created%20for%20university%20may%20have%20sections%20-%20StudentSection,%20TeacherSection,%20LibrarySection%20etc.%3C/p%3E%0A%3Cp%3EA%20controller%20has%20following%20members%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ERequest%20-%20%3Ca%20href=%22http-request%22%3Erequest%3C/a%3E%3C/li%3E%0A%3Cli%3EResponse%20-%20%3Ca%20href=%22http-response%22%3Eresponse%3C/a%3E%3C/li%3E%0A%3Cli%3ECookie%20-%20%3Ca%20href=%22cookie%22%3Ecookie%3C/a%3E%3C/li%3E%0A%3Cli%3ESession%20-%20%3Ca%20href=%22session%22%3Esession%3C/a%3E%3C/li%3E%0A%3Cli%3EQuery%20string%20data%20-%20%3Ca%20href=%22query%22%3Equery%3C/a%3E%3C/li%3E%0A%3Cli%3EPost%20data%20-%20%3Ca%20href=%22body%22%3Ebody%3C/a%3E%3C/li%3E%0A%3Cli%3ERoute%20parameter%20-%20%20%3Ca%20href=%22params%22%3Eparams%3C/a%3E%3C/li%3E%0A%3Cli%3EData%20from%20other%20components%20-%20%3Ca%20href=%22data%22%3Edata%3C/a%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22creatingcontroller%22%3ECreating%20controller%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%0AController%20is%20a%20class%20which%20extends%20the%20class%20%22Controller%22%20from%20fortjs.%3C/p%3E%0A%3Ch2%20id=%22example%22%3EExample%3C/h2%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller%20%7D%20from%20%22fortjs%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20you%20have%20created%20the%20controller%20but%20in%20order%20to%20use%20this,%20you%20need%20to%20assign%20it%20to%20routes%20where%20you%20have%20%3Ca%20href=%22bootstrap%22%3Ebootstrapped%3C/a%3E%20your%20app.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Fort%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20UserController%20%7D%20from%20%22./controllers%22;%0A%0Aclass%20App%20extends%20Fort%20%7B%0A%20%20%20%20constructor()%20%7B%0A%20%20%20%20%20%20%20%20super();%0A%20%20%20%20%20%20%20%20this.routers%20=%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20controller:%20UserController,%0A%20%20%20%20%20%20%20%20%20%20%20%20path:%20%22/user%22%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20code%20we%20are%20adding%20our%20controller%20into%20routers%20list%20along%20%20with%20a%20path.%20The%20path%20is%20used%20to%20associate%20the%20controller%20with%20a%20top%20level%20route.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Consider%20your%20website%20is%20abc.com%20,%20so%20when%20user%20hits%20the%20url%20-%20%22abc.com/user%22%20then%20the%20controller%20-%20'UserController'%20will%20be%20called.%20%3C/p%3E%0A%3Cp%3ENote%20:-%20You%20must%20have%20%3Ca%20href=%22worker%22%3Eworker%3C/a%3E%20inside%20the%20controller%20otherwise%20it%20wont%20work.%3C/p%3E",e.title="Controller",e}return l(e,t),e=a([Object(o.Component)({components:{Tutorial:i.a}})],e)}(o.Vue),p=r(9),c=Object(p.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="controller.vue";e.default=c.exports}}]);