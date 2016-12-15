require('dotenv').config();

var request = require('request');
var mongoose = require('./database');
var Concert = require('../models/Concert');
var count = 0;
var allConcerts =[];

var myInterval = setInterval(function(){
  if (count<10) {
    request('http://api.jambase.com/events?zipCode=90401&api_key='+ process.env.JAMBASE_KEY+'&o=json&page='+count, function(error, response, body){
      var concerts = JSON.parse(body).Events.map(function(ev) {
        var newConcert = new Concert()
        newConcert.userCreated = false;
        newConcert.band = ev.Artists[0].Name;
        newConcert.venue = ev.Venue.Name;
        newConcert.address = ev.Venue.Address +", "+ ev.Venue.City + ", "+ ev.Venue.State + ", " + ev.Venue.ZipCode;
        newConcert.date = ev.Date;



        return newConcert;
      });
      allConcerts=allConcerts.concat(concerts)
    });
    count++
  } else {
    clearInterval(myInterval)
    Concert.remove({userCreated: false}, function(err) {
      if (err) {
        console.log(err);
      } else {
        Concert.create(allConcerts, function(err, savedConcerts) {
          if (err) {
            console.log(err);
          } else {
            console.log("Database seeeded with " + savedConcerts.length + " concerts")
            mongoose.connection.close();
          }
          process.exit()
        })
      }
    })
  }
}, 1000)
