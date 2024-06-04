import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Box, Avatar, Typography, Link } from '@mui/material';

const SideNav = ({user}) => {

const lastname = user.user.lastname
const firstname = user.user.firstname
const summary = user.user.summary

  return (
    <Box sx={{ width: "300px", backgroundColor: '#545353'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
        <Avatar sx={{ width: 80, height: 80 }} alt={firstname} src={user.picture || '/default-avatar.png'} />
        <Typography variant='body2' sx={{ marginTop: 1 }}>
          {`${firstname} ${lastname}`}
        </Typography>
        <Typography variant='overline'>
          {summary || "Nil"}
        </Typography>
      </Box>

      <Box sx={{ paddingLeft: 3 }}>
        <Box>
          <Link href="/" underline='none' sx={{cursor: 'pointer'}}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <PersonIcon />
            <Typography variant='body2' sx={{ marginLeft: 1 }}>Profile</Typography>
          </Box>
          </Link>

          <Link href="/user/profile" underline='none'sx={{cursor: 'pointer'}} >
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <ManageAccountsIcon />
            <Typography variant='body2' sx={{ marginLeft: 1 }}>Edit Profile</Typography>
          </Box>
          </Link>

          <Link href="/" underline='none' sx={{cursor: 'pointer'}}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SettingsIcon />
            <Typography variant='body2' sx={{ marginLeft: 1 }}>Settings</Typography>
          </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SideNav;
