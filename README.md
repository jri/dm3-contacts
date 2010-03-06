
DeepaMehta 3 Contacts Plugin
============================

Adds topic types *Person* and *Institution* to DeepaMehta 3.
This let you maintain an address book.


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

3.  Activate the plugin by inserting one line to DeepaMehta's `_attachments/javascript/plugins.js`:
        add_plugin("vendor/dm3-contacts/script/dm3_contacts.js")

4.  Copy additional stuff:
        cp -r vendor/dm3-contacts/views/dm3-contacts_by-name views
        cp -r vendor/dm3-contacts/fulltext/dm3-contacts fulltext

5.  Upload changes to CouchDB:
        couchapp push http://localhost:5984/deepamehta3-db

6.  Check if installation was successful: visit DeepaMehta 3 in your webbrowser (resp. press reload):  
    <http://localhost:5984/deepamehta3-db/_design/deepamehta3/index.html>  
    If you see the *Person* and *Institution* entries in the type menu (next to the *Create* button) everything is OK.


Usage
-----

*   Create *Person* and *Institution* topics just like any other topic.


Updating
--------

1.  Go to your DeepaMehta 3 installation directory:
        cd deepamehta3

2.  Update DeepaMehta 3 Contacts Plugin:
        couchapp vendor update dm3-contacts

3.  Copy additional stuff:
        cp -r vendor/dm3-contacts/views/dm3-contacts_by-name views
        cp -r vendor/dm3-contacts/fulltext/dm3-contacts fulltext

4.  Upload changes to CouchDB:
        couchapp push http://localhost:5984/deepamehta3-db


Version History
---------------

**v0.3** -- Mar 6, 2010

* Person's and Institution's "Notes" is a rich text field
* Compatible with DeepaMehta 3 v0.3

**v0.2** -- Dec  1, 2009

* Basic functionality
* Requires DeepaMehta 3 v0.2


------------
Jörg Richter  
Mar 6, 2010
