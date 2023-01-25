//Import mongoose in db.js file
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
//using mangoose define a connection string
mongoose.connect('mongodb://localhost:27017/bank',()=>{
    console.log("MongoDb connected successfully");
})

//create model for the project
//collection-users

const User = mongoose.model('User',{
    username:String,
    acno:Number,
    password:String,
    balance:Number,
    transaction:[]
})

//export model
module.exports={
    User
}