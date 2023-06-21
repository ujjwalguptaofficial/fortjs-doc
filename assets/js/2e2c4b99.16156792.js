"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[6484],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),y=a,m=p["".concat(l,".").concat(y)]||p[y]||d[y]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},936:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={Title:"Expect Query",Keywords:"query, secure query, validation, fortjs, node",Description:"This page tells about decorator ExpectQuery & how to use this."},s="expectQuery",i={unversionedId:"decorators/expect-query",id:"decorators/expect-query",title:"expectQuery",description:"expectQuery helps you to validate query string data. It provides following features -",source:"@site/docs/decorators/expect-query.md",sourceDirName:"decorators",slug:"/decorators/expect-query",permalink:"/fortjs-doc/docs/decorators/expect-query",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/decorators/expect-query.md",tags:[],version:"current",frontMatter:{Title:"Expect Query",Keywords:"query, secure query, validation, fortjs, node",Description:"This page tells about decorator ExpectQuery & how to use this."},sidebar:"tutorialSidebar",previous:{title:"expectBody",permalink:"/fortjs-doc/docs/decorators/expect-body"},next:{title:"Body",permalink:"/fortjs-doc/docs/concepts/body"}},l={},c=[{value:"Check data type",id:"check-data-type",level:2},{value:"Class as parameter",id:"class-as-parameter",level:3},{value:"Removes unnecessary data from incoming body",id:"removes-unnecessary-data-from-incoming-body",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"expectquery"},"expectQuery"),(0,a.kt)("p",null,"expectQuery helps you to validate query string data. It provides following features -"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check data type of incoming query string data against expected query string & automatically convert if possible."),(0,a.kt)("li",{parentName:"ul"},"Removes unnecessary data from incoming query string. This helps you to store data in nosql database without retrieving particular property and thus saving lots of code.")),(0,a.kt)("h2",{id:"check-data-type"},"Check data type"),(0,a.kt)("p",null,"Consider a http request which sends value id in query string -"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://abc.com/product?id=1\n")),(0,a.kt)("p",null,"Here ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," being sent is 1 which will be always ",(0,a.kt)("strong",{parentName:"p"},"string")," (query strings value are always string)."),(0,a.kt)("p",null,"But what if you want ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," to be number. In this case you will write codes to convert ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," "),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"expectQuery")," - it will automatically check the datatype & convert to number."),(0,a.kt)("p",null,"Let's see how to configure this using ",(0,a.kt)("inlineCode",{parentName:"p"},"ExpectQuery")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export class ProductController{\n\n    @route("/")\n    @worker("get")\n    @expectQuery({ id: 0})\n    saveProduct(){\n       const id =  this.query.id;\n    }\n}\n')),(0,a.kt)("h3",{id:"class-as-parameter"},"Class as parameter"),(0,a.kt)("p",null,"You can also provide a class as parameter. Make sure that class properties are initialized."),(0,a.kt)("p",null,"e.g - "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export class Product {\n  id = 0;\n}\n\nexport class ProductController{\n\n    @route("/")\n    @worker("get")\n    @expectQuery(Product)\n    saveProduct(){\n       const id =  this.query.id;\n    }\n}\n')),(0,a.kt)("h2",{id:"removes-unnecessary-data-from-incoming-body"},"Removes unnecessary data from incoming body"),(0,a.kt)("p",null,"Consider a http request which sends following data in request as query string"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    name:"ujjwal",\n    gender:"male",\n    extra:"extra_value" // some extra value which is not required\n}\n')),(0,a.kt)("p",null,'so url will be  - "',(0,a.kt)("a",{parentName:"p",href:"http://abc.com/user?name=ujjwal&gender=male&extra=extra_value%22"},'http://abc.com/user?name=ujjwal&gender=male&extra=extra_value"')),(0,a.kt)("p",null,"Let's see how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"expectQuery")," to only retrieve value that we want, so that property extra will be removed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export class UserController{\n\n    @route("/")\n    @worker("get")\n    @expectQuery({name:"", gender: ""})\n    saveUser(){\n       const user =  this.query;\n    }\n}\n')))}d.isMDXComponent=!0}}]);