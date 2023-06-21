"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[4042],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={Title:"Data",Keywords:"data, components, options, fortjs, node",Description:"How to pass & access components data"},s="Data",l={unversionedId:"concepts/data",id:"concepts/data",title:"Data",description:"data is class member of Wall, Guard , Shield and Controller. It is used to transfer data from one component to another till worker.",source:"@site/docs/concepts/data.md",sourceDirName:"concepts",slug:"/concepts/data",permalink:"/fortjs-doc/docs/concepts/data",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/concepts/data.md",tags:[],version:"current",frontMatter:{Title:"Data",Keywords:"data, components, options, fortjs, node",Description:"How to pass & access components data"},sidebar:"tutorialSidebar",previous:{title:"Cookie",permalink:"/fortjs-doc/docs/concepts/cookie"},next:{title:"Dependency Injection",permalink:"/fortjs-doc/docs/concepts/dependency-injection"}},c={},i=[{value:"Pass data from Wall",id:"pass-data-from-wall",level:2},{value:"Access data passed from Wall in Controller",id:"access-data-passed-from-wall-in-controller",level:2}],p={toc:i},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data"},"Data"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"data")," is class member of Wall, Guard , Shield and Controller. It is used to transfer data from one component to another till worker."),(0,o.kt)("p",null,"e.g - Let's see how we can pass data from ",(0,o.kt)("strong",{parentName:"p"},"Wall")," to ",(0,o.kt)("strong",{parentName:"p"},"Controller")," - "),(0,o.kt)("h2",{id:"pass-data-from-wall"},"Pass data from Wall"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Wall, textResult } from \"fortjs\";\nexport class RequestLogger extends Wall {\n\n    private getIP(req) {\n        var ip = (req.headers['x-forwarded-for'] || '').split(',').pop() ||\n            req.connection.remoteAddress ||\n            req.socket.remoteAddress ||\n            req.connection.socket.remoteAddress\n        return ip;\n    }\n\n    async onIncoming() {\n        // here we are sending ip to other components\n        this.data.ip = this.getIP(this.request);\n\n        return null;\n    }\n}\n")),(0,o.kt)("p",null,"The above wall is using ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," to pass ip to other components."),(0,o.kt)("h2",{id:"access-data-passed-from-wall-in-controller"},"Access data passed from Wall in Controller"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Controller, textResult, defaultWorker } from "fortjs";\n\nexport class DefaultController extends Controller {\n\n    @defaultWorker()\n    async default() {\n        // access ip \n        const ip = this.data.ip;\n        return textResult(`Ip is ${ip}`);\n    }\n}\n')))}u.isMDXComponent=!0}}]);