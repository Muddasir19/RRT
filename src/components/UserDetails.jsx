//rafce
import React from 'react'
import DeleteAllUser from './DeleteAllUser';

const UserDetails = () => {
  return (
    <>
        <div className="content">
            <div className="admin-table">
                <div className="admin subtitle">
                    List of User Detail
                </div>
                <button>Add New Users</button>
            </div>
            <ul>
                <li>hi</li>
                <li>hiii</li>
            </ul>
            <hr />
            <DeleteAllUser/>
        </div>
      
    </>
  )
}

export default UserDetails;

