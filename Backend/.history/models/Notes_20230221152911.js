const mongoose = require('mongoose');


const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:'General'
    },
    date:{
        type:Date,
        default: Date.now
    }
})