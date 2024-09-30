const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname:{
        type:String,
        trim:true,
        minLength:3
    },
    password:String,
    email: String,
    products:{
        type:Array,
        default:[]
    },
    picture: Buffer,
    gstin:String
})
module.exports= mongoose.model("owner",ownerSchema);