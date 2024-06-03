import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard.js';
import Profile from './components/Profile/EditProfile'
import PrivateRoute from './components/authcomponent/PrivateRoute.js';

const App = () => {
  return (
    <Routes>
        {/* PUBLIC ROUTE */}
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    

      {/* PRIVATE ROUTE */}

      <Route element={<PrivateRoute/>}> 

        <Route path ="/dashboard" element={<Dashboard/>}/>
        <Route path ="/user/profile" element={<Profile/>}/>
      
      </Route>


      
    </Routes>
  )
}

export default App