import React from 'react';
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Box, Avatar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './SideNav.css'; 

const SideNav = () => {
  const theme = useTheme();
  return (
    <Sidebar breakPoint='md' backgroundColor={theme.palette.neutral.light}>
      <Box className="sidebar-container">
        <Box className="avatar-container">
          <Avatar className="avatar" alt='Channel Name' src="" />
          <Typography variant='body2' className="your-channel">Your Channel</Typography>
          <Typography variant='overline'>React with Mickab</Typography>
        </Box>
        
        <Box className="menu-container">
          <Menu className="menu">
            <MenuItem icon={<PersonIcon />}>
              <Typography variant='body2'>Profile</Typography>
            </MenuItem>
            <MenuItem icon={<ManageAccountsIcon />}>
              <Typography variant='body2'>Edit Profile</Typography>
            </MenuItem>
            <MenuItem icon={<SettingsIcon />}>
              <Typography variant='body2'>Settings</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Sidebar>
  );
}

export default SideNav;
