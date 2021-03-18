const mongoose = require('mongoose');

//User Schema
const FollowSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    following: [{
        user:{
        type: String,
        required: true
        }
    }]
});

const Follow = module.exports = mongoose.model('Follow', FollowSchema);