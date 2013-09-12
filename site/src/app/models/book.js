// site/js/models/book.js

var app = app || {};

define(function(require) {
    var Backbone = require('backbone');

    app.Book = Backbone.Model.extend({
        defaults: {
            coverImage: '../../css/img/placeholder.png',
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
});