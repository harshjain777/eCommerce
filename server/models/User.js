const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user'
    }
});

const User = mongoose.model('User',UserSchema)
module.exports = User;