"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[9871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const l={Title:"Wall",Keywords:"wall, component, options, fortjs, node",Description:"Description about wall components & its uses"},a="Wall",s={unversionedId:"components/wall",id:"components/wall",title:"Wall",description:"Wall is a top layer for every http request. It controls whether a request should be allowed or not. It can also be used to do some tasks and pass data inside Controller.",source:"@site/docs/components/wall.md",sourceDirName:"components",slug:"/components/wall",permalink:"/fortjs-doc/docs/components/wall",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/components/wall.md",tags:[],version:"current",frontMatter:{Title:"Wall",Keywords:"wall, component, options, fortjs, node",Description:"Description about wall components & its uses"},sidebar:"tutorialSidebar",previous:{title:"Shield",permalink:"/fortjs-doc/docs/components/shield"},next:{title:"Decorators",permalink:"/fortjs-doc/docs/decorators/"}},i={},c=[{value:"Events",id:"events",level:2},{value:"onIncoming",id:"onincoming",level:3},{value:"onOutgoing",id:"onoutgoing",level:3},{value:"Creating wall",id:"creating-wall",level:2},{value:"How to modify returning result",id:"how-to-modify-returning-result",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wall"},"Wall"),(0,o.kt)("p",null,"Wall is a top layer for every http request. It controls whether a request should be allowed or not. It can also be used to do some tasks and pass data inside Controller."),(0,o.kt)("p",null,"There can be multiple wall for an app & all walls are called in the same order as they are defined."),(0,o.kt)("p",null,"A wall have access to following - "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fortjs-doc/docs/types/http-request"},"Request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fortjs-doc/docs/types/http-response"},"Response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fortjs-doc/docs/concepts/cookie"},"Cookie")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fortjs-doc/docs/concepts/session"},"Session")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fortjs-doc/docs/concepts/query"},"Query data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fortjs-doc/docs/concepts/data"},"Data from other components"))),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"Wall has two events -"),(0,o.kt)("h3",{id:"onincoming"},"onIncoming"),(0,o.kt)("p",null,"It is called when a request is initiated. If this events returns null means request is allowed to enter otherwise rejected with the result returned."),(0,o.kt)("p",null,'If there are multiple walls then "onIncoming" is called in order as they are defined.'),(0,o.kt)("h3",{id:"onoutgoing"},"onOutgoing"),(0,o.kt)("p",null,"It called when a request has been executed from component lifecyles. "),(0,o.kt)("p",null,"This is an optional event & result returned from this event is ignored. ",(0,o.kt)("inlineCode",{parentName:"p"},"onOutgoing")," is called with returned response & based on that response you can take actions such as -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adding/Removing Header"),(0,o.kt)("li",{parentName:"ul"},"Modifying result")),(0,o.kt)("p",null,'If there are multiple walls then "onOutgoing" is called in reverse order as they are defined.'),(0,o.kt)("h2",{id:"creating-wall"},"Creating wall"),(0,o.kt)("p",null,'Wall is a class which extends the class "Wall" from fortjs.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Wall } from "fortjs"\n\nexport class AppWall extends Wall {\n\n    async onIncoming() {\n        console.log("request is asking for entering into the fort");\n        if (some condition) {\n            // block request\n            return textResult("This request is blocked by wall");\n        } else {\n            // allow request\n            return null;\n        }\n\n    }\n\n    async onOutgoing(result) {\n        // can be used to set headers, log events, modify returning result etc\n        console.log("request finished with result", result);\n    }\n}\n')),(0,o.kt)("p",null,"Let's use this wall - open app.ts/.js file and add your wall to the walls array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import { Fort } from "fortjs";\nimport { UserController } from "./controllers";\nimport { AppWall } from "./walls/app_wall";\n\n//add routes\nFort.routes = [{\n    controller: UserController,\n    path: "/user"\n}]\n\n// adding AppWall to the walls array\nFort.walls = [AppWall]\n\n')),(0,o.kt)("h3",{id:"how-to-modify-returning-result"},"How to modify returning result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'class AppWall extends Wall {\n    async onIncoming() {\n        return null;\n    }\n\n    async onOutgoing(result) {\n       Object.assign(result, textResult("result modified by wall outgoing");\n    }\n}\n')))}d.isMDXComponent=!0}}]);