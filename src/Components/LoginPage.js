import  Axios  from 'axios';
import React, { useState } from 'react'
import  {Link} from 'react-router-dom'
function LoginPage({setUser}) {

    const [username,setUsername]=useState(null);
    const [password,setPassword]=useState(null);

    const clickHangle=async()=>{
          const user= await Axios.post('https://hrms-node.vercel.app/account/login',{username:username,password:password});
          console.log(user.data);
          setUser(user.data)
    }
  return (
    <>
        <div className='bg-sky-100 w-full h-screen '>
            <h1 className='heading pt-5 text-center'>Human Resource Management System</h1>
            <form >
            
            <div className=' p-4 formDiv formDivCenter '>
                
                <div className=' w-full '>
                    <input type="text" className='text-2xl w-full outline-none inputBorder p-2 rounded-md bg-transparent' placeholder='Enter username' name='username' required onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
                <div className='mt-4'>
                    <input type="password" className='text-2xl outline-none inputBorder w-full  p-2 rounded-md bg-transparent' required name="password" id="" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter password' />
                </div>
                <div className='mt-4'>
                    <input  className='text-2xl inputBorder  bg-blue-200 p-2 cursor-pointer rounded-lg transition-colors hover:bg-blue-400' onClick={()=>{clickHangle()}} type="button" value="Submit" />
                </div>
                
            </div>
            </form>
        </div>

    </>
  )
}

export default LoginPage
