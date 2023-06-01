const path = require("path");
const indexRoute = require("express").Router();

indexRoute.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    
})

indexRoute.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));

});


module.exports = indexRoute;