
import {Link} from 'react-router-dom'
import { useState } from 'react';
function Sidebar() {

   const [show,setShow]=useState(false);
  return (
    <>
        <span className=' text-white fixed top-16 px-3 py-2 z-20 cursor-pointer hover:bg-blue-600 transition-colors rounded-md ' onClick={()=>{setShow(!show)}} id='show'>{show?"Show":"Hide"}</span>
        <div id='navbar' className={show?'bg-blue-500 z-20 transition-transform text-xl h-screen navWidth fixed   pra text-white -translate-x-full top-28 ':"bg-blue-500 z-20 text-xl h-screen navWidth fixed translate-x-0 transition-transform   pra text-white top-28  "}>
          
          <div className=' flex flex-col'>
          <Link to={'/home/register'} className='hover:bg-blue-600 transition-colors'>
          <button onClick={()=>{setShow(!show)}} className=' px-4 py-2 rounded-md  mt-2  '>Add User</button>
          </Link>
          <Link to={'/home/allaccounts' } className='hover:bg-blue-600 transition-colors'>
          <button onClick={()=>{setShow(!show)}} className=' px-4 py-2 rounded-md mt-2 '>All Users</button>
          </Link >
          <Link to={'/home/allleaveRequest'} className='hover:bg-blue-600 transition-colors'>
          <button onClick={()=>{setShow(!show)}} className='  px-4 py-2 rounded-md mt-2 '>Leave Requested</button>
          </Link>
          <Link to={'/home/member'} className='hover:bg-blue-600 transition-colors'>
          <button onClick={()=>{setShow(!show)}} className='  px-4 py-2 rounded-md mt-2 '>Members</button>
          </Link>
          </div>
          
       </div>
        
    </>
  )
}

export default Sidebar
