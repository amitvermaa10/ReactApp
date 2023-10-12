import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Grid } from '@mui/material';
import { BarChart, PieChart, LineChart } from '@mui/x-charts';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './EmployeeChart.scss';

function EmployeeChart() {
  const data = useSelector((state) => state.app.data);
  const totalNoOfCandidate = Number(data.length);

  const calculateAverageRating = () => {
    let reactTotal = 0;
    let hooksTotal = 0;
    let javascriptTotal = 0;
    let typescriptTotal = 0;
    let reduxTotal = 0;
    let count = 0;
  
    data.forEach((interview) => {
      if (typeof interview.react === 'number') {
        reactTotal += interview.react;
      }
      if (typeof interview.hooks === 'number') {
        hooksTotal += interview.hooks;
      }
      if (typeof interview.javascript === 'number') {
        javascriptTotal += interview.javascript;
      }
      if (typeof interview.typescript === 'number') {
        typescriptTotal += interview.typescript;
      }
      if (typeof interview.redux === 'number') {
        reduxTotal += interview.redux;
      }
      count += 1;
    });
  
    const reactAverage = count > 0 ? Number((reactTotal / count).toFixed(1)) : 0;
    const hooksAverage = count > 0 ? Number((hooksTotal / count).toFixed(1)) : 0;
    const javascriptAverage = count > 0 ? Number((javascriptTotal / count).toFixed(1)) : 0;
    const typescriptAverage = count > 0 ? Number((typescriptTotal / count).toFixed(1)) : 0;
    const reduxAverage = count > 0 ? Number((reduxTotal / count).toFixed(1)) : 0;
  
    return [reactAverage, javascriptAverage, hooksAverage, typescriptAverage, reduxAverage];
  };

  const calculateCommonSkillAverage = () => {
    let communicationTotal = 0;
    let attitudeTotal = 0;
    let selfLearningTotal = 0;
    let count = 0;
    data.forEach((interview) => {
      if (typeof interview.communication === 'number') {
        communicationTotal += interview.communication;
      }
      if (typeof interview.selflearning === 'number') {
        selfLearningTotal += interview.selflearning;
      }
      if (typeof interview.attitude === 'number') {
        attitudeTotal += interview.attitude;
      }
      count += 1;
    });
    const communicationAverage = count > 0 ? Number((communicationTotal / count).toFixed(1)) : 0;
    const selfLearningtAverage = count > 0 ? Number((selfLearningTotal / count).toFixed(1)): 0;
    const atttitudeAverage = count > 0 ? Number((attitudeTotal /count).toFixed(1)): 0;
    return [selfLearningtAverage,atttitudeAverage,communicationAverage];
  };

  const experienceCounts = {
    react: 0,
    angular: 0,
    node: 0,
  };
  data.forEach((item) => {
    const experience = item.relevantExperience;
    if (Object.prototype.hasOwnProperty.call(experienceCounts, experience)) {
      experienceCounts[experience] += 1;
    }
  });
  const experienceCountsArray = Object.values(experienceCounts);

  let selectedcount = 0;
  data.forEach((item) => {
    if (item.radiogroup === 'yes') {
      selectedcount += 1;
    }
  });

  const notSelectedCandidate = Number(totalNoOfCandidate - selectedcount);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const pData = calculateAverageRating(data);
  const commonskillData = calculateCommonSkillAverage();
  const xLabels = ['React',  'javascript','hooks','typescript','redux'];
  const commonLabel = ['selfLearning','attitude','communication'];

 

  
const convertedData = pData.map((value) => Number(value));
const commonskillUpdatedData = commonskillData.map((value) => Number(value))
  return (
    <div style={{ marginLeft: '100px', marginRight: '100px', textAlign: 'centre' }}>
      <h2>Candidate Statistics</h2>
      <Slider {...settings}>
        <div>
          <Grid container spacing={2}>
            <Grid xs={6} sm={12} md={6} item>
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
                      data: experienceCountsArray, label: 'Average Rating for Primary Skills',
                    },
                  ]}
                  width={640}
                  height={300}
                />
              </Card>
            </Grid>
            <Grid xs={6} sm={12} md={6} item>
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
                  width={550}
                  height={300}
                />
              </Card>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid xs={6} sm={12} md={6} item>
              <Card>
                <LineChart
                  width={600}
                  height={300}
                  series={[
                    { data: convertedData, label: 'Average Rating',area: true },
                  ]}
                 
                  xAxis={[{ scaleType: 'point', data: xLabels }]}
                />
              </Card>
            </Grid>
            <Grid xs={6} sm={12} md={6} item>
            <Card>
                <LineChart
                  width={600}
                  height={300}
                  series={[
                    { data: commonskillUpdatedData, label: 'CommonSkill Average Rating' }
                  ]}
                  xAxis={[{ scaleType: 'point', data: commonLabel }]}
                />
              </Card>
            </Grid>
          </Grid>
        </div>
      </Slider>
    </div>
  );
}

export default EmployeeChart;
