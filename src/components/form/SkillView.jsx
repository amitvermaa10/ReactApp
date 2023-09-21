import React from 'react';
import { Grid, DialogTitle, DialogContent, Rating, Divider } from '@mui/material';

function SkillView({ inputData }) {
  return (
    <div>
      <DialogTitle style={{ fontSize: '17px' }}>Common Skills Evaluated</DialogTitle>
      <div className="viewform">
        <DialogContent>
          <div className="select-field">
            <Grid container spacing={2}>
              <Grid item xs={4} sm={4}>
                <p className="nameBlock">Communication</p>
                <Rating
                  max={5}
                  precision={0.5}
                  value={inputData.communication}
                  readOnly
                  sx={{
                    cursor: 'not-allowed',
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={4}>
                <p className="nameBlock">Attitude</p>
                <Rating
                  max={5}
                  precision={0.5}
                  value={inputData.attitude}
                  readOnly
                  sx={{
                    cursor: 'not-allowed',
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={4}>
                <p className="nameBlock">Self Learning</p>
                <Rating
                  max={5}
                  precision={0.5}
                  value={inputData.selflearning}
                  readOnly
                  sx={{
                    cursor: 'not-allowed',
                  }}
                />
              </Grid>
            </Grid>
          </div>
        </DialogContent>
      </div>
      <Divider />
      <div>
        <DialogTitle style={{ fontSize: '17px' }}>Decision</DialogTitle>
        <div className="viewform">
          <DialogContent>
            <div className="select-field">
              <Grid container spacing={2}>
                {inputData.interviewFeedback !== '' && (
                  <Grid item xs={4} sm={4}>
                    <p className="nameBlock">Interview Feedback</p>
                    <p>{inputData.interviewFeedback}</p>
                  </Grid>
                )}

                {inputData.trainingRecommended !== '' && (
                  <Grid item xs={4} sm={4}>
                    <p className="nameBlock">Training Recommended</p>
                    <p>{inputData.trainingRecommended}</p>
                  </Grid>
                )}

                {inputData.others !== '' && (
                  <Grid item xs={4} sm={4}>
                    <p className="nameBlock">Others</p>
                    <p>{inputData.others}</p>
                  </Grid>
                )}
              </Grid>
            </div>

            <div className="select-field">
              <Grid container spacing={2}>
                {inputData.additionalComments !== '' && (
                  <Grid item xs={4} sm={4}>
                    <p className="nameBlock">Additional Comments</p>
                    <p>{inputData.additionalComments}</p>
                  </Grid>
                )}

                <Grid item xs={4} sm={4}>
                  <p className="nameBlock">Selected</p>
                  <p>{inputData.radiogroup}</p>
                </Grid>
              </Grid>
            </div>
          </DialogContent>
        </div>
      </div>
    </div>
  );
}

export default SkillView;
