import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <p >
        Admin

        <div className="list-group sidebar">
            <li className="list-group-item">Users</li>
            <li className="list-group-item active">Add hotel</li>
            <li className="list-group-item">Bookings</li>
        </div>
      </p>
    </div>
  )
}

export default Sidebar
