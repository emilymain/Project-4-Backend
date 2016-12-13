var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema({
  name: String
})

var venueSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  country: String,
  zipCode: String,
  url: String,
  Latitude: Number,
  Longitude: Number
});

var concertSchema = new mongoose.Schema({
  artists: [artistSchema],
  venue: venueSchema,
  date: Date,
});

var Concert = mongoose.model('Concert', concertSchema);
module.exports = Concert;
