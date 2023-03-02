const mongoose=require('mongoose')

const hotelSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:String,
    rating:Number,
    price:Number
},{timestamps:true})

module.exports=mongoose.model('hotel',hotelSchema)