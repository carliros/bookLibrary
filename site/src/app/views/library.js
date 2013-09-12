// site/js/views/library.js

define(function(require) {
    var   _          = require('underscore')
        , Backbone   = require('backbone')
        , Library    = require('Library')
        , BookView   = require('BookView')
        , $          = require('jqueryui')
        , dateformat = require('dateformat');


    var LibraryView = Backbone.View.extend({
        el: '#books',

        initialize: function( ) {
            this.collection = new Library();
            this.collection.fetch({reset: true});
            this.render();

            this.listenTo( this.collection, 'add', this.renderBook );
            this.listenTo( this.collection, 'reset', this.render );
        },

        events:{
              'click #add'   :'addBook'
            , 'click #filter': 'filterBooks'
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

        filterBooks: function ( e ){
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

            var books = this.collection.fetch(
                    { data: formData
                    , type: 'POST'
                    , success: function(d){
                        console.log('fetch success');
                    }});

            console.log(formData);
            console.log(books);

            this.collection.reset(books);
        },

        // render library by rendering each book in its collection
        render: function() {
            this.collection.each(function( item ) {
                this.renderBook( item );
            }, this );
        },

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
