import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/EditProfile'

const App = () => {
  return (
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path ="/dashboard" element={<Dashboard/>}/>
      <Route path ="/user/profile" element={<Profile/>}/>
      
    </Routes>
  )
}

export default App