import React from 'react';
import {
  Grid,
  TextField,
  DialogTitle,
  DialogContent,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
} from '@mui/material';

function Decision({ inputData, isview, isNewMode, inputFromDetail }) {
  return (
    <div>
      <DialogTitle style={{ fontSize: '17px' }}>{'Decision'}</DialogTitle>
      <DialogContent>
        <div className="select-field">
          <Grid container spacing={2}>
            <Grid xs={4} sm={4} item>
              <TextField
                label="Interview Feedback"
                name="interviewFeedback"
                multiline
                rows={2}
                placeholder="Interview Feedback"
                value={inputData.interviewFeedback}
                variant="outlined"
                onChange={(e) => inputFromDetail(e)}
                disabled={isNewMode ? false : isview ? true : false}
                sx={{
                  '& fieldset': { border: isview ? 'none' : '' },
                }}
                inputProps={{ style: { fontSize: isview ? 20 : '' } }} // font size of input text
                inputlabelprops={{ style: { fontSize: isview ? 20 : '' } }}
              />
            </Grid>
            <Grid xs={4} sm={4} item>
              <TextField
                label="Training Recommended"
                name="trainingRecommended"
                multiline
                rows={2}
                placeholder="Training Recommended"
                value={inputData.trainingRecommended}
                variant="outlined"
                onChange={(e) => inputFromDetail(e)}
                disabled={isNewMode ? false : isview ? true : true}
                sx={{
                  '& fieldset': { border: isview ? 'none' : '' },
                }}
                inputProps={{ style: { fontSize: isview ? 20 : '' } }} // font size of input text
                inputlabelprops={{ style: { fontSize: isview ? 20 : '' } }}
              />
            </Grid>
            <Grid xs={4} sm={4} item>
              <TextField
                label="others"
                name="others"
                multiline
                rows={2}
                placeholder="Others"
                value={inputData.others}
                variant="outlined"
                onChange={(e) => inputFromDetail(e)}
                disabled={isNewMode ? false : isview ? true : true}
                sx={{
                  '& fieldset': { border: isview ? 'none' : '' },
                }}
                inputProps={{ style: { fontSize: isview ? 20 : '' } }} // font size of input text
                inputlabelprops={{ style: { fontSize: isview ? 20 : '' } }}
              />
            </Grid>
          </Grid>
        </div>
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
                label="Additional Comments"
                name="additionalComments"
                placeholder="Additional Comments"
                value={inputData.additionalComments}
                variant="outlined"
                onChange={(e) => inputFromDetail(e)}
                disabled={isNewMode ? false : isview ? true : true}
                sx={{
                  '& fieldset': { border: isview ? 'none' : '', minWidth: 140 },
                }}
                inputProps={{ style: { fontSize: isview ? 20 : '' } }} // font size of input text
                inputlabelprops={{ style: { fontSize: isview ? 20 : '' } }}
              />
            </Grid>
          </Grid>
        </div>
      </DialogContent>
    </div>
  );
}

export default Decision;
