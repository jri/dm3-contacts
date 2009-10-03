function(doc) {

    function get_field(field_id) {
        for (var i = 0, field; field = doc.fields[i]; i++) {
            if (field.id == field_id) {
                return field
            }
        }
    }

    if (doc.type == "Topic" && doc.topic_type == "Contact") {
        emit(get_field("Name").content, get_field("Email").content)
    }
}
