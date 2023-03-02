import React from 'react'
import {useParams} from 'react-router-dom'

const Index = () => {
    const {hotelId}=useParams()
    /*Returns object containing path params in the form of key-value pairs */
    
  return (
    <div>
      <h2>Hotel with id:{hotelId}</h2>
    </div>
  )
}

export default Index
