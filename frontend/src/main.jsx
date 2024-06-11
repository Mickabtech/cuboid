import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SnackbarProvider } from 'notistack';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <SnackbarProvider maxSnack={5}  anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </SnackbarProvider>
    </BrowserRouter> 
  </React.StrictMode>,
)
