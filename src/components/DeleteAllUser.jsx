import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../store/slices/UserSlice';

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(deleteUser())
  }
  return (
    <>
    <div>Delete All Users</div>
    <button onClick={()=> deleteAll()} >Delete All Users</button>
      
    </>
  )
}

export default DeleteAllUser
