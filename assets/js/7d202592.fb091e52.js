"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[5423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(r),u=a,m=g["".concat(s,".").concat(u)]||g[u]||c[u]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Swagger Model",keywords:["swagger","automatic generate","integrate","fortjs","node"],description:"Swagger model in fortjs"},i="Swagger Model",l={unversionedId:"swagger/model",id:"swagger/model",title:"Swagger Model",description:"Swagger model in fortjs",source:"@site/docs/swagger/model.md",sourceDirName:"swagger",slug:"/swagger/model",permalink:"/docs/swagger/model",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/swagger/model.md",tags:[],version:"current",frontMatter:{title:"Swagger Model",keywords:["swagger","automatic generate","integrate","fortjs","node"],description:"Swagger model in fortjs"},sidebar:"tutorialSidebar",previous:{title:"Swagger Integration with FortJs",permalink:"/docs/swagger/"},next:{title:"Deployment",permalink:"/docs/deployment"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"OptionalProperty",id:"optionalproperty",level:3},{value:"IgnoreProperty",id:"ignoreproperty",level:3},{value:"Example",id:"example",level:3}],d={toc:p},g="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"swagger-model"},"Swagger Model"),(0,a.kt)("p",null,"A model is a class which represents data. It represents what data will be used in http request or http response. "),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"A Model can have different configurations like a field can be optional, and other fields can be required, etc. Fortjs provides different ",(0,a.kt)("inlineCode",{parentName:"p"},"decorators")," to configure the model:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Optional Property"),(0,a.kt)("li",{parentName:"ul"},"Ignore Property"),(0,a.kt)("li",{parentName:"ul"},"Example")),(0,a.kt)("p",null,"Let's see what are the uses of these configurations & how to use them.    "),(0,a.kt)("p",null,'Consider a model "User" which has the following structure:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class User {\n    id: string;\n    name: String;\n    address: string;\n    gender: string;\n    isValidUser: Function;\n}\n")),(0,a.kt)("h3",{id:"optionalproperty"},"OptionalProperty"),(0,a.kt)("p",null,"Consider the property ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),' in the model "User" represents a primary key, which means it\'s automatically generated. In that case:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id"),' is not required in a "POST" request since a new record will be created, and a new id will be generated for that request.'),(0,a.kt)("li",{parentName:"ul"},'But it can be a required field in a "PUT" request to identify the record.')),(0,a.kt)("p",null,"So, for the above statement, we found that ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," is sometimes required and sometimes not. For this condition, we can use the decorator ",(0,a.kt)("inlineCode",{parentName:"p"},"OptionalProperty")," which will mark the field as optional in the Swagger doc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { swagger } from "fortjs-swagger";\n\nclass User {\n    \n    //highlight-start\n    @swagger.optionalProperty\n    id: string;\n    //highlight-end\n\n    name: String;\n    address: string;\n    gender: string;\n    isValidUser: Function;\n}\n')),(0,a.kt)("h3",{id:"ignoreproperty"},"IgnoreProperty"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ignoreProperty")," can be used to ignore a property in the model."),(0,a.kt)("p",null,"Let's focus on the property ",(0,a.kt)("inlineCode",{parentName:"p"},"isValidUser"),", it's a method that is being used internally in the application but doesn't need to be specified in the Swagger doc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { swagger } from "fortjs-swagger";\n\nclass User {\n    @swagger.optionalProperty\n    id: string;\n\n    name: String;\n    address: string;\n    gender: string;\n    \n    //highlight-start\n    @swagger.ignoreProperty\n    isValidUser: Function;\n    //highlight-end\n}\n')),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Fortjs-Swagger calls ",(0,a.kt)("inlineCode",{parentName:"p"},"getExample")," to generate the example for your model."),(0,a.kt)("p",null,'For example, let\'s see how we can provide an example for our model "User":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { swagger,SwaggerModel } from "fortjs-swagger";\n\nclass User extends SwaggerModel {\n    @swagger.optionalProperty\n    id: string;\n\n    name: String;\n    address: string;\n    gender: string;\n\n    @swagger.ignoreProperty\n    isValidUser: Function;\n\n    // initialize the fields which we want to show in example  \n    getExample() {\n        this.id = 0;\n        this.name = "ujjwal";\n        this.address = "Planet earth";\n        this.gender = "male";\n    }\n}\n')))}c.isMDXComponent=!0}}]);