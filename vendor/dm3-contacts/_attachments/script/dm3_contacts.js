function dm3_contacts() {

    types["Person"] = {
        fields: [
            {id: "Name",    model: {type: "text"}, view: {editor: "single line"},          content: ""},
            {id: "Phone",   model: {type: "text"}, view: {editor: "multi line", lines: 2}, content: ""},
            {id: "Email",   model: {type: "text"}, view: {editor: "multi line", lines: 2}, content: ""},
            {id: "Website", model: {type: "text"}, view: {editor: "multi line", lines: 2}, content: ""},
            {id: "Address", model: {type: "text"}, view: {editor: "multi line", lines: 4}, content: ""},
            {id: "Notes",   model: {type: "text"}, view: {editor: "multi line", lines: 4}, content: ""}
        ],
        view: {
            icon_src: "vendor/dm3-contacts/images/bird.png"
        },
        implementation: "PlainDocument"
    }
    types["Institution"] = {
        fields: [
            {id: "Name",    model: {type: "text"}, view: {editor: "single line"},          content: ""},
            {id: "Phone",   model: {type: "text"}, view: {editor: "multi line", lines: 2}, content: ""},
            {id: "Email",   model: {type: "text"}, view: {editor: "multi line", lines: 2}, content: ""},
            {id: "Website", model: {type: "text"}, view: {editor: "multi line", lines: 2}, content: ""},
            {id: "Address", model: {type: "text"}, view: {editor: "multi line", lines: 4}, content: ""},
            {id: "Notes",   model: {type: "text"}, view: {editor: "multi line", lines: 4}, content: ""}
        ],
        view: {
            icon_src: "vendor/dm3-contacts/images/bird.png"
        },
        implementation: "PlainDocument"
    }
}
