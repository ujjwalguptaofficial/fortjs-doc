"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[7708],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>w});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,w=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(w,l(l({ref:t},p),{},{components:r})):n.createElement(w,l({ref:t},p))}));function w(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:10,title:"Middleware",keywords:["Middleware","fortjs","node","Middleware","Helmet.js","Fort.js Middleware Example"],description:"Explore how to use middleware, including Helmet.js, in Fort.js for securing your API."},l="Middleware",i={unversionedId:"concepts/middleware",id:"concepts/middleware",title:"Middleware",description:"Explore how to use middleware, including Helmet.js, in Fort.js for securing your API.",source:"@site/docs/concepts/middleware.md",sourceDirName:"concepts",slug:"/concepts/middleware",permalink:"/docs/concepts/middleware",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/concepts/middleware.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Middleware",keywords:["Middleware","fortjs","node","Middleware","Helmet.js","Fort.js Middleware Example"],description:"Explore how to use middleware, including Helmet.js, in Fort.js for securing your API."},sidebar:"tutorialSidebar",previous:{title:"Logger",permalink:"/docs/concepts/logger"},next:{title:"Cron",permalink:"/docs/concepts/cron"}},s={},c=[{value:"Using Helmet",id:"using-helmet",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"middleware"},"Middleware"),(0,o.kt)("p",null,"Middleware is a prevalent design pattern extensively utilized in Node.js frameworks such as Express, among others. It is rooted in the Chain of Responsibility pattern, wherein one middleware calls another in a sequential manner."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Middleware consists of methods with parameters - request, response, and a next callback.")),(0,o.kt)("h1",{id:"how-to-use-in-fortjs"},"How to use in Fort.js"),(0,o.kt)("p",null,"Fort.js provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware")," property, enabling the execution of various middleware functions."),(0,o.kt)("h2",{id:"using-helmet"},"Using Helmet"),(0,o.kt)("p",null,"Let's explore how to incorporate ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/helmet"},"Helmet.js"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Helmet is a middleware library that allows you to secure your API by setting various HTTP headers.")),(0,o.kt)("p",null,"The Helmet code needs to be executed for every request, and that's why in Fort.js, we need to use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/component/wall"},"Wall")," components."),(0,o.kt)("p",null,"Let's create a wall where we will execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"helmet")," middleware."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Wall, textResult } from \"fortjs\";\nimport * as helmet from 'helmet';\n\nexport class HelmetWall extends Wall {\n\n    async onIncoming() {\n        // Execute helmet middleware\n        const result = await this.middleWare(helmet()).execute();\n    }\n}\n")),(0,o.kt)("p",null,"To use this wall, add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"walls")," property of ",(0,o.kt)("inlineCode",{parentName:"p"},"Fort"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Fort } from "fortjs";\n\nFort.walls = [HelmetWall];\n')),(0,o.kt)("p",null,"Similarly, other middleware can be employed in any component."),(0,o.kt)("p",null,"You can access the example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/middleware"},"here"),"."))}m.isMDXComponent=!0}}]);