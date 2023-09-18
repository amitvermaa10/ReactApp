import React from 'react';
import { Grid, DialogTitle, DialogContent, Rating, Divider } from '@mui/material';
import './FormView.scss';

function FormView({ inputData }) {
  return (
    <div>
      <header>
        <h3 style={{ paddingLeft: '30px' }}>Skill Assessment Form </h3>
      </header>
      <div className="viewform">
        <DialogContent>
          <div className="select-field">
            <Grid container spacing={2}>
              <Grid xs={4} sm={4}>
                <p className="nameBlock">Interview Name</p>
                <p>{inputData.interviewerName}</p>
              </Grid>
              <Grid xs={4} sm={4}>
                <p className="nameBlock">Interview date</p>
                <p>{inputData.datepicker}</p>
              </Grid>
              <Grid xs={4} sm={4}>
                <p className="nameBlock">Candidate Name</p>
                <p>{inputData.candidateName}</p>
              </Grid>
            </Grid>
          </div>

          <div className="select-field">
            <Grid container spacing={2}>
              <Grid xs={4} sm={4}>
                <p className="nameBlock">Interview Round</p>
                <p>{inputData.interviewRound}</p>
              </Grid>

              <Grid xs={4} sm={4}>
                <p className="nameBlock">Overall Experience</p>
                <p>{inputData.overallExperience}</p>
              </Grid>
              <Grid xs={4} sm={4}>
                <p className="nameBlock">Relevant Experience</p>
                <p>{inputData.relevantExperience}</p>
              </Grid>
            </Grid>
          </div>
          <div className="select-field">
            <Grid container spacing={2}>
              <Grid xs={4} sm={4}>
                <p className="nameBlock">Relevant Years</p>
                <p>{inputData.years}</p>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <Divider />
      </div>
      <div>
        <DialogTitle style={{ fontSize: '17px' }}>Primary Skill evaluated</DialogTitle>
        <div className="viewform">
          <DialogContent>
            <div className="select-field">
              <Grid container spacing={2}>
                <Grid xs={4} sm={4}>
                  <p className="nameBlock">HTML</p>
                  <Rating
                    max={5}
                    precision={0.5}
                    value={inputData.html}
                    readOnly
                    sx={{
                      cursor: 'not-allowed',
                    }}
                  />
                </Grid>
                <Grid xs={4} sm={4}>
                  <p className="nameBlock">CSS</p>
                  <Rating
                    max={5}
                    precision={0.5}
                    value={inputData.css}
                    readOnly
                    sx={{
                      cursor: 'not-allowed',
                    }}
                  />
                </Grid>
                <Grid xs={4} sm={4}>
                  <p className="nameBlock">Javascript</p>
                  <Rating
                    max={5}
                    precision={0.5}
                    value={inputData.javascript}
                    readOnly
                    sx={{
                      cursor: 'not-allowed',
                    }}
                  />
                </Grid>
              </Grid>
            </div>
            <div className="select-field">
              <Grid container spacing={2}>
                <Grid xs={4} sm={4}>
                  <p className="nameBlock">ES6 Concepts</p>
                  <Rating
                    max={5}
                    precision={0.5}
                    value={inputData.es6}
                    readOnly
                    sx={{
                      cursor: 'not-allowed',
                    }}
                  />
                </Grid>
                <Grid xs={4} sm={4}>
                  <p className="nameBlock">TypeScript</p>
                  <Rating
                    max={5}
                    precision={0.5}
                    value={inputData.typescript}
                    readOnly
                    sx={{
                      cursor: 'not-allowed',
                    }}
                  />
                </Grid>
                <Grid xs={4} sm={4}>
                  <p className="nameBlock">React</p>
                  <Rating
                    max={5}
                    precision={0.5}
                    value={inputData.react}
                    readOnly
                    sx={{
                      cursor: 'not-allowed',
                    }}
                  />
                </Grid>
              </Grid>
            </div>
            <div className="select-field">
              <Grid container spacing={2}>
                <Grid xs={4} sm={4}>
                  <p className="nameBlock">Hooks</p>
                  <Rating
                    max={5}
                    precision={0.5}
                    value={inputData.hooks}
                    readOnly
                    sx={{
                      cursor: 'not-allowed',
                    }}
                  />
                </Grid>
                <Grid xs={4} sm={4}>
                  <p className="nameBlock">Redux</p>
                  <Rating
                    max={5}
                    precision={0.5}
                    value={inputData.redux}
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
      </div>
      <div>
        <DialogTitle style={{ fontSize: '17px' }}>Common Skills Evaluated</DialogTitle>
        <div className="viewform">
          <DialogContent>
            <div className="select-field">
              <Grid container spacing={2}>
                <Grid xs={4} sm={4}>
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
                <Grid xs={4} sm={4}>
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
                <Grid xs={4} sm={4}>
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
                  <Grid xs={4} sm={4}>
                    <p className="nameBlock">Interview Feedback</p>
                    <p>{inputData.interviewFeedback}</p>
                  </Grid>
                  <Grid xs={4} sm={4}>
                    <p className="nameBlock">Training Recommended</p>
                    <p>{inputData.trainingRecommended}</p>
                  </Grid>
                  <Grid xs={4} sm={4}>
                    <p className="nameBlock">Others</p>
                    <p>{inputData.others}</p>
                  </Grid>
                </Grid>
              </div>
              <div className="select-field">
                <Grid container spacing={2}>
                  <Grid xs={4} sm={4}>
                    <p className="nameBlock">Additional Comments</p>
                    <p>{inputData.additionalComments}</p>
                  </Grid>
                  <Grid xs={4} sm={4}>
                    <p className="nameBlock">Selected</p>
                    <p>{inputData.radiogroup}</p>
                  </Grid>
                </Grid>
              </div>
            </DialogContent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormView;
