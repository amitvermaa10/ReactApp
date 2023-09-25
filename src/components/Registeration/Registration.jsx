import React, { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {
  const [regData, setRegData] = useState({ username: '', password: '', confirmpassword: '',contact:'' });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegData({
      ...regData,
      [name]: value,
    });
    if (name === 'contact') {
      const inputValue = e.target.value;
      const numericValue = inputValue.replace(/\D/g, '').slice(0, 10); // Remove non-numeric characters
    
      if (numericValue.length <= 10) {
        // Perform your desired actions with the valid input
        setRegData({ ...regData, [name]: numericValue.toString() });
      }
      
    }
  };

  const postRegData = async (data) => {
    try {
      const response = await axios.post('http://localhost:3031/auth', data);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const regSubmit = (e) => {
    e.preventDefault();
    if (regData.username &&regData.contact && regData.password === regData.confirmpassword) {
      postRegData(regData);
      navigate('/');
    } else {
      alert('Invalid credentials. please try again.');
    }
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
        <form onSubmit={regSubmit}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            variant="outlined"
            margin="normal"
            value={regData.username}
            onChange={handleInputChange}
          />

          <TextField
            fullWidth
            label="Contact Details"
            name="contact"
            variant="outlined"
            margin="normal"
            value={regData.contact}
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
            value={regData.password}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmpassword"
            variant="outlined"
            margin="normal"
            type="password"
            id="confirmpassword"
            value={regData.confirmpassword}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
export default Registration;
