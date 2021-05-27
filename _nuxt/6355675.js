(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{203:function(e,t,r){"use strict";r.r(t);var n={components:{Layout:r(170).a}},o=r(12),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",{attrs:{title:"Body",description:"fortjs body member details",keywords:"request, post, body, fortjs, node",contentSrc:"/home/travis/build/ujjwalguptaofficial/fortjs.docs/out/content/tutorial/body.md"}},[r("p",[r("code",[e._v("body")]),e._v(" is class member of  Guard and Controller. It is used to access body data sent in http post request. ")]),e._v(" "),r("pre",[r("code",[e._v('import { Controller, viewResult, Worker, HTTP_METHOD, jsonResult, htmlResult, textResult, DefaultWorker, redirectResult } from "fortjs";\nimport { UserService } from "../services/user_service";\n\nexport class DefaultController extends Controller {\n\n    @Worker(HTTP_METHOD.Post)\n    async login() {\n        // access post data\n        const userId = this.body.userId;\n        const pwd = this.body.password;\n\n        if (userId != null && pwd != null) {\n            const userService = new UserService();\n            const user = userService.getUser(userId);\n            if (user != null && user.password === pwd) {\n                this.session.set(\'userId\', userId);\n                return textResult(`Authenticated`);\n            }\n            else {\n                const result = textResult("Invalid credential");\n                return result;\n            }\n        }\n        else {\n            const result = textResult("Invalid credential");\n            return result;\n        }\n    }\n}\n')])]),e._v(" "),r("p",[e._v("By default fortjs parses the body data. But it can be turned off by setting option - "),r("code",[e._v("shouldParsePost")]),e._v(" . Please check "),r("a",{attrs:{href:"/tutorial/bootstrap"}},[e._v("bootstrap")]),e._v(" doc for more info.")])])}),[],!1,null,null,null);t.default=component.exports}}]);