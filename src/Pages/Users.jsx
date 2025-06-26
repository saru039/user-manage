import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteUsers } from '../Slices/userSlice';
import './Users.css'

const Users = () => {

  const dispatch = useDispatch();

  const delUser = (index) =>{
    dispatch(deleteUsers(index))
  }

  const users = useSelector((state) => state.usersInfo.users);

  console.log(users);

  return (
    <div className='table-container'>
      <table>
        <thead>
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile number</th>
          <th>Message</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {users?.map((user,index)=>{
            return(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.message}</td>
                <td><button onClick={()=> delUser(index)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Users