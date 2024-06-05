import React, { useEffect, useState } from 'react';
import { Box, Avatar, Typography, CssBaseline, Card, CardContent } from '@mui/material';
import axios from 'axios';
import AppHeader from '../Dashboard/appheader/AppHeader';
import SideNav from '../Dashboard/sidenav/SideNav';

const UserProfilePage = ({ user }) => {
  const userID = localStorage.getItem('userId')
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the endpoint
    axios.get(`http://localhost:5000/api/auth/signup/${userID}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [userID]);

  if (!userData) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AppHeader />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <SideNav user={user} />
          <Box sx={{ flexGrow: 1, overflow: 'auto', padding: 2, display: 'flex', }}>
            <Card sx={{ backgroundColor: '#ffffff', width: '50%', height: '100%' }}>
              <CardContent>
                <Typography sx={{color: "Green", fontWeight: "900", padding: '20px', fontSize: "16pt"}}>Profile</Typography>
                <Avatar sx={{ width: 100, height: 100 }} alt={`${userData.firstname} ${userData.lastname}`} src={userData.picture} />
                <Typography variant="h4" sx={{ mb: 1, color: "#525151", fontWeight: "600"}}>{`${userData.firstname} ${userData.lastname}`}</Typography>
                <Typography variant="body1" sx={{ mb: 1, color: "green", fontWeight: "600"}}>Phone Number: {userData.phonenumber}</Typography>
                <Typography variant="body1" sx={{ mb: 1, color: "blue", fontWeight: "600"}}>Email: {userData.email}</Typography>
                <Typography variant="body1" sx={{ mb: 1, color: "#525151", fontWeight: "600"}}>Bio: {userData.bio}</Typography>
                <Typography variant="body1" sx={{ mb: 1, color: "#525151", fontWeight: "600"}}>Summary: {userData.summary}</Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default UserProfilePage;
