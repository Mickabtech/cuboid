import React from 'react'
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar"
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Typography } from '@mui/material';


const SideNav = () => {
  return (
    <Sidebar>
          <Menu>
              <MenuItem active icon={<PersonIcon/>}>
                <Typography variant='body2'>
                  Profile
                </Typography>
              </MenuItem>

              <MenuItem active icon={<ManageAccountsIcon/>}>
                <Typography variant='body2'>
                  Edit Profile
                </Typography>
              </MenuItem>

              <MenuItem active icon={<SettingsIcon/>}>
                <Typography variant='body2'>
                  Settings
                </Typography>
              </MenuItem>
          </Menu>
    </Sidebar>
  )
}

export default SideNav