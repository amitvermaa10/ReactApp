
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Divider} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    email: '', // required
    password: '', // required
  });
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        console.log('&&&&&data',user);
        if (data.user) {
          navigate('/home', { state: { name: data.user.username } });
        } else {
          alert(data);
        }
      });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleRegistration = () => {
    navigate('/reg');
  };

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
                <LockIcon color="primary" style={{ fontSize: '48', marginBottom: '5px' }} />
                <Typography variant="h4" style={{ marginTop: '20px' }} gutterBottom>
                  Login
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Divider sx={{ borderBottomWidth: '4px', bgcolor: 'primary.light' }} />
                  <TextField
                    fullWidth
                    label="email"
                    name="email"
                    variant="outlined"
                    margin="normal"
                    value={formData.username}
                    onChange={(e) => handleChange(e)}
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
          </div>   
  );
}

export default Login;
