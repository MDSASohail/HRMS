import React from 'react'

function LeaveRequestPage({user}) {
       const username=user.username;
    const handleClick=()=>{

    }
  return (
    <>
       <div>
          <h1 className='text-center py-4 heading bg-blue-500 text-white'>Apply for Leave</h1>
          
             <form action="https://hrms-node.vercel.app/leave/add" method='post'>
             <div className=' flex justify-center bg-blue-400 box-border '>
               <div className=' mt-6 rounded-md w-96 p-4'>
               <div className='leaveRequestDiv mb-2 border-gray-300 w-full p-2 rounded-md flex justify-between'>
                   <label htmlFor="username"><strong>Username</strong></label>
                  <input type="text" name='userName' value={username}className='bg-transparent'/>
               </div>
               
               <div className='leaveRequestDiv  mb-2 border-gray-300 w-full p-2 rounded-md flex justify-between'>
                  <label htmlFor="sdate"><strong>Leave Start Date</strong></label>
                  <input type="date" id='sdate' name='leaveStart' className='bg-transparent' />
               </div>
               <div className='leaveRequestDiv  mb-2 border-gray-300 w-full p-2 rounded-md flex justify-between'>
                  <label htmlFor="send"><strong>Leave Till Date</strong></label>
                  <input type="date" id='send' name='leaveEnd' className='bg-transparent' />
               </div>
               <div className='leaveRequestDiv  mb-2 border-gray-300 w-full p-2 rounded-md flex justify-between'>
                  <label htmlFor="reason"><strong>Reason</strong></label>
                  <textarea name="leaveReason"  className='bg-blue-300 text-white' id="reason" cols="30" rows="10"></textarea>
               </div>
               <div className='leaveRequestDiv hover:bg-blue-500 hover:text-white transition-colors text-2xl mb-2 border-gray-300 w-full p-2 rounded-md flex cursor-pointer justify-between'>
                  <input type="submit" value="Submit" className=' mx-auto' />
               </div>
               </div>
               
               
          </div>
             </form>
       </div>
    </>
  )
}

export default LeaveRequestPage
