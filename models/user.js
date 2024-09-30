const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        trim:true
    },
    password:String,
    email: String,
    cart:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"product",
    }],
    
    contact: {
        type: String, 
        default: null,
        match: [/^[0-9]{10,15}$/, 'Please enter a valid contact number'],
    },
    image: {
        type: String,
        default: "default.svg"
    },
    age:{
        type:Number,
        default:null
    },
    orders:{
        type:Array,
        default:[]
    },
})
module.exports= mongoose.model("user",userSchema);