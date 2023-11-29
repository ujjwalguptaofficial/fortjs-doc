"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[5581],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var o=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=o.createContext({}),p=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},c="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(r),m=n,d=c["".concat(l,".").concat(m)]||c[m]||f[m]||a;return r?o.createElement(d,i(i({ref:e},u),{},{components:r})):o.createElement(d,i({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1959:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:8,title:"Bootstrap",keywords:["bootstrap","setup","initiate","start","fortjs","node"],description:"fortjs bootstrap information & how to bootstrap"},i="Setup",s={unversionedId:"setup",id:"setup",title:"Bootstrap",description:"fortjs bootstrap information & how to bootstrap",source:"@site/docs/setup.md",sourceDirName:".",slug:"/setup",permalink:"/docs/setup",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/setup.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Bootstrap",keywords:["bootstrap","setup","initiate","start","fortjs","node"],description:"fortjs bootstrap information & how to bootstrap"},sidebar:"tutorialSidebar",previous:{title:"Http Result",permalink:"/docs/http-result"},next:{title:"Test",permalink:"/docs/test/"}},l={},p=[{value:"Configuring App",id:"configuring-app",level:2},{value:"Configuration options",id:"configuration-options",level:3}],u={toc:p},c="wrapper";function f(t){let{components:e,...r}=t;return(0,n.kt)(c,(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"setup"},"Setup"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Bootstrapping in the context of software development refers to the process of initializing and preparing a system or application for execution. It involves setting up the necessary components, configurations, and resources to ensure that the system is in a ready state to start processing requests or tasks.")),(0,n.kt)("p",null,"Bootstrapping in Fort.js is straightforward. The minimum requirement involves defining your controller routes and providing them to Fort.js."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { Fort } from "fortjs";\nimport { UserController } from "./controllers";\n\n// add routes\nFort.routes = [{\n    controller: UserController,\n    path: "/user"\n}]\n\n// initiate app\nFort.create().then(()=>{\n    Fort.logger.info("App is started");\n})\n')),(0,n.kt)("h2",{id:"configuring-app"},"Configuring App"),(0,n.kt)("p",null,"FortJs provides different configurations like - port, folders, appName etc."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { Fort } from "fortjs";\nimport { UserController } from "./controllers";\n\nFort.appName = "MyAwesomeApp";\nFort.port = 8080\nFort.routes = [{\n    controller: UserController,\n    path: "/user"\n}]\nFort.create();\n')),(0,n.kt)("h3",{id:"configuration-options"},"Configuration options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"appName")," - name of application - default is fort. Visible in header and cookie. Change name if you dont want any one to know the framework name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"port")," - Port at which app will listen, default - 4000"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"logger")," - Supply your custom logger."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"viewPath")," - Views folder location. By default it is - views."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"folders")," - folders which should be visible to requests. By default nothing is allowed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"eTag")," - eTag Settings"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"walls")," - List of walls"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"customErrorHandler")," - A custom error handler class which will be used when framework detects error."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"shouldParseBody")," - Whether to parse http body data in post request or not. It is boolean value and default value is true."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"shouldParseCookie")," - Whether to parse cookie or not. It is boolean value and default value is true.")))}f.isMDXComponent=!0}}]);