import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, Button } from '@mui/material';
import moment from 'moment/moment';
import './InputForm.scss';
import Primaryskill from '../Skill/Primaryskill';
import Decision from '../decision/Decision';

function InputForm({
  formValueHandler,
  displayForm,
  showForm,
  updateFormHandler,
  userItem,
  isview,
  handleClick,
}) {
  const [inputData, setInputData] = useState(userItem);
  const isEditableMode = userItem.interviewerName !== '';
  const isNewMode = !isEditableMode;
  const [datevalue, setDateValue] = useState(null);

  useEffect(() => {
    setInputData(userItem);
  }, [userItem]);

  const handleSubmit = (e) => {
    console.log('&&&&&&inputData', inputData);
    if (
      inputData.candidateName !== '' &&
      inputData.interviewerName !== '' &&
      inputData.overallExperience !== '' &&
      inputData.radiogroup !== ''
    ) {
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
    }
  };
  const inputFromDetail = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setInputData({
      ...inputData,
      [name]: value,
    });
    if (name === 'overallExperience') {
      setInputData({ ...inputData, overallExperience: value.replace(/[^0-9]/g, '') });
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
        <div className="dialogActions">
          <DialogActions>
            <Button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              disabled={isNewMode ? false : isview ? true : false}
            >
              Save
            </Button>
            <Button
              onClick={(e) => handleClick(e)}
              disabled={isNewMode ? false : isview ? true : false}
            >
              Reset
            </Button>
            <Button onClick={() => displayForm()}>Cancel</Button>
          </DialogActions>
        </div>
        <Primaryskill
          inputData={inputData}
          isNewMode={isNewMode}
          isview={isview}
          inputFromDetail={inputFromDetail}
          datevalue={datevalue}
          ondateChange={ondateChange}
        />

        <Decision
          inputData={inputData}
          isview={isview}
          isNewMode={isNewMode}
          inputFromDetail={inputFromDetail}
        />
      </Dialog>
    </div>
  );
}
export default InputForm;
