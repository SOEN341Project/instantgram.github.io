const mongoose = require('mongoose');

//User Schema
const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    /*email:{
        type: String,
        required: true,
        unique: true
    },
    fName:{
        type: String,
        required: true
    },
    lName:{
        type: String,
        required: true
    },*/
    password:{
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);