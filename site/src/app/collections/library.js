// site/js/collections/library.js

var app = app || {};

define(function(require) {
    var Backbone = require('backbone');

    app.Library = Backbone.Collection.extend({
        model: app.Book,
        url: '/api/books'
    });
});