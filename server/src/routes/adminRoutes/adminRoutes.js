const express=require('express')

const adminRouter=express.Router()

const {createHotel}=require('../../controllers/adminController')

adminRouter.post('/create/hotel',createHotel)

module.exports=adminRouter