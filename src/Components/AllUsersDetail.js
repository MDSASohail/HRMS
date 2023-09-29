import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
function AllUsers() {
    const [allusers,setAllusers]=useState([{username:"Sohail"}]);
    // const allusers=["Sohail","Gufran","Imamuddin","Ekhalh","Adnan"]
    useEffect(()=>{
        const getdata=async()=>{
          const alldata=await Axios.get('https://hrms-node.vercel.app/account/allusers');
          const data=alldata.data;
             setAllusers(data);
            console.log("data is",data)
        }

        getdata();
    },[])

   
  return (
    <>
       <div className=''>
          <h1 className='heading text-center text-2xl font-bold mt-4 bg-blue-600 text-white p-3'>List Of All Users</h1>
          <ul className='mt-10'>

          {
            allusers.map(item=>{
              console.log("Each item is",item.username);
              const data=JSON.stringify(item);
                return(
                  <>
                     <Link  to={`http://localhost:3000/home/single/${item.username}`}>
                     <li  className='border-2 text-xl p-2 bg-blue-100 mt-1 cursor-pointer hover:bg-blue-400 transition-colors'> {item.username} </li>
                     </Link>
                    </>
                )
              })
            }
            </ul>
       </div>
    </>
  )
}

export default AllUsers
