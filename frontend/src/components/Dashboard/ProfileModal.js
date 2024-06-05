
import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Button, Avatar } from '@mui/material';

const ProfileModal = ({ user, onClose }) => {
  const { firstname, lastname, picture, phonenumber, email, bio, summary } = user;

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>User Profile</DialogTitle>
      <DialogContent>
        <Avatar sx={{ width: 80, height: 80 }} alt={firstname} src={`http://localhost:5000/uploads/${picture}`} />
        <Typography variant="h6" sx={{ marginTop: 1, color: "#333333", fontWeight: "800" }} >{`${firstname} ${lastname}`}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1, color: "#333333", fontWeight: "800" }} >Phone Number: {phonenumber}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1, color: "#333333", fontWeight: "800" }}>Email: {email}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1, color: "#333333", fontWeight: "800" }}>Bio: {bio}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1, color: "#333333", fontWeight: "800" }}>Summary: {summary}</Typography>
        <Button onClick={onClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
