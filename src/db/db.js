const mongoose = require('mongoose')


async function  connectDb(){

    

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo connected")
    } 
    catch(err) {
        console.log(`Error on connecting DB ${err}`);
    }
}


module.exports = connectDb;