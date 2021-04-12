const followDAO = require('../data_access_layer/followDAO');
const userDAO = require('../data_access_layer/usersDAO');

class followService{
    constructor(follow, userDAO){
        this.follow = follow;
        this.userDAO = userDAO;
    }
    checkUserExist = async function(usernameTC) {
        const uNameTC = usernameTC;
        var found;
        return found = await userDAO.findOne({username: uNameTC}, async function(err, user) {
            if(err){
                console.log(err);
            } else if(!user) {
                found = false;
            } else {
                found = true;
            }
        })
    }
    checkUserInFollow = async function(usernameTC) {
        const uNameTC = usernameTC;
        var found;
        return found = await followDAO.findOne({username: uNameTC}, async function(err, follow){
            if(err){
                console.log(err);
            } else if(!follow) {
                found = false;
            } else {
                found = true;
            }
        })
    }
    addToDB = async function(username){
        const uName = username; 
        let newFollow = new followDAO({
            username: uName
        })
        newFollow.save(function(err){
            if(err){
                console.log(err);
            }
        })
    }
    addFollower = async function(usernameFollower, username) {
        const Follower = usernameFollower;
        const user = username;
        try {
        await followDAO.findOneAndUpdate({"username": user},{
            $push:{
            followers:{
                user: Follower
                }
            }
        })
        return 200;
    } catch(e) {    
        console.log(e);
        return e;
    }
    }
    followUser = async function(usernameToFollow, usernameFollowing){
        console.log('***Follow In Service Begin**');
        const uNameTF = usernameToFollow;
        const uNameF = usernameFollowing;
        if(usernameToFollow == usernameFollowing) {
            console.log("You cannot follow yourself!");
            return {message: 'Cannot Follow Self'};
        } try {
            await followDAO.findOneAndUpdate({"username": uNameF},{
                $push:{
                following:{
                    user: uNameTF
                    }
                }
            })
            return 200;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    checkFollowing = async function(usernameToCheck) {
        const uNameTC = usernameToCheck;
        const getFollow = await followDAO.find({username: uNameTC})
        return getFollow;
    }
    checkDuplicateFollow = async function(username, user){
        var Duplicate;
        return Duplicate = await followDAO.findOne({
            "username": user, 
            following: {$elemMatch: {user: username}}}, async function(err, found){
                if(err){
                    console.log(err);
                    Duplicate = err;
                } else if(!found) {
                    Duplicate = false;
                } else {
                    Duplicate = true;
                }
        })
    }
    checkDuplicateFollower = async function(username, user){
        var Duplicate;
        return Duplicate = await followDAO.findOne({
            "username": user,
            followers:{$elemMatch: {user: username}}
        }, async function(err, found){
            if(err){
                console.log(err);
                Duplicate = err;
            } else if(!found) {
                Duplicate = false;
            } else {
                Duplicate = true;
            }
        })
    }
    unfollowUser = async function(username, user){
        

        try{
            await followDAO.findOneAndUpdate({"username": user}, {
                $pull: {
                    following: {user: username}}
                })
                return 200;
        } catch (e){
            console.log(e);
            return e;
        }
    }
    removeFollower = async function(username, user){
        try{
            await followDAO.findOneAndUpdate({"username": user}, {
                $pull: {
                    followers:{user: username}}
                })
                return 200;
        } catch (e){
            console.log(e);
            return e;
        }
    }
}
module.exports = followService;