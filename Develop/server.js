const express = require('express');
const fs = require('fs');
const path = require('path');
const notesRoutes = require('./routes/routes.notes.js');
const indexRoutes = require('./routes/routes.index.js');


const PORT = process.env.PORT || 3001;