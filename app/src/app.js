require.config({
  // Alwats make main.js the baseUrl
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min',
    marked: '../bower_components/marked/marked.min',
    data: './data',
    showNotebookList: './showNotebookList'
  }
});

// Start the main app logic
require(['jquery', 'data','show'], function ($, data,showNotebookList) {
  $('body').css('background', 'darkblue');
  console.log(data.getAllNotebook());
  console.log(showNotebookList.notebooks);
});
