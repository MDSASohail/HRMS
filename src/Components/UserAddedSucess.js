import React from 'react'
import { useLocation } from 'react-router-dom'

function UserAddedSucess() {
  const fullURL=useLocation().pathname;
  const msg=fullURL.split('/')[3].replaceAll('%20',' ');
  console.log("Message is ",msg);
  return (
    <div className='text-green-400 w-full h-screen flex justify-center items-center text-2xl'>
       <h1> {msg}</h1>
    </div>
  )
}

export default UserAddedSucess
