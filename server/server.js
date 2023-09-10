const mongoose = require('mongoose')
const express = require('express')
const courseModel = require('./models/courseModel')
const reviewModel = require('./models/reviewModel')
const passport = require('passport')
const LocalStratergy = require('passport-local')
const session = require('express-session')
const User = require('./models/userModel')
const MongoDBStore = require("connect-mongodb-session")(session);
const cors = require('cors')
const { findOne } = require('./models/courseModel')

let login="false";
let pwd,user;

const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))

const secret ='thisshouldbeabettersecret!';

const store = new MongoDBStore({
    url: 'mongodb://localhost:27017/course',
    secret,
    collection: 'sessions',
    touchAfter: 24 * 60 * 60
});

store.on("error", function (e){
    console.log("SESSION STORE ERROR", e)
})

const sessionConfig = {
    store,
    name: 'session',
    secret,
    resave: true,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))

const connectDB=async()=>{await mongoose.connect('mongodb://localhost:27017/course')}

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStratergy(User.authenticate()));

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

connectDB().then(()=>{
    console.log("DB connected")
}).catch(()=>{
    console.log("DB not connected")
})


app.get('/user/courseCatalog',  async(req,res)=>{
    const data = await courseModel.find();
    res.json(data);
})

app.post('/admin/addCourse',async(req,res)=>{
    const data = req.body;
    course = new courseModel(data)
    await course.save()
    res.redirect('http://localhost:3000/overview/'+course._id)
})

app.post('/admin/deleteCourse/:id',async(req,res)=>{
    const id = req.params.id;
    console.log(id)
    course = await courseModel.findByIdAndRemove(id)
    res.redirect('http://localhost:3000/deleteCourse')
})


app.post('/user/addReview',async(req,res)=>{
    const data = req.body;
    course = new reviewModel(data)
    await course.save()
    res.redirect('http://localhost:3000/#review')
})

app.get('/user/review',async(req,res)=>{
    const data = await reviewModel.find().sort({_id:-1}).limit(3);
    res.json(data);
})

app.post('/user/register',async(req,res)=>{
    const {username,password} = req.body;

    console.log(username,password)
    const user = await new User({username});
    await User.register(user,password);
    console.log(user)
    res.redirect('http://localhost:3000/')
})

app.post('/user/login',passport.authenticate('local',{failureRedirect:'http://localhost:3000/loginUser'}),(req,res)=>{
    user = req.body.username;
    pwd = req.body.password;
    console.log('success')
    login="true"
    res.redirect('http://localhost:3000/')
})

app.post('/user/detail',async(req,res)=>{
    const data = req.body;
    const user = await User.create(data);
})

app.post('/user/isLoggedIn',async(req,res)=>{
    let data = await User.findByUsername(user)
    console.log(data)
    if(!data)
    {
        console.log("false")
        res.json({msg:'false'}) 
    }
    else{
        console.log("true",user)
        res.json({msg:'true',user:user}) 
    }
})

app.post('/user/logout',(req,res)=>{

    login = "false" 
    user=""
    res.redirect('http://localhost:3000/')
})

app.get('/userCourse/:name',async(req,res)=>{
    let course = req.params.name;
    console.log(course)
    const data = await User.findOneAndUpdate({username:user},{$push:{courses:[course]}})
    console.log(data)
    res.redirect('http://localhost:3000/userCourses')
})

app.get('/user/myCourses',async(req,res)=>{
    var cour = [],found=[];
    // let courses;
    const {courses}=await User.findOne({username:user})
    console.log(courses)
    cour.push(await courseModel.find({name:{$in:courses}}))
    console.log(cour)
    res.json(cour)
})

app.get('/user/domain/:domain',async(req,res)=>{
    let domain=req.params.domain;
    console.log(domain)
    res.json(await courseModel.find({domain:domain}))
})


app.listen(2882,()=>{
    console.log('serving on port 2882')
})