function(doc) {

    if (doc.type == "Topic" && (doc.topic_type == "Person" || doc.topic_type == "Institution")) {
        emit(get_field("Name").content, get_field("Email").content)
    }

    function get_field(field_id) {
        for (var i = 0, field; field = doc.fields[i]; i++) {
            if (field.id == field_id) {
                return field
            }
        }
    }
}
