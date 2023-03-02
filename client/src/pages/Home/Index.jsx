import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import "./home.css"
import Featured from '../../components/Featured/Featured'
import PropertyType from '../../components/PropertyType/PropertyType'

import {useParams} from 'react-router-dom'
const Home = () => {
  const status=useParams()
  console.log('path param to home component',status)
  return (
    <div className='parentHomeContainer'>
<Navbar></Navbar>
<Header></Header>
<div className="homeContainer">

  {/* yaha par sari list vertical aayegi to is container ka flex direction coloumn hoga 
  Ye container humari sari list ko hold karega */}
  <Featured></Featured>
  <PropertyType></PropertyType>
  {/* <Featured></Featured> */}
  {/* <Featured></Featured> */}
</div>
    </div>
  )
}

export default Home
