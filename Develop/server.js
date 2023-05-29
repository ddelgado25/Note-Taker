const express = require('express');
const fs = require('fs');
const path = require('path');
const notesRoutes = require('./routes/routes.notes.js');

const PORT = process.env.PORT || 3001;