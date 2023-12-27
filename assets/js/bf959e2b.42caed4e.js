"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[7128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),y=o,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3,title:"Http Body",keywords:["request body","post data","body","http body","nodejs"],description:"Explore the HTTP body handling capabilities in Fort.js. Learn how to access and parse the request body in a Fort.js application."},s="HTTP Body",i={unversionedId:"concepts/body",id:"concepts/body",title:"Http Body",description:"Explore the HTTP body handling capabilities in Fort.js. Learn how to access and parse the request body in a Fort.js application.",source:"@site/docs/concepts/body.md",sourceDirName:"concepts",slug:"/concepts/body",permalink:"/docs/concepts/body",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/concepts/body.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Http Body",keywords:["request body","post data","body","http body","nodejs"],description:"Explore the HTTP body handling capabilities in Fort.js. Learn how to access and parse the request body in a Fort.js application."},sidebar:"tutorialSidebar",previous:{title:"Param",permalink:"/docs/concepts/param"},next:{title:"Data",permalink:"/docs/concepts/data"}},p={},c=[{value:"Body Parsing Configuration",id:"body-parsing-configuration",level:2},{value:"Inject Body Data",id:"inject-body-data",level:2}],l={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http-body"},"HTTP Body"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," is a class member of ",(0,o.kt)("a",{parentName:"p",href:"/docs/component/guard"},"Guard")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/controller"},"Controller"),". It provides access to the HTTP body data sent in an HTTP request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Controller, worker, HTTP_METHOD, textResult } from "fortjs";\n\nexport class DefaultController extends Controller {\n\n    @worker(HTTP_METHOD.Post)\n    async login() {\n        //highlight-start\n        // Access post data\n        const userId = this.body.userId;\n        const password = this.body.password;\n        //highlight-end\n\n        return textResult("OK");\n    }\n}\n')),(0,o.kt)("p",null,"In the example above, ",(0,o.kt)("inlineCode",{parentName:"p"},"this.body")," is used to retrieve data from the HTTP body of a POST request in a Fort.js controller. Adjust the properties based on the structure of your incoming data."),(0,o.kt)("h2",{id:"body-parsing-configuration"},"Body Parsing Configuration"),(0,o.kt)("p",null,"By default, Fort.js parses the body data. However, you can turn off this feature by setting the option - ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldParseBody"),". Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup"},"bootstrap")," documentation for more information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// In your bootstrap file\nFort.shouldParseBody = false;\n")),(0,o.kt)("h2",{id:"inject-body-data"},"Inject Body Data"),(0,o.kt)("p",null,"You can inject body data into components or controller methods for easy access to HTTP request body data."),(0,o.kt)("p",null,"To achieve this, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@asBody")," decorator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Controller, http, textResult, asBody } from "fortjs";\n\nexport class UserController extends Controller {\n\n    @http.post("/create")\n    //highlight-next-line\n    async createUser(@asBody user) {\n        // The \'user\' parameter now contains the data from the HTTP request body\n        console.log(user);\n\n        // Your logic for creating a user\n        // ...\n\n        return textResult("User created successfully");\n    }\n}\n')),(0,o.kt)("p",null,"In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"@asBody()")," decorator is used on the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"createUser")," method. This automatically injects the data from the HTTP request body into the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," parameter. You can then use this data within your method to perform the desired logic, such as creating a user in this case."),(0,o.kt)("p",null,"Please ensure that the structure of the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," object aligns with the expected format and content of the data sent in the HTTP request body."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In typescript: you can assign a type to user variable. For example -"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { UserDTO } from "@/models";\nasync createUser(@asBody user: UserDTO) {\n    \n}\n'))))}u.isMDXComponent=!0}}]);