
import React, { useEffect, useState } from 'react';
import AppHeader from '../Dashboard/appheader/AppHeader';
import SideNav from '../Dashboard/sidenav/SideNav';
import UserCard from './usercard/UserCard';
import axios from 'axios';
import { Box, CssBaseline} from '@mui/material';
import ProfileModal from "./ProfileModal"

const Dashboard = ({ user }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/auth/signup/')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleViewProfile = (userData) => {
    setSelectedUser(userData);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <AppHeader />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <SideNav user={user} />
          <Box sx={{ flexGrow: 1, overflow: 'auto', padding: 2, backgroundColor: 'alicewhite' }}>
            {/* Main content goes here */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {users.map(user => (
                <UserCard key={user._id} user={user} onViewProfile={handleViewProfile} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      {selectedUser && (
        <ProfileModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </React.Fragment>
  );
};

export default Dashboard;
