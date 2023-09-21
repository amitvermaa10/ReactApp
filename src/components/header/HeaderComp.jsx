import React from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material';
import user from '../../assests/user.png';

function HeaderComp({ name }) {
  return (
    <div className="heading">
      <AppBar position="static">
        <Toolbar>
          <div style={{ paddingLeft: '40%' }}>
            <Typography variant="h6" component="div" align="center" sx={{ flexGrow: 1 }}>
              Skill Assessment Dashboard
            </Typography>
          </div>

          <Typography variant="h12" component="div" align="right" sx={{ flexGrow: 1 }}>
            {name}
          </Typography>
          &nbsp;
          <div >
          <img style={{borderRadius:'50%'}} src={user} width='35px' height='35px' alt="react logo" />
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderComp;
