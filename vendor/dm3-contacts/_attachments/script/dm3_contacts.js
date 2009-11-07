function dm3_contacts() {
    this.name = "dm3-contacts"
    // css_stylesheet("vendor/dm3-workspaces/style/dm3-workspaces.css")
}

dm3_contacts.prototype = {

    init: function() {
        types["Contact"] = {
            fields: [
                {
                    id: "Name",
                    model: {
                        type: "text",
                    },
                    view: {
                        editor: "single line"
                    },
                    content: ""
                },
                {
                    id: "Notes",
                    model: {
                        type: "text",
                    },
                    view: {
                        editor: "multi line",
                        lines: 4
                    },
                    content: ""
                },
                {
                    id: "Address",
                    model: {
                        type: "text",
                    },
                    view: {
                        editor: "multi line",
                        lines: 4
                    },
                    content: ""
                },
                {
                    id: "Phone",
                    model: {
                        type: "text",
                    },
                    view: {
                        editor: "multi line",
                        lines: 2
                    },
                    content: ""
                },
                {
                    id: "Email",
                    model: {
                        type: "text",
                    },
                    view: {
                        editor: "multi line",
                        lines: 2
                    },
                    content: ""
                },
                {
                    id: "Website",
                    model: {
                        type: "text",
                    },
                    view: {
                        editor: "multi line",
                        lines: 2
                    },
                    content: ""
                }
            ],
            implementation: "PlainDocument",
            icon_src: "vendor/dm3-contacts/images/bird.png"
        }
    }
}
