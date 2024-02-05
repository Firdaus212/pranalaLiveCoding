const express = require('express');
const app = express();

const liveCodingRoutes = require('./api/routes/liveCoding');

app.use('/generateSegitiga', liveCodingRoutes);

module.exports = app;