var express     = require("express"),
    mongoose    = require("mongoose"),
    bodyParser  = require("body-parser");
    
var app = express();    
var db = require('./config/db');

module.exports = app;