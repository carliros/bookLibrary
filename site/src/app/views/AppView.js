define(function(require){
    var $           = require('jqueryui')
      , LibraryView = require('LibraryView');

    $(function() {
        $( '#releaseDate' ).datepicker();
        new LibraryView();
    });
});
