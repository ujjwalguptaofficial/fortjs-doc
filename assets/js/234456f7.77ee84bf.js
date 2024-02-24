"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[7912],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=s(r),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8307:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"Caching",keywords:["Fort.js","caching","cacheFor decorator","performance optimization","web development","JavaScript framework"],description:"Explore how to implement caching in your Fort.js applications for improved performance. Learn about the cacheFor decorator and best practices for caching strategies."},c="Caching",i={unversionedId:"advanced/caching/index",id:"advanced/caching/index",title:"Caching",description:"Explore how to implement caching in your Fort.js applications for improved performance. Learn about the cacheFor decorator and best practices for caching strategies.",source:"@site/docs/advanced/caching/index.md",sourceDirName:"advanced/caching",slug:"/advanced/caching/",permalink:"/docs/advanced/caching/",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/advanced/caching/index.md",tags:[],version:"current",frontMatter:{title:"Caching",keywords:["Fort.js","caching","cacheFor decorator","performance optimization","web development","JavaScript framework"],description:"Explore how to implement caching in your Fort.js applications for improved performance. Learn about the cacheFor decorator and best practices for caching strategies."},sidebar:"tutorialSidebar",previous:{title:"Worker",permalink:"/docs/advanced/worker"},next:{title:"Components",permalink:"/docs/advanced/components"}},l={},s=[{value:"cacheFor",id:"cachefor",level:2},{value:"Cache Options",id:"cache-options",level:3},{value:"1. query",id:"1-query",level:4},{value:"2. param",id:"2-param",level:4}],p={toc:s},h="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"caching"},"Caching"),(0,o.kt)("p",null,"Caching is a technique designed to store frequently used data in your application, enabling faster access."),(0,o.kt)("p",null,"Fort.js supports caching, allowing you to cache ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," endpoints. When you apply caching to an endpoint, Fort.js will store it in the cache for a specified time, resulting in a faster response for your API."),(0,o.kt)("h2",{id:"cachefor"},"cacheFor"),(0,o.kt)("p",null,"Fort.js provides the cacheFor decorator, which can be used to apply caching to an endpoint. The cacheFor decorator accepts the TTL (time to live) as its first parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Controller, viewResult, textResult, assign, http, cacheFor } from "fortjs";\n\nexport class DefaultController extends Controller {\n\n    \n    @http.get("/hello-world")\n    //highlight-start\n    @cacheFor(5) // Cache response for 5 seconds\n    //highlight-end\n    async helloWorld(){\n        return textResult("Hello World");\n    }\n   \n}\n')),(0,o.kt)("h3",{id:"cache-options"},"Cache Options"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheFor")," decorator accepts an object as its second parameter, which provides the following options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"query")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"param"))),(0,o.kt)("h4",{id:"1-query"},"1. query"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," option allows Fort.js to cache the API response when the URL matches the specified query."),(0,o.kt)("p",null,"For example, to cache the response only when the URL includes ",(0,o.kt)("inlineCode",{parentName:"p"},"cache=true"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Controller, viewResult, textResult, assign, http, cacheFor } from "fortjs";\n\nexport class DefaultController extends Controller {\n\n    \n    @http.get("/hello-world")\n    //highlight-start\n    @cacheFor(5,{\n        query:{\n            cache:"true"\n        }\n    }) // Cache response for 5 seconds when query string has cache=true\n    //highlight-end\n    async helloWorld(){\n        return textResult("Hello World");\n    }\n}\n')),(0,o.kt)("h4",{id:"2-param"},"2. param"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"param")," option allows Fort.js to cache the API response when the URL matches the specified param."),(0,o.kt)("p",null,"For example, to cache the response only when the URL has param value of user id = 1 :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Controller, viewResult, textResult, assign, http, cacheFor } from "fortjs";\n\nexport class DefaultController extends Controller {\n\n    @http.get("/{id}")\n    //highlight-start\n    @cacheFor(5,{\n        param:{\n            id:"1"\n        }\n    }) // Cache response for 5 seconds when id =1 in param\n    //highlight-end\n    async getById(){\n        return textResult("Hello World");\n    }\n}\n')))}d.isMDXComponent=!0}}]);