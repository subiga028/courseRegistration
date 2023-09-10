const mongoose = require("mongoose")
const Schema=mongoose.Schema

const reviewSchema = Schema({
    name:String,
    course:String,
    message:String,
    stars:Number,
})

module.exports = mongoose.model('reviews',reviewSchema)