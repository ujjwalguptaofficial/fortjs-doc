"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[9168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:8,title:"Authentication",keywords:["authentication","example","tutorial","fortjs","node"],description:"How to authenticate in nodejs using fortjs"},a="Authentication",s={unversionedId:"authentication",id:"authentication",title:"Authentication",description:"How to authenticate in nodejs using fortjs",source:"@site/docs/authentication.md",sourceDirName:".",slug:"/authentication",permalink:"/fortjs-doc/docs/authentication",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/authentication.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Authentication",keywords:["authentication","example","tutorial","fortjs","node"],description:"How to authenticate in nodejs using fortjs"},sidebar:"tutorialSidebar",previous:{title:"Validation",permalink:"/fortjs-doc/docs/validation"},next:{title:"Logger",permalink:"/fortjs-doc/docs/logger"}},l={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"There are multiple ways in which we can authenticate. In this doc guide - we will learn how to do session authentication based on userid/password combination."),(0,o.kt)("p",null,"Consider this scenario - A registered user has userid and password. They can access the system once they have entered valid credential. We need to design a login page through which user can login."),(0,o.kt)("p",null,"Let's consider that our app has a default controller and it can be accessed by anyone without login. Basically it contains a home page, a login page, a registration page etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'export class DefaultController extends Controller {\n\n    @defaultWorker()\n    async default() {\n        const result = await viewResult(\'controller:default,action:default\');\n        return result;\n    }\n\n    @worker(HTTP_METHOD.Get)\n    @route("/login")\n    async getloginForm() {\n        const result = viewResult("login_form");\n        return result;\n    } \n\n    @worker(HTTP_METHOD.Post)\n    async login() {\n        const {emailId, password} = this.body;\n\n        if (emailId != null && pwd != null) {\n            const userService = new UserService();\n            const user = userService.getUserByEmail(emailId);\n\n            if (user != null && user.password === pwd) {\n                this.session.set(\'userId\', user.id);\n                this.session.set(\'emailId\', emailId);\n                return textResult(`Authenticated`);\n            }\n            else {\n               return textResult("Invalid credential");\n            }\n        }\n        else {\n            return textResult("Please make sure, you are sending emailId and password");\n        }\n    }\n}\n')),(0,o.kt)("p",null,"In the above code - we have three worker."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"default")," - is used to show the home page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"getloginForm"),' - is used to show the login form when request is "GET"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"login")," - is  used to login into the sytem through POST request. This method retrieve emailId and password from body and check whether emailId/password is correct. If data correct - then it creates the session. When session is created, framework creates a cookie and sent to browser. Framework tracks user by cookie. ")),(0,o.kt)("p",null,"Once the session has been set for a user. It can be accessed anywhere in the system (any controller/worker) using - ",(0,o.kt)("inlineCode",{parentName:"p"},"this.session.get('userId')"),"  or ",(0,o.kt)("inlineCode",{parentName:"p"},"this.session.isExist('userId')")),(0,o.kt)("p",null,"In order to not allow unauthenticated user to access restricted method : we can check in every worker - If session is set or not and then take actions."),(0,o.kt)("p",null,"e.g - if session is present then fulfill the request otherwise redirect to login page or send a text response with http code 401."),(0,o.kt)("p",null,"But this is repeatative logic which we can extract into a common method and reuse this."),(0,o.kt)("p",null,"For this - Fortjs provides ",(0,o.kt)("a",{parentName:"p",href:"/fortjs-doc/docs/components/"},"component"),". We can use shield or guard - this completely depends upon requirement."),(0,o.kt)("p",null,"Let's consider - we want to restrict at controller level and for this we need to create a ",(0,o.kt)("a",{parentName:"p",href:"/fortjs-doc/docs/components/shield"},"shield"),". "),(0,o.kt)("p",null,"Let's create our ",(0,o.kt)("inlineCode",{parentName:"p"},"Authentication Shield")," and put our authentication logic inside it - "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import { Shield, textResult,  redirectResult } from "fortjs";\nexport class AuthenticationShield extends Shield {\n\n    async protect() {\n        \n        const isExist = await this.session.isExist(\'userId\');\n\n        if (exist) { // user is authenticated so allow\n            return null;\n\n        } else { //user is not authenticated, so redirect to login page\n\n            return redirectResult("/default/login");\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Now we can add this shield to any controllers where we need to authorize. Let's add this into user controller - "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import { Controller, shields } from "fortjs";\nimport { AuthenticationShield } from "@/shields";\n\n@shields(AuthenticationShield) \nexport class UserController extends Controller {\n\n}\n')),(0,o.kt)("p",null,"Now our AuthenticationShield will protect the UserController from unauthorized access."),(0,o.kt)("p",null,"In similar way - you can create a ",(0,o.kt)("a",{parentName:"p",href:"/fortjs-doc/docs/components/guard"},"guard")," to restrict at worker level."),(0,o.kt)("p",null,"Here is example link for above guide - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ujjwalguptaofficial/fortjs/tree/master/example/authentication"},"Authentiction Example")))}p.isMDXComponent=!0}}]);