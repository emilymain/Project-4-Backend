
require('dotenv').config();

var request = require('request');
var mongoose = require('./database');
var Concert = require('../models/Concert');


var concerts = [];


  request('http://api.jambase.com/events?zipCode=90401&api_key='+ process.env.JAMBASE_KEY+'&o=json', function(error, response, body){
    concerts = body
    console.log(concerts)
  })
