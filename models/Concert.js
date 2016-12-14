var mongoose = require('mongoose');

var concertSchema = new mongoose.Schema({
  band: String,
  genre: String,
  venue: String,
  address: String,
  date: Date,
  time: String,
  cover : Boolean,
  userCreated: {type: Boolean, default: true}
});

var Concert = mongoose.model('Concert', concertSchema);
module.exports = Concert;
