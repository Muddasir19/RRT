//rafce
import React from 'react'
import DeleteAllUser from './DeleteAllUser';
import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers';

const UserDetails = () => {

    const dispatch = useDispatch();

    const addNewUser = (payload) => {
        dispatch(addUser(payload));
    };

  return (
    <>
        <div className="content">
            <div className="admin-table">
                <div className="admin subtitle">
                    List of User Detail
                </div>
                <button onClick={ ()=> addNewUser(fakeUserData()) } >Add New Users</button>
            </div>
            <ul>
                <DisplayUsers/>
            </ul>
            <hr />
            <DeleteAllUser/>
        </div>
      
    </>
  )
}

export default UserDetails;

