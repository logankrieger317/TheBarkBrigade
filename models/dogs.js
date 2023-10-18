const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: String,
  owner: String
});

const Dogs = mongoose.model('Dogs', dogSchema);

module.exports = Dogs;
