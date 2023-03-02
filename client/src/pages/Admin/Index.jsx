import React from 'react'
import "./admin.css"

import Navbar from '../../components/Navbar/Navbar'

import Sidebar from '../../components/Sidebar/Sidebar'

import HotelRegistration from '../../components/HotelRegistration/index'

const Index = () => {
  return (
    <div className='admin-portal'>
    <Navbar loggedIn></Navbar>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 border border-danger">
         <Sidebar></Sidebar>
        </div>
        <div className="col-md border border-primary">
         <HotelRegistration></HotelRegistration>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Index
