// import MemberPage from './Components/MemberPage';
// import MemberPage from './Components/Rough/MemberPage2';
import LoginPage from './Components/LoginPage';
import RegistrationPage from './Components/Registration';
import Allusers from './Components/AllUsersDetail'
import EmployForm from './Components/EmployForm';
import  {Link,Route,Routes, useNavigate} from 'react-router-dom'
import './App.css';
import SpecificUserDetail from './Components/SpecificUserDetail';
import { useEffect, useState } from 'react';

import Home from './Components/Home';
import LeaveRequestPage from './Components/LeaveRequestPage';
import AllRequst from './Components/AllRequst';
import RespondedLeavePage from './Components/RespondedLeavePage';
import UserHome from './Components/UserHome';
function App() {

         
         const [user,setUser]=useState({_id:null});
         console.log(user)
          
  return (
    <>
       <div>
          {user._id?user.isAdmin==true?<Home setUser={setUser}/>:<UserHome setUser={setUser} user={user}/>:<LoginPage setUser={setUser}/>}
          
          
       </div>
    </>
  );
}

export default App;
