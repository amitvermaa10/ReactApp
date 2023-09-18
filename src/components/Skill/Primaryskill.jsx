import React from 'react';
import {
  Grid,
  DialogTitle,
  DialogContent,
  Rating,
  Typography,
  Divider,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import './Primaryskill.scss';

function Primaryskill({ inputData, isNewMode, inputFromDetail, datevalue, ondateChange ,inputFromDetailUpdated}) {
  return (
    <div>
      <header>
       <h3 style={{paddingLeft:'30px'}}>Skill Assessment Form </h3>
      </header>
      <div>
        <DialogContent>
          <div className="select-field">
            <Grid container spacing={3}>
              <Grid xs={4} sm={4} item style={{ marginTop: '7px' }}>
                <TextField
                  label="Interviewer Name"
                  name="interviewerName"
                  placeholder="Interviewer Name"
                  value={inputData?.interviewerName}
                  variant="outlined"
                  required
                  onChange={(e) => inputFromDetailUpdated(e)}
                  disabled={!isNewMode}
                />
              </Grid>
              <Grid xs={4} sm={4} item style={{ paddingLeft: '20px' }}>
                <div className="datePickerStyle">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker
                        value={dayjs(datevalue)}
                        onChange={ondateChange}
                        name="datepicker"
                        disabled={!isNewMode}
                        slotProps={{
                          textField: {
                            error: false,
                          },
                        }}
                        disableFuture
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </Grid>
              <Grid xs={4} sm={4} item style={{ marginTop: '7px' }}>
                <TextField
                  label="Candidate Name"
                  name="candidateName"
                  placeholder="Candidate Name"
                  value={inputData.candidateName}
                  variant="outlined"
                  required
                  onChange={(e) => inputFromDetailUpdated(e)}
                  disabled={!isNewMode}
                />
              </Grid>
            </Grid>
          </div>
          <div className="select-field">
            <Grid container spacing={2}>
              <Grid xs={4} sm={4} item>
                <FormControl variant="outlined" sx={{ minWidth: 225 }}>
                  <InputLabel>Interview round</InputLabel>
                  <Select
                    name="interviewRound"
                    label="Interview"
                    onChange={(e) => inputFromDetail(e)}
                    value={inputData.interviewRound}
                    defaultValue=""
                    disabled={!isNewMode}
                  >
                    <MenuItem value="first">First</MenuItem>
                    <MenuItem value="second">Second</MenuItem>
                    <MenuItem value="final">Final</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid xs={4} sm={4} item>
                <TextField
                  label="Overall Experience"
                  name="overallExperience"
                  placeholder="Overall Experience"
                  type="number"
                  variant="outlined"
                  required
                  value={inputData.overallExperience}
                  onChange={(e) => inputFromDetail(e)}
                  InputProps={{
                    inputProps: { min: 3, max: 10 },
                    inputMode: 'numeric',
                  }}
                  fullWidth
                />
              </Grid>
              <Grid xs={4} sm={4} item style={{ paddingLeft: '20px' }}>
                <FormControl variant="outlined" sx={{ minWidth: 225 }}>
                  <InputLabel >
                    Relevant experience
                  </InputLabel>
                  <Select
                    name="relevantExperience"
                    value={inputData.relevantExperience}
                    label="Relevant experience"
                    onChange={(e) => inputFromDetail(e)}
                    defaultValue=""
                  >
                    <MenuItem value="react">React</MenuItem>
                    <MenuItem value="angular">Angular</MenuItem>
                    <MenuItem value="node">Node</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <div className="select-field">
            <Grid container spacing={2}>
              &nbsp;
              <Grid xs={4} sm={4} item>
                <TextField
                  label=" Relevant years"
                  name="years"
                  placeholder="years"
                  type="number"
                  variant="outlined"
                  required
                  value={inputData.years}
                  onChange={(e) => inputFromDetail(e)}
                  inputProps={{ inputMode: 'numeric' }}
                />
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <Divider />
      </div>
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

export default Primaryskill;
