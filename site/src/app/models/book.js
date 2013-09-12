// site/js/models/book.js

define(function(require) {
    var Backbone = require('backbone');

    var Book = Backbone.Model.extend({
        defaults: {
            coverImage: 'src/css/img/placeholder.png',
            title: 'No title',
            author: 'Unknown',
            releaseDate: 'Unknown',
            keywords: 'None'
        },

        parse: function( response ) {
            response.id = response._id;
            return response;
        }
    });

    return Book;
});
