(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{155:function(e,t,n){var r=n(158);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(19).default)("2aa3933d",r,!0,{})},156:function(e,t,n){var r=n(160);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(19).default)("7a78b854",r,!0,{})},157:function(e,t,n){"use strict";var r=n(155);n.n(r).a},158:function(e,t,n){(e.exports=n(18)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}",""])},159:function(e,t,n){"use strict";var r=n(156);n.n(r).a},160:function(e,t,n){(e.exports=n(18)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},161:function(e,t,n){"use strict";var r,i=n(6),o=n(33),a=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return a(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(n){n.id===e?1==t.expandInfo[n.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[n.id]&&t.$set(t.expandInfo,n.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,n=Number(t.dataset.id);this.setExpandInfo(n)},t=l([Object(i.Component)({props:{items:Array}})],t)}(i.Vue),u=(n(157),n(9)),c=Object(u.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"margin-top-50px"},e._l(e.items,function(t){return n("div",{key:t.id,staticClass:"treeview-parent",class:{"link-active":t.url===e.activeUrl}},[n("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n      "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n    ")]),e._v(" "),n("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[null!=t.url?n("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))]):n("span",[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?n("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id]===true"}]},e._l(t.childs,function(t){return n("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[n("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);c.options.__file="treeview.vue";var p=c.exports,d=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View",url:"view"},{id:8,text:"Components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:9,text:"Concepts",childs:[{id:1,text:"Cookie",url:"cookie"},{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File",url:"file"}]},{id:10,text:"Types",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"},{id:3,text:"HttpRequest",url:"http-request"},{id:4,text:"HttpResponse",url:"http-response"},{id:5,text:"ViewEngineData",url:"view-engine-data"},{id:6,text:"HttpFormatResult",url:"http-format-result"}]},{id:11,text:"Advanced",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"},{id:4,text:"View Engine",url:"view-engine"},{id:5,text:"Swagger",url:"swagger"}]}],f=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},g=function(e){function t(){var t=e.call(this)||this;return t.version=2,t.showMenu=!1,t.searchValue="",t.searchResult="",t.catchEvents(),t}return f(t,e),t.prototype.catchEvents=function(){o.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){},t.prototype.mounted=function(){var e,t=this,n=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(r){if(null!=r.childs){var i=r.childs.find(function(e){return n===(""+t.relativeUrl+e.url.toLowerCase()).replace(/\//g,"")});if(null!=i)return e=i.url,t.$refs.linkContainer.setExpandInfo(r.id),!1}else if(n===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,""))return e=r.url,!1;return!0}),e&&e.length>0&&this.$refs.linkContainer.setActiveLink(e)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"FortJs - "+this.pageTitle}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t=h([Object(i.Component)({components:{TreeView:p},props:{innerHtml:String,pageTitle:String}})],t)}(o.a),v=(n(159),Object(u.a)(g,function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":this.showMenu},attrs:{md2:"",id:"divMenuContainer"}},[t("TreeView",{ref:"linkContainer",attrs:{items:this.links}})],1),this._v(" "),t("v-flex",{class:{"padding-left-15px":this.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",l7:"",xl6:""}},[t("div",{staticClass:"margin-top-20px",domProps:{innerHTML:this._s(this.tutorialHtml)}})]),this._v(" "),t("v-flex",{staticClass:"md2 margin-top-50px text-center"})],1)},[],!1,null,null,null));v.options.__file="tutorial.vue";t.a=v.exports},196:function(e,t,n){"use strict";n.r(t);var r,i=n(6),o=n(161),a=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EIn%20order%20to%20create%20a%20view%20engine%20-%20You%20need%20to%20create%20a%20class%20which%20will%20implement%20class%20%3Ccode%3EViewEngine%3C/code%3E%20from%20%22fortjs%22.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Let's%20see%20how%20we%20can%20use%20mustache%20as%20view%20engine.%20You%20can%20download%20the%20code%20for%20below%20example%20here%20-%20https://github.com/ujjwalguptaofficial/fortjs/tree/master/example/mustache%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20ViewEngine,%20ViewEngineData%20%7D%20from%20%22fortjs%22;%0Aimport%20*%20as%20Mustache%20from%20%22moustache%22;%0Aimport%20*%20as%20Fs%20from%20%22fs%22;%0Aimport%20*%20as%20path%20from%20%22path%22;%0A%0Aexport%20class%20MoustacheViewEngine%20implements%20ViewEngine%20%7B%0A%0A%20%20%20%20getViewDataFromFile(location:%20string)%20%7B%0A%20%20%20%20%20%20%20%20return%20new%20Promise((res,%20rej)%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20pathOfView%20=%20path.join(__dirname,%20%60views/$%7Blocation%7D%60);%0A%20%20%20%20%20%20%20%20%20%20%20%20Fs.readFile(pathOfView,%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20encoding:'utf8'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D,(err,%20data)%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(err)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20rej(err);%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20res(data);%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D);%0A%20%20%20%20%20%20%20%20%7D);%0A%20%20%20%20%7D%0A%0A%20%20%20%20async%20render(value:%20ViewEngineData)%20%7B%0A%20%20%20%20%20%20%20%20const%20viewData%20=%20await%20this.getViewDataFromFile(value.view);%0A%20%20%20%20%20%20%20%20return%20Mustache.render(viewData,%20value.model);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThe%20method%20%3Ccode%3Erender%3C/code%3E%20is%20called%20by%20fortjs%20with%20value%20of%20type%20%3Ca%20href=%22/tutorial/view-engine-data%22%3EViewEngineData%3C/a%3E.%20You%20need%20to%20use%20this%20value%20and%20return%20html%20string.%3C/p%3E%0A%3Cp%3EAfter%20you%20have%20created%20view%20engine,%20you%20need%20to%20tell%20fort%20to%20use%20this%20view%20engine.%20Open%20app.ts/app.js%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Fort%20%7D%20from%20'fortjs';%0Aimport%20%7B%20routes%20%7D%20from%20'./routes';%0Aimport%20%7B%20MoustacheViewEngine%20%7D%20from%20'./view_engine';%0A%0Aexport%20class%20App%20extends%20Fort%20%7B%0A%20%20%20%20constructor()%20%7B%0A%20%20%20%20%20%20%20%20super();%0A%20%20%20%20%20%20%20%20this.routes%20=%20routes;%0A%20%20%20%20%20%20%20%20this.viewEngine%20=%20MoustacheViewEngine;%0A%20%20%20%20%7D%0A%7D%0A%0Anew%20App().create(%7B%0A%20%20%20%20defaultPath:%20%22/default%22%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20We%20have%20successfully%20integrated%20our%20view%20engine%20with%20fortjs.%20Let's%20render%20some%20view%20using%20mustache%20-%20%3C/p%3E%0A%3Ch2%20id=%22createaview%22%3ECreate%20a%20view%3C/h2%3E%0A%3Cp%3Ecreate%20a%20file%20%22index.html%22%20inside%20the%20folder%20-%20%22views%22.%20Paste%20the%20below%20code%20inside%20the%20file%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3E&lt;html%20lang=%22en%22&gt;%0A%0A&lt;head&gt;%0A%20%20%20%20&lt;meta%20charset=%22UTF-8%22&gt;%0A%20%20%20%20&lt;meta%20name=%22viewport%22%20content=%22width=device-width,%20initial-scale=1.0%22&gt;%0A%20%20%20%20&lt;meta%20http-equiv=%22X-UA-Compatible%22%20content=%22ie=edge%22&gt;%0A%20%20%20%20&lt;title&gt;%7B%7Btitle%7D%7D&lt;/title&gt;%0A&lt;/head&gt;%0A%0A&lt;body&gt;%0A%20%20%20%20&lt;h1&gt;%7B%7Bmsg%7D%7D&lt;/h1&gt;%0A&lt;/body&gt;%0A%0A&lt;/html&gt;%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20above%20code%20-%20title%20and%20msg%20will%20be%20sent%20from%20the%20controller%20and%20rendered%20by%20mustache.%20%3C/p%3E%0A%3Cp%3ENow%20its%20time%20to%20call%20our%20view%20engine%20for%20rendering%20this%20view%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20DefaultController%20extends%20Controller%20%7B%0A%20%20%20%20@DefaultWorker()%0A%20%20%20%20async%20default()%20%7B%0A%20%20%20%20%20%20%20%20const%20model%20=%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title:%20%22FortJs%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20msg:%20%22This%20is%20rendered%20by%20mustache%22%0A%20%20%20%20%20%20%20%20%7D;%0A%20%20%20%20%20%20%20%20const%20result%20=%20await%20viewResult(%22default/index.html%22,%20model);%0A%20%20%20%20%20%20%20%20return%20result;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EBasically%20we%20are%20sending%20the%20relative%20location%20of%20view%20and%20model%20data%20using%20%3Ccode%3EviewResult%3C/code%3E.%20%3C/p%3E%0A%3Cp%3EThat's%20all,%20run%20your%20code%20and%20you%20can%20see%20the%20view%20rendered.%3C/p%3E",t.title="View Engine",t}return a(t,e),t=l([Object(i.Component)({components:{Tutorial:o.a}})],t)}(i.Vue),u=n(9),c=Object(u.a)(s,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="view-engine.vue";t.default=c.exports}}]);