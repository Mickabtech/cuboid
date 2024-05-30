import React from 'react'
import { AppBar, Badge, Box, IconButton, Toolbar, Typography} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const AppHeader = () => {
  return (
    <AppBar position='sticky' sx={styles.appBar}>
        <Toolbar>
          <IconButton onClick={()=>console.log('clicked')}>
            <MenuIcon sx={styles.appLogo} />
          </IconButton>

          <Typography sx={styles.appLogo}>Cuboid</Typography>
          <Box sx={{flexGrow: 1}} />
          <IconButton title='Notifications'>
            <Badge badgeContent={21} color='error'>
            <NotificationsIcon sx={styles.appLogo}/>
            </Badge>
          </IconButton>

          <IconButton title='settings'>
            <SettingsIcon sx={styles.appLogo}/>
          </IconButton>

          <IconButton title='Sign out'>
            <LogoutIcon sx={styles.appLogo}/>
          </IconButton>
          


          </Toolbar>

    </AppBar>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
      bgcolor: "#1e1e1e"
  },
  appLogo:{
      color: 'white',
      cursor: 'pointer'
  }
}

export default AppHeader