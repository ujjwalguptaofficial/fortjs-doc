"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[7009],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),u=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return o.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(f,s(s({ref:r},c),{},{components:t})):o.createElement(f,s({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<a;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3216:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=t(7462),n=(t(7294),t(3905));const a={title:"Customize Error",keywords:["customize error","handle error","fortjs","node"],description:"How to customize error in nodejs using fortjs"},s="Customize Error",l={unversionedId:"advanced/customize-error",id:"advanced/customize-error",title:"Customize Error",description:"How to customize error in nodejs using fortjs",source:"@site/docs/advanced/customize-error.md",sourceDirName:"advanced",slug:"/advanced/customize-error",permalink:"/docs/advanced/customize-error",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/advanced/customize-error.md",tags:[],version:"current",frontMatter:{title:"Customize Error",keywords:["customize error","handle error","fortjs","node"],description:"How to customize error in nodejs using fortjs"},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/docs/advanced/components"},next:{title:"Format Response",permalink:"/docs/advanced/format-response"}},i={},u=[],c={toc:u},p="wrapper";function d(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"customize-error"},"Customize Error"),(0,n.kt)("p",null,"In order to customize the error response , you need to create a class which extend class ",(0,n.kt)("inlineCode",{parentName:"p"},"ErrorHandler")," and override the available methods."),(0,n.kt)("p",null,"e.g - Let's say you want to customize the error response for status code - ",(0,n.kt)("strong",{parentName:"p"},"404"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'import { ErrorHandler } from "fortjs";\n\nexport class CustomErrorHandler extends ErrorHandler {\n    async onNotFound(url){\n       return htmlResult(`<h1>The resource ${url} does not exist.</h1>`);\n    }\n}\n')),(0,n.kt)("p",null,"So basically it returns a customized http response similar to ",(0,n.kt)("a",{parentName:"p",href:"/docs/advanced/worker"},"worker"),"."),(0,n.kt)("p",null,"After creating the error handler class - you need to inform fortjs about this."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'import { Fort } from "fortjs";\nimport { UserController } from "./controllers";\nimport { CustomErrorHandler } from "./extra/custom_error_handler";\n\n\n//add routes\nFort.routes = [{\n    controller: UserController,\n    path: "/user"\n}];\n\nFort.errorHandler = CustomErrorHandler;    \n\nFort.create();\n')),(0,n.kt)("p",null,"The methods available for override are - "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"onServerError(ex: IException): Promise","<","HttpResult | HttpFormatResult",">"),(0,n.kt)("li",{parentName:"ul"},"onBadRequest(ex: IException): Promise","<","HttpResult | HttpFormatResult",">"),(0,n.kt)("li",{parentName:"ul"},"onForbiddenRequest(): Promise","<","HttpResult | HttpFormatResult",">"),(0,n.kt)("li",{parentName:"ul"},"onNotAcceptableRequest(): Promise","<","HttpResult | HttpFormatResult",">"),(0,n.kt)("li",{parentName:"ul"},"onMethodNotAllowed(): Promise","<","HttpResult | HttpFormatResult",">"),(0,n.kt)("li",{parentName:"ul"},"onNotFound(url: string): Promise","<","HttpResult | HttpFormatResult",">")),(0,n.kt)("br",null),"You can see some methods also have parameters. So its upto you how you want to use those params.",(0,n.kt)("p",null,"e.g - for onServerError (Status code - 500), you should not show the exception information to users but you should definitely log those errors."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:-")," It is highly recommended to create a custom error handler and atleast override the onServerError method and log the exception, otherwise you won't have any information regarding the exception occured."))}d.isMDXComponent=!0}}]);