import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';
import './EditProfile.css'

const ProfileForm = () => {
  const [phonenumber, setPhonenumber] = useState('');
  const [bio, setBio] = useState('');
  const [picture, setPicture] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPicture(file);

    // Create a preview URL for the uploaded image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('phonenumber', phonenumber);
    formData.append('bio', bio);
    formData.append('picture', picture);

    try {
      const response = await axios.post('/api/user/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Handle successful response
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="form-container">
      <Typography variant="h6" gutterBottom>
        Edit Profile
      </Typography>
      <TextField
        label="Phone Number"
        fullWidth
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}
        margin="normal"
        className="text-field"
        classes={{ root: 'input-root' }}
      />
      <TextField
        label="Bio"
        fullWidth
        multiline
        rows={4}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        margin="normal"
        className="text-field"
        classes={{ root: 'input-root' }}
      />
      
      <Button variant="contained" component="label">
        Upload Picture
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleFileChange}
        />
      </Button>
      {preview && (
        <Box className="preview-container">
          <img src={preview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
      )}
      <Button type="submit" variant="contained" color="primary" className="submit-button">
        Submit
      </Button>
    </Box>
  );
};

export default ProfileForm;
