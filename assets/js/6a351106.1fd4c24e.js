"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[6947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[f]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={title:"View Engine Data",keywords:["view engine","data","types","fortjs","node"],description:"Type viewEngineData member description"},o="ViewEngineData",c={unversionedId:"interfaces/view-engine-data",id:"interfaces/view-engine-data",title:"View Engine Data",description:"Type viewEngineData member description",source:"@site/docs/interfaces/view-engine-data.md",sourceDirName:"interfaces",slug:"/interfaces/view-engine-data",permalink:"/docs/interfaces/view-engine-data",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/interfaces/view-engine-data.md",tags:[],version:"current",frontMatter:{title:"View Engine Data",keywords:["view engine","data","types","fortjs","node"],description:"Type viewEngineData member description"},sidebar:"tutorialSidebar",previous:{title:"HttpResult",permalink:"/docs/interfaces/http-result"},next:{title:"Swagger",permalink:"/docs/swagger/"}},p={},s=[],l={toc:s},f="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"viewenginedata"},"ViewEngineData"),(0,i.kt)("p",null,"The interface IViewEngineData is used by ViewEngine to get view related data from workers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"interface IViewEngineData {\n\n    /**\n     * name of the view or path of view\n     *\n     * @type {string}\n     */\n    view: string;\n\n    /**\n     * view model\n     *\n     * @type {*}\n     */\n    model: any;\n}\n")))}u.isMDXComponent=!0}}]);