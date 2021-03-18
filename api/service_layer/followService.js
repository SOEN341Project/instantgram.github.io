const followDAO = require('../data_access_layer/followDAO');
const userDAO = require('../data_access_layer/usersDAO');

class followService{
    constructor(follow, userDAO){
        this.follow = follow;
        this.userDAO = userDAO;
    }
    followUser = async function(usernameToFollow, usernameFollowing){
        console.log('***Follow In Service Begin**');
        const uNameTF = usernameToFollow;
        const uNameF = usernameFollowing;
        if(usernameToFollow == usernameFollowing) {
            console.log("You cannot follow yourself!");
            return {message: 'Cannot Follow Self'};
        }
        try{
            await userDAO.findOne({username: uNameTF}, async function(err, user) {
                if(err){
                    console.log(err);
                }
                else if(!user) {
                    console.log("User To Follow Not Found");
                    return {message: "User To Follow Not Found"};
                } else {
                    await followDAO.findOne({"username": uNameF}, async function(err, follow){
                        if(err){
                            console.log(err);
                        }
                        else if(!follow) {
                            console.log("Creating New User for followDAO");
                            let newFollow = new followDAO({
                                username: uNameF
                            })
                            newFollow.save(function(err){
                                if(err){
                                    console.log(err);
                                }
                            })
                        }
                        console.log("Checking for duplicate followers");
                        await followDAO.findOne({following: {$elemMatch: {user: uNameTF}}}, async function(err, found){
                            if(err){
                                console.log(err);
                            } else if (!found) {
                                console.log("Adding New follower entry to an existing user" + uNameTF);
                                await followDAO.findOneAndUpdate({"username": uNameF},{
                                    $push:{
                                      following:{
                                         user: uNameTF
                                        }
                                    }
                                })
                            } else {
                                console.log("User is already being followed"+ found);
                                return {message: "User is already being followed"};
                            }
                        })
                    })
                    console.log("User Followed");
                    return {message: 'User Followed.'}
                } 
            })
        }
        catch(e){
            console.log(e);
        }
    }
    checkFollowing = async function(usernameToCheck) {
        const uNameTC = usernameToCheck;
        const getFollow = await followDAO.find({username: uNameTC})
        return getFollow;
    }
}
module.exports = followService;