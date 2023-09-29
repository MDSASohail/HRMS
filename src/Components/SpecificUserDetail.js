import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function SpecificUserDetail() {
    const [userDetail,setUserdetail]=useState({firstName:"",});
    const fullurl=useLocation();
    const [showDetail,setShowDetail]=useState(true);
    const [responce,setResponse]=useState(false);
    const [confirm,setConfirm]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{

        
        const data=async()=>{
                    const query=fullurl.pathname.split('/')[3];
                    console.log("Query is  ",query);
                   try{
                    const getData=await  Axios.get(`https://hrms-node.vercel.app/uDetail/userDetail/?userName=${query}`);
                            const data=getData.data;
                    setUserdetail(data);
                    console.log("Data is ",data)
                    if(data.result==false)
                    {
                       navigate(`/home/fillEDetail/${query}`)
                    }
                    console.log("All data is ",getData)
                   }catch(err){
                      setUserdetail("Fail to load the data");
                      console.log("Eror is ",err)
                   }
        }
        data();
    },[])


    const deleteAccount=async(id,username)=>{
                 try{
                  const de= await Axios.delete(`https://hrms-node.vercel.app/uDetail/delete/${id}`);
                   const userAccount= await Axios.delete(`https://hrms-node.vercel.app/account/delete/${username}`)
                  setShowDetail(false);
                  setResponse(true);
                  setConfirm(false);
                 }catch(err){
                       console.log("Error in deleting");
                 }
    }
  return (
    <div>
        {showDetail &&<div><h1 className="heading bg-blue-600 text-white text-center p-2 ">
          User Detail
        </h1>
        <div className='mt-4 text-2xl text-end mr-2'>
           <button className=' m-1 p-2 text-white bg-blue-300 hover:bg-blue-500 transition-colors rounded-md' onClick={()=>{setConfirm(true)}}>Delete Account</button>
            </div>
        
            <div className="flex" id="EmployFormDetail">
              <div id="personalDetail" className="flex-1 p-2">
                <h1 className=" bg-blue-600 text-white  p-2 text-2xl">Personal Detail</h1>
                <div className="EmployDetailDiv">
                   <strong className="text-xl">Full Name</strong>
                  <span className='text-2xl'>{userDetail.firstName} {userDetail.middleName} {userDetail.lastName}</span>
                </div>
                
                
                <div  className="EmployDetailDiv">
                     <strong className="text-xl">Gender</strong> 
                     <span className='text-2xl'>{userDetail.gender}</span>
                </div>
                <div  className="EmployDetailDiv">
                     <strong className="text-xl">Salary</strong> 
                     <span className='text-2xl'>{userDetail.salary}</span>
                </div>
                <div  className="EmployDetailDiv">
                   <strong className="text-xl">Address</strong> 
                   <span className='text-2xl'>{userDetail.address}</span>
                </div>
              </div>
              <div id="contactInfo"  className="flex-1 p-2">
              <h1 className=" bg-blue-600 text-white  p-2 text-2xl">Contact Information</h1>
                  <div  className="EmployDetailDiv">
                      <strong className="text-xl">Mobile No</strong> 
                     <span className='text-2xl'>{userDetail.mobile}</span>
                  </div>
                  <div  className="EmployDetailDiv">
                      <strong className="text-xl">Email Address</strong> 
                      <span className='text-2xl'>{userDetail.emailId}</span>
                  </div>
                  <div  className="EmployDetailDiv">
                      <strong className="text-xl">Home Mobile No</strong>
                      <span className='text-2xl'>{userDetail.mobileHome}</span>
                  </div>
                  <div id="EmployFormStatus">
                    <h1 className=" bg-blue-600 text-white text-2xl  p-2">Employe Status</h1>
                    <div  className="EmployDetailDiv">
                         <strong className="text-xl">Status</strong> 
                         <span className='text-2xl'>Active</span>
                    </div>
                    <div  className="EmployDetailDiv">
                         <strong className="text-xl">Supervisor</strong> 
                         <span className='text-2xl'>{userDetail.supervisor}</span>
                    </div>
                    <div  className="EmployDetailDiv">
                         <strong className="text-xl">Hired Date</strong> 
                         <span className='text-2xl'>{userDetail.hiredDate}</span>
                    </div>
                    <div  className="EmployDetailDiv">
                         <strong className="text-xl">Department</strong>
                         <span className='text-2xl'> {userDetail.department}</span>
                    </div>
                  </div>

              </div>
            </div></div>}
            
         {responce && <div id="showResponseOnDom" className='bg-blue-400 text-center  p-4 rounded-md text-white absolute top-1/2   left-1/2 text-2xl max-w-xl -translate-x-1/2 -translate-y-1/2 '>
              <h1>Data Deleted Successfylly</h1>
         </div>}
         {confirm && <div id="Confermation" className='bg-blue-400 text-center  p-4 rounded-md text-white absolute top-1/2   left-1/2 text-2xl max-w-xl -translate-x-1/2 -translate-y-1/2 '>
              <p>Are you sure, you want to delete?</p>
              <div>
                <button className=' px-3 py-2 rounded-md hover:bg-blue-500 transition-colors m-2' onClick={()=>{deleteAccount(userDetail._id,userDetail.userName)}}>Yes</button>
                <button className=' px-3 py-2 rounded-md hover:bg-blue-500 transition-colors m-2' onClick={()=>{setConfirm(false)}}>No</button>
              </div>

         </div>}
    </div>

    
  )
}

export default SpecificUserDetail
