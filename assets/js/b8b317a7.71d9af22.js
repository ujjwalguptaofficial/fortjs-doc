"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8965:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"File",keywords:["file","upload","fortjs","node"],description:"Access request file in nodejs using fortjs"},l="File",s={unversionedId:"concepts/file",id:"concepts/file",title:"File",description:"Access request file in nodejs using fortjs",source:"@site/docs/concepts/file.md",sourceDirName:"concepts",slug:"/concepts/file",permalink:"/fortjs-doc/docs/concepts/file",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/concepts/file.md",tags:[],version:"current",frontMatter:{title:"File",keywords:["file","upload","fortjs","node"],description:"Access request file in nodejs using fortjs"},sidebar:"tutorialSidebar",previous:{title:"Dependency Injection",permalink:"/fortjs-doc/docs/concepts/dependency-injection"},next:{title:"Param",permalink:"/fortjs-doc/docs/concepts/param"}},a={},c=[{value:"Upload file",id:"upload-file",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"file"},"File"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"file")," to access http request files. It is class member of  Guard ,Shield and Controller."),(0,o.kt)("h2",{id:"upload-file"},"Upload file"),(0,o.kt)("p",null,"Let's see how to upload a file - "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Controller, textResult, route, fileResult, worker, HTTP_METHOD } from "fortjs";\nimport * as Path from "path";\n\nexport class FileController extends Controller {\n   \n    @worker(HTTP_METHOD.Post)\n    @route("/upload")\n    async uploadFile() {\n\n        let result;\n        // check whether file exist in the http request\n        if (this.file.isExist(\'jsstore\') === true) {\n            // save file to desired location\n\n            const pathToSave = Path.join(__dirname, "../upload.png");\n            await this.file.saveTo(\'jsstore\', pathToSave);\n            result = "file saved";\n        } else {\n            result = "file not saved";\n        }\n        return textResult(result);\n    }    \n}\n')))}f.isMDXComponent=!0}}]);