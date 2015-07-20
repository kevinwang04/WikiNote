require.config({
  // Alwats make main.js the baseUrl
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min',
    marked: '../bower_components/marked/marked.min',
    data: './data'
  }
});

// Start the main app logic
require(['data'], function (data) {
});
