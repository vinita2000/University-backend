const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  
  university: {
    type: String
  },

  level: {
    type: String
  },

  name: {
    type: String
  }

}, { timestamps:true }); 

const Course = new mongoose.model('course', schema);

module.exports = Course;