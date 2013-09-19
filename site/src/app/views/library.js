// site/js/views/library.js

define(function(require) {
    var   _          = require('underscore')
        , Backbone   = require('backbone')
        , Backgrid   = require('backgrid')
        , Library    = require('Library')
        , BookView   = require('BookView')
        , $          = require('jqueryui')
        , dateformat = require('dateformat');


    var LibraryView = Backbone.View.extend({
        el: '#books',

        initialize: function( ) {
            this.collection = new Library();

            var columns = [{
                name: "title",
                label: "Title",
                editable: false,
                cell: "string"
            }, {
                name: "author",
                label: "Author",
                editable: false,
                cell: "string"
            }, {
                name: "releaseDate",
                label: "Release date",
                cell: "date"
            }];

            // Initialize a new Grid instance
            var grid = new Backgrid.Grid({
                columns: columns,
                collection: this.collection
            });

            // Render the grid and attach the root to your HTML document
            $("#tableexample").append(grid.render().$el);

            this.collection.fetch({reset: true});
            /*this.render();*/

            /*this.listenTo( this.collection, 'add', this.renderBook );*/
            this.listenTo( this.collection, 'reset', this.render );
        },

        events:{
              'click #add'   :'addBook'
        },

        addBook: function( e ) {
            e.preventDefault();

            var formData = {};

            $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
                if( $( el ).val() != '' ){
                    if( el.id === 'keywords' ) {
                        formData[ el.id ] = [];
                        _.each( $( el ).val().split( ' ' ), function( keyword ) {
                            formData[ el.id ].push({ 'keyword': keyword });
                        });
                    } else if( el.id === 'releaseDate' ) {
                        formData[ el.id ] = $( '#releaseDate' ).datepicker( 'getDate' ).getTime();
                    } else {
                        formData[ el.id ] = $( el ).val();
                    }
                }
                // Clear input field value
                $( el ).val('');
            });

            this.collection.create( formData );
        },

        // render library by rendering each book in its collection
        /*render: function() {
            this.collection.each(function( item ) {
                this.renderBook( item );
            }, this );
        },*/

        // render a book by creating a BookView and appending the
        // element it renders to the library's element
        renderBook: function( item ) {
            var bookView = new BookView({
                model: item
            });
            this.$el.append( bookView.render().el );
        }
    });

    return LibraryView;
});
