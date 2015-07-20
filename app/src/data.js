/**
 * 	@class data
 */
define([], function() {
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
   * 检查提供的笔记本名是否存在
   *
   * @method _checkNotebookExistence
   * @param  {string} notebookName 笔记本名称
   * @return {boolean} 笔记本是否存在状态
   */
  var _checkNotebookExistence = function(notebookName) {
    for (var i = 0; i < _notebooks.length; i++) {
      if (_notebooks[i].title.toLowerCase() == notebookName.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  /**
   * 检查所提供的笔记名称是否在指定笔记本中已经存在
   *
   * @method _checkNoteExistence
   * @param  {int} notebookId 笔记本 ID
   * @param  {string} noteTitle 笔记名称
   * @return {boolean} 笔记是否存在状态
   */
  var _checkNoteExistence = function(notebookId, noteTitle) {

    var notebook = getNoteBookById(notebookId);
    if (notebook !== null) {
      var notes = notebook.notes;

      for (var i = 0; i < notes.length; i++) {
        if (notes[i].title.toLowerCase() == noteTitle.toLowerCase()) {
          return true;
        }
      }
      return false;
    }
  };

  ////////////////
  // Public API //
  ////////////////

  /**
   * 创建一个新的笔记本并将其保存值笔记本数组中（笔记本实例必须唯一不可重名）
   *
   * @method createNotebook
   * @param  {string} 笔记本名称
   * @return {boolean} 创建成功状态
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
   * 获取所有现有笔记本
   *
   * @method getAllNotebook
   * @return {array} 返回现有所有保存在数组中的笔记本
   */
  var getAllNotebook = function() {
    return _notebooks;
  };

  /**
   * 更具笔记本 ID 获取笔记本
   *
   * @method getNoteBookById
   * @param  {int} id 笔记本 ID
   * @return {object} 指定 ID 的笔记本示例对象
   */
  var getNoteBookById = function(id) {
    if (id < _notebooks.length) {
      return _notebooks[id];
    }
    return null;
  };

  /**
   * 新建一个笔记并将其插入指定 ID 的笔记本之中
   *
   * @method createNote
   * @param  {string} title   笔记标题（唯一不可重复）
   * @param  {string} content 笔记内容
   * @param  {int} notebookId 指定笔记本 ID
   * @return {boolean}        笔记创建状态
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

  /**
   *  获取指定笔记本中所有的笔记
   *
   * @method getAllNote
   * @param  {int} notebookId 指定笔记本 ID
   * @return {array} 储存在笔记本中的笔记数组
   */
  var getAllNote = function(notebookId) {

  };

  /**
   * 从指定 ID 的笔记本中获取指定 ID 的笔记条目
   *
   * @method getNoteById
   * @param  {int} noteId 指定的笔记 ID
   * @param  {int} notebookID 指定的笔记本 ID
   * @return {object} 笔记实例对象
   */
  var getNoteById = function(noteId, notebookID) {

  };

  return {
    // Private API (DO NOT USE IT, Testing Purpose ONLY)
    _checkNotebookExistence: _checkNotebookExistence,

    // Notebook related
    createNotebook: createNotebook,
    getAllNotebook: getAllNotebook,
    getNoteBookById: getNoteBookById,

    // Note related
    createNote: createNote,
    getAllNote: getAllNote,
    getNoteById: getNoteById
  };
});
