const usersDAO = require('../data_access_layer/usersDAO');

class LoginService{
    constructor(){

    }

    findUser = async function(loginDTO){
        const username = loginDTO.username;
        const password = loginDTO.password;
        try{
        const user = await usersDAO.findOne({username: username, password: password});
            if(!user) return {status: 404, user: "Invalid!"};
            else return {status: 200, user: user};
        }catch(e){
            return {status: 500, user: e};
        }
    }
}

module.exports = LoginService;