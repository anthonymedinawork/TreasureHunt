/*************************
      USER SCHEMA
*************************/

// username, password, and an array of completed puzzles/riddles
const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //fixes depreciated mongoose promise by implementing ES6 promise.

var riddleSchema = new mongoose.Schema({
  treasureHuntTitle: String,
  riddleTitle: String
}, 
{versionKey: false});

var userSchema = new mongoose.Schema({
  username: { 
    type: String,
    index: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }, 
  solvedRiddles: {
    type: [riddleSchema],
    default: []
  }
}, 
{ versionKey: false });


module.exports = mongoose.model('User', userSchema);