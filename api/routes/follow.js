var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
var expressValidator = require('express-validator');
router.use(expressValidator());
var followService = require('../service_layer/followService');

router.get('/', function(req, res, next){
    res.render('follow');
})

router.post('/:username', async(req,res,next)=>{
    console.log("***Follow Begin***");
    if(!req.session.user){ 
        console.log("You are not logged in!");
        return res.status(403).send();
    }
    const username = req.params.username;
    console.log(username);
    const FollowService = new followService();
    const response = await FollowService.followUser(username, req.session.user.username);
    console.log('**Follow End**');
    return res.status(200).send(response);
})

module.exports = router;