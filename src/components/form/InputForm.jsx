import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, Button } from '@mui/material';
import moment from 'moment/moment';
import './InputForm.scss';
import Primaryskill from '../Skill/Primaryskill.jsx';
import Decision from '../decision/Decision.jsx';
import FormView from './FormView.jsx';

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
    if (
      inputData.candidateName !== '' &&
      inputData.interviewerName !== '' &&
      inputData.overallExperience !== '' &&
      inputData.radiogroup !== ''
    ) {
      e.preventDefault();
      const ids = Math.random().toString(16).slice(2);
      const uniqueId = ids.slice(0, 3);
      if (isNewMode) {
        formValueHandler({ ...inputData, id: uniqueId });
      } else {
        updateFormHandler({ ...inputData });
      }
      displayForm();
    }
  };
  const inputFromDetail = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
    if (name === 'overallExperience' || name === 'years') {
      const inputExperience = value.replace(/[^0-9]/g, '');
      let numericValue = parseInt(inputExperience, 10);
      numericValue = Math.max(0, Math.min(20, numericValue));
      setInputData({ ...inputData, [name]: numericValue.toString() });
    }
  };

  const inputFromDetailUpdated = (e) => {
    const { name } = e.target;
    const formattedValue = e.target.value.replace(/[^A-Za-z]/g, '').slice(0, 20);
    setInputData({ ...inputData, [name]: formattedValue });
  };

  const ondateChange = (date) => {
    const test = moment(date.$d).format('YYYY-MM-DD');
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
        {isview && (
          <div>
            <FormView inputData={inputData} displayForm={displayForm} />
          </div>
        )}
        {!isview && (
          <div>
            <Primaryskill
              inputData={inputData}
              isNewMode={isNewMode}
              isview={isview}
              inputFromDetail={inputFromDetail}
              datevalue={datevalue}
              ondateChange={ondateChange}
              inputFromDetailUpdated={inputFromDetailUpdated}
              displayForm={displayForm}
            />

            <Decision
              inputData={inputData}
              isview={isview}
              isNewMode={isNewMode}
              inputFromDetail={inputFromDetail}
            />
          </div>
        )}

        <div className="dialogActionsNew">
          <DialogActions>
            <Button onClick={() => displayForm()}>Close</Button>
            {!isview && (
              <div>
                <Button type="submit" onClick={(e) => handleSubmit(e)} disabled={isview}>
                  Save
                </Button>
                <Button onClick={(e) => handleClick(e)} disabled={!isNewMode}>
                  Reset
                </Button>
              </div>
            )}
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
export default InputForm;
