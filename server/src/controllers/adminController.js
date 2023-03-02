
const catchAsyncErrors=require('../utils/catchAsyncError')
const hotelModel=require('../models/hotelsModel')

const createHotel=catchAsyncErrors(async (req,res,next)=>{
    const data=req.body
    const createdHotel=await hotelModel.create(data)
    res.status(201).send({createdHotel})
})

module.exports={createHotel}