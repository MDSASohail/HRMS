import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'

function RespondedLeavePage({user}) {
    const leaveEnd=1;
    const username=user.username;
    
    const [allleaveRequest,setAllLeave]=useState([{}]);
    useEffect(()=>{
              const getdata=async()=>{
                  const data= await Axios.get(`https://hrms-node.vercel.app/leave/findByUserName/${username}`)
                  setAllLeave(data.data);
                  console.log("ALl data is ",data.data)
              }

          console.log("In useEffect")
              getdata();



    },[user])
  return (
    <div>
        <h1 className='heading text-center p-4 bg-blue-400 text-white'>Leave Response</h1>
        <div className=' flex flex-wrap justify-center bg-blue-400 box-border '>
        {
            allleaveRequest.map((item)=>{
                  return(
                    <>
                        <div className='w-96 border-2 m-3 p-3'>
                   <div className='w-full border-2 mb-2 rounded-sm flex justify-between px-4' >
                       <strong>Username</strong> <span>{item.userName}</span>
                   </div>
                   <div className='w-full border-2 mb-2 rounded-sm flex justify-between px-4' >
                       <strong>Leave Start Date</strong> <span>{item.leaveStart}</span>
                   </div>
                   <div className='w-full border-2 mb-2 rounded-sm flex justify-between px-4' >
                       <strong>Leave End Date</strong> <span>{item.leaveEnd}</span>
                   </div>
                   <div className='w-full border-2 mb-2 rounded-sm flex justify-between px-4' >
                       <strong>Leave Reason</strong> <span>{item.leaveReason}</span>
                   </div>
                   <div className='w-full border-2 rounded-sm flex justify-between px-4'  style={{backgroundColor:item.response=='Approved'?"green":item.response=="pending"?"yellow":"red"}} >
                       <strong>Leave Response</strong> <span >{item.response}</span>
                   </div>
                  </div>
                    </>
                  )
            })
        }
            
               
               
          </div>
    </div>
  )
}

export default RespondedLeavePage
