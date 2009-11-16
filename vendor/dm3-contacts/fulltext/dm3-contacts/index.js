function(doc) {

    if (doc.type != "Topic" || doc.topic_type != "Person" && doc.topic_type != "Institution") {
        return
    }

    var ret = new Document();

    ret.add(doc.topic_type, {store: "yes", index: "not_analyzed"})
    ret.add(get_field("Name").content, {store: "yes"});
    ret.add(get_field("Email").content, {store: "yes"});

    function get_field(field_id) {
        for (var i = 0, field; field = doc.fields[i]; i++) {
            if (field.id == field_id) {
                return field
            }
        }
    }

    return ret;
}
