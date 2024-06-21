import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
    const profileState:any = useSelector(state=>{
        return state;
    })
    // console.log(profileState)
  return (
    <div>Bài 1
        <h2>Thông tin cá nhân</h2>
        <div>Id: {profileState.profileReducer.id}</div>
        <div>UserName: {profileState.profileReducer.userName}</div>
        <div>Gender: {profileState.profileReducer.gender}</div>
        <div>DateBirth: {profileState.profileReducer.dateBirth}</div>
        <div>Address: {profileState.profileReducer.address}</div>
    </div>
  )
}
