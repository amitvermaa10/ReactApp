import React, { useState } from 'react';
import { TextField, Button, Container, Box,Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [formData, setFormData] = useState({
    email: '', // required
    password: '', // required
    username: '', // optional
  });
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => {
        setUser(data.user);

        if (data.user) {
          navigate('/');
        } else {
          alert('Please give the correct format');
        }
      });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  console.log("&&user",user);
  return (
      <div>
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
            <Typography variant="h4" style={{ marginTop: '20px' }} gutterBottom>
              Registration
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                margin="normal"
                value={formData.username}
                name="username"
                onChange={(e) => handleChange(e)}
              />

              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                value={formData.email}
                name="email"
                onChange={(e) => handleChange(e)}
              />

              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                margin="normal"
                type="password"
                id="password"
                value={formData.password}
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: '20px' }}
                onClick={(e)=>handleSubmit(e)}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Container>
      </div>
  );
}
export default Registration;
