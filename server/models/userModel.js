const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
    username:{
        type:String,
        required:true
    },
     // name:String,
    // college:String,
    // degree:String,
    // branch:String,
    // city:String,
    // state:String,
    // gradYear:String,
    // password:string
    courses:[{
        type:String
    }]
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',UserSchema)