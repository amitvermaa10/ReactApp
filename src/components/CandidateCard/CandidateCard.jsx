import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Card, CardHeader, CardContent, Typography, Grid } from '@mui/material';
import './CandidateCard.scss';

function CandidateCard() {
  const data = useSelector((state) => state.app.data);

  const totalNoOfCandidate = data.length;

  let overallsum = 0;
  if (totalNoOfCandidate > 0) {
    data.forEach((item) => {
      const experience = Number(item.overallExperience);
      overallsum += experience;
    });
  }

  const average = overallsum / totalNoOfCandidate;
  const overalltotalAvg = Math.round(average * 10) / 10;

  let candidatecount = 0;
  data.forEach((obj) => {
    if (obj.interviewerName === 'Utkarsh') {
      candidatecount += 1;
    }
  });

  return (
    <div style={{ marginLeft: '100px', marginRight: '100px', textAlign: 'centre' }}>
      <Grid container spacing={2}>
        <Grid xs={3} sm={3} item>
          <Card
            sx={{
              // maxWidth: '25rem',
              margin: '3rem auto',
              background: 'linear-gradient(to bottom, #1976D2, white)',
            }}
          >
            <CardHeader avatar={<Avatar>C</Avatar>} title="Total Candidate" />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {totalNoOfCandidate}
              </Typography>
              <Typography paragraph>Totol No of Candidate given Interview</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={3} sm={3} item>
          <Card
            sx={{
              // maxWidth: '25rem',
              margin: '3rem auto',
              background: 'linear-gradient(to bottom, #1976D2, white)',
            }}
          >
            <CardHeader avatar={<Avatar>O</Avatar>} title="Overall Experience" />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {overalltotalAvg}
              </Typography>
              <Typography paragraph>Total Average of Overall Experience</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={3} sm={3} item>
          <Card
            sx={{
              // maxWidth: '25rem',
              margin: '3rem auto',
              background: 'linear-gradient(to bottom, #1976D2, white)',
            }}
          >
            <CardHeader avatar={<Avatar>I</Avatar>} title="My Interviews" />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {candidatecount}
              </Typography>
              <Typography paragraph> Total No of Interview Under Me</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={3} sm={3} item>
          <Card
            sx={{
              // maxWidth: '25rem',
              margin: '3rem auto',
              background: 'linear-gradient(to bottom, #1976D2, white)',
            }}
          >
            <CardHeader avatar={<Avatar>O</Avatar>} title="Other Interviews" />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {totalNoOfCandidate - candidatecount}
              </Typography>
              <Typography paragraph>Total No of other Interview</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default CandidateCard;
