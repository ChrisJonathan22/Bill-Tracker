// Import all the needed modules.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;

// Create an express app.
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({
    limit: '15mb',
    extended: true
}));