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
        text: "View Engine",
        url: "view-engine"
    },
    {
        id: 8,
        text: "Components",
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
    }, {
        id: 9,
        text: "Types",
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
        id: 10,
        text: "Advanced",
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
        }]
    }
] as TreeViewItem[];