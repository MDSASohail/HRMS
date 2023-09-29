import React from "react";
import {useLocation} from 'react-router-dom'
function EmployForm() {
  const logation=useLocation();
  const data=logation.pathname.split('/')[3]
  console.log(data)
  return (
    <>
      <div>
        <h1 className="heading bg-blue-600 text-white text-center p-2 ">
          Employ Detail
        </h1>
        <div>
          <form action="https://hrms-node.vercel.app/uDetail/add" method="post">
            <div className="flex" id="EmployFormDetail">
              <div id="personalDetail" className="flex-1 p-2">
                <h1 className=" bg-blue-600 text-white  p-2 text-2xl">Personal Detail</h1>
                <div className="EmployDetailDiv">
                  <label htmlFor="fname"> <strong className="text-xl">First Name</strong></label>
                  <input placeholder="First name" type="text" id="fname" name="firstName" />
                </div>
                <div className="EmployDetailDiv">
                  <label htmlFor="mname"> <strong className="text-xl">Middle Name</strong> </label>
                  <input type="text" placeholder="Middle name"id="mname" name="middleName" />
                </div>
                <div className="EmployDetailDiv">
                  <label htmlFor="lname">  <strong className="text-xl">Last Name</strong> </label>
                  <input type="text" id="lname" placeholder="Last name" name="lastName" />
                </div>
                <div className="EmployDetailDiv">
                  <label htmlFor="mname"> <strong className="text-xl">User Name</strong> </label>
                  <input type="text" value={data} name="userName" />
                </div>
                
                <div  className="EmployDetailDiv">
                    <label htmlFor="gen"> <strong className="text-xl">Gender</strong> </label>
                      <label htmlFor="male">Male</label> <input type="radio" name="gender" value="Male" id="male"/>
                      <label htmlFor="female">Female</label> <input type="radio" name="gender" value="Female" id="female" />
                </div>
                <div  className="EmployDetailDiv">
                  <label htmlFor="address"> <strong className="text-xl">Address</strong> </label>
                  <textarea
                    name="address"
                    id="address"
                    cols="30"
                    rows="5"
                    placeholder="Address"
                    className="border-2  px-2"
                  ></textarea>
                </div>
              </div>
              <div id="contactInfo"  className="flex-1 p-2">
              <h1 className=" bg-blue-600 text-white  p-2 text-2xl">Contact Information</h1>
                  <div  className="EmployDetailDiv">
                     <label htmlFor="mobile"> <strong className="text-xl">Mobile No</strong> </label>
                     <input type="number" name="mobile" placeholder="Mobile No" id="mobile" />
                  </div>
                  <div  className="EmployDetailDiv">
                     <label htmlFor="email"> <strong className="text-xl">Email Address</strong> </label>
                     <input type="email" placeholder="Email" id="email" name="emailId" />
                  </div>
                  <div  className="EmployDetailDiv">
                     <label htmlFor="mobile2"> <strong className="text-xl">Home Mobile No</strong> </label>
                     <input type="number" name="mobileHome" id="mobile2" placeholder="Mobile no" />
                  </div>
                  <div id="EmployFormStatus">
                    <h1 className=" bg-blue-600 text-white text-2xl  p-2">Employe Status</h1>
                    <div  className="EmployDetailDiv">
                        <label htmlFor="status"> <strong className="text-xl">Status</strong> </label>
                        <select name="" id="status">
                            <option value="active">Active</option>
                            <option value="notactive">Not Active</option>
                        </select>
                    </div>
                    <div  className="EmployDetailDiv">
                        <label htmlFor="supervisor"> <strong className="text-xl">Supervisor</strong> </label>
                        <input type="text" name="supervisor" placeholder="Supervisor" />
                    </div>
                    <div  className="EmployDetailDiv">
                        <label htmlFor="hiredDate"> <strong className="text-xl">Hired Date</strong> </label>
                        <span>Today Date</span>
                    </div>
                    <div  className="EmployDetailDiv">
                        <label htmlFor="department"> <strong className="text-xl">Department</strong> </label>
                        <select name="department" id="department">
                            <option value="Development">Development</option>
                            <option value="HRMS">HRMS</option>
                            <option value="Security">Security Management</option>
                        </select>
                    </div>
                    <div  className="EmployDetailDiv">
                     <label htmlFor="salary"> <strong className="text-xl">Salary</strong> </label>
                     <input type="number" name="salary" id="salary" placeholder="Salary" />
                   </div>
                  </div>

              </div>
            </div>
            <div className="border-2 text-center">
                <input type="submit" value="Submit" className="py-2 px-8 bg-blue-300 text-2xl font-bole cursor-pointer hover:bg-blue-500 transition-colors rounded-md" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EmployForm;
