"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[3928],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,h=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(h,l(l({ref:r},c),{},{components:t})):n.createElement(h,l({ref:r},c))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2838:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={title:"GraphQl",keywords:["graphql","integrate","fortjs","node"],description:"How to use graphql in node using fortjs"},l="GraphQl",i={unversionedId:"advanced/graphql",id:"advanced/graphql",title:"GraphQl",description:"How to use graphql in node using fortjs",source:"@site/docs/advanced/graphql.md",sourceDirName:"advanced",slug:"/advanced/graphql",permalink:"/docs/advanced/graphql",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/advanced/graphql.md",tags:[],version:"current",frontMatter:{title:"GraphQl",keywords:["graphql","integrate","fortjs","node"],description:"How to use graphql in node using fortjs"},sidebar:"tutorialSidebar",previous:{title:"Format Response",permalink:"/docs/advanced/format-response"},next:{title:"Session store",permalink:"/docs/advanced/session-store"}},p={},s=[{value:"Uses",id:"uses",level:2}],c={toc:s},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"graphql"},"GraphQl"),(0,o.kt)("p",null,"FortJs provides a seperate package - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ujjwalguptaofficial/fortjs-graphql"},"fort-graphql")," for integration of graphql."),(0,o.kt)("h2",{id:"uses"},"Uses"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm i fortjs-graphql")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn add fortjs-graphql")),(0,o.kt)("li",{parentName:"ol"},"Create a controller and inherit ",(0,o.kt)("inlineCode",{parentName:"li"},"GraphQlHelper")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Create a default worker and call ",(0,o.kt)("inlineCode",{parentName:"li"},"processGraphQl")," inside it. "),(0,o.kt)("li",{parentName:"ul"},"For graphiql , create another worker and call ",(0,o.kt)("inlineCode",{parentName:"li"},"getGraphiqlUi")," inside it.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import { HTTP_METHOD, DefaultWorker, Worker } from "fortjs";\nimport { GraphQlHelper } from "fort-graphql";\n\nexport class GraphQlController extends GraphQlHelper {\n    \n    /**\n     * This method will be used to process graphql query \n     *\n     * @returns\n     * @memberof GraphQlController\n     */\n    @DefaultWorker(HTTP_METHOD.Get, HTTP_METHOD.Post)\n    async  default() {\n        return this.processGraphQl();\n    }\n\n    /**\n     * This method will return graphiql \n     *\n     * @returns\n     * @memberof GraphQlController\n     */\n    @Worker()\n    async  graphiql() {\n        return this.getGraphiqlUi();\n    }\n\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add the controller into routes "),(0,o.kt)("li",{parentName:"ol"},"Initiate the graphql, where you have bootstrapped your app. By default file is app.ts/app.js - ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { Fort } from 'fortjs';\nimport { routes } from './routes';\nimport { FortViewEngine } from 'eshtml';\nimport * as path from \"path\";\nimport { FortGraphQl } from 'fortjs-graphql';\nimport { GraphQLError, buildSchema } from 'graphql';\n\n\nFort.routes = routes;\n\nFort.create({\n    defaultPath: \"default\" \n}).then(() => {\n    console.log(\"Your fort is located at address - localhost:4000\");\n    \n    // setup graphql\n    \n    new FortGraphQl().initiate({\n        schema: buildSchema(`\n        type Query {\n          hello: String\n        }\n        ` ),\n        resolver: { hello: () => 'Hello world!' }\n    })\n}).catch(err => {\n    console.error(err);\n})\n")))}d.isMDXComponent=!0}}]);