let mongoose = require('mongoose');

//User Schema
let userSchema = mongoose.Schema({
  email:{
    type: String,
    required: true
  },
  fName:{
    type:String,
    required: true
  },
  lName:{
    type: String,
    required: true
  },
  pass:{
    type:String,
    required: true
  }
});

let User = module.exports = mongoose.model('User', userSchema);