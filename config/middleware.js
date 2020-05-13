const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')

module.exports = app => {
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(cookieParser())
  app.use(helmet());
  app.use(compression()); // Compress all routes
  app.use('/static', express.static(path.join(__dirname, '../static')));
}