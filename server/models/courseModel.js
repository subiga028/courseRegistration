const mongoose = require("mongoose")
const Schema=mongoose.Schema

const courseSchema = Schema({
    name:String,
    logo:String,
    pre_requisite:String,
    duration:String,
    domain:String,
})

module.exports = mongoose.model('courses',courseSchema)