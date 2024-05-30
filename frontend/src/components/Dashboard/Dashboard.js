import React from 'react'
import AppHeader from './AppHeader'
import SideNav from './SideNav'
import {  Box, CssBaseline, ThemeProvider } from "@mui/material"
import './Dashboard.css'
import theme from '../../config/Theme'
import { ProSidebarProvider } from 'react-pro-sidebar';







const Dashboard = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
        <CssBaseline />
        <AppHeader/>   
        <Box sx={styles.container}>
          <SideNav />
          <Box component={'main'} sx={styles.mainSection}>

          </Box>
        </Box>
    </ProSidebarProvider>
    </ThemeProvider>
    </React.Fragment>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
      display: 'flex',
      bgcolor: 'neutral.light',
      height: 'calc(100% - 64px)',
  },

  mainSection: {
    p: 1,
    width: '100%',
    height: '100%',
    overflow: 'auto'
  }
 
}

export default Dashboard