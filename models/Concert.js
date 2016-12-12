var mongoose = require('mongoose');

var concertSchema = new mongoose.Schema({
  band: String,
  genre: String,
  venue: String,
  date: String,
  time: String,
  cover : Boolean
});

var Concert = mongoose.model('Concert', concertSchema);
module.exports = Concert; 
