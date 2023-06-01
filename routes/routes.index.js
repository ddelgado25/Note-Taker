const path = require("path");
const indexRoute = require("express").Router();

indexRoute.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));

});

indexRoute.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    
})


module.exports = indexRoute;