require.config({
  // Default path is `./script/` as same as `data-main`
  paths: {
    // 3rd party library
    jquery: '../bower_components/jquery/dist/jquery.min',
    marked: '../bower_components/marked/marked.min',

    // Data module
    data: './data'
  }
});

// Start the main app logic
require(['jquery', 'data'], function ($, data) {
  $('body').css('background', 'darkblue');
  console.log(data.getAllNotebook());
});
