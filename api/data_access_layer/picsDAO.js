const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


var picSchema = new Schema({
        
    userId:{
        type: ObjectId,
        required: true
    },
    

    img: { 
       
       // type: String,
        //required: true
        data: Buffer,
        contentType: String
    }
}, 
{
    timestamps: true
});

const picsDAO =mongoose.model('picsDAO',picSchema);
module.exports = picsDAO;