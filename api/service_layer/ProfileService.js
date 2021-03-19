const usersDAO = require('../data_access_layer/usersDAO');
class ProfileService {
    constructor(profileDTO){
        this.profileDTO=profileDTO;
    }

    getUser = async function(username){
        console.log('***********in service***************');
        try{
            const user = await usersDAO.findOne({username: username});
            if(!user) return {status: 404, user: "No such user!"};
            else return {status: 200, user: user};
        }catch(e){
            return {status: 500, user: e};
        }
        
        
    }
    getAllUser = async function(){
        console.log('**in service**');
        var userArray = [];
        (await usersDAO.find()).forEach(function(myDoc){
            userArray.push(new UserUsername(myDoc.username));
        })
        console.log(userArray);
        return userArray;
        function UserUsername(username){
            this.username = username;
          }
    }
}
module.exports = ProfileService;