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
        
          try{
            const response = await newUser.save();
            if(!response) return false;
            else return true;
          }catch(e){
            return false;
          }
    }

}
module.exports = RegistrationService;