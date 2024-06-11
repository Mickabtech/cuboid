import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'
import Navbar from './components/Navbar/Navbar'
import { AuthContext } from './context/AuthContext'

const App = () => {

  const { user } = useContext(AuthContext)
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={user ? <Chat/> : <Login/>}/>
        <Route path='/register' element={user ? <Chat/> : <Register/>}/>
        <Route path='/chat' element={user ? <Chat/> : <Login/> }/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </>
  )
}

export default App