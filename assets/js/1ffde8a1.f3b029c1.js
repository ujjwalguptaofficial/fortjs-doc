"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=s,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const o={Title:"e2e Test",Keywords:"test, unit, e2e, fortjs, node",Description:"Setting up e2e test in fortjs"},a="E2E Test",i={unversionedId:"test/e2e-test",id:"test/e2e-test",title:"E2E Test",description:"For e2e test - we recommend to use Axios. But feel free to use your favourite http client library.",source:"@site/docs/test/e2e-test.md",sourceDirName:"test",slug:"/test/e2e-test",permalink:"/fortjs-doc/docs/test/e2e-test",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/test/e2e-test.md",tags:[],version:"current",frontMatter:{Title:"e2e Test",Keywords:"test, unit, e2e, fortjs, node",Description:"Setting up e2e test in fortjs"},sidebar:"tutorialSidebar",previous:{title:"Test",permalink:"/fortjs-doc/docs/test/"},next:{title:"initialize",permalink:"/fortjs-doc/docs/test/initialize"}},u={},c=[{value:"Test code",id:"test-code",level:2}],l={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"e2e-test"},"E2E Test"),(0,s.kt)("p",null,"For e2e test - we recommend to use Axios. But feel free to use your favourite http client library."),(0,s.kt)("p",null,"Let's see an example - Consider UserController implments Rest Api & codes are - "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'import { Controller, textResult, defaultWorker, jsonResult, worker, route, HTTP_STATUS_CODE, HTTP_METHOD, guards, singleton } from \'fortjs\';\nimport { UserService } from \'@/services\';\nimport { ModelUserGuard } from \'@/guards\';\nimport { User } from \'@/models\';\n\nexport class UserController extends Controller {\n\n    service: UserService;\n    constructor(@Singleton(UserService) service: UserService) {\n        super();\n        this.service = service;\n    }\n\n    @defaultWorker()\n    async getUsers() {\n        return jsonResult(this.service.getUsers());\n    }\n\n    @worker(HTTP_METHOD.Post)\n    @route("/")\n    @guards(ModelUserGuard)\n    async addUser() {\n        const user = this.data.user;\n        const newUser = this.service.addUser(user);\n        return jsonResult(newUser, HTTP_STATUS_CODE.Created);\n    }\n\n    @worker(HTTP_METHOD.Put)\n    @route("/")\n    async updateUser() {\n        const user = new User().init(this.body);\n        const userUpdated = this.service.updateUser(user);\n        if (userUpdated === true) {\n            return textResult("user updated");\n        }\n        else {\n            return textResult("invalid user");\n        }\n\n    }\n\n    @worker(HTTP_METHOD.Get)\n    @route("/{id}")\n    async getUser() {\n\n        const userId = Number(this.param.id);\n        const user = new UserService().getUser(userId);\n        if (user == null) {\n            return textResult("invalid user id", HTTP_STATUS_CODE.NotFound);\n        }\n        return jsonResult(user);\n\n    }\n\n}\n')),(0,s.kt)("h2",{id:"test-code"},"Test code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'import axios from "axios";\nimport { createApp } from "../index";\n\ndescribe(\'/user\', () => {\n\n    let httpRequest;\n    beforeAll(async () => {\n        await createApp();\n        httpRequest = axios.create({\n            baseURL: process.env.APP_URL + "/user",\n            timeout: 1000\n        });\n    });\n\n    it(\'/get all users\', async () => {\n        const response = await httpRequest.get(\'/\', {\n            headers: {\n                accept: \'application/json\'\n            }\n        });\n        expect(response.status).toEqual(200);\n        expect(response.headers[\'content-type\']).toEqual(\'application/json\');\n        expect(response.data).toEqual([\n            { "address": "bhubaneswar india", "emailId": "ujjwal@mg.com", "gender": "male", "id": 1, "name": "ujjwal", "password": "admin" }\n        ]);\n    });\n\n    it(\'/add user\', async () => {\n        const user = {\n            "name": "ujjwal",\n            "emailId": "ujjwal@m.com",\n            "password": "12345as",\n            "gender": "male",\n            "address": "sadfsgbhfgtbrg"\n        };\n        const response = await httpRequest.post(\'/\', user, {\n            headers: {\n                accept: \'application/json\'\n            }\n        });\n        expect(response.status).toEqual(201);\n        expect(response.headers[\'content-type\']).toEqual(\'application/json\');\n\n        expect(response.data).toEqual({ id: 2, ...user });\n    });\n\n    it(\'/update user\', async () => {\n        const user = {\n            "name": "ujjwal gupta",\n            "emailId": "ujjwal@m.com",\n            "password": "12345as",\n            "gender": "male",\n            "address": "sadfsgbhfgtbrg",\n            "id": 2\n        };\n        const response = await httpRequest.put(\'/\', user, {\n            headers: {\n                accept: \'*/*\'\n            }\n        });\n        expect(response.status).toEqual(200);\n        expect(response.data).toEqual("user updated");\n    });\n});\n')),(0,s.kt)("p",null,"In the above code - "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"We are initializing our app and creating an axios instance in beforeAll hook of jest. This will ensure that our app is initialized before any test case is executed.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'In test case "get all users" - we create a get request to user end point and then send the request, after response is received we compare it against expected output.'))))}d.isMDXComponent=!0}}]);