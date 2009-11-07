
DeepaMehta 3 Contacts Plugin
============================

Adds a "Contact" document type to maintain your address book.


Requirements
------------

* A DeepaMehta 3 installation  
  <http://github.com/jri/deepamehta3>


Installation
------------

1.  Go to your DeepaMehta 3 installation directory:
        cd deepamehta3
2.  Download DeepaMehta 3 Contacts Plugin:
        couchapp vendor install git://github.com/jri/dm3-contacts.git
3.  Add plugin to DeepaMehta 3 by inserting a line to `_attachments/javascript/plugins.js`:
        add_plugin("vendor/dm3-contacts/script/dm3_contacts.js")
4.  Add additional stuff by copying two directories:
        cp -r vendor/dm3-contacts/views/dm3-contacts_by-name views
        cp -r vendor/dm3-contacts/fulltext/dm3-contacts fulltext
5.  Upload changes to CouchDB:
        couchapp push --atomic http://localhost:5984/deepamehta3-db


Usage
-----

1.  Visit DeepaMehta 3 in your webbrowser (resp. press reload):
        http://localhost:5984/deepamehta3-db/_design/deepamehta3/index.html
2.  You'll find an additional document type "Contact" in the type menu (next to the "Create" button).


------------
Jörg Richter  
Oct 3, 2009
