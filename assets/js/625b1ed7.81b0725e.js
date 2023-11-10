"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[9168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:5,title:"Authentication",keywords:["authentication","example","tutorial","fortjs","node"],description:"How to authenticate in nodejs using fortjs"},s="Authentication",a={unversionedId:"authentication",id:"authentication",title:"Authentication",description:"How to authenticate in nodejs using fortjs",source:"@site/docs/authentication.md",sourceDirName:".",slug:"/authentication",permalink:"/fortjs-doc/docs/authentication",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/authentication.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Authentication",keywords:["authentication","example","tutorial","fortjs","node"],description:"How to authenticate in nodejs using fortjs"},sidebar:"tutorialSidebar",previous:{title:"Validation",permalink:"/fortjs-doc/docs/validation"},next:{title:"Components",permalink:"/fortjs-doc/docs/component/"}},l={},c=[{value:"Registering user into system",id:"registering-user-into-system",level:2},{value:"Restricting User Access to resource",id:"restricting-user-access-to-resource",level:2},{value:"Creating Shield",id:"creating-shield",level:3},{value:"Using shield",id:"using-shield",level:3}],u={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Authentication is the process of verifying the identity of a user, system, or entity attempting to access a particular resource or service. It ensures that the entity requesting access is who it claims to be.")),(0,i.kt)("p",null,"There are multiple ways to implement authentication. In this documentation guide, we will focus on learning how to perform session authentication based on a user ID/password combination."),(0,i.kt)("h2",{id:"registering-user-into-system"},"Registering user into system"),(0,i.kt)("p",null,"Consider the following scenario: a registered user possesses a user ID and password, granting access to the system upon entering valid credentials. Our application includes a default controller featuring a login page, a registration page. Notably, this default controller is accessible to anyone without requiring a login."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { http, Controller, textResult } from "fortjs"\nexport class DefaultController extends Controller {\n\n    @http.get("/login")\n    async getLoginPage() {\n        const result = viewResult("loginPage");\n        return result;\n    } \n\n    @http.get("/register")\n    async getRegisterPage() {\n        const result = viewResult("registerPage");\n        return result;\n    } \n\n    @http.post("/login")\n    async login() {\n        const {emailId, password} = this.body;\n\n        const userService = new UserService();\n        const user = userService.getUserByEmail(emailId);\n\n        if (user != null && user.password === pwd) {\n\n            // highlight-start\n            this.session.set(\'userId\', user.id);\n            this.session.set(\'emailId\', emailId);\n            // highlight-end\n\n            return textResult(`Authenticated`);\n        }\n        else {\n            return textResult("Invalid credential");\n        }\n    }\n}\n')),(0,i.kt)("p",null,"In the provided code, three methods are present:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"getLoginPage:")," This method is utilized to display the login form when the request is 'GET'."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"getRegisterPage:")," It is employed to showcase the user registration page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"login:")," This method is responsible for the login process through a POST request. It retrieves the email ID and password from the request body, validates whether the provided credentials are correct, and, if so, creates a session. When a session is established, the framework generates a cookie and sends it to the browser. The framework subsequently tracks the user using this cookie.")),(0,i.kt)("p",null,"Once a session has been established for a user, it becomes accessible throughout the system, including any controller or component, using ",(0,i.kt)("inlineCode",{parentName:"p"},"this.session"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Get userId from the session\nthis.session.get('userId');\n\n// Check if the session exists\nthis.session.isExist('userId');\n\n")),(0,i.kt)("p",null,"These methods allow convenient retrieval of user-related information stored in the session."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"restricting-user-access-to-resource"},"Restricting User Access to resource"),(0,i.kt)("p",null,"To prevent unauthenticated users from accessing restricted methods, a common practice is to check the session in every method. If the session is set, proceed with the request; otherwise, redirect to the login page or send a text response with HTTP code 401."),(0,i.kt)("p",null,"However, this logic tends to be repetitive and can be extracted into a common method for reuse. Fort.js facilitates this through ",(0,i.kt)("a",{parentName:"p",href:"/fortjs-doc/docs/component/"},"components"),". Depending on the specific requirements, you can use Shield or Guard."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Shields allow you to protect your controller, ensuring that only authorized users can access it. Guards, on the other hand, enable you to protect your controller methods, adding an additional layer of authorization at the method level.")),(0,i.kt)("p",null,"Let's consider the scenario where we want to restrict access at the controller level. To achieve this, we'll create an ",(0,i.kt)("a",{parentName:"p",href:"/fortjs-doc/docs/component/shield"},"Shield")," named ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticationShield"),". We'll encapsulate our authentication logic within this shield."),(0,i.kt)("h3",{id:"creating-shield"},"Creating Shield"),(0,i.kt)("p",null,"To create the ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticationShield"),", we need to define a class that extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"Shield")," class from Fortjs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { Shield, textResult,  redirectResult } from "fortjs";\nexport class AuthenticationShield extends Shield {\n\n    async protect() {\n        \n        const isExist = await this.session.isExist(\'userId\');\n        if(!exist) {\n            //user is not authenticated, so return error message with 401\n            return textResult("Not authenticated", 401);\n        }\n\n        // returning nothing or null means shield has allowed \n    }\n}\n')),(0,i.kt)("h3",{id:"using-shield"},"Using shield"),(0,i.kt)("p",null,"Now, we can add this shield to any controllers where authorization is required. Let's incorporate this into the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserController"),"."),(0,i.kt)("p",null,"To utilize the shield, the ",(0,i.kt)("inlineCode",{parentName:"p"},"shields")," decorator is used, which can accept multiple shields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { Controller, shields } from "fortjs";\nimport { AuthenticationShield } from "@/shields";\n\n@shields(AuthenticationShield) \nexport class UserController extends Controller {\n\n}\n')),(0,i.kt)("p",null,"Now, our ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticationShield")," will safeguard the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserController")," from unauthorized access. Any attempt by an unauthenticated user to access the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserController")," will result in an unauthenticated error response, as defined in the shield logic."),(0,i.kt)("p",null,"Similarly, you can create a ",(0,i.kt)("a",{parentName:"p",href:"/fortjs-doc/docs/component/guard"},"Guard")," to restrict access at the controller method level."),(0,i.kt)("p",null,"For a complete example, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ujjwalguptaofficial/fortjs/tree/master/example/authentication"},"Authentication Example"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udc49 In this documentation, we've demonstrated how to use Shields to restrict access to a controller, specifically for session authentication. However, the same logic can be applied to other types of authentication, such as Basic Authentication or JWT Authentication. If you encounter any challenges or need assistance, feel free to ask in the GitHub discussion channel.")))}h.isMDXComponent=!0}}]);