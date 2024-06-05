import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Box, Avatar, Typography, Link } from '@mui/material';

const SideNav = ({ user }) => {
  // const { picture } = user.user;
  const lastname = user.user.lastname;
  const firstname = user.user.firstname;
  const summary = user.user.summary;
  const picture = user.user.picture


  // Construct the full URL for the picture if it's not already a full URL
  const pictureUrl = picture ? `http://localhost:5000/uploads/${picture}` : '';

  return (
    <Box sx={{ width: "300px", backgroundColor: '#545353' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
        <Avatar sx={{ width: 80, height: 80 }} alt={firstname} src={pictureUrl} />
        <Typography variant='body2' sx={{ marginTop: 1 }}>
          {`${firstname} ${lastname}`}
        </Typography>
        <Typography variant='overline'>
          {summary || "Nil"}
        </Typography>
      </Box>

      <Box sx={{ paddingLeft: 3 }}>
        <Box>
        <Link href="/dashboard" underline='none' sx={{ cursor: 'pointer' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
              <AccountBalanceIcon />
              <Typography variant='body2' sx={{ marginLeft: 1 }}>Dashboard</Typography>
            </Box>
          </Link>

          <Link href="/user/userprofile" underline='none' sx={{ cursor: 'pointer' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <PersonIcon />
              <Typography variant='body2' sx={{ marginLeft: 1 }}>Profile</Typography>
            </Box>
          </Link>

          <Link href="/user/profile" underline='none' sx={{ cursor: 'pointer' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <ManageAccountsIcon />
              <Typography variant='body2' sx={{ marginLeft: 1 }}>Edit Profile</Typography>
            </Box>
          </Link>

          <Link href="#" underline='none' sx={{ cursor: 'pointer' }}>
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
