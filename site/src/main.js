require.config({
	baseUrl: 'site'
	, paths: {
		  jquery        : '../vendor/jquery/1.9.1/jquery'
        , dateformat    : '../vendor/jquery/plugins/jquery.dateFormat/1.0/jquery.dateFormat'
		, jqueryui      : '../vendor/jquery/plugins/jqueryui/1.10.3/jquery-ui'
		, handlebars    : '../vendor/handlebars/1.0.0/handlebars'
		, text          : '../vendor/text/2.0.1/text'
		, backbone      : '../vendor/backbone/1.0.0/backbone'
		, underscore    : '../vendor/underscore/1.5.1/underscore'

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
			  deps: ['jquery']
			, exports: 'Backbone'
		}
        , 'jqueryui': {
              deps: ['jquery']
            , exports: '$'
        }
        , 'dateformat': {
            deps: ['jquery']
        }
	}
});

define(function(require){
	require('init');
});
