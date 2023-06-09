const noteRoute = require("express").Router();
const { createNote, deleteNote } = require("../lib/notes");

let noteInfo = require("../db/db.json");

// This Routes gets all the notes 
noteRoute.get("/notes", (req, res) => {
    let data = noteInfo;
    res.json(data);

});

// This route posts all the notes 
noteRoute.post("/notes", (req, res) => {
    req.body.id = noteInfo.length + 1;
    res.json(createNote(req.body, noteInfo));

});


// DELETE route for erasing previous notes

noteRoute.delete("/notes/:id", async (req, res) => {
    const { id } = req.params
    notesInfo = await deleteNote(id, noteInfo);
    res.json(noteInfo);

});


module.exports = noteRoute;