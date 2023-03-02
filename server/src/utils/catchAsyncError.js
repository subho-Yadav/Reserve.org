const ErrorHandler=require('./ErrorHandler')

const catchAsyncErrors=(func)=>(req,res,next)=>{
    Promise.resolve(func(req,res,next)).catch(next)
    
}

module.exports=catchAsyncErrors