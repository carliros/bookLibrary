// site/js/views/library.js

define(function(require) {
    var   _          = require('underscore')
        , Backbone   = require('backbone')
        /*, Backgrid   = require('backgrid')*/
        , SlickGrid  = require('slickGrid')
        , recline    = require('recline')
        , Library    = require('Library')
        , BookView   = require('BookView')
        , $          = require('jqueryui')
        , dateformat = require('dateformat');


    var LibraryView = Backbone.View.extend({
        el: '#books',

        initialize: function( ) {
            this.collection = new Library();

            /*
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
            */

            var data = [ {id: 0, date: '2011-01-01', x: 1, y: 2, z: 3, country: 'DE', geo: {lat:52.56, lon:13.40} },
                         {id: 1, date: '2011-02-02', x: 2, y: 4, z: 24, country: 'UK', geo: {lat:54.97, lon:-1.60}},
                         {id: 2, date: '2011-03-03', x: 3, y: 6, z: 9, country: 'US', geo: {lat:40.00, lon:-75.5}},
                         {id: 3, date: '2011-04-04', x: 4, y: 8, z: 6, country: 'UK', geo: {lat:57.27, lon:-6.20}},
                         {id: 4, date: '2011-05-04', x: 5, y: 10, z: 15, country: 'UK', geo: {lat:51.58, lon:0}},
                         {id: 5, date: '2011-06-02', x: 6, y: 12, z: 18, country: 'DE', geo: {lat:51.04, lon:7.9}}
            ];

            var dataset = new recline.Model.Dataset({
                records: data
            });

            var $el = $('#tableexample');
            var grid = new recline.View.SlickGrid({
                model: dataset,
                el: $el
            });
            grid.visible = true;
            grid.render();

            //this.collection.fetch({reset: true});
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
