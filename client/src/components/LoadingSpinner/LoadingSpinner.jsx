import React from 'react'
import "./loading.css"
export default function LoadingSpinner() {
  return (
    <div className='spinner-container'>
      <div className="spinners">
      <div className="spinner-grow text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

<div className="spinner-grow text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

<div className="spinner-grow text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

<div className="spinner-grow text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

<div className="spinner-grow text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

      </div>
    </div>
  )
}
