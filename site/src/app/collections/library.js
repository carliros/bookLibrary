// site/js/collections/library.js

define(function(require) {
    var   Backbone = require('backbone')
        , Book     = require('Book');

    var Library = Backbone.Collection.extend({
        model: Book,
        url: '/api/books',
        parse: function( response ) {
            console.log('Collection -> ');
            console.log(response);
            return response;
        }

    });

    return Library;
});
