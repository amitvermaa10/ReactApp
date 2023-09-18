import React from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material';

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
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderComp;
