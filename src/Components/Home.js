import React from 'react'
import WelcomeHeading from './WelcomeHeading'
import Sidebar from './Sidebar'
import SpecificUserDetail from './SpecificUserDetail'
import {Route,Routes} from 'react-router-dom'
import RegistrationPage from './Registration'
import AllUsers from './AllUsersDetail'
import EmployForm from './EmployForm'
import UserAddedSucess from './UserAddedSucess'
import AllRequst from './AllRequst'
import MemberPage from './Rough/MemberPage2'
function Home({setUser}) {
  return (
    <>
       <WelcomeHeading setUser={setUser}/>
        
        <div className=' '>
        <Sidebar />
        <div id='routes' className=' relative ml-44 '>
            <Routes>
                <Route path='home/single/:id' element={<SpecificUserDetail/>}/>
                <Route path='/home/register' element={<RegistrationPage/>}/>
                <Route path='/home/allaccounts' element={<AllUsers/>}/>
                <Route path='/home/fillEDetail/:id' element={<EmployForm/>}/>
                <Route path='/home/success/:msg' element={<UserAddedSucess/>}/>
                <Route path='/home/allleaveRequest' element={<AllRequst/>}/>
                <Route path='/home/member/*' element={<MemberPage/>}/>
            </Routes>
        </div>
        </div>

        
         
       
    </>
  )
}

export default Home
