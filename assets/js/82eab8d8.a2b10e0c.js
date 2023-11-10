"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[1267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const l={sidebar_position:11,title:"Components",keywords:["components","modularize","app","fortjs","node"],description:"Description about components of fortjs"},a="Component",s={unversionedId:"component/component",id:"component/component",title:"Components",description:"Description about components of fortjs",source:"@site/docs/component/component.md",sourceDirName:"component",slug:"/component/",permalink:"/fortjs-doc/docs/component/",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/component/component.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Components",keywords:["components","modularize","app","fortjs","node"],description:"Description about components of fortjs"},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/fortjs-doc/docs/authentication"},next:{title:"Guard",permalink:"/fortjs-doc/docs/component/guard"}},i={},c=[{value:"Concept",id:"concept",level:2},{value:"Summary",id:"summary",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"component"},"Component"),(0,r.kt)("p",null,"Component are most important part of fort application. It helps you to write modular code and reuse. They are independent & every component has its own lifecycle and scope. "),(0,r.kt)("p",null,"There are three types of components - "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/component/wall"},"Wall"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/component/shield"},"Shield"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/component/guard"},"Guard")))),(0,r.kt)("h2",{id:"concept"},"Concept"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"HTTP Request\n    |\nInitialize Components\n    |\nExecute Walls (Incoming)\n    |\nExecute Shields\n    |\nExecute Guards\n    |\nExecute Controller\n    |----------------------|\n    |                      |\n    | Execute Controller   |\n    | Method               |\n    |                      |\n    |----------------------|\n    |\nExecute Walls (Outgoing)\n    |\nResponse Flow\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The above picture shows the architecture of fortjs app and flow of http request inside app -")," "),(0,r.kt)("ul",null,(0,r.kt)("li",null,"When a http request comes to your app - it has to go through sequence of components i.e ",(0,r.kt)("a",{href:"/docs/component/wall"},"Wall"),", ",(0,r.kt)("a",{target:"_blank",href:"/docs/component/shield"},"Shield")," & ",(0,r.kt)("a",{target:"_blank",href:"/docs/component/guard"},"Guard")," and if everyone allows then request is transferred to Worker inside ",(0,r.kt)("a",{target:"_blank",href:"/docs/controller"},"Controller")," where the actual resource is present."),(0,r.kt)("li",null,"The Http Request has to first go through component ",(0,r.kt)("a",{href:"/docs/component/wall"},"Wall"),". The incoming event of wall is called and if wall",(0,r.kt)("ul",null,(0,r.kt)("li",null,"Allows - It is sent to next lower level component which is ",(0,r.kt)("a",{target:"_blank",href:"/docs/component/shield"},"Shield")),(0,r.kt)("li",null,"Rejects - The result is considered as final result and result is sent as http response & its lifecycle is ended there."))),(0,r.kt)("li",null,"After [Wall](/fortjs-doc/docs/component/wall) allows the request, it is sent to ",(0,r.kt)("a",{target:"_blank",href:"/docs/component/shield"},"Shield")," and if shield",(0,r.kt)("ul",null,(0,r.kt)("li",null,"Allows - It is sent to next component which is ",(0,r.kt)("a",{target:"_blank",href:"/docs/component/guard"},"Guard")," "),(0,r.kt)("li",null," Rejects - The result is considered as final result. The result has to go through wall outgoing event and finally http response is sent."))),(0,r.kt)("li",null,"After ",(0,r.kt)("a",{target:"_blank",href:"/docs/component/shield"},"Shield")," allows - the request is allowed to go inside ",(0,r.kt)("a",{target:"_blank",href:"/docs/controller"},"Controller")," & control is transferred to ",(0,r.kt)("a",{target:"_blank",href:"/docs/component/guard"},"Guard")," & if guard",(0,r.kt)("ul",null,(0,r.kt)("li",null,"Allows - It is sent to Worker where the actual resource is present."),(0,r.kt)("li",null," Rejects - The result is considered as final result. The result has to go through wall outgoing event and finally http response is sent.")))),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It is not necessary to create any components, you can have just Controller and Worker. But it is highly recommended to use components since components helps to modularize your app into small dedicated features making your code cleaner, reutilizable & testable.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Here we saw Components are being used to block the request, but it can be also used to do some work and pass the result from one component to another. Check out particular component to know more. "))),(0,r.kt)("p",null,"e.g - The validation of data, extracting some information like ip address & passing from one component to another etc."))}d.isMDXComponent=!0}}]);