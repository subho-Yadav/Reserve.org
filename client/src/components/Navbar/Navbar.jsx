import React from 'react'
import "./navbar.css"

import FormModal from '../FormModal/FormModal'

const Navbar = ({loggedIn}) => {

  return (
   <>
    <div className='navbar'>

      <FormModal></FormModal>
      
      <div className="container">
          <span className="logo"><h2>Reserve.org</h2></span>
          <div className="nav-items">
              <button className={(loggedIn)?"loggedInMode":"nav-btn"}
              data-bs-toggle="modal" data-bs-target="#register-form"
              >Register</button>
              <button className={(loggedIn)?"loggedInMode":"nav-btn"}
               data-bs-toggle="modal" data-bs-target="#login-form"
              >Login</button>
             
          </div>
         {
           loggedIn&& <div className="admin-avatar">
              <button className='admin-logout'>Log Out</button>          
          </div>
         }
      </div>
     
  </div>
 
   </>
  )
}

export default Navbar
