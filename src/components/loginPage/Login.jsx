import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Divider } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === 'password') {
      // to navigate
      navigate('/home', { state: { name: formData.username } });
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
        </form>
      </Box>
    </Container>
  );
}

export default Login;
