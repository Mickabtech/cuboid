import React from 'react';
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import './AppHeader.css'; 

const AppHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <AppBar position='sticky' className="app-bar">
      <Toolbar>
        <IconButton onClick={() => console.log('clicked')} color='secondary'>
          <MenuIcon className="app-color" />
        </IconButton>
        <Typography className="app-logo">Cuboid</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton title='Notifications' color='secondary'>
          <Badge badgeContent={21} color='error'>
            <NotificationsIcon className="app-color" />
          </Badge>
        </IconButton>
        <IconButton title='Settings' color='secondary'>
          <SettingsIcon className="app-color" />
        </IconButton>
        <IconButton title='Sign out' color='secondary' onClick={handleLogout}>
          <LogoutIcon className="app-color" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
