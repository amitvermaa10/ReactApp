import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Card, CardHeader, CardContent, Typography, Grid } from '@mui/material';
import './CandidateCard.scss';
import LogoCandidate from '../../assests/LogoCandidate.jpg';
import Experience from '../../assests/Experience.png';
import Interview from '../../assests/Interview.png';
import OtherInterview from '../../assests/OtherInterview.png';

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

  const average = Number.isNaN(overallsum / totalNoOfCandidate)
    ? 0
    : overallsum / totalNoOfCandidate;
  const overalltotalAvg = Math.round(average * 10) / 10;

  let candidatecount = 0;
  data.forEach((obj) => {
    if (obj.interviewerName === 'Utkarsh') {
      candidatecount += 1;
    }
  });

  return (
    <div style={{ marginLeft: '100px', marginRight: '100px', textAlign: 'centre' }}>
       <h2> Candidate Insights </h2>
      <Grid container spacing={2}>
        <Grid xs={3} sm={3} item>
          <Card
            sx={{
              minHeight: '180px',
              maxHeight: '180px',
              margin: '3rem auto',
              background: '#64ACFF',
            }}
          >
            <CardHeader  
             avatar={<Avatar alt="candidate" src= {LogoCandidate} />}
            title="Total Candidate" />
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
              minHeight: '180px',
              maxHeight: '180px',
              margin: '3rem auto',
              background: '#50DFC2',
            }}
          >
            <CardHeader avatar={<Avatar alt="experience" src= {Experience} />}
             title="Overall Experience" />
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
              minHeight: '180px',
              maxHeight: '180px',
              margin: '3rem auto',
              background: '#FFC673',
            }}
          >
            <CardHeader
              avatar={<Avatar alt="interview" src= {Interview} />}
             title="My Interviews" />
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
              minHeight: '180px',
              maxHeight: '180px',
              margin: '3rem auto',
              background: '#FF7A90',
            }}
          >
            <CardHeader 
            avatar={<Avatar alt="otherInterview" src= {OtherInterview} />}
            title="Other Interviews" />
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
