"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[7128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),y=o,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Http Body",keywords:["request body","post data","body","http body","nodejs"],description:"Explore the HTTP body handling capabilities in Fort.js. Learn how to access and parse the request body in a Fort.js application."},s="HTTP Body",i={unversionedId:"concepts/body",id:"concepts/body",title:"Http Body",description:"Explore the HTTP body handling capabilities in Fort.js. Learn how to access and parse the request body in a Fort.js application.",source:"@site/docs/concepts/body.md",sourceDirName:"concepts",slug:"/concepts/body",permalink:"/docs/concepts/body",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/concepts/body.md",tags:[],version:"current",frontMatter:{title:"Http Body",keywords:["request body","post data","body","http body","nodejs"],description:"Explore the HTTP body handling capabilities in Fort.js. Learn how to access and parse the request body in a Fort.js application."},sidebar:"tutorialSidebar",previous:{title:"Dependency Injection",permalink:"/docs/concepts/dependency-injection"},next:{title:"Cookie",permalink:"/docs/concepts/cookie"}},c={},p=[{value:"Body Parsing Configuration",id:"body-parsing-configuration",level:2},{value:"Inject Body Data",id:"inject-body-data",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http-body"},"HTTP Body"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," is a class member of ",(0,o.kt)("a",{parentName:"p",href:"/docs/component/guard"},"Guard")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/controller"},"Controller"),". It provides access to the HTTP body data sent in an HTTP request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Controller, worker, HTTP_METHOD, textResult } from "fortjs";\n\nexport class DefaultController extends Controller {\n\n    @worker(HTTP_METHOD.Post)\n    async login() {\n        //highlight-start\n        // Access post data\n        const userId = this.body.userId;\n        const password = this.body.password;\n        //highlight-end\n\n        return textResult("OK");\n    }\n}\n')),(0,o.kt)("p",null,"In the example above, ",(0,o.kt)("inlineCode",{parentName:"p"},"this.body")," is used to retrieve data from the HTTP body of a POST request in a Fort.js controller. Adjust the properties based on the structure of your incoming data."),(0,o.kt)("h2",{id:"body-parsing-configuration"},"Body Parsing Configuration"),(0,o.kt)("p",null,"By default, Fort.js parses the body data. However, you can turn off this feature by setting the option - ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldParseBody"),". Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup"},"bootstrap")," documentation for more information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// In your bootstrap file\nFort.shouldParseBody = false;\n")),(0,o.kt)("h2",{id:"inject-body-data"},"Inject Body Data"),(0,o.kt)("p",null,"You can inject body data into components or controller methods for easy access to HTTP request body data."),(0,o.kt)("p",null,"To achieve this, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@asBody")," decorator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Controller, http, textResult, asBody } from "fortjs";\n\nexport class UserController extends Controller {\n\n    @http.post("/create")\n    //highlight-next-line\n    async createUser(@asBody user) {\n        // The \'user\' parameter now contains the data from the HTTP request body\n        console.log(user);\n\n        // Your logic for creating a user\n        // ...\n\n        return textResult("User created successfully");\n    }\n}\n')),(0,o.kt)("p",null,"In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"@asBody()")," decorator is used on the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"createUser")," method. This automatically injects the data from the HTTP request body into the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," parameter. You can then use this data within your method to perform the desired logic, such as creating a user in this case."),(0,o.kt)("p",null,"Please ensure that the structure of the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," object aligns with the expected format and content of the data sent in the HTTP request body."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In typescript: you can assign a type to user variable. For example -"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { UserDTO } from "@/models";\nasync createUser(@asBody user: UserDTO) {\n    \n}\n'))))}u.isMDXComponent=!0}}]);