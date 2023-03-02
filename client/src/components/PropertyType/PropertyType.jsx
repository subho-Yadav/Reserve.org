import React from 'react'
import './propertyType.css'
const PropertyType = () => {
  return (
    <div className='propertyType'>
      <h2>Browse By Property Type</h2>
      <div className="propertyTypesList">
        <div className="propertyTypeItem">
          <img src="https://media.istockphoto.com/id/527220496/photo/india-gate.jpg?s=1024x1024&w=is&k=20&c=REuoNdh4HW1i92IVoSkAClD99ZWk9NsFCQMFyS19gAY=" alt="property1" 
          className='pti'
          />
          <h3>Villas</h3>
        </div>
        <div className="propertyTypeItem">
        <img src="https://media.istockphoto.com/id/527220496/photo/india-gate.jpg?s=1024x1024&w=is&k=20&c=REuoNdh4HW1i92IVoSkAClD99ZWk9NsFCQMFyS19gAY=" alt="property1"
         className='pti'
        />
        <h3>Hotels</h3>
        </div>

        <div className="propertyTypeItem">
        <img src="https://media.istockphoto.com/id/527220496/photo/india-gate.jpg?s=1024x1024&w=is&k=20&c=REuoNdh4HW1i92IVoSkAClD99ZWk9NsFCQMFyS19gAY=" alt="property1" 
         className='pti'
        />
        <h3>Resorts</h3>
        </div>
        <div className="propertyTypeItem">
        <img src="https://media.istockphoto.com/id/527220496/photo/india-gate.jpg?s=1024x1024&w=is&k=20&c=REuoNdh4HW1i92IVoSkAClD99ZWk9NsFCQMFyS19gAY=" alt="property1" 
         className='pti'
        />
        <h3>Guest Houses</h3>
        </div>
      </div>
    </div>
  )
}

export default PropertyType
