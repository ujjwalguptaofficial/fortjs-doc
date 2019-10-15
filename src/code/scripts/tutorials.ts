import { TreeViewItem } from "../models/treeview_item";

export const tutorialLinks = [
    {
        id: 1,
        url: "get-started",
        text: "Get Started"
    },
    {
        id: 2,
        url: "controller",
        text: "Controller"
    },
    {
        id: 3,
        url: "worker",
        text: "Worker"
    },
    {
        id: 4,
        text: 'Route',
        url: 'route'
    },
    {
        id: 5,
        text: 'Bootstrap',
        url: 'bootstrap'
    }, {
        id: 7,
        text: "View",
        url: "view"
    }, {
        id: 8,
        text: "Authentication",
        url: "authentication"
    },
    {
        id: 9,
        text: "Components",
        url: "components",
        childs: [
            {
                id: 1,
                text: "Wall",
                url: "wall"
            },
            {
                id: 2,
                text: "Shield",
                url: "shield"
            },
            {
                id: 3,
                text: "Guard",
                url: "guard"
            }
        ]
    },
    {
        id: 10,
        text: "Concepts",
        url: "null",
        childs: [{
            id: 1,
            text: "Cookie",
            url: "cookie"
        }, {
            id: 2,
            text: "Session",
            url: "session"
        }, {
            id: 3,
            text: "Component Data",
            url: "data"
        }, {
            id: 4,
            text: "Route Param",
            url: "param"
        }, {
            id: 5,
            text: "Query String",
            url: "query"
        }, {
            id: 6,
            text: "Post Data",
            url: "body"
        }, {
            id: 7,
            text: "File",
            url: "file"
        },{
            id: 8,
            text: "Dependency Injection",
            url: "dependency-injection"
        }]
    },
    {
        id: 11,
        text: "Types",
        url: "null",
        childs: [{
            id: 1,
            text: "HttpResult",
            url: "http-result"
        }, {
            id: 2,
            text: "AppOption",
            url: "app-option"
        }, {
            id: 3,
            text: "HttpRequest",
            url: "http-request"
        }, {
            id: 4,
            text: "HttpResponse",
            url: "http-response"
        }, {
            id: 5,
            text: "ViewEngineData",
            url: "view-engine-data"
        }, {
            id: 6,
            text: "HttpFormatResult",
            url: "http-format-result"
        }]
    }, {
        id: 12,
        text: "Advanced",
        url: "null",
        childs: [{
            id: 1,
            text: "Custom Error Handler",
            url: "custom-error-handler"
        }, {
            id: 2,
            text: "Session Provider",
            url: "session-provider"
        }, {
            id: 3,
            text: "Format Response",
            url: "format-response"
        }, {
            id: 4,
            text: "View Engine",
            url: "view-engine"
        }, {
            id: 5,
            text: "Swagger",
            url: "swagger"
        }, {
            id: 6,
            text: "GraphQl",
            url: "graphql"
        }, {
            id: 7,
            text: "Socket.io",
            url: "socket-io"
        }],
    },
    {
        id: 13,
        text: "Deployment",
        url: "deployment"
    },
    {
        id: 14,
        text: "Test",
        url: "test"
    }
] as TreeViewItem[];