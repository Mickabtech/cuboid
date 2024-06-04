import React, { useEffect, useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

const ProfileForm = () => {
  const { _id } = useParams();
  const [phonenumber, setPhonenumber] = useState('');
  const [bio, setBio] = useState('');
  const [summary, setSummary] = useState('');
  const [picture, setPicture] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (_id) {
      axios.get(`http://localhost:5000/api/auth/signup/${_id}`)
        .then((response) => {
          const { phonenumber, bio, summary, picture } = response.data;
          setPhonenumber(phonenumber || '');
          setBio(bio || '');
          setSummary(summary || '');
          setPreview(picture || null);
        })
        .catch((error) => {
          toast.error(getErrorMessage(error));
        });
    } else {
      toast.error('User ID is not defined.');
    }
  }, [_id]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPicture(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!_id) {
      toast.error('User ID is not defined. Cannot submit form.');
      return;
    }

    const formData = new FormData();
    formData.append('phonenumber', phonenumber);
    formData.append('bio', bio);
    formData.append('summary', summary);
    if (picture) {
      formData.append('picture', picture);
    }

    axios.put(`http://localhost:5000/api/auth/signup/${_id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        toast.success('User Edited Successfully!!!');
        setTimeout(() => {
          navigate('/user/userprofile');
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
        toast.error(getErrorMessage(error));
      });
  };

  const getErrorMessage = (error) => {
    if (error.response && error.response.data && error.response.data.message) {
      return error.response.data.message;
    } else if (error.message) {
      return error.message;
    } else {
      return 'An unknown error occurred';
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: '#000000' }}>
            Edit Profile
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="phonenumber"
              label="Phone Number"
              name="phonenumber"
              autoComplete="phonenumber"
              autoFocus
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="summary"
              label="Summary"
              name="summary"
              autoComplete="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              rows={4}
              id="bio"
              label="Bio"
              name="bio"
              autoComplete="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
      <ToastContainer/>
    </ThemeProvider>
  );
};

export default ProfileForm;
