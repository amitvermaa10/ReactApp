import React from 'react';
import { Avatar, Card, CardHeader, CardContent, Typography, Grid } from '@mui/material';

function CandidateCard() {
  return (
    <div style={{ marginLeft: '100px', marginRight: '100px', textAlign: 'centre' }}>
      <Grid container spacing={2}>
        <Grid xs={3} sm={3} item>
          <Card sx={{ maxWidth: '25rem', margin: '3rem auto' }}>
            <CardHeader
              avatar={<Avatar>C</Avatar>}
              title="Simple Card"
              subheader="Created 12/10/22"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur 
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={3} sm={3} item>
          <Card sx={{ maxWidth: '25rem', margin: '3rem auto' }}>
            <CardHeader
              avatar={<Avatar>C</Avatar>}
              title="Simple Card"
              subheader="Created 12/10/22"
            />
            <CardContent>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa
                voluptatibus blanditiis nostrum eum id voluptatem nisi aut quam deserunt!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={3} sm={3} item>
          <Card sx={{ maxWidth: '25rem', margin: '3rem auto' }}>
            <CardHeader
              avatar={<Avatar>C</Avatar>}
              title="Simple Card"
              subheader="Created 12/10/22"
            />
            <CardContent>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa
                voluptatibus blanditiis nostrum eum id voluptatem nisi aut quam deserunt!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={3} sm={3} item>
          <Card sx={{ maxWidth: '25rem', margin: '3rem auto' }}>
            <CardHeader
              avatar={<Avatar>C</Avatar>}
              title="Simple Card"
              subheader="Created 12/10/22"
            />
            <CardContent>
              <Typography paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi culpa
                voluptatibus blanditiis nostrum eum id voluptatem nisi aut quam deserunt!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default CandidateCard;
