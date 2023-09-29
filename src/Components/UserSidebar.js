
import {Link} from 'react-router-dom'
import { useState } from 'react';
function UserSidebar({setUser,user}) {

   const [show,setShow]=useState(false);
   const username=user.username;
  return (
    <>
         <div className='w-full z-10 h-28 sticky top-0 bg-blue-500 text-white flex justify-center items-center'>
          <h1 className='heading text-center'>Welcome  {username}</h1>
          <h1 onClick={()=>{setUser({_id:null})}} className='absolute top-2 cursor-pointer right-4'>Logout</h1>
       </div>
        <span className=' text-white fixed top-16 px-3 py-2 z-20 cursor-pointer hover:bg-blue-600 transition-colors rounded-md ' onClick={()=>{setShow(!show)}} id='show'>{show?"Show":"Hide"}</span>
        <div id='navbar' className={show?'bg-blue-500 z-20 transition-transform text-xl h-screen navWidth fixed   pra text-white -translate-x-full top-28 ':"bg-blue-500 z-20 text-xl h-screen navWidth fixed translate-x-0 transition-transform   pra text-white top-28  "}>
          
          <div className=' flex flex-col'>
          <Link to={`/home/userdata/${username}`} className='hover:bg-blue-600 transition-colors'>
          <button onClick={()=>{setShow(!show)}} className=' px-4 py-2 rounded-md  mt-2  '>User Detail</button>
          </Link>
          <Link to={'/home/leaveResponse' } className='hover:bg-blue-600 transition-colors'>
          <button onClick={()=>{setShow(!show)}} className=' px-4 py-2 rounded-md mt-2 '>Leave Response</button>
          </Link >
          <Link to={'home/leaveRequest'} className='hover:bg-blue-600 transition-colors'>
          <button onClick={()=>{setShow(!show)}} className='  px-4 py-2 rounded-md mt-2 '>Leave Request</button>
          </Link>
          <Link to={'/home/member'} className='hover:bg-blue-600 transition-colors'>
          <button onClick={()=>{setShow(!show)}} className='  px-4 py-2 rounded-md mt-2 '>Members</button>
          </Link>
          </div>
          
       </div>
        
    </>
  )
}

export default UserSidebar
