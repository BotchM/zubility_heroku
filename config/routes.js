// require express
const express = require('express');
const path    = require('path');

// create our router object
var app = express.Router();

/**
 * Controllers (route handlers).
 */
const homeController = require('../controllers/home');
const contactController = require('../controllers/contact');

/**
 * API keys and Passport configuration.
 */
//const passportConfig = require('./config/passport');


/**
 * Primary app routes.
 */
app.get('/', homeController.index);
app.get('/contact', contactController.getContact);


 module.exports = app;
