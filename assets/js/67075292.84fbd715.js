"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[4850],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(i,".").concat(m)]||c[m]||p[m]||s;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8821:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:3,title:"Guard",keywords:["Fort.js","Guard","Access Control","Security","Documentation"],description:"Learn about creating and using Guards in Fort.js to control access to controller methods."},o="Guard",l={unversionedId:"component/guard",id:"component/guard",title:"Guard",description:"Learn about creating and using Guards in Fort.js to control access to controller methods.",source:"@site/docs/component/guard.md",sourceDirName:"component",slug:"/component/guard",permalink:"/docs/component/guard",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/component/guard.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Guard",keywords:["Fort.js","Guard","Access Control","Security","Documentation"],description:"Learn about creating and using Guards in Fort.js to control access to controller methods."},sidebar:"tutorialSidebar",previous:{title:"Shield",permalink:"/docs/component/shield"},next:{title:"Dependency Injection",permalink:"/docs/concepts/dependency-injection"}},i={},u=[{value:"Use Cases",id:"use-cases",level:2},{value:"Multiple Guards",id:"multiple-guards",level:2},{value:"Guard members",id:"guard-members",level:2},{value:"Creating a Guard",id:"creating-a-guard",level:2},{value:"Lifecycle Method",id:"lifecycle-method",level:3},{value:"Example",id:"example",level:3},{value:"Summary",id:"summary",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"guard"},"Guard"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Guard")," is a security layer on top of a Worker in Fort.js, meaning it is called after the controller is initiated. It controls whether a request should be allowed to call the controller methods or worker."),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data validation at the method level."),(0,a.kt)("li",{parentName:"ul"},"Authentication at the controller method level."),(0,a.kt)("li",{parentName:"ul"},"Performing tasks and passing them to the Worker.")),(0,a.kt)("h2",{id:"multiple-guards"},"Multiple Guards"),(0,a.kt)("p",null,"Multiple guards can be assigned to a Worker, and they are called in the same order as declared."),(0,a.kt)("h2",{id:"guard-members"},"Guard members"),(0,a.kt)("p",null,"A guard has following member - "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/types/http-request"},"Request")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/types/http-response"},"Response")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/cookie"},"Cookie")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/session"},"Session")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/query"},"Query data")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/body"},"Body data")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/param"},"Route parameter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/data"},"Data from other components"))),(0,a.kt)("h2",{id:"creating-a-guard"},"Creating a Guard"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Guard")," is a class that extends the ",(0,a.kt)("inlineCode",{parentName:"p"},"Guard")," class from Fort.js. It has a ",(0,a.kt)("inlineCode",{parentName:"p"},"check")," method as its lifecycle."),(0,a.kt)("h3",{id:"lifecycle-method"},"Lifecycle Method"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"check")," method can perform various tasks, such as validation, and return the result. It can return two types of data:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"null")," - It means the guard has passed the request."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"HTTP response")," - It means the guard has rejected the request. The HTTP response is directly returned to the user.")),(0,a.kt)("p",null,"Explore the powerful capabilities of Guards by implementing them in your Fort.js application."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's create a Guard that validates user data sent in the HTTP body. It will allow the request to proceed if the user is valid and reject it otherwise."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Guard, HttpResult, MIME_TYPE, HTTP_STATUS_CODE } from "fortjs";\nimport {isEmail, isLength, isIn} from "validator";\n\nexport class ValidUserGuard extends Guard {\n\n    async check() {\n        const user = { // extracted the info from request body\n            name: this.body.name,\n            gender: this.body.gender,\n            address: this.body.address,\n            emailId: this.body.emailId\n        };\n\n        const errMsg = this.validate(user);\n\n        if (errMsg == null) {\n\n            // pass user to worker method, so that they dont need to parse again\n            this.data.user = user;\n\n            return null; // Guard allows the request to pass\n\n        } else {\n            return textResult(errMsg, HTTP_STATUS_CODE.BadRequest);\n        }\n    }\n\n    validate(user) {\n        let errMessage;\n        if (user.name == null || !isLength(user.name, 5)) {\n            errMessage = "name should be minimum 5 characters"\n        } else if (user.password == null || !isLength(user.password, 5)) {\n            errMessage = "password should be minimum 5 characters";\n        } else if (user.gender == null || !isIn(user.gender, ["male", "female"])) {\n            errMessage = "gender should be either male or female";\n        } else if (user.gender == null || !isEmail(user.emailId)) {\n            errMessage = "email not valid";\n        } else if (user.address == null || !isLength(user.address, 10, 100)) {\n            errMessage = "address length should be between 10 & 100";\n        }\n        return errMessage;\n    }\n}\n')),(0,a.kt)("p",null,"Now you can use this guard on any controller method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import { Controller, guards } from "fortjs";\nimport { ValidUserGuard } from "@/guards";\n\n\nexport class UserController extends Controller {\n\n    @guards(ValidUserGuard)\n    addUser(){\n        const user = this.data.user ;\n    }\n    \n}\n')),(0,a.kt)("p",null,"This guard will validate the user data before allowing the request to proceed to the addUser method in the UserController."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Guards enable the extraction of reusable logic such as validation and authentication."),(0,a.kt)("li",{parentName:"ul"},"Guards can be independently used by multiple controller methods, enhancing code reusability."),(0,a.kt)("li",{parentName:"ul"},"The use of guards contributes to cleaner code structures."),(0,a.kt)("li",{parentName:"ul"},"Guards can be independently unit-tested, ensuring reliability in isolation.")))}p.isMDXComponent=!0}}]);