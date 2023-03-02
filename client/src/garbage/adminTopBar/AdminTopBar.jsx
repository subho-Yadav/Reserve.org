import React from 'react'
import "./admintopbar.css"

const AdminTopBar = () => {
  return (
    
        <div className="topbar">
           <div className="topbar-left">
            <div className="admin-logo">
              
            
           Reserve.org
           </div>
            </div> 

            <div className="topbar-right">
              <div className="topbar-icons">
                <button className='admin-logout-btn'>Log out</button>
                <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png" alt=""  className='avatar-img'/>
              </div>
            </div>
        </div>
    
  )
}

export default AdminTopBar
