define(function(require){
    var $           = require('jqueryui')
      , LibraryView = require('LibraryView')
      , JSON        = require('json2');

    $(function() {
        $('#releaseDate').datepicker();
        new LibraryView();

        var arrCars = new Array("Toyota", "Mercedes", "BMW");           
        var jsonStr = JSON.stringify(arrCars);
        console.log(jsonStr);
    });
});
