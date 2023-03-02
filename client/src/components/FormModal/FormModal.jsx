import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import {useState} from 'react'

const FormModal = () => {

  const [registrationData,setRegistrationData]=useState({
    name:'Subho Yadav',
    email:'subhoyadav16@gmail.com',
    mobile:'900754685',
    password:'sioyt',
  })

  const [loginData,setLoginData]=useState({
    email:'subhoyadav16@gmail.com',
    password:'sioyt'
  })

  const navigate=useNavigate()

  const handleRegistration=async (event)=>{
    try{
      event.preventDefault()
    console.log(registrationData)
    const response=await axios.post('http://localhost:8080/user/create',registrationData)
    // console.log(response)
    // const but=document.getElementsByClassName('btn-close')
    // console.log(but)

    // according to react router docs we should use redirect in actios and loaders whereas useNavigate in components
    setRegistrationData({name:'',email:'',mobile:'',password:''})
    // navigate('/')
    }catch(err){
      console.log(err)
    }
  }


  const handleLogin=async(event)=>{
    try{
      event.preventDefault()
    console.log(loginData)
    const response=await axios.post('http://localhost:8080/user/login',loginData)

    console.log(response)
    }catch(error){
      if(error.response){
        console.log(error.response.data)
        navigate('/:true')
      }
      else
      console.log(error)
    }
  }

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

{/* <!-- Modal --> */}
<div className="modal fade" id="register-form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Registration</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       


    {/* Registration form here */}


    <form onSubmit={handleRegistration}>
  <div className="mb-3">

  <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp"
    value={registrationData.name} onChange={(event)=>setRegistrationData({...registrationData,name:event.target.value})}
    />

   
  </div>

  <div className="mb-3">

  
    <label for="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
     value={registrationData.email} onChange={(event)=>setRegistrationData({...registrationData,email:event.target.value})}
    />
    
  </div>

  <div className="mb-3">

  
    <label for="mobile" className="form-label">Mobile</label>
    <input type="number" className="form-control" id="mobile" aria-describedby="emailHelp"
     value={registrationData.mobile} onChange={(event)=>setRegistrationData({...registrationData,mobile:event.target.value})}
    />
    
  </div>
  
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
     value={registrationData.password} onChange={(event)=>setRegistrationData({...registrationData,password:event.target.value})}
    />
  </div>
 
  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Register</button>
  <button className='btn btn-secondary mx-2' type='reset'
  onClick={()=>setRegistrationData({name:'',email:'',mobile:'',password:''})}
  >Reset</button>
</form>




      </div>
      
    </div>
  </div>
</div>

<div className="modal fade" id="login-form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        

    {/* Login form */}
    <form onSubmit={handleLogin}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     value={loginData.email} onChange={(event)=>setLoginData({...loginData,email:event.target.value})}
    />
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"
    
    value={loginData.password} onChange={(event)=>setLoginData({...loginData,password:event.target.value})}
    />
    
  </div>
  
  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" >Login</button>
</form>
    {/* Login form ends here */}





      </div>
      
    </div>
  </div>
</div>

    </div>
  )
}

export default FormModal
