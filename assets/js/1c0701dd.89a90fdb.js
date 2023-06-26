"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[6235],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),u=o,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:10,title:"Middleware",keywords:["middleware","pattern","fortjs","node"],description:"How to use middleware pattern in fortjs."},i="Middleware",l={unversionedId:"middleware",id:"middleware",title:"Middleware",description:"How to use middleware pattern in fortjs.",source:"@site/docs/middleware.md",sourceDirName:".",slug:"/middleware",permalink:"/fortjs-doc/docs/middleware",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/middleware.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Middleware",keywords:["middleware","pattern","fortjs","node"],description:"How to use middleware pattern in fortjs."},sidebar:"tutorialSidebar",previous:{title:"Logger",permalink:"/fortjs-doc/docs/logger"},next:{title:"Components",permalink:"/fortjs-doc/docs/components/"}},s={},d=[{value:"How to use in fortjs",id:"how-to-use-in-fortjs",level:2},{value:"Using helmet",id:"using-helmet",level:3}],c={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"middleware"},"Middleware"),(0,o.kt)("p",null,"Middleware is a technique which is heavily used in nodejs frameworks like express etc. It is based on chain of responsibility pattern means one middleware will call another."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Middleware are methods which has parameters - request, response and next callback.")),(0,o.kt)("h2",{id:"how-to-use-in-fortjs"},"How to use in fortjs"),(0,o.kt)("p",null,"every component has access to request and response object. Thus you can use any middleware inside the component and you have the control how to use & in what order."),(0,o.kt)("h3",{id:"using-helmet"},"Using helmet"),(0,o.kt)("p",null,"Let's see how to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/helmet"},"helmetjs")," inside component wall - "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Wall, textResult } from \"fortjs\";\nimport * as helmet from 'helmet';\nexport class HelmetWall extends Wall {\n    async onIncoming() {\n        const result = await this.callMiddleWare(helmet());\n    }\n\n    callMiddleWare(middleWare) {\n        return new Promise((res, rej) => {\n            middleWare(this.request, this.response, res);\n        });\n    }\n}\n")),(0,o.kt)("p",null,"In a similar way other middleware can be used in any component."),(0,o.kt)("p",null,"You can download example from here - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/middleware"},"Middleware example")),(0,o.kt)("p",null,"For detailed information visit this article - ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/fortjs/middleware-pattern-in-fortjs-7329cc7cf499"},"https://medium.com/fortjs/middleware-pattern-in-fortjs-7329cc7cf499")," written by ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/ujjwal_kr_gupta"},"Ujjwal Gupta")))}m.isMDXComponent=!0}}]);