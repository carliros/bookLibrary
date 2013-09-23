require.config({
	baseUrl: 'site'
	, paths: {
		  jquery        : '../vendor/jquery/1.9.1/jquery'
		, jquery1_7     : '../vendor/slickgrid/2.0.2/lib/jquery-1.7.min'
        , dateformat    : '../vendor/jquery/plugins/jquery.dateFormat/1.0/jquery.dateFormat'
		, jqueryui      : '../vendor/slickgrid/2.0.2/lib/jquery-ui-1.8.16.custom.min'
		, handlebars    : '../vendor/handlebars/1.0.0/handlebars'
		, text          : '../vendor/text/2.0.1/text'
		, backbone      : '../vendor/backbone/1.0.0/backbone'
		, underscore    : '../vendor/underscore/1.5.1/underscore'
        , backgrid      : '../vendor/backgrid/0.2.6/backgrid'
        , bootstrap     : '../vendor/bootstrap/2.3.2/js/bootstrap'
        , recline       : '../vendor/recline/0.5/recline'
        , mustache      : '../vendor/mustache/0.7.2/mustache'
        , slickCore     : '../vendor/slickgrid/2.0.2/slick.core'
        , slickDV       : '../vendor/slickgrid/2.0.2/slick.dataview'
        , slickGrid     : '../vendor/slickgrid/2.0.2/slick.grid'
        , jqueryEventDrop: '../vendor/slickgrid/2.0.2/lib/jquery.event.drop-2.0.min' 
        , jqueryEventDrag: '../vendor/slickgrid/2.0.2/lib/jquery.event.drag-2.0.min'

		, init			: '../src/app/init'
        , AppView	    : '../src/app/views/AppView'
        , Book          : '../src/app/models/book'
        , Library       : '../src/app/collections/library'
        , BookView      : '../src/app/views/book'
        , LibraryView   : '../src/app/views/library'
	}
	, shim: {
		  'underscore' : {
			exports: '_'
		}
        , 'backbone' : {
			  deps: ['jquery1_7']
			, exports: 'Backbone'
		}
        , 'jqueryui': {
              deps: ['jquery1_7']
            , exports: '$'
        }
        , 'dateformat': {
            deps: ['jquery1_7']
        }
        /*, 'backgrid': {
              deps: ['jquery', 'underscore', 'backbone']
            , exports: 'Backgrid'
        }*/
        , 'jqueryEventDrop': {
            deps: ['jquery1_7']
        }
        , 'jqueryEventDrag': {
            deps: ['jquery1_7']
        }
        , 'slickCore': {
            deps: ['jquery1_7', 'jqueryui', 'jqueryEventDrop', 'jqueryEventDrag', 'underscore']
        }
        , 'slickGrid': {
            deps: ['slickCore']
        } 
        , 'bootstrap': {
            deps: ['jquery1_7']
        }
        , 'recline': {
              deps: ['jquery1_7', 'underscore', 'backbone', 'bootstrap', 'mustache']
            , exports: 'recline'
        }
        , 'mustache': {
            deps: ['jquery1_7']
        }
	}
});

define(function(require){
	require('init');
});
