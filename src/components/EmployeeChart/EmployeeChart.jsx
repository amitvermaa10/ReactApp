import React from 'react';
import { Card, Grid } from '@mui/material';
import { BarChart, PieChart } from '@mui/x-charts';

function EmployeeChart() {
  return (
    <div style={{ marginLeft: '100px', marginRight: '100px', textAlign: 'centre' }}>
      <Grid container spacing={2}>
        <Grid xs={6} sm={6} item>
          <Card>
            <BarChart
              xAxis={[
                {
                  id: 'barCategories',
                  data: ['bar A', 'bar B', 'bar C'],
                  scaleType: 'band',
                },
              ]}
              series={[
                {
                  data: [2, 5, 3],
                },
              ]}
              width={650}
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
                    { id: 0, value: 10, label: 'series A' },
                    { id: 1, value: 15, label: 'series B' },
                    { id: 2, value: 20, label: 'series C' },
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
