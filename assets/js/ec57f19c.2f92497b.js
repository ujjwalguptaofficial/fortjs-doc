"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[3474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,g=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5,title:"Authentication",keywords:["Fort.js Authentication","Web Framework Documentation","Node.js Authentication","User Session","Web Application Security"],description:"Learn how to implement authentication in Fort.js, covering session-based authentication for securing your web applications. Explore the documentation for robust user authentication."},a="Authentication",s={unversionedId:"authentication/authentication",id:"authentication/authentication",title:"Authentication",description:"Learn how to implement authentication in Fort.js, covering session-based authentication for securing your web applications. Explore the documentation for robust user authentication.",source:"@site/docs/authentication/authentication.md",sourceDirName:"authentication",slug:"/authentication/",permalink:"/docs/authentication/",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/authentication/authentication.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Authentication",keywords:["Fort.js Authentication","Web Framework Documentation","Node.js Authentication","User Session","Web Application Security"],description:"Learn how to implement authentication in Fort.js, covering session-based authentication for securing your web applications. Explore the documentation for robust user authentication."},sidebar:"tutorialSidebar",previous:{title:"Validation",permalink:"/docs/validation"},next:{title:"Passport",permalink:"/docs/authentication/passport/"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"1. Registration and Login Routes",id:"1-registration-and-login-routes",level:3},{value:"1.1 Registration Page",id:"11-registration-page",level:4},{value:"1.2 Login Page",id:"12-login-page",level:4},{value:"2. User Login",id:"2-user-login",level:3},{value:"2.1 Login Post Route",id:"21-login-post-route",level:4},{value:"3. Protected Routes",id:"3-protected-routes",level:3},{value:"3.1 Protected Route",id:"31-protected-route",level:4},{value:"Implementation",id:"implementation",level:2},{value:"Create Controller",id:"create-controller",level:3},{value:"Registration and Login get routes",id:"registration-and-login-get-routes",level:3},{value:"User Login",id:"user-login",level:3},{value:"Restricting User Access to resource",id:"restricting-user-access-to-resource",level:2},{value:"Creating Shield",id:"creating-shield",level:3},{value:"Using shield for protected routes",id:"using-shield-for-protected-routes",level:3}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Authentication is the process of verifying the identity of a user, system, or entity attempting to access a particular resource or service. It ensures that the entity requesting access is who it claims to be.")),(0,o.kt)("p",null,"There are multiple ways to implement authentication. In this documentation guide, we will focus on learning how to implment authentication based on a user ID/password combination and persist the user using ",(0,o.kt)("strong",{parentName:"p"},"session"),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"In every web application, it's essential to include the following common logic:"),(0,o.kt)("h3",{id:"1-registration-and-login-routes"},"1. Registration and Login Routes"),(0,o.kt)("h4",{id:"11-registration-page"},"1.1 Registration Page"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Route:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"/register")," (GET)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description:")," This route renders an HTML page allowing users to register for the application.")),(0,o.kt)("h4",{id:"12-login-page"},"1.2 Login Page"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Route:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"/login")," (GET)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description:")," Accessing this route will display an HTML page for user login.")),(0,o.kt)("h3",{id:"2-user-login"},"2. User Login"),(0,o.kt)("h4",{id:"21-login-post-route"},"2.1 Login Post Route"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Route:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"/login")," (POST)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description:")," Users can submit their credentials through a POST request to this route for authentication.")),(0,o.kt)("h3",{id:"3-protected-routes"},"3. Protected Routes"),(0,o.kt)("h4",{id:"31-protected-route"},"3.1 Protected Route"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Route:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"/protected")," (GET)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description:")," Access to this route is restricted to authenticated users only.")),(0,o.kt)("p",null,"By implementing these routes, users can seamlessly register, log in, and access protected areas within the application."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"Consider the following scenario: a registered user possesses a user ID and password, granting access to the system upon entering valid credentials. Our application includes a ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthController")," featuring a login page, a registration page. Notably, this ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthController")," is accessible to anyone without requiring a login."),(0,o.kt)("h3",{id:"create-controller"},"Create Controller"),(0,o.kt)("p",null,"Let's Create a controller named ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthController"),' which is mapped with route "/auth". This route is accessible to everyone without any authentication.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/controllers/auth_controller",title:"src/controllers/auth_controller"},'import { Controller } from "fortjs"\nexport class AuthController extends Controller {\n\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/routes",title:"src/routes"},'import { AuthController } from "@/controllers/auth_controller";\n\n\nexport const routes = [{\n    path: "/auth",\n    controller: AuthController\n}]\n')),(0,o.kt)("h3",{id:"registration-and-login-get-routes"},"Registration and Login get routes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { http, Controller, viewResult } from "fortjs"\nexport class AuthController extends Controller {\n\n    // Route for rendering the login page\n    @http.get("/login")\n    async getLoginPage() {\n        const result = viewResult("loginPage");\n        return result;\n    } \n\n    // Route for rendering the registration page\n    @http.get("/register")\n    async getRegisterPage() {\n        const result = viewResult("registerPage");\n        return result;\n    } \n}\n')),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthController"),", two routes, ",(0,o.kt)("inlineCode",{parentName:"p"},"/login")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/register"),", are defined with the ",(0,o.kt)("strong",{parentName:"p"},"GET")," HTTP method. The ",(0,o.kt)("inlineCode",{parentName:"p"},"getLoginPage")," method renders the login page, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"getRegisterPage")," method renders the registration page using the ",(0,o.kt)("inlineCode",{parentName:"p"},"viewResult")," function."),(0,o.kt)("p",null,"For information on how ",(0,o.kt)("inlineCode",{parentName:"p"},"viewResult")," works, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/view"},"viewResult Doc"),"."),(0,o.kt)("h3",{id:"user-login"},"User Login"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { http, Controller, textResult, viewResult } from "fortjs";\n\nexport class AuthController extends Controller {\n\n    @http.get("/login")\n    async getLoginPage() {\n        const result = viewResult("loginPage");\n        return result;\n    } \n\n    @http.get("/register")\n    async getRegisterPage() {\n        const result = viewResult("registerPage");\n        return result;\n    } \n\n    //highlight-start\n    @http.post("/login")\n    async doLogin() {\n        const {emailId, password} = this.body;\n\n        const userService = new UserService();\n        const user = userService.getUserByEmail(emailId);\n\n        if (user != null && user.password === pwd) {\n\n            this.session.set(\'userId\', user.id);\n            this.session.set(\'emailId\', emailId);\n\n            return textResult(`Authenticated`);\n        }\n        else {\n            return textResult("Invalid credential");\n        }\n    }\n    //highlight-end\n}\n')),(0,o.kt)("p",null,"In the highlighted code, a ",(0,o.kt)("strong",{parentName:"p"},"doLogin:")," method is created which is responsible for the login process through a POST request. It retrieves the email ID and password from the request body, validates whether the provided credentials are correct, and, if so, creates a session. When a session is established, the framework generates a cookie and sends it to the browser. The framework subsequently tracks the user using this cookie."),(0,o.kt)("p",null,"Once a session has been established for a user, it becomes accessible throughout the system, including any controller or component, using ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/session"},"this.session"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get userId from the session\nthis.session.get('userId');\n\n// Check if the session exists\nthis.session.isExist('userId');\n\n")),(0,o.kt)("p",null,"These methods allow convenient retrieval of user-related information stored in the session."),(0,o.kt)("h2",{id:"restricting-user-access-to-resource"},"Restricting User Access to resource"),(0,o.kt)("p",null,"To prevent unauthenticated users from accessing restricted methods, a common practice is to check the session in every method. If the session is set, proceed with the request; otherwise, redirect to the login page or send a text response with HTTP code 401."),(0,o.kt)("p",null,"However, this logic tends to be repetitive and can be extracted into a common method for reuse. Fort.js facilitates this through ",(0,o.kt)("a",{parentName:"p",href:"/docs/component/"},"components"),". Depending on the specific requirements, you can use Shield or Guard."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Shields allow you to protect your controller, ensuring that only authorized users can access it. Guards, on the other hand, enable you to protect your controller methods, adding an additional layer of authorization at the method level.")),(0,o.kt)("p",null,"Let's consider the scenario where we want to restrict access at the controller level. To achieve this, we'll create an ",(0,o.kt)("a",{parentName:"p",href:"/docs/component/shield"},"Shield")," named ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationShield"),". We'll encapsulate our authentication logic within this shield."),(0,o.kt)("h3",{id:"creating-shield"},"Creating Shield"),(0,o.kt)("p",null,"To create the ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationShield"),", we need to define a class that extends the ",(0,o.kt)("inlineCode",{parentName:"p"},"Shield")," class from Fortjs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Shield, textResult } from "fortjs";\nexport class AuthenticationShield extends Shield {\n\n    async protect() {\n        \n        const isExist = await this.session.isExist(\'userId\');\n        if(!exist) {\n            //user is not authenticated, so return error message with 401\n            return textResult("Not authenticated", 401);\n        }\n\n        // returning nothing or null means shield has allowed \n    }\n}\n')),(0,o.kt)("h3",{id:"using-shield-for-protected-routes"},"Using shield for protected routes"),(0,o.kt)("p",null,"Now, we can add this shield to any controllers where authorization or protection of route is required. Let's incorporate this into a new controller named - ",(0,o.kt)("inlineCode",{parentName:"p"},"ProtectedController")," mapped with route ",(0,o.kt)("inlineCode",{parentName:"p"},"/protected")),(0,o.kt)("p",null,"To utilize the shield, the ",(0,o.kt)("inlineCode",{parentName:"p"},"shields")," decorator is used, which can accept multiple shields."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/controller/protected_controller",title:"src/controller/protected_controller"},'import { Controller, shields } from "fortjs";\nimport { AuthenticationShield } from "@/shields";\n\n@shields(AuthenticationShield) \nexport class ProtectedController extends Controller {\n\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/routes",title:"src/routes"},'import { AuthController } from "@/controllers/auth_controller";\nimport { ProtectedController } from "@/controllers/protected_controller";\n\nexport const routes = [\n    {\n        path: "/auth",\n        controller: AuthController\n    },\n    //highlight-start\n    {\n        path: "/protected",\n        controller: ProtectedController\n    }\n    //highlight-end\n]\n')),(0,o.kt)("p",null,"Now, our ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationShield")," will safeguard the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProtectedController")," from unauthorized access. Any attempt by an unauthenticated user to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProtectedController")," will result in an unauthenticated error response, as defined in the shield logic."),(0,o.kt)("p",null,"Similarly, you can create a ",(0,o.kt)("a",{parentName:"p",href:"/docs/component/guard"},"Guard")," to restrict access at the controller method level."),(0,o.kt)("p",null,"For a complete example, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ujjwalguptaofficial/fortjs/tree/master/example/authentication"},"Authentication Example"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udc49 In this documentation, we've demonstrated how to use Shields to restrict access to a controller, specifically for session authentication. However, the same logic can be applied to other types of authentication, such as Basic Authentication or JWT Authentication. If you encounter any challenges or need assistance, feel free to ask in the GitHub discussion channel.")),(0,o.kt)("p",null,"In the next chapter, we will learn about ",(0,o.kt)("a",{parentName:"p",href:"/docs/authentication/passport/"},"using passportjs in fortjs")," - a famous express library for authentication."))}h.isMDXComponent=!0}}]);