"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?o.createElement(f,l(l({ref:t},p),{},{components:r})):o.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:2,title:"Controller",keywords:["Fort.js Controller","Web Framework Documentation","Node.js Controller","MVC","HTTP Request Handling","Web Application Logic"],description:"Explore the documentation for Fort.js controllers, the key components for handling HTTP requests, organizing application logic, and building robust web applications."},l="Controller",i={unversionedId:"controller",id:"controller",title:"Controller",description:"Explore the documentation for Fort.js controllers, the key components for handling HTTP requests, organizing application logic, and building robust web applications.",source:"@site/docs/controller.md",sourceDirName:".",slug:"/controller",permalink:"/docs/controller",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/controller.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Controller",keywords:["Fort.js Controller","Web Framework Documentation","Node.js Controller","MVC","HTTP Request Handling","Web Application Logic"],description:"Explore the documentation for Fort.js controllers, the key components for handling HTTP requests, organizing application logic, and building robust web applications."},sidebar:"tutorialSidebar",previous:{title:"Get Started",permalink:"/docs/get-started"},next:{title:"Route",permalink:"/docs/route"}},s={},c=[{value:"Controller member",id:"controller-member",level:2},{value:"Creating controller",id:"creating-controller",level:2},{value:"Example",id:"example",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"controller"},"Controller"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Controller")," is a class that contains methods also known as ",(0,n.kt)("a",{parentName:"p",href:"/docs/advanced/worker"},"worker")," serving as endpoints or routes. Think of it as a section where different resources and services are available."),(0,n.kt)("p",null,"For example, in a real-world application designed for a university, you might have sections like ",(0,n.kt)("inlineCode",{parentName:"p"},"StudentSection"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"TeacherSection"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"LibrarySection"),", etc."),(0,n.kt)("h2",{id:"controller-member"},"Controller member"),(0,n.kt)("p",null,"A controller has following members - "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/types/http-request"},"Request")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/types/http-response"},"Response")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/concepts/cookie"},"Cookie")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/concepts/session"},"Session")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/concepts/query"},"Query data")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/concepts/body"},"Body data")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/concepts/param"},"Route parameter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/concepts/data"},"Data from other components"))),(0,n.kt)("h2",{id:"creating-controller"},"Creating controller"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Controller")," is a class that extends the ",(0,n.kt)("inlineCode",{parentName:"p"},"Controller")," class from Fort.js."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Controller } from "fortjs";\n\nexport class UserController extends Controller {\n   \n}\n')),(0,n.kt)("p",null,"To make this controller active, you need to assign it to the routes of Fort. A controller is associated with a path."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Fort } from "fortjs";\nimport { UserController } from "./controllers";\n\nFort.routes = [{\n    controller: UserController,\n    path: "/user"\n}];\n')),(0,n.kt)("p",null,"In the code, we are adding our controller to the ",(0,n.kt)("inlineCode",{parentName:"p"},"routes")," array along with a path. The path is used to associate the controller with a top-level route."),(0,n.kt)("p",null,"For example, if your website is ",(0,n.kt)("inlineCode",{parentName:"p"},"abc.com"),', when a user hits the URL "abc.com/user", the ',(0,n.kt)("inlineCode",{parentName:"p"},"UserController")," will be executed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," You must have a method inside the controller with an HTTP route to allow the execution of the controller."))}m.isMDXComponent=!0}}]);