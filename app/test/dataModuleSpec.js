define(['data'], function(data) {

  var initialNoteBooks = [{
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

  describe('Data Module Test Specs', function() {

    describe('Notebook Related Private API', function() {

      /////////////////////////////
      // _checkNotebookExistence //
      /////////////////////////////

      it('should find the existing notebook with same title', function() {
        expect(data._checkNotebookExistence('default')).toBe(true);
        expect(data._checkNotebookExistence('Default')).toBe(true);
        expect(data._checkNotebookExistence('dEfAuLT')).toBe(true);

        expect(data._checkNotebookExistence('Li Xinyang')).toBe(false);
      });

    });

    describe('Notebook Related Public API', function() {

      ////////////////////
      // getAllNotebook //
      ////////////////////

      it('should get all initial notebooks', function() {
        var notebooks = data.getAllNotebook();
        expect(JSON.stringify(notebooks) === JSON.stringify(initialNoteBooks)).toBe(true);
      });

      /////////////////////
      // getNoteBookById //
      /////////////////////

      it('should get notebook by ID', function() {
        var notebook = {
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
        };
        var targetNotebook = data.getNoteBookById(0);

        expect(targetNotebook.id).toEqual(notebook.id);
        expect(targetNotebook.title).toEqual(notebook.title);
      });

      ////////////////////////
      // getNoteBookByTitle //
      ////////////////////////

      it('shoud get notebook by title', function () {
        var notebook = initialNoteBooks[0];
        expect(notebook.id).toBe(data.getNoteBookByTitle('default').id);
        expect(notebook.title).toBe(data.getNoteBookByTitle('default').title);
      });

      ////////////////////
      // createNotebook //
      ////////////////////

      it('should create a new notebook', function() {
        var state = data.createNotebook('New Notebook');
        var currentTime = Date.now();
        var notebooks = data.getAllNotebook();
        var lastNoteBook = notebooks[notebooks.length - 1];

        expect(lastNoteBook.id).toBe(1);
        expect(lastNoteBook.title).toBe('New Notebook');
        expect(lastNoteBook.createDate).toBe(currentTime);
        expect(lastNoteBook.modifyDate).toBe(currentTime);
        expect(state).toBe(true);
      });

      it('should not create a new notebook with existing title', function() {
        var state = data.createNotebook('Default');
        expect(state).toBe(false);
      });

    });

    describe('Note Related Private API', function() {
      it('shoud find existing note with the same title in the target notebook', function () {
        expect(data._checkNoteExistence(0, 'WikiNote')).toBe(true);
        expect(data._checkNoteExistence(0, 'Iron Man')).toBe(false);
      });
    });

    describe('Note Related Public API', function() {
      it('should gat all note in the target notebook', function () {
        expect(data.getAllNote(0).length).toEqual(initialNoteBooks[0].notes.length);
      });

      it('should get note by ID', function () {
        expect(data.getNoteById(0, 0)).toEqual(initialNoteBooks[0].notes[0]);
      });

      it('shoud be able to create a new note', function () {
        var creationState = data.createNote('Iron Man', '**Iron Man**', 0);
        var createNote = data.getNoteById(1, 0);
        expect(creationState).toBe(true);
        expect(createNote.title).toEqual('Iron Man');
        expect(createNote.id).toEqual(1);
      });

      it('should find the note by title', function () {
        var targetNote = initialNoteBooks[0].notes[0];
        expect(data.getNoteByTitle('Wikinote', 0).id).toEqual(targetNote.id);
      });
    });
  });

});
