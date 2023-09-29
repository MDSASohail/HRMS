import React from 'react'
import UserSidebar from './UserSidebar'
import { Route, Routes } from 'react-router-dom'
import LeaveRequestPage from './LeaveRequestPage'
import RespondedLeavePage from './RespondedLeavePage'
import ForUserSpecificDetail from './ForUserSpecipicDetail'
import UserAddedSucess from './UserAddedSucess'
import MemberPage from './Rough/MemberPage2'
function UserHome({setUser,user}) {
  return (
    <div>
      <UserSidebar setUser={setUser} user={user}/>
      <div id='routes' className=' relative ml-44 '>
      <Routes>
        <Route path='/home/leaveRequest' element={<LeaveRequestPage user={user}/>}/>
        <Route path='/home/leaveResponse'element={<RespondedLeavePage user={user}/>}/>
        <Route path='/home/userdata/:username' element={<ForUserSpecificDetail  />}/>
        <Route path='/home/success/:msg' element={<UserAddedSucess/>}/>
        <Route path='/home/member/*' element={<MemberPage/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default UserHome
