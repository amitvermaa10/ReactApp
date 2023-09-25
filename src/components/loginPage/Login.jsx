import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box, Divider } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [authData, setAuthData] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getRegData = async () => {
    try {
      const response = await axios.get('http://localhost:3031/auth');
      setAuthData(response);
      return response;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getRegData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authData.data.length > 0) {
     const filteredArray = authData.data.map((item) => ({
        username: item.username,
        password: item.password,
     }));
      const usernameData = filteredArray.filter(
        (obj) => obj.username === formData.username && obj.password === formData.password
      );
      if (
        usernameData.length>0 && formData.username === usernameData[0].username  && 
        formData.password=== usernameData[0].password 
      ) {
        navigate('/home', { state: { name: formData.username } });
      } else {
        alert('Invalid credentials. please try again.');
      }
    } else {
      alert('Invalid credentials. please try again.');
    }
  };

  const handleRegistration = () => {
    navigate('/reg');
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          boxShadow: 5,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <LockIcon color="primary" style={{ fontSize: '48', marginBottom: '5px' }} />
        <Typography variant="h4" style={{ marginTop: '20px' }} gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <Divider sx={{ borderBottomWidth: '4px', bgcolor: 'primary.light' }} />
          <TextField
            fullWidth
            label="Username"
            name="username"
            variant="outlined"
            margin="normal"
            value={formData.username}
            onChange={handleInputChange}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            variant="outlined"
            margin="normal"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            login
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
            onClick={handleRegistration}
          >
            Registration
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;