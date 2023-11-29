"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[8494],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return t?o.createElement(h,a(a({ref:n},p),{},{components:t})):o.createElement(h,a({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5300:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const i={sidebar_position:5,title:"Dependency Injection",keywords:["Dependency Injection","singleton","assign","JavaScript framework","Web development","Code modularity","Unit testing"],description:"Learn about Dependency Injection in Fort.js and how to use decorators such as `@singleton` and `@assign` for injecting dependencies into controllers and components. These decorators provide a clean and modular way to manage dependencies, making your code more maintainable and testable. "},a="Dependency Injection",s={unversionedId:"concepts/dependency-injection",id:"concepts/dependency-injection",title:"Dependency Injection",description:"Learn about Dependency Injection in Fort.js and how to use decorators such as `@singleton` and `@assign` for injecting dependencies into controllers and components. These decorators provide a clean and modular way to manage dependencies, making your code more maintainable and testable. ",source:"@site/docs/concepts/dependency-injection.md",sourceDirName:"concepts",slug:"/concepts/dependency-injection",permalink:"/docs/concepts/dependency-injection",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/concepts/dependency-injection.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Dependency Injection",keywords:["Dependency Injection","singleton","assign","JavaScript framework","Web development","Code modularity","Unit testing"],description:"Learn about Dependency Injection in Fort.js and how to use decorators such as `@singleton` and `@assign` for injecting dependencies into controllers and components. These decorators provide a clean and modular way to manage dependencies, making your code more maintainable and testable. "},sidebar:"tutorialSidebar",previous:{title:"Data",permalink:"/docs/concepts/data"},next:{title:"Session",permalink:"/docs/concepts/session"}},c={},l=[{value:"singleton",id:"singleton",level:2},{value:"Inject into constructor",id:"inject-into-constructor",level:3},{value:"Inject into controller methods",id:"inject-into-controller-methods",level:3},{value:"assign",id:"assign",level:2},{value:"Summary",id:"summary",level:2}],p={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dependency-injection"},"Dependency Injection"),(0,r.kt)("p",null,"Dependency Injection is a crucial process that enables the injection of dependencies into various parts of the code by the framework. This facilitates the writing of unit-testable code and improves overall code maintainability."),(0,r.kt)("p",null,"Fort.js offers several decorators for dependency injection:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"singleton")),": Used to mark a class as a singleton, ensuring that only one instance is created and reused throughout the application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"assign")),": Allows assigning dependencies to class properties, making it easy to access them within the class.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"asBody")),": Enables the injection of HTTP request body data into components or controller methods, providing easy access and type safety. Read ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/body?#inject-body-data"},"asBody Doc")," for more information.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"asQuery")),": Facilitates the injection of HTTP request query string data into components or controller methods, simplifying access to query parameters. Read ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/query?#inject-query-string-data"},"asQuery Doc")," for more information.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"asParam")),": Injects the entire object as a parameter, making it available for use within components or controller methods. Read ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/param?#inject-path-parameters"},"asParam Doc")," for more information."))),(0,r.kt)("p",null,"These decorators play a crucial role in the Dependency Injection mechanism in Fort.js, contributing to code modularity, testability, and overall development efficiency."),(0,r.kt)("h2",{id:"singleton"},"singleton"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"singleton")," decorator in Fort.js allows you to inject a class dependency and maintain a single instance of that class throughout the entire application. This helps optimize memory usage by creating only one instance of the class, which is reused wherever it is injected."),(0,r.kt)("h3",{id:"inject-into-constructor"},"Inject into constructor"),(0,r.kt)("p",null,"Let's illustrate how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"singleton")," by injecting a ",(0,r.kt)("inlineCode",{parentName:"p"},"UserService")," class into a controller's constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Controller, singleton } from "fortjs";\nimport { UserService } from "@/services";\n\nexport class UserController extends Controller {\n    service: UserService;\n\n    //highlight-next-line\n    constructor(@singleton(UserService) service) {\n        super();\n        this.service = service;\n    }\n}\n')),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserService")," class is injected into the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserController")," as a singleton. This ensures that the same instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"UserService")," is utilized throughout the entire application, promoting efficient memory management."),(0,r.kt)("h3",{id:"inject-into-controller-methods"},"Inject into controller methods"),(0,r.kt)("p",null,"The dependency injection can be also performed on controller methods or any component methods which is called by framework."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Controller, singleton } from "fortjs";\nimport { UserService } from "@/services";\n\nexport class UserController extends Controller {\n    service: UserService;\n\n    constructor(@singleton(UserService) service) {\n        super();\n        this.service = service;\n    }\n\n    @http.body()\n    //highlight-next-line\n    addUser(@singleton(UserService) service){\n\n    }\n}\n')),(0,r.kt)("p",null,"In the above code snippet, the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserService")," is injected into both the constructor and the ",(0,r.kt)("inlineCode",{parentName:"p"},"addUser")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserController"),". Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"@singleton")," decorator is used, only one instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserService")," will be shared among the entire application. This ensures a single, shared instance of the service, promoting consistency and efficient memory usage."),(0,r.kt)("h2",{id:"assign"},"assign"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assign")," decorator in Fort.js allows you to inject a specific value into a variable in a controller or any type of component."),(0,r.kt)("p",null,'Here\'s an example of injecting the value "hello world" into a variable using the ',(0,r.kt)("inlineCode",{parentName:"p"},"assign")," decorator in a controller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Controller, assign, http } from \"fortjs\";\n\nexport class UserController extends Controller {\n\n    @http.get()\n    //highlight-next-line\n    index(@assign('hello world') value) {\n        console.log(value); // Output: hello world\n    }\n}\n")),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"assign"),' decorator injects the value "hello world" into the ',(0,r.kt)("inlineCode",{parentName:"p"},"value")," variable. This provides a flexible way to assign specific values to variables within your components."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"@singleton")," allows injection of a class dependency with a single instance maintained throughout the app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"@assign")," injects specific values into variables, providing flexibility for assigning values in components.")))}m.isMDXComponent=!0}}]);