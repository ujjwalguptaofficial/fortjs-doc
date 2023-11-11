"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[5559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1,title:"Wall",keywords:["wall","HTTP Request Control","Gatekeeper","CORS Headers"],description:"A Wall in Fort.js acts as the initial gatekeeper for incoming HTTP requests. It controls whether a request should be allowed or rejected, and it can execute tasks and pass data to the Controller. Walls are essential components for implementing global application logic, such as setting CORS headers or counting requests. They provide a modular and reusable way to structure the initial handling of incoming requests."},o="Wall",i={unversionedId:"component/wall",id:"component/wall",title:"Wall",description:"A Wall in Fort.js acts as the initial gatekeeper for incoming HTTP requests. It controls whether a request should be allowed or rejected, and it can execute tasks and pass data to the Controller. Walls are essential components for implementing global application logic, such as setting CORS headers or counting requests. They provide a modular and reusable way to structure the initial handling of incoming requests.",source:"@site/docs/component/wall.md",sourceDirName:"component",slug:"/component/wall",permalink:"/docs/component/wall",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/component/wall.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Wall",keywords:["wall","HTTP Request Control","Gatekeeper","CORS Headers"],description:"A Wall in Fort.js acts as the initial gatekeeper for incoming HTTP requests. It controls whether a request should be allowed or rejected, and it can execute tasks and pass data to the Controller. Walls are essential components for implementing global application logic, such as setting CORS headers or counting requests. They provide a modular and reusable way to structure the initial handling of incoming requests."},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/docs/component/"},next:{title:"Shield",permalink:"/docs/component/shield"}},s={},p=[{value:"Wall Events",id:"wall-events",level:2},{value:"onIncoming",id:"onincoming",level:3},{value:"onOutgoing",id:"onoutgoing",level:3},{value:"Creating wall",id:"creating-wall",level:2},{value:"Use case",id:"use-case",level:2},{value:"Pass ip address of the incoming request to other components",id:"pass-ip-address-of-the-incoming-request-to-other-components",level:3},{value:"How to modify returning result",id:"how-to-modify-returning-result",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wall"},"Wall"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Wall")," serves as the primary gatekeeper for every HTTP request in a Fort.js application. It determines whether a request should be allowed or rejected. Additionally, walls can perform tasks and pass data to the other Components."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Top Layer:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Walls are positioned as the top layer for every incoming HTTP request."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Global App Control:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"They control aspects that affect the entire application, such as setting CORS headers, counting the number of requests, and other global configurations."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Task Execution:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Walls can execute tasks, such as data validation, ensuring the integrity of incoming information."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sequential Order:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Multiple walls can be defined, and they are called in the same order as specified, allowing for a structured execution flow."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Data Passing:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Besides controlling access, walls can pass relevant data inside the other Components for further processing."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Customization:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Walls provide a space for custom logic tailored to the specific needs of the application."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Reusability:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Their modular nature fosters reusability, enabling developers to build and reuse walls for similar functionalities.")))),(0,r.kt)("p",null,"In summary, Walls play a crucial role as the initial layer of a Fortjs application, controlling global aspects, executing tasks, and facilitating seamless data transfer to subsequent layers."),(0,r.kt)("p",null,"A wall have access to following - "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/types/http-request"},"Request")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/types/http-response"},"Response")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/concepts/cookie"},"Cookie")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/concepts/session"},"Session")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/concepts/query"},"Query data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/concepts/data"},"Data from other components"))),(0,r.kt)("h2",{id:"wall-events"},"Wall Events"),(0,r.kt)("p",null,"A Wall in Fortjs has two essential events:"),(0,r.kt)("h3",{id:"onincoming"},"onIncoming"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Description:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called when a request is initiated."),(0,r.kt)("li",{parentName:"ul"},"If this event returns ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),", it means the request is allowed to enter. Otherwise, it is rejected with the returned result."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sequential Execution:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If there are multiple walls, the ",(0,r.kt)("inlineCode",{parentName:"li"},"onIncoming")," event is called in the order they are defined.")))),(0,r.kt)("h3",{id:"onoutgoing"},"onOutgoing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Description:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Called when a request has been executed from component lifecycles."),(0,r.kt)("li",{parentName:"ul"},"This event is optional, and the result returned from this event is ignored."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onOutgoing")," is invoked with the returned response, allowing you to perform actions such as adding/removing headers or modifying the result."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sequential Execution:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If there are multiple walls, the ",(0,r.kt)("inlineCode",{parentName:"li"},"onOutgoing")," event is called in reverse order from how they are defined.")))),(0,r.kt)("p",null,"These events provide hooks for executing custom logic during the incoming and outgoing phases of a request's lifecycle. They enhance the flexibility of Walls in managing the flow and behavior of your Fort.js application."),(0,r.kt)("h2",{id:"creating-wall"},"Creating wall"),(0,r.kt)("p",null,'A Wall is a class which extends the class "Wall" from fortjs.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { Wall } from "fortjs"\n\nexport class AppWall extends Wall {\n\n    async onIncoming() {\n        console.log("request is asking for entering into the fort");\n        if (some condition) {\n            // block request\n            return textResult("This request is blocked by wall");\n        } else {\n            // allow request\n            return null;\n        }\n\n    }\n\n    async onOutgoing(result) {\n        // can be used to set headers, log events, modify returning result etc\n        console.log("request finished with result", result);\n    }\n}\n')),(0,r.kt)("p",null,"To use your custom wall, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.ts`` (or "),"app.js`",(0,r.kt)("inlineCode",{parentName:"p"},") file and add your wall to the "),"walls` array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { Fort } from "fortjs";\nimport { UserController } from "./controllers";\nimport { AppWall } from "./walls/app_wall";\n\n//add routes\nFort.routes = [{\n    controller: UserController,\n    path: "/user"\n}]\n\n//highlight-start\n// adding AppWall to the walls array\nFort.walls = [AppWall]\n//highlight-end\n\n')),(0,r.kt)("h2",{id:"use-case"},"Use case"),(0,r.kt)("h3",{id:"pass-ip-address-of-the-incoming-request-to-other-components"},"Pass ip address of the incoming request to other components"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Wall, textResult, HttpResult, assign } from \"fortjs\";\n\nexport class RequestLogger extends Wall {\n\n    private getIP(req) {\n        const ip = (req.headers['x-forwarded-for'] || '').split(',').pop() ||\n            req.connection.remoteAddress ||\n            req.socket.remoteAddress ||\n            req.connection.socket.remoteAddress;\n        return ip;\n    }\n\n    async onIncoming() {\n        // highlight-start\n        this.data.ip = this.getIP(this.request);\n        // highlight-end\n    }\n}\n")),(0,r.kt)("p",null,"In the above snippet, we are evaluating the IP address of the incoming request inside the onIncoming method of the wall. The obtained IP address is then set to the data property of the wall. This data value is passed to subsequent components, including controller methods, in the request flow."),(0,r.kt)("h3",{id:"how-to-modify-returning-result"},"How to modify returning result"),(0,r.kt)("p",null,"The returning result of the request can be modified in ",(0,r.kt)("inlineCode",{parentName:"p"},"onOutgoing")," method by replacing with a custom http result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'class AppWall extends Wall {\n    async onIncoming() {\n        return null;\n    }\n\n    //highlight-start\n    async onOutgoing(result) {\n       Object.assign(result, textResult("result modified by wall outgoing");\n    }\n    //highlight-end\n}\n')))}d.isMDXComponent=!0}}]);