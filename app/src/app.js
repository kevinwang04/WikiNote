require.config({
  // Default path is `./script/` as same as `data-main`
  // Alwats make main.js the baseUrl

  paths: {
    // 3rd party library
    jquery: '../bower_components/jquery/dist/jquery.min',
    marked: '../bower_components/marked/marked.min',

    // Data module
    data: './data'
  }
});

// Start the main app logic
require(['data'], function (data) {
});
