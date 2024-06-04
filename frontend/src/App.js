import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard.js';
import Profile from './components/Profile/EditProfile'
import UserProfile from './components/Profile/Profile.js'
import PrivateRoute from './components/authcomponent/PrivateRoute.js';

const App = () => {
  const [user, setUser] = useState({})

  return (
    <Routes>
        {/* PUBLIC ROUTE */}
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path="/login" element={<Login setUser={setUser} />}/>
    

      {/* PRIVATE ROUTE */}

      <Route element={<PrivateRoute/>}> 

        <Route path ="/dashboard" element={<Dashboard user={user} />}/>
        <Route path ="/user/profile" element={<Profile />}/>
        <Route path ="/user/userprofile" element={<UserProfile user={user}/>}/>
      
      </Route>


      
    </Routes>
  )
}

export default App