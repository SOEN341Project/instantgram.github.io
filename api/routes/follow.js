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
    const user = req.session.user.username;
    console.log(username);
    const FollowService = new followService();
    const exist = await FollowService.checkUserExist(username);
    const inDB = await FollowService.checkUserInFollow(user);
    const inDBFollower = await FollowService.checkUserInFollow(username);
    if(!exist) {
        console.loge("Person to follow does not exist");
        return res.status(404).send();
    } else if(!inDB) {
        await FollowService.addToDB(user);
    }
    if(!inDBFollower) {
        await FollowService.addToDB(username);
    }

    const DuplicateFollow = await FollowService.checkDuplicateFollow(username, user);
    const DuplicateFollower = await FollowService.checkDuplicateFollower(username, user);

    var addedFollower;
    var response = 409;

    if(DuplicateFollow && !DuplicateFollower) {
        console.log("You cannot follow someone twice");
        addedFollower = await FollowService.addFollower(user, username);
    } else if(!DuplicateFollow && DuplicateFollower) {
        console.log("Duplicate follower but not follow");
        response = await FollowService.followUser(username, user);
    } else if(DuplicateFollow && DuplicateFollower) {
        console.log("Double Duplicates");
    } else {
        addedFollower = await FollowService.addFollower(user, username);
        response = await FollowService.followUser(username, user);
    }

    console.log('**Follow End**');
    return res.status(response).send();
})

module.exports = router;