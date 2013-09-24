require.config({
	baseUrl: 'site'
	, paths: {
		  jquery        : '../vendor/jquery/1.9.1/jquery'
		, jquery1_7     : '../vendor/slickgrid/2.0.2/lib/jquery-1.7.min'
        , dateformat    : '../vendor/jquery/plugins/jquery.dateFormat/1.0/jquery.dateFormat'
		, 'jqueryui1.6.16' : '../vendor/slickgrid/2.0.2/lib/jquery-ui-1.8.16.custom.min'
        , jqueryui      : '../vendor/jquery/plugins/jquery-ui/1.10.3/jquery-ui'
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
        , 'jqueryEventDrag-2.0': '../vendor/slickgrid/2.0.2/lib/jquery.event.drag-2.0.min'
        , 'jqueryEventDrag-2.2': '../vendor/jquery/plugins/jquery.event.drag/2.2/jquery.event.drag-2.2'
        , slickBack     : '../vendor/slickback/0.3.1/slickback'

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
        , 'jquery': {
            exports: '$'
        }
        , 'backbone' : {
			  deps: ['jquery']
			, exports: 'Backbone'
		}
        , 'jqueryui': {
              deps: ['jquery']
        }
        , 'dateformat': {
            deps: ['jquery']
        }
        /*, 'backgrid': {
              deps: ['jquery', 'underscore', 'backbone']
            , exports: 'Backgrid'
        }*/
        , 'jqueryEventDrag-2.2': {
            deps: ['jquery']
            , exports: 'drag'
        }
        , 'slickCore': {
            deps: ['jquery', 'jqueryui', 'jqueryEventDrag-2.2', 'underscore']
        }
        , 'slickGrid': {
            deps: ['slickCore', 'jqueryEventDrag-2.2']
        } 
        , 'bootstrap': {
            deps: ['jquery']
        }
        , 'recline': {
              deps: ['jquery', 'underscore', 'slickGrid', 'backbone', 'bootstrap', 'mustache']
            , exports: 'recline'
        }
        , 'slickBack': {
            deps: ['slickCore']
            , exports: 'Slickback'
        }
        , 'mustache': {
            deps: ['jquery']
        }
	}
});

define(function(require){
	require('init');
});
