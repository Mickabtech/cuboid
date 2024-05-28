
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profilepage/Profile';
import Dashboardlayouts from './components/Dashboardfile/Dashboardlayouts';
import Cardcontent from './components/Cardcontentfile/Cardcontent';
import Chat from './components/Chatpage/Chat';
import Settings from './components/Settingpage/Settings';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboardlayouts/>}>
          <Route index element={<Cardcontent />} />
          <Route path="profile" element={<Profile/>} />
          <Route path="chat" element={<Chat/>} />
          <Route path="settings" element={<Settings/>} />
        </Route>  
      </Routes>
    </Router>
  )
}

export default App;








