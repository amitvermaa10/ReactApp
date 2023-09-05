import React, { useEffect, useState } from 'react';
import {
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
} from '@mui/material';
import moment from 'moment/moment';
import './InputForm.scss';
import Primaryskill from '../Skill/Primaryskill';

function InputForm({
  formValueHandler,
  displayForm,
  showForm,
  updateFormHandler,
  userItem,
  isview,
}) {
  const newuser = {
    interviewerName: '',
    candidateName: '',
    interviewRound: '',
    overallExperience: '',
    relevantExperience: '',
    years: '',
    html: '',
    css: '',
    javascript: '',
    es6: '',
    typescript: '',
    react: '',
    hooks: '',
    redux: '',
    communication: '',
    attitude: '',
    selflearning: '',
    radiogroup: '',
    interviewFeedback: '',
    additionalComments: '',
    trainingRecommended: '',
    others: '',
    datepicker: null,
  };

  const [inputData, setInputData] = useState(userItem);
  const isEditableMode = userItem.interviewerName !== '';
  const isNewMode = !isEditableMode;
  const [datevalue, setDateValue] = useState(null);

  useEffect(() => {
    setInputData(userItem);
  }, [userItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = Math.random().toString(16).slice(2);
    let uniqueId = ids.slice(0, 3);
    if (isNewMode) {
      alert('its new form');
      formValueHandler({ ...inputData, id: uniqueId });
    } else {
      alert('its edited form');
      updateFormHandler({ ...inputData });
    }
    displayForm();
  };

  const handleReset = (e) => {
    setInputData({ ...inputData, ...newuser });
  };

  const handleInputRating = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === 'html') {
      setInputData({ ...inputData, html: value });
    } else if (name === 'css') {
      setInputData({ ...inputData, css: value });
    } else if (name === 'javascript') {
      setInputData({ ...inputData, javascript: value });
    } else if (name === 'es6') {
      setInputData({ ...inputData, es6: value });
    } else if (name === 'typescript') {
      setInputData({ ...inputData, typescript: value });
    } else if (name === 'react') {
      setInputData({ ...inputData, react: value });
    } else if (name === 'hooks') {
      setInputData({ ...inputData, hooks: value });
    } else if (name === 'redux') {
      setInputData({ ...inputData, redux: value });
    } else if (name === 'communication') {
      setInputData({ ...inputData, communication: value });
    } else if (name === 'attitude') {
      setInputData({ ...inputData, attitude: value });
    } else if (name === 'selflearning') {
      setInputData({ ...inputData, selflearning: value });
    }
  };

  const inputFromDetail = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === 'interviewerName') {
      setInputData({ ...inputData, interviewerName: value });
    } else if (name === 'candidateName') {
      setInputData({ ...inputData, candidateName: value });
    } else if (name === 'interviewRound') {
      setInputData({ ...inputData, interviewRound: value });
    } else if (name === 'overallExperience') {
      setInputData({ ...inputData, overallExperience: value.replace(/[^0-9]/g, '') });
    } else if (name === 'relevantExperience') {
      setInputData({ ...inputData, relevantExperience: value });
    } else if (name === 'years') {
      setInputData({ ...inputData, years: value });
    } else if (name === 'radiogroup') {
      setInputData({ ...inputData, radiogroup: value });
    } else if (name === 'interviewFeedback') {
      setInputData({ ...inputData, interviewFeedback: value });
    } else if (name === 'additionalComments') {
      setInputData({ ...inputData, additionalComments: value });
    } else if (name === 'trainingRecommended') {
      setInputData({ ...inputData, trainingRecommended: value });
    } else if (name === 'others') {
      setInputData({ ...inputData, others: value });
    }
  };

  const ondateChange = (date) => {
    let test = moment(date.$d).format('YYYY-MM-DD');
    setInputData({ ...inputData, datepicker: test });
    setDateValue(test);
  };

  useEffect(() => {
    setDateValue(inputData.datepicker);
  }, [inputData.datepicker]);

  return (
    <div>
      <Dialog
        open={showForm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '1150px',
          },
        }}
      >
        <Primaryskill
          inputData={inputData}
          isNewMode={isNewMode}
          isview={isview}
          handleInputRating={handleInputRating}
          inputFromDetail={inputFromDetail}
          datevalue={datevalue}
          ondateChange={ondateChange}
        />
        <div>
          <DialogTitle style={{ fontSize: '17px' }}>{'Decision'}</DialogTitle>
          <DialogContent>
            <div className="select-field">
              <Grid container spacing={2}>
                <Grid xs={4} sm={4} item>
                  <FormControl>
                    <FormLabel>Selected</FormLabel>
                    <RadioGroup
                      row
                      name="radiogroup"
                      value={inputData.radiogroup}
                      onChange={(e) => inputFromDetail(e)}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                        disabled={isNewMode ? false : isview ? true : true}
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                        disabled={isNewMode ? false : isview ? true : true}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid xs={4} sm={4} item>
                  <TextField
                    label="Interview Feedback"
                    name="interviewFeedback"
                    multiline
                    rows={4}
                    placeholder="Interview Feedback"
                    value={inputData.interviewFeedback}
                    variant="outlined"
                    onChange={(e) => inputFromDetail(e)}
                    disabled={isNewMode ? false : isview ? true : false}
                  />
                </Grid>

                <Grid xs={4} sm={4} item>
                  <TextField
                    label="Training Recommended"
                    name="trainingRecommended"
                    multiline
                    rows={4}
                    placeholder="Training Recommended"
                    value={inputData.trainingRecommended}
                    variant="outlined"
                    onChange={(e) => inputFromDetail(e)}
                    disabled={isNewMode ? false : isview ? true : true}
                  />
                </Grid>
              </Grid>
            </div>
            <div className="select-field">
              <Grid container spacing={2}>
                <Grid xs={4} sm={4} item>
                  <TextField
                    label="others"
                    name="others"
                    multiline
                    rows={4}
                    placeholder="Others"
                    value={inputData.others}
                    variant="outlined"
                    onChange={(e) => inputFromDetail(e)}
                    disabled={isNewMode ? false : isview ? true : true}
                  />
                </Grid>
                <Grid xs={4} sm={4} item>
                  <TextField
                    label="Additional Comments"
                    name="additionalComments"
                    placeholder="Additional Comments"
                    value={inputData.additionalComments}
                    variant="outlined"
                    onChange={(e) => inputFromDetail(e)}
                    disabled={isNewMode ? false : isview ? true : true}
                  />
                </Grid>
              </Grid>
            </div>
          </DialogContent>
        </div>
        <DialogActions>
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            Save
          </Button>
          <Button onClick={(e) => handleReset(e)} disabled={isEditableMode}>
            Reset
          </Button>
          <Button onClick={() => displayForm()}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default InputForm;
