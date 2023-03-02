import React from 'react'
import "./hotelscard.css"

const HotelsCard = ({hotel}) => {

  let {name,description,image,rating,price}=hotel
    console.log("Props",hotel)
  return (
    <div style={{marginTop:"20px"}} > 
      <div className="card shadow shadow-sm hotel-card-container" style={{width: "18rem"}}>
  <img src={image} className="card-img-top himg" alt="hotel"/>
  <div className="card-body cbody">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
   <strong> Price: Rs: {price}/-</strong>
   
   <div className="rating-show-more">
    <p style={{borderRadius:"2px",padding:"2px 2px"}} className='bg-warning'>{rating}</p>
    <h6 className='btn btn-success'>More...</h6>
   </div>
    
  </div>
</div>
    </div>
  )
}

export default HotelsCard
