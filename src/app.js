const express = require ('express');
const bodyParser = require ('body-parser');
require ('./db/mongoose');
const app = express ();
const gotRoutes = require ('./routes/gotRoutes');
app.use (bodyParser.json ());
app.use (gotRoutes);

module.exports = app;
