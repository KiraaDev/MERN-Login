const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/Test")
        .then(() => {
            console.log("connected to mongodb")
        })
    } catch(err){
        console.log(err)
    }

}


module.exports = connectDB;