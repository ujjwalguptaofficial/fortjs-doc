"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[1267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:11,title:"Component",keywords:["Fort.js","Components","Walls","Shields","Guards","Application Structure","Security","Documentation"],description:"Explore the versatile components in Fort.js, including Walls, Shields, and Guards. Learn how to use them to enhance your application's structure and security."},l="Component",i={unversionedId:"component/component",id:"component/component",title:"Component",description:"Explore the versatile components in Fort.js, including Walls, Shields, and Guards. Learn how to use them to enhance your application's structure and security.",source:"@site/docs/component/component.md",sourceDirName:"component",slug:"/component/",permalink:"/docs/component/",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/component/component.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Component",keywords:["Fort.js","Components","Walls","Shields","Guards","Application Structure","Security","Documentation"],description:"Explore the versatile components in Fort.js, including Walls, Shields, and Guards. Learn how to use them to enhance your application's structure and security."},sidebar:"tutorialSidebar",previous:{title:"Passport JWT Authentication",permalink:"/docs/authentication/passport/passport-jwt"},next:{title:"Wall",permalink:"/docs/component/wall"}},s={},p=[{value:"Component Flow",id:"component-flow",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"component"},"Component"),(0,o.kt)("p",null,"Components are a vital part of a Fort application, facilitating the writing of modular and reusable code. They operate independently, each having its own lifecycle and scope."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Components in Fort.js act like middleware in Express.js, but they're sprinkled throughout various locations. ")),(0,o.kt)("p",null,"There are three types of components in Fort:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/component/wall"},"Wall")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/component/shield"},"Shield")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/component/guard"},"Guard"))),(0,o.kt)("p",null,"These components play distinct roles in the application's architecture, contributing to its flexibility and maintainability."),(0,o.kt)("h2",{id:"component-flow"},"Component Flow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"HTTP Request\n    |\nInitialize Components\n    |\nExecute Walls (Incoming)\n    |\n    | (If Wall Rejects)\n    |----------------------|\n    |                      |\n    | Response Flow        |\n    |                      |\n    |----------------------|\n    |\n    | (If Wall Allows)\n    |----------------------|\n    |                      |\n    | Execute Shields       |\n    |                      |\n    |----------------------|\n    |\nExecute Shields\n    |\n    | (If Shield Rejects)\n    |----------------------|\n    |                      |\n    | Execute Walls        |\n    | (Outgoing)           |\n    |                      |\n    |----------------------|\n    |\n    | (If Shield Allows)\n    |----------------------|\n    |                      |\n    | Execute Guards       |\n    |                      |\n    |----------------------|\n    |\nExecute Guards\n    |\n    | (If Guard Rejects)\n    |----------------------|\n    |                      |\n    | Execute Walls        |\n    | (Outgoing)           |\n    |                      |\n    |----------------------|\n    |\n    | (If Guard Allows)\n    |----------------------|\n    |                      |\n    | Execute Controller   |\n    | Method               |\n    |                      |\n    |----------------------|\n    |\nExecute Controller\n    |\nExecute Walls (Outgoing)\n    |\nResponse Flow\n    |\n\n")),(0,o.kt)("p",null,"\ud83d\udc49 ",(0,o.kt)("strong",{parentName:"p"},"The above picture illustrates the architecture of a Fort.js app and the flow of an HTTP request within the app:")),(0,o.kt)("p",null,"When an HTTP request enters a Fort.js app, it embarks on a journey through a well-defined sequence of components, each playing a crucial role in the app's architecture. The journey is orchestrated as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Initialize Components:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The app initializes its components, preparing for the incoming request."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Execute Walls (Incoming):")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The request encounters the first line of defense, the ",(0,o.kt)("a",{parentName:"li",href:"/docs/component/wall"},"Wall"),". "),(0,o.kt)("li",{parentName:"ul"},"If the Wall rejects the request, the journey concludes with a direct response flow."),(0,o.kt)("li",{parentName:"ul"},"If the Wall allows, the request proceeds to the next phase."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Execute Shields:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/docs/component/shield"},"Shield")," evaluates the request, determining whether to grant access to the next stage."),(0,o.kt)("li",{parentName:"ul"},"If the Shield rejects, the journey redirects to execute outgoing Walls, leading to the response flow."),(0,o.kt)("li",{parentName:"ul"},"If the Shield allows, the request advances to the next component."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Execute Guards:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"/docs/component/guard"},"Guard")," assesses the request, deciding whether it's authorized to proceed to the controller method."),(0,o.kt)("li",{parentName:"ul"},"If the Guard rejects, the journey reroutes to execute outgoing Walls, concluding with the response flow."),(0,o.kt)("li",{parentName:"ul"},"If the Guard allows, the request moves forward to the final phase."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Execute Controller Method:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The request reaches the ",(0,o.kt)("a",{parentName:"li",href:"/docs/controller"},"Controller"),", executing the designated method that encapsulates the desired resource."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Execute Walls (Outgoing):")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Outgoing ",(0,o.kt)("a",{parentName:"li",href:"/docs/component/wall"},"Walls")," may perform additional actions before the response is sent."),(0,o.kt)("li",{parentName:"ul"},"The journey proceeds to the final phase."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Response Flow:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The HTTP response is constructed, reflecting the outcomes of the entire journey through the app.")))),(0,o.kt)("p",null,"In this structured and modular flow, each component contributes to the app's security, logic, and overall functionality, ensuring a robust and controlled handling of incoming HTTP requests."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Summary:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Not Mandatory, Highly Recommended:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"While it's not mandatory to create individual components, it is highly recommended. You can build your application with just Controllers and methods inside controllers, but incorporating components offers significant advantages. Components facilitate the modularization of your app into dedicated features, resulting in cleaner, more reusable, and testable code."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Modularization for Clean Code:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Components serve as dedicated building blocks for specific functionalities. They play a pivotal role in modularizing your application, making the codebase cleaner and more maintainable."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Flexibility and Testability:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Leveraging components enhances the flexibility of your application. Each component has its own lifecycle and scope, providing a clear separation of concerns. This separation not only makes the codebase more modular but also significantly improves testability."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Beyond Blocking Requests:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"While we explored components being used to block requests in this guide, their utility extends beyond that. Components can also perform specific tasks and pass results from one component to another. For example, they can handle data validation, extract information like IP addresses, and seamlessly transfer data between different parts of the application.")))),(0,o.kt)("p",null,"By embracing components, you empower your Fort.js application with a structured and modular architecture, fostering code quality, reusability, and efficient testing practices."),(0,o.kt)("p",null,"For more details on each component's functionalities, refer to the specific documentation for each component type."))}m.isMDXComponent=!0}}]);