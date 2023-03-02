const express =require('express')
const path= require('path')
const dotenv=require('dotenv')
const app=express()

const cors=require('cors')

app.use(express.json())


//handling cors error

app.use(cors({
    origin:'*'
}))



//Error Handling middleware

const errorHandlingMiddleware=require('./middlewares/errorHandlingMiddleware')

//Routers
const userRouter=require('./routes/userRoutes/userRoutes')
const adminRouter=require('./routes/adminRoutes/adminRoutes')

app.use(userRouter)

app.use(adminRouter)

const dbConnection=require('./db/connection')

const configPath=path.join(__dirname,'config','config.env')
dotenv.config({path:configPath})
// console.log(configPath,process.env.DB_URL)

dbConnection()

app.use(errorHandlingMiddleware)

app.listen(process.env.PORT||8080,()=>{
    console.log(`Booking app server running on port:${process.env.PORT||8080}`)
})
