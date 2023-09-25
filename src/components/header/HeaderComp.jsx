import React from 'react';
import { AppBar, Typography, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import user from '../../assests/user.png';


function HeaderComp({ name }) {
  const navigate = useNavigate();
  const handlelogout = () => {
    navigate('/');
  };
  return (
    <div className="heading">
      <AppBar position="static">
        <Toolbar>
          <div>
            <Typography variant="h6" component="div" align="center" sx={{ flexGrow: 1 }}>
              Skill Assessment Dashboard
            </Typography>
          </div>
          <div className="username" style={{ display: 'contents' }}>
            <Typography variant="h12" component="div" align="right" sx={{ flexGrow: 1 }}>
              {name}
            </Typography>
          </div>
          <div>
            <div style={{ paddingLeft: '20px', paddingTop: '10px' }}>
              <img
                style={{ borderRadius: '50%' }}
                src={user}
                width="35px"
                height="35px"
                alt="react logo"
              />
              <div className="logout" style={{ fontSize: '10px' }}>
                <Button
                  variant="text"
                  onClick={handlelogout}
                  size="small"
                  sx={{
                    fontSize: '10px',
                    color: 'black',
                  }}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
          &nbsp;
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderComp;
