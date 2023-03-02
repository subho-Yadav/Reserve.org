import React from 'react'
import "./adminsidebar.css"

const AdminSidebar = () => {
  return (
    <div className='admin-sidebar'>
      <div className="action-category">
        <div className="category">
          user actions
        </div>
        <div className="actions">
          <ul>
            <li>View all users</li>
            <li>Add a new user</li>
            <li>Delete a user</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar
