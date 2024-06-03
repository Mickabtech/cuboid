import React from 'react';
import AppHeader from './appheader/AppHeader';
import SideNav from './sidenav/SideNav';
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import './Dashboard.css';
import theme from '../../config/Theme';


const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
        <Box className="dashboard-container">
          <SideNav />
          <Box className="content">
            {/* Main content goes here */}
          </Box>
        </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
