
const picsDAO = require('../data_access_layer/picsDAO');
//var mongodb = require('mongodb');


const fs = require('fs');

class PicsService {
    constructor(picsDAO){
        this.picsDAO=picsDAO
    }

    //Universal method that deletes any picture in the database.
    deletePic = async function(picsDTO){
        console.log('***********in service***************');
        const picId=picsDTO.picId;
        try{
            await picsDAO.deleteOne({"_id" : picId});
            return {message : 'picture erased', code: 200}
        }catch(e){
            return {message : e.message, code: 401}
        }
    }

    leaveComment = async function(picsDTO){
        console.log('***********in service***************');
        const picId=picsDTO.picId;
        const from=picsDTO.fromUser;
        const comment=picsDTO.comment;
        try{
        await picsDAO.findOneAndUpdate({"_id" : picId},{
            
            $push:{
                comments:{
                    comment:{
                        from: from,
                        text: comment
                    } 
                }    
            }
        })

        return {message: 'Comment posted.'}
        }catch(e){
            console.log(e);
        }

    }

    savePic = async function(picsDTO, userId, picBodyDTO){
        console.log('***********in service***************');
        //try{
            if(!picsDTO.path){
            return {message:'picture not found on backend'};  
            }

        //}catch(e){
            //console.log(e);
        //}

        //const convertedImg=picsDTO.picture;

        if (picBodyDTO.profilePic==='true'){
            console.log('***********yep***************');
            try{
                await picsDAO.findOneAndUpdate({"userId": userId,"profilePic" : true},{                   
                        profilePic: false
                })
            }catch(e){
                console.log(e);
            }

        }
        try{
            let img = fs.readFileSync(picsDTO.path);
            var convertedImg = img.toString('base64');
            let picToSave={
                userId: userId,
                img: convertedImg,
                description: picBodyDTO.description,
                profilePic: picBodyDTO.profilePic,
                likes: '0'
            }

            let newPic = new picsDAO(picToSave);

            await newPic.save();
            return {message:'picture posted'};
        }catch(e){
            console.log(e.message);
            return {message:'not posted----' + e.message};
        }
        
    


       /*
       .then(result =>{
            return {success: true, result: result} ;
       }).catch(err=>{
           if (err) return {success: false, error: err};
       })
       */
       //return 'pic saved';
    }


    getPic = async function(userId,...isProfilePic){
        console.log('***********in service***************');
        var foundPic= null;
        try{
            if(isProfilePic==null||isProfilePic==false) foundPic= await picsDAO.find({'userId':userId});
            else foundPic= await picsDAO.find({'userId':userId, profilePic:true});
            return foundPic ;  
        }catch(e){
            return{message: e.message};
        }

        /*
        if(!foundPic[0])
            return {message: 'Thiw user has no pictures'};       
        else{
            
        }
*/
    }

    
}

module.exports = PicsService;

/*    if(err){
        console.log(err)

           return 'Error';

    } 
    */
