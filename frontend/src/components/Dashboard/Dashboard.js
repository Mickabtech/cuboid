import React from 'react';
import AppHeader from '../Dashboard/appheader/AppHeader';
import SideNav from '../Dashboard/sidenav/SideNav';
import { Box, CssBaseline } from "@mui/material";

const Dashboard = ({user}) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AppHeader />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <SideNav user={user} />
          <Box sx={{ flexGrow: 1, overflow: 'auto', padding: 2 }}>
            {/* Main content goes here */}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Dashboard;
