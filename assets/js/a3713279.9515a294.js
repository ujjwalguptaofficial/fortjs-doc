"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[6720],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?o.createElement(y,a(a({ref:t},c),{},{components:r})):o.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:17,Title:"Deployment",Keywords:"deploy, instructions, fortjs, node",Description:"Deployment note in nodejs using fortjs"},a="Deployment Best Practice",s={unversionedId:"deployment",id:"deployment",title:"Deployment Best Practice",description:"Few things to note when you are deploying your app to production -",source:"@site/docs/deployment.md",sourceDirName:".",slug:"/deployment",permalink:"/fortjs-doc/docs/deployment",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/deployment.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17,Title:"Deployment",Keywords:"deploy, instructions, fortjs, node",Description:"Deployment note in nodejs using fortjs"},sidebar:"tutorialSidebar",previous:{title:"Swagger Model",permalink:"/fortjs-doc/docs/swagger/model"},next:{title:"Test",permalink:"/fortjs-doc/docs/test/"}},p={},l=[{value:"Handling crash",id:"handling-crash",level:2},{value:"App Crash :-",id:"app-crash--",level:3},{value:"Server Crash :-",id:"server-crash--",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deployment-best-practice"},"Deployment Best Practice"),(0,n.kt)("p",null,"Few things to note when you are deploying your app to production - "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run build for production by using the command - ",(0,n.kt)("inlineCode",{parentName:"p"},"npm run deploy")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn deploy")," . This will generate a production build of your code & files will be in bin folder. So when you want to start the app, you need to run this command - ",(0,n.kt)("inlineCode",{parentName:"p"},"node bin/app.js")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'When runing app in production, make sure "NODE',"_",'ENV" is production. Multiple optimization like caching of views, compressing development error message etc. takes place when "NODE',"_",'ENV" is production. Check out this link to know how to setup NODE',"_","ENV ",(0,n.kt)("a",{href:"https://stackoverflow.com/a/9204973/4393136"},(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/9204973/4393136"},"https://stackoverflow.com/a/9204973/4393136")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Customize the error page by using customize error handler. For info about how to customize, visit this link - ",(0,n.kt)("a",{parentName:"p",href:"/fortjs-doc/docs/advanced/customize-error"},"custom error handler/"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use compression - you can configure any third party library for compression in a wall component. But better to configure the compression in the reverse proxy server like - nginix etc. Reverse proxy can be used for multiple purposes like - caching request, compression etc."))),(0,n.kt)("h2",{id:"handling-crash"},"Handling crash"),(0,n.kt)("h3",{id:"app-crash--"},"App Crash :-"),(0,n.kt)("p",null,"Nodejs app is stopped when an exception is not handled and in this situation your website will be down until you restart the app again. "),(0,n.kt)("p",null,"For solving this - ",(0,n.kt)("strong",{parentName:"p"},"Use a process manager")," . Process managers can be used for other purposes too like - "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configure to improve performance, "),(0,n.kt)("li",{parentName:"ul"},"Checking runtime performance & resource consumption etc. ")),(0,n.kt)("p",null,"Some of the famous process managers are - PM2, Forever, StrongLoop etc."),(0,n.kt)("h3",{id:"server-crash--"},"Server Crash :-"),(0,n.kt)("p",null,"When server crash & it restarts, your app should restart too. But that don't happens until you configure it. "),(0,n.kt)("p",null,"You can hook your app to os init system or configure your process manager to os init system. We will recommend to configure your app with process manager."))}d.isMDXComponent=!0}}]);