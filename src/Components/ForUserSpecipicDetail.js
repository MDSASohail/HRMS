import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function ForUserSpecificDetail() {
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
                    
                   }catch(err){
                      setUserdetail("Fail to load the data");
                      console.log("Eror is ",err)
                   }
        }
        data();
    },[])


    
  return (
    <div>
        <div><h1 className="heading bg-blue-600 text-white text-center p-2 ">
          User Detail
        </h1>
        <div className='mt-4 text-2xl text-end mr-2'>
           
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
            </div></div>
            
         
    </div>

    
  )
}

export default ForUserSpecificDetail
