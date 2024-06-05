import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard.js';
import Profile from './components/Profile/EditProfile';
import UserProfile from './components/Profile/Profile.js';
import PrivateRoute from './components/authcomponent/PrivateRoute.js';

const App = () => {
 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});


  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <Routes>
      {/* PUBLIC ROUTE */}
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Signup />} />
      <Route path="/login" element={<Login setUser={setUser} />} />

      {/* PRIVATE ROUTE */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/user/profile" element={<Profile user={user} />} />
        <Route path="/user/userprofile" element={<UserProfile user={user} />} />
      </Route>
    </Routes>
  );
};

export default App;
