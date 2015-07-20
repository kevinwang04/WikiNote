define([], function($) {
  /////////////////////////
  // Notebook Data Model //
  /////////////////////////

  // TODO: Use indexDB for Data Model

  var _noteId = 1;
  var _notebookId = 1;

  var _notebooks = [{
    id: 0,
    title: "default",
    createDate: 1437313304462,
    modifyDate: 1437313304462,
    notes: [{
      id: 0,
      title: "WikiNote",
      content: "**Hello, world!**",
      tag: [],
      createDate: 1437313304462,
      modifyDate: 1437313304462
    }]
  }];

  /////////////////
  // Private API //
  /////////////////

  /**
   * Check the existence of current notebook
   * @param  {string} notebookName Notebook title
   * @return {boolean}             The existence of named notebook
   */
  var _checkNotebookExistence = function(notebookName) {
    _notebooks.forEach(function(currentValue) {
      if (currentValue.title.toLowerCase() == notebookName.toLowerCase()) {
        return true;
      }
    });
    return false;
  };

  /**
   * Check the existence of selected note title in target notebook
   * @param  {int} notebookId Notebook ID
   * @param  {string} noteTitle  Note title
   * @return {boolean}            The note existence state
   */
  var _checkNoteExistence = function(notebookId, noteTitle) {

    var notebook = getNoteBookById(notebookId);
    if (notebook !== null) {
      var notes = notebook.notes;
      notes.forEach(function(currentValue) {
        if (currentValue.title == noteTitle) {
          return true;
        }
      });
      return false;
    }
  };

  ////////////////
  // Public API //
  ////////////////

  /**
   * 	Create a new notebook
   * @param  {string} title Notebook title (Must be a unique value)
   * @return {boolean}       Create status
   */
  var createNotebook = function(title) {
    if (!_checkNotebookExistence(title)) {
      var currentTime = Date.now();

      var notebook = {
        id: _notebookId,
        title: title,
        createDate: currentTime,
        modifyDate: currentTime
      };
      _notebooks.push(notebook);

      _notebookId++;

      return true;
    }
    return false;
  };

  /**
   * Get all notebook objects inside an array (Atleast one notebook, default)
   * @return {array} All notebook objects in array
   */
  var getAllNotebook = function() {
    return _notebooks;
  };

  /**
   * Get Notebook by ID
   * @param  {int} id The requested notebook id
   * @return {object}    Single notebook object
   */
  var getNoteBookById = function(id) {
    if (id < _notebooks.length) {
      return _notebooks[id];
    }
    return null;
  };

  /**
   * Create a note object and add into selected notebook
   * @param  {string} title   Note title
   * @param  {string} content Note content in markdown or plain text
   * @return {boolean}        The state of note creation
   */
  var createNote = function(title, content, notebookId) {
    if (notebookId === undefined) {
      notebookId = 0;
    }

    var notebook = getNoteBookById(0);

    if (!_checkNotebookExistence(title, notebookId)) {
      var currentTime = Date.now();
      var note = {
        id: 0,
        title: title,
        content: content,
        tag: [],
        createDate: currentTime,
        modifyDate: currentTime
      };

      notebook.notes.push(note);
    }
  };

  return {
    // Notebook related
    createNotebook: createNotebook,
    getAllNotebook: getAllNotebook,
    getNoteBookById: getNoteBookById,

    // Note related
    createNote: createNote
  };
});
