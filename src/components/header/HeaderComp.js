import React from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material';

function HeaderComp() {
  return (
    <div className="heading">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Skill Assessment Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderComp;
