
app.factory('ContactsFactory', function() {
    function create(contact) {
        gallery.images.push(contact);
        save();
    }

    return {
        contactsList: contacts,
        get: get,
        add: create
    }
});



