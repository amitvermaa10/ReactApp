import React from 'react';
import { AppBar, Typography, Toolbar, Button, MenuItem, Menu } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import user from '../../assests/user.png';

function HeaderComp({ name }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              style={{ color: '#FFFFFF' }}
              onClick={handleClick}
            >
              <MenuIcon sx={{ fontSize: 35 }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handlelogout}>Logout</MenuItem>
            </Menu>
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
            </div>
          </div>
          &nbsp;
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderComp;
