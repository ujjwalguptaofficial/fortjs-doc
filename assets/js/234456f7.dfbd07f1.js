"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[7912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=s(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Caching",keywords:["Fort.js","caching","cacheFor decorator","performance optimization","web development","JavaScript framework"],description:"Explore how to implement caching in your Fort.js applications for improved performance. Learn about the cacheFor decorator and best practices for caching strategies."},c="Caching",i={unversionedId:"advanced/caching/index",id:"advanced/caching/index",title:"Caching",description:"Explore how to implement caching in your Fort.js applications for improved performance. Learn about the cacheFor decorator and best practices for caching strategies.",source:"@site/docs/advanced/caching/index.md",sourceDirName:"advanced/caching",slug:"/advanced/caching/",permalink:"/docs/advanced/caching/",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/advanced/caching/index.md",tags:[],version:"current",frontMatter:{title:"Caching",keywords:["Fort.js","caching","cacheFor decorator","performance optimization","web development","JavaScript framework"],description:"Explore how to implement caching in your Fort.js applications for improved performance. Learn about the cacheFor decorator and best practices for caching strategies."},sidebar:"tutorialSidebar",previous:{title:"Worker",permalink:"/docs/advanced/worker"},next:{title:"Cache Manager",permalink:"/docs/advanced/caching/cache-manager"}},l={},s=[{value:"cacheFor",id:"cachefor",level:2},{value:"Cache Options",id:"cache-options",level:3},{value:"1. query",id:"1-query",level:4},{value:"2. param",id:"2-param",level:4}],p={toc:s},h="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"caching"},"Caching"),(0,a.kt)("p",null,"Caching is a technique designed to store frequently used data in your application, enabling faster access."),(0,a.kt)("p",null,"Fort.js supports caching, allowing you to cache ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," endpoints. When you apply caching to an endpoint, Fort.js will store it in the cache for a specified time, resulting in a faster response for your API."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By default cache data is stored in memory and Cache store can be configured to store data in any storage like in database or memory database like REDIS etc.")),(0,a.kt)("h2",{id:"cachefor"},"cacheFor"),(0,a.kt)("p",null,"Fort.js provides the cacheFor decorator, which can be used to apply caching to an endpoint. The cacheFor decorator accepts the TTL (time to live) as its first parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Controller, viewResult, textResult, assign, http, cacheFor } from "fortjs";\n\nexport class DefaultController extends Controller {\n\n    \n    @http.get("/hello-world")\n    //highlight-start\n    @cacheFor(5) // Cache response for 5 seconds\n    //highlight-end\n    async helloWorld(){\n        return textResult("Hello World");\n    }\n   \n}\n')),(0,a.kt)("h3",{id:"cache-options"},"Cache Options"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cacheFor")," decorator accepts an object as its second parameter, which provides the following options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"query")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"param"))),(0,a.kt)("h4",{id:"1-query"},"1. query"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," option allows Fort.js to cache the API response when the URL matches the specified query."),(0,a.kt)("p",null,"For example, to cache the response only when the URL includes ",(0,a.kt)("inlineCode",{parentName:"p"},"cache=true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Controller, viewResult, textResult, assign, http, cacheFor } from "fortjs";\n\nexport class DefaultController extends Controller {\n\n    \n    @http.get("/hello-world")\n    //highlight-start\n    @cacheFor(5,{\n        query:{\n            cache:"true"\n        }\n    }) // Cache response for 5 seconds when query string has cache=true\n    //highlight-end\n    async helloWorld(){\n        return textResult("Hello World");\n    }\n}\n')),(0,a.kt)("h4",{id:"2-param"},"2. param"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"param")," option allows Fort.js to cache the API response when the URL matches the specified param."),(0,a.kt)("p",null,"For example, to cache the response only when the URL has param value of user id = 1 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Controller, viewResult, textResult, assign, http, cacheFor } from "fortjs";\n\nexport class DefaultController extends Controller {\n\n    @http.get("/{id}")\n    //highlight-start\n    @cacheFor(5,{\n        param:{\n            id:"1"\n        }\n    }) // Cache response for 5 seconds when id =1 in param\n    //highlight-end\n    async getById(){\n        return textResult("Hello World");\n    }\n}\n')))}d.isMDXComponent=!0}}]);