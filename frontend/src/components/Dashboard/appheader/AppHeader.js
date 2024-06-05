import React from 'react';
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const AppHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <AppBar position='sticky' sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <IconButton onClick={() => console.log('clicked')} color='inherit'>
          <MenuIcon sx={{ color: 'white' }} />
        </IconButton>
        <Typography sx={{ color: 'white', cursor: 'pointer', marginLeft: 2 }}>
          Cuboid
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton title='Notifications' color='inherit'>
          <Badge badgeContent={21} color='error'>
            <NotificationsIcon sx={{ color: 'white' }} />
          </Badge>
        </IconButton>
        <IconButton title='Settings' color='inherit'>
          <SettingsIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton title='Sign out' color='inherit' onClick={handleLogout}>
          <LogoutIcon sx={{ color: 'white' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
