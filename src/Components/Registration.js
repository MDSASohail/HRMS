import React from 'react'
import  {Link} from 'react-router-dom'
function RegistrationPage() {
  return (
    <>
        <div className='bg-sky-100 w-full h-screen '>
            <h1 className='heading pt-5 text-center'>Add User</h1>
            <form action="https://hrms-node.vercel.app/account/add" method='post'>
            
            <div className=' p-4 formDiv formDivCenter '>

               
                
                <div className=' w-full mt-4'>
                    <input type="text" name='username' className='text-2xl w-full outline-none inputBorder p-2 rounded-md bg-transparent' placeholder='Enter username' required />
                </div>
                <div className='mt-4'>
                    <input type="password" name="password" className='text-2xl outline-none inputBorder w-full  p-2 rounded-md bg-transparent' required  placeholder='Enter password' />
                </div>
                <div className='mt-4'>
                    <input className='text-2xl inputBorder bg-blue-200 p-2 cursor-pointer rounded-lg transition-colors hover:bg-blue-400' type="submit" value="Submit" />
                </div>
                
            </div>
            </form>
        </div>

    </>
  )
}

export default RegistrationPage
