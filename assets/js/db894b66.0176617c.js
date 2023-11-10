"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),s=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||l;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,a[1]=c;for(var s=2;s<l;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const l={sidebar_position:2,title:"Controller",keywords:["controller","section","fortjs",'node"'],description:"Description about controller in fortjs"},a="Controller",c={unversionedId:"controller",id:"controller",title:"Controller",description:"Description about controller in fortjs",source:"@site/docs/controller.md",sourceDirName:".",slug:"/controller",permalink:"/fortjs-doc/docs/controller",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/controller.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Controller",keywords:["controller","section","fortjs",'node"'],description:"Description about controller in fortjs"},sidebar:"tutorialSidebar",previous:{title:"Get Started",permalink:"/fortjs-doc/docs/get-started"},next:{title:"Route",permalink:"/fortjs-doc/docs/route"}},i={},s=[{value:"Creating controller",id:"creating-controller",level:2},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"controller"},"Controller"),(0,n.kt)("p",null,"A Controller is a class which contains methods to be used as end points or routes. You can consider it like a section where different resource and services are available."),(0,n.kt)("p",null,"e.g - A real world application created for university may have sections - StudentSection, TeacherSection, LibrarySection etc."),(0,n.kt)("p",null,"A controller has following members - "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fortjs-doc/docs/types/http-request"},"Request")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fortjs-doc/docs/types/http-response"},"Response")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fortjs-doc/docs/concepts/cookie"},"Cookie")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fortjs-doc/docs/concepts/session"},"Session")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fortjs-doc/docs/concepts/query"},"Query data")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fortjs-doc/docs/concepts/body"},"Body data")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fortjs-doc/docs/concepts/param"},"Route parameter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fortjs-doc/docs/concepts/data"},"Data from other components"))),(0,n.kt)("h2",{id:"creating-controller"},"Creating controller"),(0,n.kt)("p",null,'Controller is a class which extends the class "Controller" from fortjs.'),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'import { Controller } from "fortjs";\n\nexport class UserController extends Controller {\n   \n}\n')),(0,n.kt)("p",null,"In order to make this controller active, you need to assign it to routes of Fort. A controller is associated with a path."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'import { Fort } from "fortjs";\nimport { UserController } from "./controllers";\n\n\nFort.routes = [{\n    controller: UserController,\n    path: "/user"\n}]\n\n')),(0,n.kt)("p",null,"In the code we are adding our controller into routes array along  with a path. The path is used to associate the controller with a top level route."),(0,n.kt)("p",null,"e.g - Consider your website is abc.com, when user hits the url - \"abc.com/user\" then the controller - 'UserController' will be executed. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:-")," You must have method inside the controller with HTTP route to allow execution of controller."))}d.isMDXComponent=!0}}]);