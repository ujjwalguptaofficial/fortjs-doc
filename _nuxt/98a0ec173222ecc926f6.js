(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{159:function(e,t,r){var i=r(162);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,r(18).default)("2aa3933d",i,!0,{})},160:function(e,t,r){var i=r(164);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,r(18).default)("478f6032",i,!0,{})},161:function(e,t,r){"use strict";var i=r(159);r.n(i).a},162:function(e,t,r){(e.exports=r(17)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},163:function(e,t,r){"use strict";var i=r(160);r.n(i).a},164:function(e,t,r){(e.exports=r(17)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100%;height:auto\n}\n.search{padding:5px;margin-top:20px\n}\n.search i{vertical-align:middle\n}\n.search #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n.search ul{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);list-style:none;margin:0;padding:0;position:absolute;z-index:1000;background:#fff;width:95%\n}\n.search ul li a{padding:8px;width:100%;height:100%;display:inline-block;color:#000\n}",""])},165:function(e,t,r){"use strict";var i,n=r(6),o=r(33),a=(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return a(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(r){r.id===e?1==t.expandInfo[r.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[r.id]&&t.$set(t.expandInfo,r.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,r=Number(t.dataset.id);this.setExpandInfo(r)},t=s([Object(n.Component)({props:{items:Array}})],t)}(n.Vue),d=(r(161),r(9)),u=Object(d.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"margin-top-20px"},e._l(e.items,function(t){return r("div",{key:t.id,staticClass:"treeview-parent",class:{active:t.url===e.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n            "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),e._v(" "),r("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},["null"!=t.url?r("a",{attrs:{"data-id":t.id,href:"/tutorial/"+t.url}},[e._v(e._s(t.text))]):r("span",{attrs:{"data-id":t.id}},[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id] === true"}]},e._l(t.childs,function(t){return r("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);u.options.__file="treeview.vue";var c=u.exports,p=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View",url:"view"},{id:"validation",text:"Validation",url:"validation"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Logger",url:"logger"},{id:"middleware",text:"Middleware",url:"middleware"},{id:10,text:"Components",url:"components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:"decorator",text:"Decorators",url:"decorator",childs:[{id:"expect_body",url:"decorator/expect-body",text:"ExpectBody"},{id:"expect_query",url:"decorator/expect-query",text:"ExpectQuery"}]},{id:11,text:"Concepts",url:"null",childs:[{id:1,text:"Cookie",url:"cookie"},{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File",url:"file"},{id:8,text:"Dependency Injection",url:"dependency-injection"}]},{id:12,text:"Types",url:"null",childs:[{id:1,text:"HttpResult",url:"type/http-result"},{id:2,text:"AppOption",url:"type/app-option"},{id:3,text:"HttpRequest",url:"type/http-request"},{id:4,text:"HttpResponse",url:"type/http-response"},{id:5,text:"ViewEngineData",url:"type/view-engine-data"},{id:6,text:"HttpFormatResult",url:"type/http-format-result"}]},{id:13,text:"Advanced",url:"null",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"},{id:4,text:"View Engine",url:"view-engine"},{id:6,text:"GraphQl",url:"graphql"},{id:7,text:"Socket.io",url:"socket-io"}]},{id:14,text:"Swagger / Open API",url:"swagger",childs:[{id:1,text:"Initiate",url:"swagger/initiate"},{id:2,text:"Swagger Model",url:"swagger/model"}]},{id:15,text:"Deployment",url:"deployment"},{id:16,text:"Test",url:"test",childs:[{id:"unit_test",text:"Unit Test",url:"test/unit-test"},{id:"e2e_test",text:"e2e Test",url:"test/e2e-test"},{id:"initialize",text:"Initialize controller",url:"test/initialize"}]}],h=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),f=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},g=function(e){function t(){var t=e.call(this)||this;return t.version=1,t.jsstoreText=["Store data in browser using jsstore","Improve your web app performance by storing data in client side","Easy indexeddb development using jsstore"],t.adIndex=-1,t.showMenu=!1,t.searchValue="",t.searchResult=[],t.linksWithChilds=[],t.catchEvents(),t}return h(t,e),t.prototype.catchEvents=function(){o.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this;0!=this.searchValue.length?this.searchResult=this.linksWithChilds.filter(function(t){if(t.text.toLowerCase().indexOf(e.searchValue)>=0)return t}):this.searchResult=[]},t.prototype.isNullOrEmpty=function(e){return null==e||0==e.length},t.prototype.mounted=function(){var e=this;this.showAds(),this.setLinksWithChilds();var t,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(i){if(null!=i.childs){var n=i.childs.find(function(t){return r===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=n)return t=n.url,e.$refs.linkContainer.setExpandInfo(i.id),!1}return!e.isNullOrEmpty(t)||r!==(""+e.relativeUrl+i.url.toLowerCase()).replace(/\//g,"")||(t=i.url,i.childs&&i.childs.length>0&&e.$refs.linkContainer.setExpandInfo(i.id),!1)}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"FortJs - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this,t=this.$route.path,r=(this.relativeUrl,this.linksWithChilds.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})),i=this.linksWithChilds[r];return i?i.url:null},enumerable:!0,configurable:!0}),t.prototype.showAds=function(){var e=this,t=++this.adIndex;t>=this.jsstoreText.length&&(t=this.adIndex=0),this.adIndex=t,setTimeout(function(){e.showAds()},3e3)},t.prototype.setLinksWithChilds=function(){var e=this;this.links.forEach(function(t){e.linksWithChilds.push(t),t.childs&&t.childs.forEach(function(t){e.linksWithChilds.push(t)})})},t=f([Object(n.Component)({components:{TreeView:c},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(o.a),x=(r(163),Object(d.a)(g,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:""}},[r("div",{staticClass:"search"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),r("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),e.searchResult.length>0?r("ul",{staticClass:"search-results"},e._l(e.searchResult,function(t){return r("li",[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])],1)],1),e._v(" "),r("TreeView",{ref:"linkContainer",attrs:{id:"divMenuContainer",items:e.links}})],1),e._v(" "),r("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),r("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[r("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://jsstore.net/"}},[r("img",{staticClass:"ad-image",attrs:{src:"http://jsstore.net/img/JsStore_350_155.png"}}),e._v(" "),r("div",[e._v(e._s(e.jsstoreText[e.adIndex]))])]),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-140px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/fortjs/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/fortjs.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",{staticStyle:{display:"inline-flex"}},[e._v("edit")])],1):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://twitter.com/ujjwal_kr_gupta",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-twitter"})]):e._e()],1)],1)},[],!1,null,null,null));x.options.__file="tutorial.vue";t.a=x.exports},236:function(e,t,r){"use strict";r.r(t);var i,n=r(6),o=r(165),a=(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EGuard%20is%20security%20layer%20on%20top%20of%20Worker%20which%20means%20it%20is%20called%20after%20controller%20is%20initiated.%20It%20contols%20whether%20a%20request%20should%20be%20allowed%20to%20call%20the%20%3Cstrong%3EWorker%3C/strong%3E.%3C/p%3E%0A%3Cp%3EThe%20guard%20is%20useful%20for%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EValidation%20of%20data.%20%3C/li%3E%0A%3Cli%3EAuthentication%20at%20Worker%20level.%3C/li%3E%0A%3Cli%3EDoing%20some%20task%20and%20passing%20it%20to%20worker.%20In%20this%20case%20-%20guard%20will%20be%20used%20as%20subordinate.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0AThere%20can%20be%20multiple%20guards%20for%20a%20worker%20&amp;%20they%20are%20called%20in%20respective%20order,%20when%20a%20request%20wants%20to%20access%20the%20particular%20worker.%3C/p%3E%0A%3Cp%3EA%20guard%20has%20following%20member%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ERequest%20-%20%3Ca%20href=%22/tutorial/http-request%22%3Erequest%3C/a%3E%3C/li%3E%0A%3Cli%3EResponse%20-%20%3Ca%20href=%22/tutorial/http-response%22%3Eresponse%3C/a%3E%3C/li%3E%0A%3Cli%3ECookie%20-%20%3Ca%20href=%22/tutorial/cookie%22%3Ecookie%3C/a%3E%3C/li%3E%0A%3Cli%3ESession%20-%20%3Ca%20href=%22/tutorial/session%22%3Esession%3C/a%3E%3C/li%3E%0A%3Cli%3EQuery%20string%20data%20-%20%3Ca%20href=%22/tutorial/query%22%3Equery%3C/a%3E%3C/li%3E%0A%3Cli%3EPost%20data%20-%20%3Ca%20href=%22body%22%3Ebody%3C/a%3E%3C/li%3E%0A%3Cli%3ERoute%20parameter%20-%20%20%3Ca%20href=%22/tutorial/param%22%3Eparam%3C/a%3E%3C/li%3E%0A%3Cli%3EData%20from%20other%20components%20-%20%3Ca%20href=%22/tutorial/data%22%3Edata%3C/a%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22creatingguard%22%3ECreating%20guard%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%0AGuard%20is%20a%20class%20which%20extends%20the%20class%20%22Guard%22%20from%20fortjs.%3C/p%3E%0A%3Ch2%20id=%22example%22%3EExample%3C/h2%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Guard,%20HttpResult,%20MIME_TYPE,%20HTTP_STATUS_CODE%20%7D%20from%20%22fortjs%22;%0Aimport%20%7BisEmail,%20isLength,%20isIn%7D%20from%20%22validator%22;%0A%0Aexport%20class%20ModelUserGuard%20extends%20Guard%20%7B%0A%0A%20%20%20%20async%20check()%20%7B%0A%20%20%20%20%20%20%20%20const%20user%20=%20%7B%20//%20extracted%20the%20info%20from%20request%20body%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20this.body.name,%0A%20%20%20%20%20%20%20%20%20%20%20%20gender:%20this.body.gender,%0A%20%20%20%20%20%20%20%20%20%20%20%20address:%20this.body.address,%0A%20%20%20%20%20%20%20%20%20%20%20%20emailId:%20this.body.emailId%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20const%20errMsg%20=%20this.validate(user);%0A%20%20%20%20%20%20%20%20if%20(errMsg%20==%20null)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20pass%20user%20to%20worker%20method,%20so%20that%20they%20dont%20need%20to%20parse%20again%0A%20%20%20%20%20%20%20%20%20%20%20%20this.data.user%20=%20user;%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20returning%20null%20means%20-%20this%20guard%20allows%20request%20to%20pass%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20null;%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20textResult(errMsg,%20HTTP_STATUS_CODE.BadRequest);%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%20%20%20%20validate(user)%20%7B%0A%20%20%20%20%20%20%20%20let%20errMessage;%0A%20%20%20%20%20%20%20%20if%20(user.name%20==%20null%20%7C%7C%20!isLength(user.name,%205))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20errMessage%20=%20%22name%20should%20be%20minimum%205%20characters%22%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(user.password%20==%20null%20%7C%7C%20!isLength(user.password,%205))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20errMessage%20=%20%22password%20should%20be%20minimum%205%20characters%22;%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(user.gender%20==%20null%20%7C%7C%20!isIn(user.gender,%20%5B%22male%22,%20%22female%22%5D))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20errMessage%20=%20%22gender%20should%20be%20either%20male%20or%20female%22;%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(user.gender%20==%20null%20%7C%7C%20!isEmail(user.emailId))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20errMessage%20=%20%22email%20not%20valid%22;%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(user.address%20==%20null%20%7C%7C%20!isLength(user.address,%2010,%20100))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20errMessage%20=%20%22address%20length%20should%20be%20between%2010%20&amp;%20100%22;%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20errMessage;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20you%20have%20defined%20the%20guard%20but%20in%20order%20to%20use%20this%20guard,%20you%20need%20to%20assign%20it%20to%20some%20worker.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20Guards%20%7D%20from%20%22fortjs%22;%0Aimport%20%7B%20ModelUserGuard%20%7D%20from%20%22location%20where%20guard%20is%20defined%22;%0A%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%20%20%20%20@Guards(%5BModelUserGuard%5D)%0A%20%20%20%20addUser()%7B%0A%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3ENote:-%3C/strong%3E%20A%20guard%20can%20be%20assigned%20to%20multiple%20worker.%3C/p%3E",t.title="Guard",t.keywords="guard, component, types, fortjs, node",t.description="Description about guard component in fortjs",t}return a(t,e),t=s([Object(n.Component)({components:{Tutorial:o.a}})],t)}(n.Vue),d=r(9),u=Object(d.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);u.options.__file="guard.vue";t.default=u.exports}}]);