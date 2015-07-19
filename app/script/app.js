requirejs.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min',
    marked: '../bower_components/marked/marked.min',
    data: './data'
  }
});

requirejs(['jquery', 'data'], function ($, data) {

});
