"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[5559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1,title:"Wall",keywords:["wall","HTTP Request Control","Gatekeeper","CORS Headers"],description:"A Wall in Fort.js acts as the initial gatekeeper for incoming HTTP requests. It controls whether a request should be allowed or rejected, and it can execute tasks and pass data to the Controller. Walls are essential components for implementing global application logic, such as setting CORS headers or counting requests. They provide a modular and reusable way to structure the initial handling of incoming requests."},o="Wall",s={unversionedId:"component/wall",id:"component/wall",title:"Wall",description:"A Wall in Fort.js acts as the initial gatekeeper for incoming HTTP requests. It controls whether a request should be allowed or rejected, and it can execute tasks and pass data to the Controller. Walls are essential components for implementing global application logic, such as setting CORS headers or counting requests. They provide a modular and reusable way to structure the initial handling of incoming requests.",source:"@site/docs/component/wall.md",sourceDirName:"component",slug:"/component/wall",permalink:"/docs/component/wall",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/component/wall.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Wall",keywords:["wall","HTTP Request Control","Gatekeeper","CORS Headers"],description:"A Wall in Fort.js acts as the initial gatekeeper for incoming HTTP requests. It controls whether a request should be allowed or rejected, and it can execute tasks and pass data to the Controller. Walls are essential components for implementing global application logic, such as setting CORS headers or counting requests. They provide a modular and reusable way to structure the initial handling of incoming requests."},sidebar:"tutorialSidebar",previous:{title:"Component",permalink:"/docs/component/"},next:{title:"Shield",permalink:"/docs/component/shield"}},i={},c=[{value:"Use cases",id:"use-cases",level:2},{value:"Wall members",id:"wall-members",level:2},{value:"Wall Events",id:"wall-events",level:2},{value:"onIncoming",id:"onincoming",level:3},{value:"onOutgoing",id:"onoutgoing",level:3},{value:"Creating wall",id:"creating-wall",level:2},{value:"Use case examples",id:"use-case-examples",level:2},{value:"Setting cors",id:"setting-cors",level:3},{value:"Pass ip address of the incoming request to other components",id:"pass-ip-address-of-the-incoming-request-to-other-components",level:3},{value:"How to modify returning result",id:"how-to-modify-returning-result",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wall"},"Wall"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Wall")," serves as the primary gatekeeper for every HTTP request in a Fort.js application. It determines whether a request should be allowed or rejected. Additionally, walls can perform tasks and pass data to the other Components."),(0,a.kt)("p",null,"In summary, Walls play a crucial role as the initial layer of a Fortjs application, controlling global aspects, executing tasks, and facilitating seamless data transfer to subsequent layers."),(0,a.kt)("h2",{id:"use-cases"},"Use cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Setting cors "),(0,a.kt)("li",{parentName:"ul"},"Counting no of requests"),(0,a.kt)("li",{parentName:"ul"},"Calculating some global data like ip address of the client")),(0,a.kt)("h2",{id:"wall-members"},"Wall members"),(0,a.kt)("p",null,"A wall has following member- "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/interfaces/http-request"},"Request")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/interfaces/http-response"},"Response")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/cookie"},"Cookie")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/session"},"Session")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/query"},"Query data")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/data"},"Data from other components"))),(0,a.kt)("h2",{id:"wall-events"},"Wall Events"),(0,a.kt)("p",null,"A Wall in Fortjs has two essential events:"),(0,a.kt)("h3",{id:"onincoming"},"onIncoming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Description:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Called when a request is initiated."),(0,a.kt)("li",{parentName:"ul"},"If this event returns ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),", it means the request is allowed to enter. Otherwise, it is rejected with the returned result."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sequential Execution:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If there are multiple walls, the ",(0,a.kt)("inlineCode",{parentName:"li"},"onIncoming")," event is called in the order they are defined.")))),(0,a.kt)("h3",{id:"onoutgoing"},"onOutgoing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Description:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Called when a request has been executed from component lifecycles."),(0,a.kt)("li",{parentName:"ul"},"This event is optional, and the result returned from this event is ignored."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onOutgoing")," is invoked with the returned response, allowing you to perform actions such as adding/removing headers or modifying the result."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Sequential Execution:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If there are multiple walls, the ",(0,a.kt)("inlineCode",{parentName:"li"},"onOutgoing")," event is called in reverse order from how they are defined.")))),(0,a.kt)("p",null,"These events provide hooks for executing custom logic during the incoming and outgoing phases of a request's lifecycle. They enhance the flexibility of Walls in managing the flow and behavior of your Fort.js application."),(0,a.kt)("h2",{id:"creating-wall"},"Creating wall"),(0,a.kt)("p",null,'A Wall is a class which extends the class "Wall" from fortjs.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Wall } from "fortjs"\n\nexport class AppWall extends Wall {\n\n    async onIncoming() {\n        console.log("request is asking for entering into the fort");\n        if (some condition) {\n            // block request\n            return textResult("This request is blocked by wall");\n        } else {\n            // allow request\n            return null;\n        }\n\n    }\n\n    async onOutgoing(result) {\n        // can be used to set headers, log events, modify returning result etc\n        console.log("request finished with result", result);\n    }\n}\n')),(0,a.kt)("p",null,"To use your custom wall, open the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.ts`` (or "),"app.js`",(0,a.kt)("inlineCode",{parentName:"p"},") file and add your wall to the "),"walls` array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Fort } from "fortjs";\nimport { UserController } from "./controllers";\nimport { AppWall } from "./walls/app_wall";\n\n//add routes\nFort.routes = [{\n    controller: UserController,\n    path: "/user"\n}]\n\n//highlight-start\n// adding AppWall to the walls array\nFort.walls = [AppWall]\n//highlight-end\n\n')),(0,a.kt)("h2",{id:"use-case-examples"},"Use case examples"),(0,a.kt)("h3",{id:"setting-cors"},"Setting cors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Wall } from 'fortjs';\n\nexport class HeaderWall extends Wall {\n  // This Wall is designed to handle CORS (Cross-Origin Resource Sharing) by setting appropriate headers\n  async onIncoming() {\n    // Set headers for CORS handling\n    this.response.setHeader(\n      'Access-Control-Allow-Headers',\n      'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Workspaceid',\n    );\n    this.response.setHeader('Access-Control-Allow-Credentials', 'true');\n    this.response.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH');\n\n    // Define allowed hosts\n    const ALLOWED_HOSTS = [\n      'http://localhost:8080'\n    ];\n\n    // Check if the request origin is allowed\n    const { origin } = this.request.headers;\n    if (ALLOWED_HOSTS.indexOf(origin as string) >= 0) {\n      this.response.setHeader('Access-Control-Allow-Origin', origin);\n    }\n  }\n}\n")),(0,a.kt)("h3",{id:"pass-ip-address-of-the-incoming-request-to-other-components"},"Pass ip address of the incoming request to other components"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Wall, textResult, HttpResult, assign } from \"fortjs\";\n\nexport class RequestLogger extends Wall {\n\n    private getIP(req) {\n        const ip = (req.headers['x-forwarded-for'] || '').split(',').pop() ||\n            req.connection.remoteAddress ||\n            req.socket.remoteAddress ||\n            req.connection.socket.remoteAddress;\n        return ip;\n    }\n\n    async onIncoming() {\n        // highlight-start\n        this.data.ip = this.getIP(this.request);\n        // highlight-end\n    }\n}\n")),(0,a.kt)("p",null,"In the above snippet, we are evaluating the IP address of the incoming request inside the onIncoming method of the wall. The obtained IP address is then set to the data property of the wall. This data value is passed to subsequent components, including controller methods, in the request flow."),(0,a.kt)("h3",{id:"how-to-modify-returning-result"},"How to modify returning result"),(0,a.kt)("p",null,"The returning result of the request can be modified in ",(0,a.kt)("inlineCode",{parentName:"p"},"onOutgoing")," method by replacing with a custom http result."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'class AppWall extends Wall {\n    async onIncoming() {\n        return null;\n    }\n\n    //highlight-start\n    async onOutgoing(result) {\n       Object.assign(result, textResult("result modified by wall outgoing");\n    }\n    //highlight-end\n}\n')))}d.isMDXComponent=!0}}]);