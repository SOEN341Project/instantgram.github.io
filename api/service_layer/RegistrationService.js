let User = require('../data_access_layer/usersDAO');
class RegistrationService {
    constructor(regDTO){
        this.regDTO=regDTO;
    }

    registerUser = async function(regDTO){
        console.log('***********in service***************');
        let newUser = new User({
            username:regDTO.username,
            //email:email,
            //fName:fName,
            //lName:lName,
            password:regDTO.password
          });
        
        await newUser.save(function(err){
            if(err){
            console.log(err);
            return false;
            } else return true;
        });

    }

}
module.exports = RegistrationService;