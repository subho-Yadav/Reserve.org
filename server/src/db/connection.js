const mongoose = require('mongoose')

mongoose.set('strictQuery', false);
const connectDb=()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("Database connected!")
    }).catch(error=>{
        console.log(error)
    })
}

module.exports=connectDb