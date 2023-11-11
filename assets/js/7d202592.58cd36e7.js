"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[5423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),u=o,m=c["".concat(s,".").concat(u)]||c[u]||g[u]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Swagger Model",keywords:["swagger","automatic generate","integrate","fortjs","node"],description:"Swagger model in fortjs"},i="Swagger Model",l={unversionedId:"swagger/model",id:"swagger/model",title:"Swagger Model",description:"Swagger model in fortjs",source:"@site/docs/swagger/model.md",sourceDirName:"swagger",slug:"/swagger/model",permalink:"/docs/swagger/model",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/swagger/model.md",tags:[],version:"current",frontMatter:{title:"Swagger Model",keywords:["swagger","automatic generate","integrate","fortjs","node"],description:"Swagger model in fortjs"},sidebar:"tutorialSidebar",previous:{title:"Swagger Initialization",permalink:"/docs/swagger/initiate"},next:{title:"Deployment",permalink:"/docs/deployment"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"OptionalProperty",id:"optionalproperty",level:3},{value:"IgnoreProperty",id:"ignoreproperty",level:3},{value:"Example",id:"example",level:3}],d={toc:p},c="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"swagger-model"},"Swagger Model"),(0,o.kt)("p",null,"A model is a class which represents data. It represents what data will return on different responses. "),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"A Model can have different configuration like a field can be optional and other field can be required etc. Fortjs provides different ",(0,o.kt)("inlineCode",{parentName:"p"},"decorators")," to configure the model -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Optional Property"),(0,o.kt)("li",{parentName:"ul"},"Ignore Property"),(0,o.kt)("li",{parentName:"ul"},"Example")),(0,o.kt)("p",null,"Let's see what are the uses of these configuration & how to use -    "),(0,o.kt)("p",null,'Consider a model "User" which has following structure - '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class User {\n    id: string;\n\n    name : String;\n    address: string;\n    gender: string;\n\n    isValidUser : Function;\n}\n")),(0,o.kt)("h3",{id:"optionalproperty"},"OptionalProperty"),(0,o.kt)("p",null,"Consider the property ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),' in the model "User" represents a primary key which means its automatically generated, In that case - '),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"id"),' is not required in a "POST" request - since new record will be created and new id will be generated for that request.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'But it can be a required field in "PUT" request to identify the record.'))),(0,o.kt)("p",null,"So from above statement we found that ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," is sometimes required and sometimes not. For this condition - we can use decorator ",(0,o.kt)("inlineCode",{parentName:"p"},"OptionalProperty")," which will mark the field as optional in swagger doc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import { OptionalProperty } from "fortjs-swagger";\n\nclass User {\n\n    @OptionalProperty\n    id: string;\n\n    name : String;\n    address: string;\n    gender: string;\n\n    isValidUser : Function;\n}\n')),(0,o.kt)("h3",{id:"ignoreproperty"},"IgnoreProperty"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IgnoreProperty")," can be used to ignore a property in the model."),(0,o.kt)("p",null,"Let's focus on property ",(0,o.kt)("inlineCode",{parentName:"p"},"isValidUser"),", its a method which is being used internally in the application but it doesn't need to be specified in the swagger doc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import { IgnoreProperty, OptionalProperty } from "fortjs-swagger";\n\nclass User {\n\n    @OptionalProperty\n    id: string;\n\n    name : String;\n    address: string;\n    gender: string;\n\n    @IgnoreProperty\n    isValidUser : Function;\n}\n')),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Fortjs-Swagger calls ",(0,o.kt)("inlineCode",{parentName:"p"},"getExample")," to generate the example for your model."),(0,o.kt)("p",null,'e.g - Let\'s see how we can provide an example for our model "User" '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { IgnoreProperty, OptionalProperty, SwaggerModel } from "fortjs-swagger";\n\nclass User implements SwaggerModel {\n\n    @OptionalProperty\n    id: string;\n\n    name : String;\n    address: string;\n    gender: string;\n\n    @IgnoreProperty\n    isValidUser : Function;\n\n    // initialize the fields which we want to show in example  \n    getExample(){\n        this.id = 0;\n        this.name = "ujjwal";\n        this.address = "Planet earth";\n        this.gender = "male";\n    }\n}\n\n')))}g.isMDXComponent=!0}}]);