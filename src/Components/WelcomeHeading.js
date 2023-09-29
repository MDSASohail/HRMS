import React from 'react'
import Sidebar from './Sidebar'

function WelcomeHeading({setUser}) {
  return (
    <>
       <div className='w-full z-10 h-28 sticky top-0 bg-blue-500 text-white flex justify-center items-center'>
          <h1 className='heading text-center'>Welcome to Human Resource Management System</h1>
          <h1 onClick={()=>{setUser({_id:null})}} className='absolute top-2 cursor-pointer right-4'>Logout</h1>
       </div>
       
    </>
  )
}

export default WelcomeHeading
