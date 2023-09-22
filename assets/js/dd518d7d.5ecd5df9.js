"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[4717],{3905:(e,s,n)=>{n.d(s,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function t(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?t(Object(n),!0).forEach((function(s){o(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function a(e,s){if(null==e)return{};var n,r,o=function(e,s){if(null==e)return{};var n,r,o={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],s.indexOf(n)>=0||(o[n]=e[n]);return o}(e,s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var s=r.useContext(l),n=s;return e&&(n="function"==typeof e?e(s):i(i({},s),e)),n},p=function(e){var s=d(e.components);return r.createElement(l.Provider,{value:s},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var s=e.children;return r.createElement(r.Fragment,{},s)}},v=r.forwardRef((function(e,s){var n=e.components,o=e.mdxType,t=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=d(n),v=o,m=c["".concat(l,".").concat(v)]||c[v]||u[v]||t;return n?r.createElement(m,i(i({ref:s},p),{},{components:n})):r.createElement(m,i({ref:s},p))}));function m(e,s){var n=arguments,o=s&&s.mdxType;if("string"==typeof e||o){var t=n.length,i=new Array(t);i[0]=v;var a={};for(var l in s)hasOwnProperty.call(s,l)&&(a[l]=s[l]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var d=2;d<t;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},9449:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const t={title:"Session Provider",keywords:["session provider","create session provider","options","fortjs","node"],description:"Customize session provider in fortjs"},i="Session Provider",a={unversionedId:"advanced/session-provider",id:"advanced/session-provider",title:"Session Provider",description:"Customize session provider in fortjs",source:"@site/docs/advanced/session-provider.md",sourceDirName:"advanced",slug:"/advanced/session-provider",permalink:"/fortjs-doc/docs/advanced/session-provider",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/advanced/session-provider.md",tags:[],version:"current",frontMatter:{title:"Session Provider",keywords:["session provider","create session provider","options","fortjs","node"],description:"Customize session provider in fortjs"},sidebar:"tutorialSidebar",previous:{title:"GraphQl",permalink:"/fortjs-doc/docs/advanced/graphql"},next:{title:"Socket.io Configuration",permalink:"/fortjs-doc/docs/advanced/socket-io"}},l={},d=[{value:"Implement a session provider",id:"implement-a-session-provider",level:2},{value:"Use custom session provider",id:"use-custom-session-provider",level:2}],p={toc:d},c="wrapper";function u(e){let{components:s,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:s,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"session-provider"},"Session Provider"),(0,o.kt)("p",null,"By default fortjs provides a memory session provider which stores all your data in memory & data is lost when nodejs process is stopped or restarted."),(0,o.kt)("p",null,"You can create your own session provider & store it in database or wherever you want. A session provider is a class which extends the class - ",(0,o.kt)("inlineCode",{parentName:"p"},"SessionProvider"),"."),(0,o.kt)("h2",{id:"implement-a-session-provider"},"Implement a session provider"),(0,o.kt)("p",null,"Let's see how we can implement a simple memory session provider - "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import { SessionProvider } from "fortjs";\n\nconst sessionValues = {};\n\nexport class CustomSessionProvider extends SessionProvider {\n\n    async get(key: string) {\n        const savedSession = sessionValues[this.sessionId];\n        return savedSession != null ? savedSession[key] : null;\n    }\n\n    async isExist(key: string) {\n        const savedValue = sessionValues[this.sessionId];\n        return savedValue == null ? false : savedValue[key] != null;\n    }\n\n    async getAll() {\n        const savedValue = sessionValues[this.sessionId];\n        return savedValue == null ? {} : savedValue;\n    }\n\n    async set(key: string, val: any) {\n        const savedValue = sessionValues[this.sessionId];\n        if (savedValue == null) {\n            this.createSession();\n            sessionValues[this.sessionId] = {\n                [key]: val\n            };\n        }\n        else {\n            savedValue[key] = val;\n        }\n    }\n\n    setMany(values: { [key: string]: any }) {\n        return Promise.all(\n            Object.keys(values).map((key) => {\n                return this.set(key, values[key]);\n            })\n        );\n    }\n\n    async remove(key: string) {\n        const savedValue = sessionValues[this.sessionId];\n        if (savedValue != null) {\n            savedValue[key] = null;\n        }\n    }\n\n    async clear() {\n        // remove session values\n        delete sessionValues[this.sessionId];\n        // expire cookie in browser\n        await this.destroySession();\n    }\n}\n\n')),(0,o.kt)("h2",{id:"use-custom-session-provider"},"Use custom session provider"),(0,o.kt)("p",null,"After you have created a session provider - you need to tell fortjs to use new session provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import { Fort } from "fortjs";\nimport { UserController } from "./controllers";\nimport { CustomSessionProvider } from "./extra/custom_session_provider";\n\n// set your session provider\nFort.sessionProvider = CustomSessionProvider\n\n//add routes\nFort.routes = [{\n    controller: UserController,\n    path: "/user"\n}];\n\nFort.create();\n')),(0,o.kt)("p",null,"Have a look at redis session provider example - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/session-provider/redis"},"https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/session-provider/redis")))}u.isMDXComponent=!0}}]);