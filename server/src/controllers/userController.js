const userModel =require('../models/userModel')

const jwt=require('jsonwebtoken')

const ErrorHandler=require('../utils/ErrorHandler')

const catchAsyncErrors = require('../utils/catchAsyncError')
const hotelsModel = require('../models/hotelsModel')

const createUser=catchAsyncErrors(async(request,response,next)=>{

    const error=new ErrorHandler("a new error occurred",404)
    // console.log(error.message)
    const user=await userModel.create(request.body)
    response.send({status:true,user})
})


const userLogin=async (req,res)=>{
    const user=await userModel.findOne(req.body)
    console.log(user)
    if(!user){
        return res.status(403).json({status:false,message:'Login Failed!'})
    }
    const token=jwt.sign(
        {user:user.name,email:user.email},
        "secret",
        {expiresIn:'2m'}
    )
res.status(200).json({status:true,token})
}


const getHotels=async (req,res)=>{
    const hotels=await hotelsModel.find()
    res.send({status:true,data:hotels})
}
module.exports={createUser,getHotels,userLogin}