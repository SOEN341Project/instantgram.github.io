var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
var expressValidator = require('express-validator');
router.use(expressValidator());
var followService = require('../service_layer/followService');

router.get('/', function(req, res, next){
    res.render('unfollow');
})

router.post('/:username', async(req,res,next)=>{
    console.log("***Unfollow Begin***");
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
        console.loge("Person to unfollow does not exist");
        return res.status(404).send();
    } else if(!inDB) {
        console.log("You are not following anyone");
        return res.status(409).send();
    }
    if(!inDBFollower) {
        console.log("You arent following that person");
        return res.status(409).send();
    }

    const DuplicateFollow = await FollowService.checkDuplicateFollow(username, user);
    const DuplicateFollower = await FollowService.checkDuplicateFollower(user, username);

    var response = 409;

    if(DuplicateFollow && !DuplicateFollower) {
        console.log("You have unfollowed them");
        response = await FollowService.unfollowUser(username, user);
    } else if(!DuplicateFollow && DuplicateFollower) {
        console.log("You are no longer their follower");
        await FollowService.removeFollower(user, username);
        response = 202;
    } else if(DuplicateFollow && DuplicateFollower) {
        console.log("Successful unfollow");
        await FollowService.removeFollower(user, username);
        response = await FollowService.unfollowUser(username, user);
    } else {
        console.log("You arent following that person");
        response = 409;
    }

    console.log('**Unfollow End**');
    return res.status(response).send();
})

module.exports = router;