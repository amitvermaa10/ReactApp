import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Grid } from '@mui/material';
import { BarChart, PieChart } from '@mui/x-charts';

function EmployeeChart() {
  const data = useSelector((state) => state.app.data);
  const totalNoOfCandidate = Number(data.length);

  const experienceCounts = {
    react: 0,
    angular: 0,
    node: 0,
  };
  data.forEach((item) => {
    const experience = item.relevantExperience;
    if (experienceCounts.hasOwnProperty(experience)) {
      experienceCounts[experience]++;
    }
  });
  const experienceCountsArray = Object.values(experienceCounts);

  let selectedcount = 0;
  data.forEach((item) => {
    if (item.radiogroup === 'yes') {
      selectedcount++;
    }
  });

  const notSelectedCandidate = Number(totalNoOfCandidate - selectedcount);
  console.log('&&&notSelectedCandidate', notSelectedCandidate);
  return (
    <div style={{ marginLeft: '100px', marginRight: '100px', textAlign: 'centre' }}>
      <Grid container spacing={2}>
        <Grid xs={6} sm={6} item>
          <Card>
            <BarChart
              xAxis={[
                {
                  id: 'barCategories',
                  data: ['react', 'angular', 'node'],
                  scaleType: 'band',
                },
              ]}
              series={[
                {
                  data: experienceCountsArray,
                },
              ]}
              width={640}
              height={300}
            />
          </Card>
        </Grid>
        <Grid xs={6} sm={6} item>
          <Card>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: totalNoOfCandidate, label: 'total' },
                    { id: 1, value: selectedcount, label: 'select' },
                    { id: 2, value: notSelectedCandidate, label: 'not Select' },
                  ],
                },
              ]}
              width={650}
              height={300}
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default EmployeeChart;
