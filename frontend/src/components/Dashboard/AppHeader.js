import React from 'react'
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const AppHeader = () => {
  return (
    <AppBar position='sticky' sx={styles.appBar}>
        <Toolbar>
          <IconButton onClick={()=>console.log('clicked')} color='secondary'>
            <MenuIcon sx={styles.appColor}/>
          </IconButton>

          <Typography sx={styles.appLogo}>Cuboid</Typography>
          <Box sx={{flexGrow: 1}} />
          <IconButton title='Notifications' color='secondary'>
            <Badge badgeContent={21} color='error'>
            <NotificationsIcon sx={styles.appColor}/>
            </Badge>
          </IconButton>

          <IconButton title='settings' color='secondary'>
            <SettingsIcon sx={styles.appColor}/>
          </IconButton>

          <IconButton title='Sign out' color='secondary'>
            <LogoutIcon sx={styles.appColor}/>
          </IconButton>
          


          </Toolbar>

    </AppBar>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
      bgcolor: "neutral.main"
  },
  appLogo:{
      color: 'white',
      cursor: 'pointer',
      ml: 2,
  },
  appColor: {
    color: 'white'
  }
}

export default AppHeader