(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{159:function(e,t,r){var n=r(162);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(18).default)("2aa3933d",n,!0,{})},160:function(e,t,r){var n=r(164);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(18).default)("7a78b854",n,!0,{})},161:function(e,t,r){"use strict";var n=r(159);r.n(n).a},162:function(e,t,r){(e.exports=r(17)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},163:function(e,t,r){"use strict";var n=r(160);r.n(n).a},164:function(e,t,r){(e.exports=r(17)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},165:function(e,t,r){"use strict";var n,o=r(6),i=r(33),a=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return a(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(r){r.id===e?1==t.expandInfo[r.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[r.id]&&t.$set(t.expandInfo,r.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,r=Number(t.dataset.id);this.setExpandInfo(r)},t=l([Object(o.Component)({props:{items:Array}})],t)}(o.Vue),c=(r(161),r(9)),u=Object(c.a)(s,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"margin-top-50px"},e._l(e.items,function(t){return r("div",{key:t.id,staticClass:"treeview-parent",class:{active:t.url===e.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n            "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),e._v(" "),r("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},["null"!=t.url?r("a",{attrs:{"data-id":t.id,href:"/tutorial/"+t.url}},[e._v(e._s(t.text))]):r("span",{attrs:{"data-id":t.id}},[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id] === true"}]},e._l(t.childs,function(t){return r("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);u.options.__file="treeview.vue";var p=u.exports,d=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View",url:"view"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Logger",url:"logger"},{id:"middleware",text:"Middleware",url:"middleware"},{id:10,text:"Components",url:"components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:"decorator",text:"Decorators",url:"decorator",childs:[{id:"expect_body",url:"decorator/expect-body",text:"ExpectBody"},{id:"expect_query",url:"decorator/expect-query",text:"ExpectQuery"}]},{id:11,text:"Concepts",url:"null",childs:[{id:1,text:"Cookie",url:"cookie"},{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File",url:"file"},{id:8,text:"Dependency Injection",url:"dependency-injection"}]},{id:12,text:"Types",url:"null",childs:[{id:1,text:"HttpResult",url:"http-result"},{id:2,text:"AppOption",url:"app-option"},{id:3,text:"HttpRequest",url:"http-request"},{id:4,text:"HttpResponse",url:"http-response"},{id:5,text:"ViewEngineData",url:"view-engine-data"},{id:6,text:"HttpFormatResult",url:"http-format-result"}]},{id:13,text:"Advanced",url:"null",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"},{id:4,text:"View Engine",url:"view-engine"},{id:6,text:"GraphQl",url:"graphql"},{id:7,text:"Socket.io",url:"socket-io"}]},{id:14,text:"Swagger / Open API",url:"swagger",childs:[{id:1,text:"Initiate",url:"swagger/initiate"},{id:2,text:"Swagger Model",url:"swagger/model"}]},{id:15,text:"Deployment",url:"deployment"},{id:16,text:"Test",url:"test"}],f=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),h=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},x=function(e){function t(){var t=e.call(this)||this;return t.version=1,t.showMenu=!1,t.searchValue="",t.searchResult="",t.catchEvents(),t}return f(t,e),t.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){},t.prototype.isNullOrEmpty=function(e){return null==e||0==e.length},t.prototype.mounted=function(){var e,t=this,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(n){if(null!=n.childs){var o=n.childs.find(function(e){return r===(""+t.relativeUrl+e.url.toLowerCase()).replace(/\//g,"")});if(null!=o)return e=o.url,t.$refs.linkContainer.setExpandInfo(n.id),!1}return!t.isNullOrEmpty(e)||r!==(""+t.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")||(e=n.url,n.childs&&n.childs.length>0&&t.$refs.linkContainer.setExpandInfo(n.id),!1)}),e&&e.length>0&&this.$refs.linkContainer.setActiveLink(e)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"FortJs - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this.allLinks_[this.getCurrentUrlIndex()];return e?e.url:null},enumerable:!0,configurable:!0}),t=h([Object(o.Component)({components:{TreeView:p},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(i.a),g=(r(163),Object(c.a)(x,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[r("TreeView",{ref:"linkContainer",attrs:{items:e.links}})],1),e._v(" "),r("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),r("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/fortjs/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/fortjs.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",{staticStyle:{display:"inline-flex"}},[e._v("edit")])],1):e._e()],1)],1)},[],!1,null,null,null));g.options.__file="tutorial.vue";t.a=g.exports},225:function(e,t,r){"use strict";r.r(t);var n,o=r(6),i=r(165),a=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EExpectQuery%20is%20a%20decorator%20which%20helps%20you%20to%20validate%20query%20string%20data.%20It%20provides%20following%20features%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ECheck%20data%20type%20of%20incoming%20query%20string%20data%20against%20expected%20query%20string%20&amp;%20automatically%20convert%20if%20possible.%3C/li%3E%0A%3Cli%3ERemoves%20unnecessary%20data%20from%20incoming%20query%20string.%20This%20helps%20you%20to%20store%20data%20in%20nosql%20database%20without%20retrieving%20particular%20property%20and%20thus%20saving%20lots%20of%20code.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch2%20id=%22checkdatatype%22%3ECheck%20data%20type%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0AConsider%20a%20http%20request%20which%20sends%20value%20id%20in%20query%20string%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3Ehttp://abc.com/product?id=1%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EHere%20Id%20being%20sent%20is%201%20which%20will%20be%20always%20string%20(query%20strings%20value%20are%20always%20string).In%20this%20case%20you%20will%20write%20codes%20to%20convert%20%3Ccode%3Eid%3C/code%3E%20%20%3C/p%3E%0A%3Cp%3EBut%20when%20using%20%3Ccode%3EExpectQuery%3C/code%3E%20it%20will%20automatically%20check%20the%20datatype%20&amp;%20convert%20to%20number.%3C/p%3E%0A%3Cp%3ELet's%20see%20how%20to%20configure%20this%20using%20%3Ccode%3EExpectQuery%3C/code%3E%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20ProductController%7B%0A%0A%20%20%20%20@Route(%22/%22)%0A%20%20%20%20@Worker(%5B%22get%22%5D)%0A%20%20%20%20@ExpectQuery(%7B%20id:%200%7D)%0A%20%20%20%20saveProduct()%7B%0A%20%20%20%20%20%20%20const%20id%20=%20%20this.query.id;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EYou%20can%20also%20provide%20a%20class%20as%20parameter.%20Make%20sure%20that%20class%20properties%20are%20initialized.%3C/p%3E%0A%3Cp%3Ee.g%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20Product%20%7B%0A%20%20id%20=%200;%0A%7D%0A%0Aexport%20class%20ProductController%7B%0A%0A%20%20%20%20@Route(%22/%22)%0A%20%20%20%20@Worker(%5B%22get%22%5D)%0A%20%20%20%20@ExpectQuery(Product)%0A%20%20%20%20saveProduct()%7B%0A%20%20%20%20%20%20%20const%20id%20=%20%20this.query.id;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch2%20id=%22removesunnecessarydatafromincomingbody%22%3ERemoves%20unnecessary%20data%20from%20incoming%20body%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0AConsider%20a%20http%20request%20which%20sends%20following%20data%20in%20request%20as%20query%20string%3C/p%3E%0A%3Cpre%3E%3Ccode%3E%7B%0A%20%20%20%20name:%22ujjwal%22,%0A%20%20%20%20gender:%22male%22,%0A%20%20%20%20extra:%22extra_value%22%20//%20some%20extra%20value%20which%20is%20not%20required%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3Eso%20url%20will%20be%20%20-%20%22http://abc.com/user?name=ujjwal&amp;gender=male&amp;extra=extra_value%22%3C/p%3E%0A%3Cp%3ELet's%20see%20how%20to%20use%20ExpectQuery%20to%20only%20retrieve%20value%20that%20we%20want,%20so%20that%20property%20extra%20will%20be%20removed.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20UserController%7B%0A%0A%20%20%20%20@Route(%22/%22)%0A%20%20%20%20@Worker(%5B%22get%22%5D)%0A%20%20%20%20@ExpectQuery(%7Bname:%22%22,%20gender:%20%22%22%7D)%0A%20%20%20%20saveUser()%7B%0A%20%20%20%20%20%20%20const%20user%20=%20%20this.query;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E",t.title="Expect Query",t.keywords="query, secure query, validation, fortjs, node",t.description="This page tells about decorator ExpectQuery & how to use this.",t}return a(t,e),t=l([Object(o.Component)({components:{Tutorial:i.a}})],t)}(o.Vue),c=r(9),u=Object(c.a)(s,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);u.options.__file="expect-query.vue";t.default=u.exports}}]);