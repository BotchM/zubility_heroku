/**
 * Module dependencies.
 */
const express = require('express');
//const compression = require('compression');
//const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
//const errorHandler = require('errorhandler');
//const lusca = require('lusca');
const dotenv = require('dotenv');
//const MongoStore = require('connect-mongo')(session);
//const flash = require('express-flash');
const path = require('path');
const mongoose = require('mongoose');
//const passport = require('passport');
//const expressValidator = require('express-validator');
const sass = require('node-sass-middleware');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env' });

/**
 * Connect to MongoDB.
 */
require('./mongodb')(mongoose);

/**
 * Export our configuration
 */
module.exports = (app) =>{
  /**
   * Express configuration.
   */
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'pug');
  app.use(sass({
    src: path.join(__dirname, '../public'),
    dest: path.join(__dirname, '../public')
  }));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '../public')));
}
