const noteRoute = require("express").Router();
const { createNote, deleteNote } = require("");

let notesContent = require("../db/db");

// This Routes gets all the notes 
noteRoute.get("", (req, res) => {
    let data = notesContent;
    res.json(data);

});

// This route posts all the notes 
noteRoute.post("", (req, res) => {
    req.body.id = notesContent.length + 1;
    res.json(createNote(req.body, notesContent));

});


// DELETE route for erasing previous notes

noteRoute.delete("", async (req, res) => {
    const { id } = req.params
    notesContent = await deleteNote(id, notesContent);
    res.json(notesContent);

});


module.exports = noteRoute;