(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{159:function(t,e,r){var i=r(162);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,r(18).default)("2aa3933d",i,!0,{})},160:function(t,e,r){var i=r(164);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,r(18).default)("478f6032",i,!0,{})},161:function(t,e,r){"use strict";var i=r(159);r.n(i).a},162:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},163:function(t,e,r){"use strict";var i=r(160);r.n(i).a},164:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100%;height:auto\n}\n.search{padding:5px;margin-top:20px\n}\n.search i{vertical-align:middle\n}\n.search #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n.search ul{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);list-style:none;margin:0;padding:0;position:absolute;z-index:1000;background:#fff;width:95%\n}\n.search ul li a{padding:8px;width:100%;height:100%;display:inline-block;color:#000\n}",""])},165:function(t,e,r){"use strict";var i,n=r(6),o=r(33),a=(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=function(t,e,r,i){var n,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(o<3?n(a):o>3?n(e,r,a):n(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeUrl="",e.expandInfo={},e}return a(e,t),e.prototype.mounted=function(){var t=this;this.items.forEach(function(e){t.$set(t.expandInfo,e.id,!1)})},e.prototype.setActiveLink=function(t){this.activeUrl=t},e.prototype.setExpandInfo=function(t){var e=this;this.items.forEach(function(r){r.id===t?1==e.expandInfo[r.id]?e.$set(e.expandInfo,t,!1):e.$set(e.expandInfo,t,!0):1==e.expandInfo[r.id]&&e.$set(e.expandInfo,r.id,!1)})},e.prototype.onMenuClick=function(t){var e=t.target,r=Number(e.dataset.id);this.setExpandInfo(r)},e=s([Object(n.Component)({props:{items:Array}})],e)}(n.Vue),d=(r(161),r(9)),p=Object(d.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"margin-top-20px"},t._l(t.items,function(e){return r("div",{key:e.id,staticClass:"treeview-parent",class:{active:e.url===t.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==e.childs||0==e.childs.length},attrs:{"data-id":e.id},on:{click:t.onMenuClick}},[t._v("\n            "+t._s(!0===t.expandInfo[e.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),t._v(" "),r("div",{staticClass:"text",attrs:{"data-id":e.id},on:{click:t.onMenuClick}},["null"!=e.url?r("a",{attrs:{"data-id":e.id,href:"/tutorial/"+e.url}},[t._v(t._s(e.text))]):r("span",{attrs:{"data-id":e.id}},[t._v(" "+t._s(e.text))])]),t._v(" "),null!=e.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===t.expandInfo[e.id],expression:"expandInfo[item.id] === true"}]},t._l(e.childs,function(e){return r("li",{key:e.id,class:{"link-active":e.url===t.activeUrl}},[r("a",{attrs:{href:"/tutorial/"+e.url}},[t._v(t._s(e.text))])])})):t._e()])}))},[],!1,null,null,null);p.options.__file="treeview.vue";var c=p.exports,u=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:5,text:"Bootstrap",url:"bootstrap"},{id:7,text:"View",url:"view"},{id:"validation",text:"Validation",url:"validation"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Logger",url:"logger"},{id:"middleware",text:"Middleware",url:"middleware"},{id:10,text:"Components",url:"components",childs:[{id:1,text:"Wall",url:"wall"},{id:2,text:"Shield",url:"shield"},{id:3,text:"Guard",url:"guard"}]},{id:"decorator",text:"Decorators",url:"decorator",childs:[{id:"expect_body",url:"decorator/expect-body",text:"ExpectBody"},{id:"expect_query",url:"decorator/expect-query",text:"ExpectQuery"}]},{id:11,text:"Concepts",url:"null",childs:[{id:1,text:"Cookie",url:"cookie"},{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File",url:"file"},{id:8,text:"Dependency Injection",url:"dependency-injection"}]},{id:12,text:"Types",url:"null",childs:[{id:1,text:"HttpResult",url:"type/http-result"},{id:2,text:"AppOption",url:"type/app-option"},{id:3,text:"HttpRequest",url:"type/http-request"},{id:4,text:"HttpResponse",url:"type/http-response"},{id:5,text:"ViewEngineData",url:"type/view-engine-data"},{id:6,text:"HttpFormatResult",url:"type/http-format-result"}]},{id:13,text:"Advanced",url:"null",childs:[{id:1,text:"Custom Error Handler",url:"custom-error-handler"},{id:2,text:"Session Provider",url:"session-provider"},{id:3,text:"Format Response",url:"format-response"},{id:4,text:"View Engine",url:"view-engine"},{id:6,text:"GraphQl",url:"graphql"},{id:7,text:"Socket.io",url:"socket-io"}]},{id:14,text:"Swagger / Open API",url:"swagger",childs:[{id:1,text:"Initiate",url:"swagger/initiate"},{id:2,text:"Swagger Model",url:"swagger/model"}]},{id:15,text:"Deployment",url:"deployment"},{id:16,text:"Test",url:"test",childs:[{id:"unit_test",text:"Unit Test",url:"test/unit-test"},{id:"e2e_test",text:"e2e Test",url:"test/e2e-test"},{id:"initialize",text:"Initialize controller",url:"test/initialize"}]}],h=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),f=function(t,e,r,i){var n,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(o<3?n(a):o>3?n(e,r,a):n(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a},g=function(t){function e(){var e=t.call(this)||this;return e.version=1,e.jsstoreText=["Store data in browser using jsstore","Improve your web app performance by storing data in client side","Easy indexeddb development using jsstore"],e.adIndex=-1,e.showMenu=!1,e.searchValue="",e.searchResult=[],e.linksWithChilds=[],e.catchEvents(),e}return h(e,t),e.prototype.catchEvents=function(){o.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){var t=this;0!=this.searchValue.length?this.searchResult=this.linksWithChilds.filter(function(e){if(e.text.toLowerCase().indexOf(t.searchValue)>=0)return e}):this.searchResult=[]},e.prototype.isNullOrEmpty=function(t){return null==t||0==t.length},e.prototype.mounted=function(){var t=this;this.showAds(),this.setLinksWithChilds();var e,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(i){if(null!=i.childs){var n=i.childs.find(function(e){return r===(""+t.relativeUrl+e.url.toLowerCase()).replace(/\//g,"")});if(null!=n)return e=n.url,t.$refs.linkContainer.setExpandInfo(i.id),!1}return!t.isNullOrEmpty(e)||r!==(""+t.relativeUrl+i.url.toLowerCase()).replace(/\//g,"")||(e=i.url,i.childs&&i.childs.length>0&&t.$refs.linkContainer.setExpandInfo(i.id),!1)}),e&&e.length>0&&this.$refs.linkContainer.setActiveLink(e)},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.head=function(){return{title:"FortJs - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},e.prototype.getVersion=function(){return"1"},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e.prototype.getCurrentUrlIndex=function(){var t=this,e=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(e.prototype,"docToEdit",{get:function(){var t=this,e=this.$route.path,r=(this.relativeUrl,this.linksWithChilds.findIndex(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})),i=this.linksWithChilds[r];return i?i.url:null},enumerable:!0,configurable:!0}),e.prototype.showAds=function(){var t=this,e=++this.adIndex;e>=this.jsstoreText.length&&(e=this.adIndex=0),this.adIndex=e,setTimeout(function(){t.showAds()},3e3)},e.prototype.setLinksWithChilds=function(){var t=this;this.links.forEach(function(e){t.linksWithChilds.push(e),e.childs&&e.childs.forEach(function(e){t.linksWithChilds.push(e)})})},e=f([Object(n.Component)({components:{TreeView:c},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],e)}(o.a),x=(r(163),Object(d.a)(g,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),t._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":t.showMenu},attrs:{md2:"",xl2:""}},[r("div",{staticClass:"search"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{keyup:t.onSearch,input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t._v(" "),r("i",{staticClass:"material-icons"},[t._v("search")]),t._v(" "),t.searchResult.length>0?r("ul",{staticClass:"search-results"},t._l(t.searchResult,function(e){return r("li",[r("a",{attrs:{href:"/tutorial/"+e.url}},[t._v(t._s(e.text))])])})):t._e()])],1)],1),t._v(" "),r("TreeView",{ref:"linkContainer",attrs:{id:"divMenuContainer",items:t.links}})],1),t._v(" "),r("v-flex",{class:{"padding-left-15px":t.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.tutorialHtml)}})]),t._v(" "),r("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[r("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://jsstore.net/"}},[r("img",{staticClass:"ad-image",attrs:{src:"//jsstore.net/img/JsStore_350_155.png"}}),t._v(" "),r("div",[t._v(t._s(t.jsstoreText[t.adIndex]))])]),t._v(" "),null!=t.docToEdit?r("v-btn",{staticClass:"margin-bottom-140px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/fortjs/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):t._e(),t._v(" "),null!=t.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/fortjs.docs/edit/master/docs/tutorial/"+t.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",{staticStyle:{display:"inline-flex"}},[t._v("edit")])],1):t._e(),t._v(" "),null!=t.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://twitter.com/ujjwal_kr_gupta",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-twitter"})]):t._e()],1)],1)},[],!1,null,null,null));x.options.__file="tutorial.vue";e.a=x.exports},202:function(t,e,r){"use strict";r.r(e);var i,n=r(6),o=r(165),a=(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=function(t,e,r,i){var n,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(o<3?n(a):o>3?n(e,r,a):n(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EA%20model%20in%20swagger%20is%20a%20class.%20But%20you%20may%20want%20to%20have%20some%20configuration%20for%20your%20models.%20%3C/p%3E%0A%3Cp%3E%3Cstrong%3ENote%20:-%3C/strong%3E%20%20No%20configuration%20is%20required%20to%20use%20a%20class%20as%20model.%3C/p%3E%0A%3Cp%3EFortjs-Swagger%20provides%20following%20configuration%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EOptional%20Property%3C/li%3E%0A%3Cli%3EIgnore%20Property%3C/li%3E%0A%3Cli%3EExample%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch2%20id=%22letsseewhataretheusesoftheseconfigurationhowtouse%22%3ELet's%20see%20what%20are%20the%20uses%20of%20these%20configuration%20&amp;%20how%20to%20use%20-%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0AConsider%20a%20model%20%22User%22%20which%20has%20following%20structure%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eclass%20User%20%7B%0A%20%20%20%20id:%20string;%0A%0A%20%20%20%20name%20:%20String;%0A%20%20%20%20address:%20string;%0A%20%20%20%20gender:%20string;%0A%0A%20%20%20%20isValidUser%20:%20Function;%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%20id=%22optionalproperty%22%3EOptionalProperty%3C/h4%3E%0A%3Cp%3EConsider%20the%20property%20%3Ccode%3Eid%3C/code%3E%20in%20the%20model%20%22User%22%20is%20a%20primary%20key%20which%20means%20its%20automatically%20generated,%20In%20that%20case%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3E%3Ccode%3Eid%3C/code%3E%20is%20not%20required%20in%20a%20%22POST%22%20request,%20since%20new%20record%20will%20be%20created%20and%20new%20id%20will%20be%20generated%20for%20that%20request.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EBut%20it%20can%20be%20a%20required%20field%20in%20%22PUT%22%20request%20to%20identify%20the%20record.%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3ESo%20from%20above%20statement%20we%20found%20that%20id%20is%20sometimes%20required%20&amp;%20sometimes%20not.%20For%20this%20condition%20-%20we%20can%20use%20decorator%20%3Ccode%3EOptionalProperty%3C/code%3E%20which%20will%20mark%20the%20field%20as%20optional%20in%20swagger%20doc.%3C/p%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch4%20id=%22ignoreproperty%22%3EIgnoreProperty%3C/h4%3E%0A%3Cp%3ENow%20let's%20focus%20on%20property%20%3Ccode%3EisValidUser%3C/code%3E,%20its%20a%20method%20which%20is%20being%20used%20internally%20in%20the%20application%20but%20it%20doesn't%20need%20to%20be%20specified%20in%20the%20swagger%20doc.%20So%20we%20can%20use%20decorator%20%3Ccode%3EIgnoreProperty%3C/code%3E%20which%20will%20ignore%20this%20property.%3C/p%3E%0A%3Cp%3EAfter%20changes%20-%20our%20class%20will%20look%20something%20like%20this%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20IgnoreProperty,%20OptionalProperty%20%7D%20from%20%22fortjs-swagger%22;%0A%0Aclass%20User%20%7B%0A%0A%20%20%20%20@OptionalProperty%0A%20%20%20%20id:%20string;%0A%0A%20%20%20%20name%20:%20String;%0A%20%20%20%20address:%20string;%0A%20%20%20%20gender:%20string;%0A%0A%20%20%20%20@IgnoreProperty%0A%20%20%20%20isValidUser%20:%20Function;%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch4%20id=%22example%22%3EExample%3C/h4%3E%0A%3Cp%3EFortjs-Swagger%20calls%20%3Ccode%3EgetExample%3C/code%3E%20to%20generate%20the%20example%20for%20your%20model.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Let's%20see%20how%20we%20can%20provide%20an%20example%20for%20our%20model%20%22User%22%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20IgnoreProperty,%20OptionalProperty,%20SwaggerModel%20%7D%20from%20%22fortjs-swagger%22;%0A%0Aclass%20User%20implements%20SwaggerModel%20%7B%0A%0A%20%20%20%20@OptionalProperty%0A%20%20%20%20id:%20string;%0A%0A%20%20%20%20name%20:%20String;%0A%20%20%20%20address:%20string;%0A%20%20%20%20gender:%20string;%0A%0A%20%20%20%20@IgnoreProperty%0A%20%20%20%20isValidUser%20:%20Function;%0A%0A%20%20%20%20//%20initialize%20the%20fields%20which%20we%20want%20to%20show%20in%20example%20%20%0A%20%20%20%20getExample()%7B%0A%20%20%20%20%20%20%20%20this.id%20=%200;%0A%20%20%20%20%20%20%20%20this.name%20=%20%22ujjwal%22;%0A%20%20%20%20%20%20%20%20this.address%20=%20%22Planet%20earth%22;%0A%20%20%20%20%20%20%20%20this.gender%20=%20%22male%22;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E",e.title="Swagger Model",e.keywords="swagger, automatic generate, integrate, fortjs, node",e.description="Swagger model in fortjs",e}return a(e,t),e=s([Object(n.Component)({components:{Tutorial:o.a}})],e)}(n.Vue),d=r(9),p=Object(d.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);p.options.__file="model.vue";e.default=p.exports}}]);