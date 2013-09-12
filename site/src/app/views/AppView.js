define(function(require){
    var $ = require('jquery')
        AppView = require('AppView');

    var app = app || {};

    $(function() {
        /*$( '#releaseDate' ).datepicker();*/
        new app.LibraryView();
    });
});