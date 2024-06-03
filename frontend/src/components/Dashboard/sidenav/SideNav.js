import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Box, Avatar, Typography } from '@mui/material';

const SideNav = ({ _id }) => {
  const [userData, setUserData] = useState();
  const [userProf, setUserProf] = useState();

  useEffect(() => {
    fetchUserData(_id);
    fetchUserProf(_id);
  }, []); 

  const fetchUserData = async (_id) => {
    try {

      const response = await axios.get(`http://localhost:5000/api/auth/${_id}`);
      const data = response.data;


      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchUserProf = async (_id) => {
    try {

      const response = await axios.get(`http://localhost:5000/api/user/profile/${_id}`);
      const data = response.data;

      setUserProf(data);
    } catch (error) {
      console.error('Error fetching user profile data:', error);
    }
  };

  return (
    <>
      <Box sx={{ width: "300px", backgroundColor: '#545353' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
          {userData || userProf || (
            <>
              <Avatar sx={{ width: 80, height: 80 }} alt='Channel Name' src={userProf.picture} />
              <Typography variant='body2' sx={{ marginTop: 1 }}>
                {`${userData.firstname} ${userData.lastname}`}
              </Typography>
              <Typography variant='overline'>
                {userProf.summary}
              </Typography>
            </>
          )}
        </Box>

        <Box sx={{ paddingLeft: 3 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <PersonIcon />
              <Typography variant='body2' sx={{ marginLeft: 1 }}>Profile</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <ManageAccountsIcon />
              <Typography variant='body2' sx={{ marginLeft: 1 }}>Edit Profile</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SettingsIcon />
              <Typography variant='body2' sx={{ marginLeft: 1 }}>Settings</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SideNav;
