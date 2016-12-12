var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password_digest: String, 
});

module.exports = mongoose.model('User', userSchema);
