(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{222:function(o,e,t){"use strict";t.r(e);var n={components:{Layout:t(170).a}},r=t(12),component=Object(r.a)(n,(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("Layout",{attrs:{title:"Socket.io",description:"How to use socket.io in fortjs",keywords:"socket, integration, options, fortjs, node",contentSrc:"/home/travis/build/ujjwalguptaofficial/fortjs.docs/out/content/tutorial/advanced/socket-io.md"}},[t("p",[o._v("Socket.IO enables real-time, bidirectional and event-based communication.\nIt works on every platform, browser or device, focusing equally on reliability and speed.")]),o._v(" "),t("p",[o._v("For more info about socke.io, visit - https://socket.io/")]),o._v(" "),t("p",[o._v("socket.io can be injected into fortjs very easily. Let's see how ?")]),o._v(" "),t("p",[o._v("Fortjs exposes its httpserver object and this object can be used to initiate socket.io - ")]),o._v(" "),t("pre",[t("code",[o._v('import { Fort } from "fortjs";\nimport { routes } from "./routes";\nimport * as socketIo from "socket.io";\n\nconst initSocketIo = () => {\n    const io = socketIo(Fort.httpServer);\n    io.on("connection", (socket) => {\n        Fort.logger.info("user connected");\n        socket.on(\'disconnect\', () => {\n            Fort.logger.info(\'user disconnected\');\n        });\n\n        socket.on(\'chat message\', (msg) => {\n            Fort.logger.info(`message is ${msg}`);\n        });\n    });\n}\n\nFort.routes = routes;\nFort.create();\n')])]),o._v(" "),t("p",[o._v('We have created a method - "initSocketIo" which will initializes the socket.io. This uses '),t("code",[o._v("httpServer")]),o._v(" object.")])])}),[],!1,null,null,null);e.default=component.exports}}]);