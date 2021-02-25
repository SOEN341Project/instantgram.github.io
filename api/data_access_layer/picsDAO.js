const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;


var picSchema = new Schema({
   

    userId:{
        type: String,
        required: true
    },

    /*
    picId:{
        type: ObjectId,
        required: true,
        unique: true
    },
    */

    img: {  
        type: String,
        required: true
    },
    likes:{
        type: String,
        required: true
    }
},

{
    timestamps: true
}

);

const picsDAO =mongoose.model('pic',picSchema);
module.exports = picsDAO;