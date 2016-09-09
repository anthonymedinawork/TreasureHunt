var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

require('./db/index.js');

/*************************
        SERVER
*************************/

var app = express();

app.use(require('morgan')('dev'));
// Allows us to access the request data on req.body.
app.use(bodyParser.json());
// Allows us to access the request url and parameters
// on req.url and req.params.
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./resources/router.js'));

module.exports = app;