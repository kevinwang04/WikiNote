require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min',
    marked: '../bower_components/marked/marked.min',
    data: './data',
    show: './show'
  }
});

// Start the main app logic
require(['jquery', 'data','show'], function ($, data，show) {
  $('body').css('background', 'darkblue');
  console.log(data.getAllNotebook());
  console.log(show.notebooks);
});
