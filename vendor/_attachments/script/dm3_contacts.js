function dm3_contacts() {

    add_topic_type("Person", {
        fields: [
            {id: "Name",    model: {type: "text"}, view: {editor: "single line"},          content: ""},
            {id: "Phone",   model: {type: "text"}, view: {editor: "multi line", lines: 2}, content: ""},
            {id: "Email",   model: {type: "text"}, view: {editor: "multi line", lines: 2}, content: ""},
            {id: "Website", model: {type: "text"}, view: {editor: "multi line", lines: 2}, content: ""},
            {id: "Address", model: {type: "text"}, view: {editor: "multi line", lines: 4}, content: ""},
            {id: "Notes",   model: {type: "html"}, view: {editor: "multi line", lines: 4}, content: ""}
        ],
        view: {
            icon_src: "vendor/dm3-contacts/images/bird.png"
        },
        implementation: "PlainDocument"
    })

    add_topic_type("Institution", {
        fields: [
            {id: "Name",    model: {type: "text"}, view: {editor: "single line"},          content: ""},
            {id: "Phone",   model: {type: "text"}, view: {editor: "multi line", lines: 2}, content: ""},
            {id: "Email",   model: {type: "text"}, view: {editor: "multi line", lines: 2}, content: ""},
            {id: "Website", model: {type: "text"}, view: {editor: "multi line", lines: 2}, content: ""},
            {id: "Address", model: {type: "text"}, view: {editor: "multi line", lines: 4}, content: ""},
            {id: "Notes",   model: {type: "html"}, view: {editor: "multi line", lines: 4}, content: ""}
        ],
        view: {
            icon_src: "vendor/dm3-contacts/images/birdhouse.png"
        },
        implementation: "PlainDocument"
    })
}
