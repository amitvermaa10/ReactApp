import React from 'react';
import { Grid, DialogTitle, DialogContent, Rating, Typography, Divider } from '@mui/material';

function PrimaryRating({ inputData, inputFromDetail, isNewMode }) {
  return (
    <div>
      <div>
        <DialogTitle style={{ fontSize: '17px' }}>Primary Skill evaluated</DialogTitle>
        <DialogContent>
          <div className="select-field">
            <Grid container spacing={2}>
              <Grid xs={4} sm={4} item>
                <Typography component="legend">HTML</Typography>
                <Rating
                  name="html"
                  max={5}
                  precision={0.5}
                  value={parseFloat(inputData.html)}
                  onChange={(e) => inputFromDetail(e)}
                />
              </Grid>
              <Grid xs={4} sm={4} item>
                <Typography component="legend">CSS</Typography>
                <Rating
                  name="css"
                  max={5}
                  precision={0.5}
                  value={parseFloat(inputData.css)}
                  onChange={(e) => inputFromDetail(e)}
                />
              </Grid>
              <Grid xs={4} sm={4} item>
                <Typography component="legend">Javascript</Typography>
                <Rating
                  name="javascript"
                  max={5}
                  precision={0.5}
                  value={parseFloat(inputData.javascript)}
                  onChange={(e) => inputFromDetail(e)}
                />
              </Grid>
            </Grid>
          </div>
          <div className="select-field">
            <Grid container spacing={1}>
              <Grid xs={4} sm={4} item>
                <Typography component="legend">ES6 Concepts</Typography>
                <Rating
                  name="es6"
                  max={5}
                  precision={0.5}
                  value={parseFloat(inputData.es6)}
                  onChange={(e) => inputFromDetail(e)}
                />
              </Grid>
              <Grid xs={4} sm={4} item>
                <Typography component="legend">TypeScript</Typography>
                <Rating
                  name="typescript"
                  max={5}
                  precision={0.5}
                  value={parseFloat(inputData.typescript)}
                  onChange={(e) => inputFromDetail(e)}
                />
              </Grid>
              <Grid xs={4} sm={4} item>
                <Typography component="legend">React</Typography>
                <Rating
                  name="react"
                  max={5}
                  precision={0.5}
                  value={parseFloat(inputData.react)}
                  onChange={(e) => inputFromDetail(e)}
                />
              </Grid>
            </Grid>
          </div>
          <div className="select-field">
            <Grid container spacing={2}>
              <Grid xs={4} sm={4} item>
                <Typography component="legend">Hooks</Typography>
                <Rating
                  name="hooks"
                  value={parseFloat(inputData.hooks)}
                  max={5}
                  precision={0.5}
                  onChange={(e) => inputFromDetail(e)}
                />
              </Grid>
              <Grid xs={4} sm={4} item>
                <Typography component="legend">Redux</Typography>
                <Rating
                  name="redux"
                  max={5}
                  precision={0.5}
                  value={parseFloat(inputData.redux)}
                  onChange={(e) => inputFromDetail(e)}
                />
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <Divider />
      </div>
      <div>
        <DialogTitle style={{ fontSize: '17px' }}>Common Skills Evaluated</DialogTitle>
        <DialogContent>
          <div className="select-field">
            <Grid container spacing={2}>
              <Grid xs={4} sm={4} item>
                <Typography component="legend">Communication</Typography>
                <Rating
                  name="communication"
                  value={parseFloat(inputData.communication)}
                  max={5}
                  precision={0.5}
                  onChange={(e) => inputFromDetail(e)}
                  disabled={!isNewMode}
                />
              </Grid>
              <Grid xs={4} sm={4} item>
                <Typography component="legend">Attitude</Typography>
                <Rating
                  name="attitude"
                  value={parseFloat(inputData.attitude)}
                  max={5}
                  precision={0.5}
                  onChange={(e) => inputFromDetail(e)}
                  disabled={!isNewMode}
                />
              </Grid>
              <Grid xs={4} sm={4} item>
                <Typography component="legend">Self-Learning</Typography>
                <Rating
                  name="selflearning"
                  value={parseFloat(inputData.selflearning)}
                  max={5}
                  precision={0.5}
                  onChange={(e) => inputFromDetail(e)}
                  disabled={!isNewMode}
                />
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <Divider />
      </div>
    </div>
  );
}

export default PrimaryRating;
