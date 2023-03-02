const errorHandler=(error,req,res,next)=>{

    error.message=error.message||"Internal Server Error"
    error.statusCode=error.statusCode||500
    
    res.status(error.statusCode).send({msg:error.message})
}

module.exports=errorHandler