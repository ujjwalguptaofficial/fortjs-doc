"use strict";(self.webpackChunkmy=self.webpackChunkmy||[]).push([[9862],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(r),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={title:"Cron",description:"Learn how to seamlessly integrate and manage cron jobs using Fortjs. Create, start, stop, and configure cron tasks effortlessly.",keywords:["Fortjs","Cron","ScheduleTask","Job Scheduling","Task Scheduler","Documentation"]},l="Cron/Scheduler",s={unversionedId:"concepts/cron",id:"concepts/cron",title:"Cron",description:"Learn how to seamlessly integrate and manage cron jobs using Fortjs. Create, start, stop, and configure cron tasks effortlessly.",source:"@site/docs/concepts/cron.md",sourceDirName:"concepts",slug:"/concepts/cron",permalink:"/docs/concepts/cron",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/fortjs-doc/tree/main/docs/concepts/cron.md",tags:[],version:"current",frontMatter:{title:"Cron",description:"Learn how to seamlessly integrate and manage cron jobs using Fortjs. Create, start, stop, and configure cron tasks effortlessly.",keywords:["Fortjs","Cron","ScheduleTask","Job Scheduling","Task Scheduler","Documentation"]},sidebar:"tutorialSidebar",previous:{title:"Middleware",permalink:"/docs/concepts/middleware"},next:{title:"Database",permalink:"/docs/guides/database"}},c={},i=[{value:"Create Cron Job",id:"create-cron-job",level:2},{value:"Use Cron Job",id:"use-cron-job",level:2},{value:"Start Cron Job",id:"start-cron-job",level:2},{value:"startAll",id:"startall",level:3},{value:"start",id:"start",level:3},{value:"Stop cron job",id:"stop-cron-job",level:2},{value:"stopAll",id:"stopall",level:3},{value:"stop",id:"stop",level:3}],p={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cronscheduler"},"Cron/Scheduler"),(0,o.kt)("p",null,"Cron is a crucial process for running jobs at regular intervals, and Fortjs makes it remarkably easy to create and manage cron jobs."),(0,o.kt)("h2",{id:"create-cron-job"},"Create Cron Job"),(0,o.kt)("p",null,"Let's create a cron job that increments a counter every second. To create the job, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a class that extends the ",(0,o.kt)("inlineCode",{parentName:"li"},"ScheduleTask")," from Fortjs."),(0,o.kt)("li",{parentName:"ol"},"Implement the ",(0,o.kt)("inlineCode",{parentName:"li"},"execute")," method and include your task inside it. In our case, the task is to increment the ",(0,o.kt)("inlineCode",{parentName:"li"},"counter")," value.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { ScheduleTask } from "fortjs";\n\nexport class CounterScheduler extends ScheduleTask {\n    counter = 0;\n\n    async execute() {\n        this.counter++;\n    }\n}\n')),(0,o.kt)("h2",{id:"use-cron-job"},"Use Cron Job"),(0,o.kt)("p",null,"In the previous section, we defined the cron job, but now we need to instruct Fortjs to execute this cron job based on a cron expression."),(0,o.kt)("p",null,"In your bootstrap file (",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts"),"), add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { CounterScheduler } from "./crons/counter";\n\nFort.scheduler.add({\n    expression: "*/1 * * * * *", // run every 1 second\n    task: CounterScheduler,\n    name: "Counter"\n});\n\n// Start all cron jobs\nFort.scheduler.startAll();\n')),(0,o.kt)("h2",{id:"start-cron-job"},"Start Cron Job"),(0,o.kt)("p",null,"The Fortjs scheduler provides two methods to initiate the cron job:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"startAll"),(0,o.kt)("li",{parentName:"ol"},"start")),(0,o.kt)("h3",{id:"startall"},"startAll"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"startAll")," initiates all registered cron jobs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// start all cron job\nFort.scheduler.startAll();\n")),(0,o.kt)("h3",{id:"start"},"start"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"start")," takes the cron name and starts the specified cron."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Fort.scheduler.start("Counter");\n')),(0,o.kt)("h2",{id:"stop-cron-job"},"Stop cron job"),(0,o.kt)("p",null,"The Fortjs scheduler provides two methods to halt the execution of cron jobs:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"stopAll"),(0,o.kt)("li",{parentName:"ol"},"stop")),(0,o.kt)("h3",{id:"stopall"},"stopAll"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"stopAll")," stops all registered cron jobs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// stop all cron job\nFort.scheduler.stopAll();\n")),(0,o.kt)("h3",{id:"stop"},"stop"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"stop")," takes the cron name and stops the specified cron."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'Fort.scheduler.stop("Counter");\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Fortjs utilizes the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cron"},"cron")," package under the hood to execute cron tasks. However, it can be configured to use any alternative package. For more details, refer to the documentation - ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/task_scheduler"},"Cron Scheduler"),".")))}d.isMDXComponent=!0}}]);