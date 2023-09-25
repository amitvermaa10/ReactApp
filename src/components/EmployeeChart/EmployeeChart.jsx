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
      reactTotal += interview.react;
      hooksTotal += interview.hooks;
      javascriptTotal += interview.javascript;
      typescriptTotal += interview.typescript;
      reduxTotal += interview.redux;
      count += 1;
    });
    const reactAverage = (reactTotal / count).toFixed(1);
    const hooksAverage = (hooksTotal / count).toFixed(1);
    const javascriptAverage = (javascriptTotal / count).toFixed(1);
    const typescriptAverage = (typescriptTotal / count).toFixed(1);
    const reduxAverage = (reduxTotal / count).toFixed(1);
    return [reactAverage, javascriptAverage,hooksAverage,typescriptAverage,reduxAverage];
  };

  const calculateCommonSkillAverage = () => {
    let communicationTotal = 0;
    let attitudeTotal = 0;
    let selfLearningTotal = 0;
    let countNew = 0;
    data.forEach((interview) => {
      communicationTotal += interview.communication;
      selfLearningTotal += interview.selflearning;
      attitudeTotal += interview.attitude;
      countNew += 1;
    });
    const communicationAverage = (communicationTotal / countNew).toFixed(1);
    const selfLearningtAverage = (selfLearningTotal / countNew).toFixed(1);
    const atttitudeAverage = (attitudeTotal /countNew).toFixed(1);

    console.log("&&communicationAverage",communicationTotal,attitudeTotal,countNew);
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
  const commonLabel = ['selfLearning','communication','attitude'];
  return (
    <div style={{ marginLeft: '100px', marginRight: '100px', textAlign: 'centre' }}>
      <h2>Candidate Statistics</h2>
      <Slider {...settings}>
        <div>
          <Grid container spacing={2}>
            <Grid xs={6} sm={6} md={6} item>
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
            <Grid xs={6} sm={6} md={6} item>
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
        <div>
          <Grid container spacing={2}>
            <Grid xs={6} sm={6} md={6} item>
              <Card>
                <LineChart
                  width={600}
                  height={300}
                  series={[
                    { data: pData, label: 'Average Rating',area: true },
                  ]}
                 
                  xAxis={[{ scaleType: 'point', data: xLabels }]}
                />
              </Card>
            </Grid>
            <Grid xs={6} sm={6} md={6} item>
            <Card>
                <LineChart
                  width={600}
                  height={300}
                  series={[
                    { data: commonskillData, label: 'CommonSkill Average Rating' }
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
