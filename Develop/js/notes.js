const fs = require("fs");
const path = require("path");

// Creates notes
function createNote(body, noteInfo) {
    const newNote = body;
    noteInfo.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(noteInfo)
    );

    return newNote;
}

// Deletes note
function deleteNote(note, noteInfo) {
    const noteIndex = noteInfo.indexOf(note);
    noteInfo.splice(noteIndex, 1);

    let i = 0;

    noteInfo.forEach(note => {
        note.id = i;
        i = i + 1;
    });

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ noteInfo })
    );

    return noteInfo;
};


module.exports = {
    createNote, deleteNote
};