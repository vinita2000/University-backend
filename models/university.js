const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  
  country: {
    type: String
  },

  city: {
    type: String
  },

  name: {
    type: String
  },

  location: {
    type1: String,
    coordinates: [Number]
  },

  students: [{
    year: Number,
    number: Number
  }]

}, { timestamps:true }); 

const University = new mongoose.model('university', schema);

module.exports = University;