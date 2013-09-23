define(function(require){
    var $           = require('jquery')
      , JQueryUI    = require('jqueryui')
      , LibraryView = require('LibraryView');

    $(function() {
        $('#releaseDate').datepicker();
        new LibraryView();
    });
});
