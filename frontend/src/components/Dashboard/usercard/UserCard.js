// UserCard.js

import React from 'react';
import { Box, Avatar, Typography, Card, CardContent, Badge, IconButton } from '@mui/material';
import { green } from '@mui/material/colors';
import ChatIcon from '@mui/icons-material/Chat';
import VisibilityIcon from '@mui/icons-material/Visibility';

const UserCard = ({ user, onViewProfile }) => {
  const {  firstname, lastname, picture } = user;

  const handleViewProfileClick = () => {
    onViewProfile(user);
  };

  return (
    <Card sx={{ width: 200, backgroundColor: '#E5E5E5' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <Box
              sx={{
                width: 12,
                height: 12,
                bgcolor: green[500],
                borderRadius: '50%',
                border: '2px solid white',
              }}
            />
          }
        >
          <Avatar sx={{ width: 80, height: 80 }} alt={firstname} src={`http://localhost:5000/uploads/${picture}`} />
        </Badge>
        <Typography variant='body1' sx={{ marginTop: 1, color: "#333333", fontWeight: "800" }}>
          {`${firstname} ${lastname}`}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 2 }}>
          <IconButton aria-label="chat">
            <ChatIcon />
          </IconButton>
          <IconButton aria-label="view profile" onClick={handleViewProfileClick}>
            <VisibilityIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
