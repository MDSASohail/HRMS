import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'

function AllRequst() {

    const [AllRequst,setAllrequest]=useState([{userName:"Sohial",leaveEnd:"08/10",leaveStart:"28/09",leaveReason:"Attail Merrage"}]);
    const getRequest=async ()=>{
        const alldata=await Axios.get('https://hrms-node.vercel.app/leave/all')
         const data=alldata.data;
         setAllrequest(data)
         console.log(data);
}
    useEffect(()=>{
              
           getRequest();
              
    },[])

    const approved=async(id)=>{
           try{
                   const appr= await Axios.put(`https://hrms-node.vercel.app/leave/approved/${id}`);
                   getRequest();
                   


           }catch(err){
              console.log(err);
           }
    }
    const reject=async(id)=>{
        try{
                const appr= await Axios.put(`https://hrms-node.vercel.app/leave/reject/${id}`);
                getRequest();
                


        }catch(err){
           console.log(err);
        }
 }
  return (
    <>
      <div>
        <h1 className='heading text-center bg-blue-400 p-4 text-white'>All Leave Request</h1>
          <div className='border-2 flex flex-wrap justify-center bg-blue-400 text-white'>
          {
             AllRequst.map((item)=>{
                 return(
                    <div className='m-2 border-2 border-blue-600 p-2 rounded-lg'>
                        <div className='w-96 mb-2 flex justify-between border-2 p-2'><strong>Username</strong> <span>{item.userName}</span></div>
                        <div className='w-96 mb-2 flex justify-between border-2 p-2'><strong>Leave Start Date</strong> <span>{item.leaveStart}</span></div>
                        <div className='w-96 mb-2 flex justify-between border-2 p-2'><strong>Leave End Date</strong> <span>{item.leaveEnd}</span></div>
                        <div className='w-96 mb-2 flex justify-between border-2 p-2'><strong>Reason For Leave</strong> <span>{item.leaveReason}</span></div>
                        <div className='w-96 flex justify-around border-2 p-2'><button className='hover:bg-blue-800 rounded transition-colors px-3 py-2' onClick={()=>{approved(item._id)}}>Approved</button><button onClick={()=>{reject(item._id)}} className='hover:bg-blue-800 rounded transition-colors px-3 py-2'>Reject</button></div>
                    </div>
                 )
             })
          }
          </div>
      </div>
    </>
  )
}

export default AllRequst
