const express=require('express')

const userRouter=express.Router()

const {createUser,getHotels, userLogin}= require('../../controllers/userController')

userRouter.post('/user/create',createUser)
userRouter.post('/user/login',userLogin)
userRouter.get('/get/hotels',getHotels)

module.exports=userRouter