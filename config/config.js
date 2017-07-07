/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const dotenv = require('dotenv');
const path = require('path');
const sass = require('node-sass-middleware');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env' });

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
