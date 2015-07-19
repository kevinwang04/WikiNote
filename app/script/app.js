require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min',
    marked: '../bower_components/marked/marked.min',
    data: './data'
  }
});

// Start the main app logic
require(['jquery', 'data'], function ($, data) {
  $('body').css('background', 'darkblue');
  console.log(data.getAllNotebook());
});
