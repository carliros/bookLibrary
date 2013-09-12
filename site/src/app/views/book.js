// site/js/views/book.js

define(function(require) {
    var   $	       = require('jquery')
        , _        = require('underscore')
        , Backbone = require('backbone');

    var BookView = Backbone.View.extend({
        tagName: 'div',
        className: 'bookContainer',
        template: _.template($('#bookTemplate').html()),

        events: {
            'click .delete': 'deleteBook'
        },

        deleteBook: function() {
            //Delete model
            this.model.destroy();

            //Delete view
            this.remove();
        },

        render: function() {
            //this.el is what we defined in tagName. use $el to get access to jQuery html() function
            this.$el.html( this.template( this.model.toJSON() ) );

            return this;
        }
    });

    return BookView;
});
