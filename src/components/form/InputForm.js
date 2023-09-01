import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Select, MenuItem, InputLabel, FormControl, Rating, Typography, Divider, RadioGroup, FormControlLabel, FormLabel, Radio, OutlinedInput } from '@mui/material';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from "moment/moment";

import './InputForm.scss';


function InputForm({ formValueHandler, displayForm, showForm, updateFormHandler, userItem, isview, isEdit }) {

    const newuser = { interviewerName: '', candidateName: '', interviewRound: '', overallExperience: '', relevantExperience: '', years:'',html: '', css: '', javascript: '', es6: '', typescript: '', react: '', hooks: '', redux: '', communication: '', attitude: '', selflearning: '', radiogroup: '', interviewFeedback: '', additionalComments: '', trainingRecommended: '', others: '' , datepicker:null};

    const [inputData, setInputData] = useState(userItem);
    const isEditableMode = Object.keys(userItem).length > 0;
    const isNewMode = !isEditableMode;

     const [datevalue,setDateValue] = useState(null);
    // const [selectedDate, setSelectedDate] = React.useState(null);



    useEffect(() => {
        setInputData(userItem)
    }, [userItem]);





    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = Math.random().toString(16).slice(2);
        let uniqueId = ids.slice(0, 3);
        if (Object.keys(userItem).length == 0) {
            // alert("its new form",inputData)
            console.log("inputDatainputData", inputData)
            formValueHandler({ ...inputData, id: uniqueId })
            // setInputData({ ...inputData, name: '', email: '', age: '' })//need to uncomment
        }
        else {
            console.log("inputDatainputData 123", inputData)
           // alert("its edited form")
            updateFormHandler({ ...inputData})
            // setInputData({ ...inputData, name: '', email: '', age: '' })//need to uncomment
        }

        displayForm();
    }

    const handleReset = (e) => {
        setInputData({ ...inputData, ...newuser })
    }

    const handleInputRating = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        if (name === 'html') {
            setInputData({ ...inputData, html: value })
        }
        else if (name === 'css') {
            setInputData({ ...inputData, css: value })
        }
        else if (name === 'javascript') {
            setInputData({ ...inputData, javascript: value })
        }
        else if (name === 'es6') {
            setInputData({ ...inputData, es6: value })
        }
        else if (name === 'typescript') {
            setInputData({ ...inputData, typescript: value })
        }
        else if (name === 'react') {
            setInputData({ ...inputData, react: value })
        }
        else if (name === 'hooks') {
            setInputData({ ...inputData, hooks: value })
        }
        else if (name === 'redux') {
            setInputData({ ...inputData, redux: value })
        }
        else if (name === 'communication') {
            setInputData({ ...inputData, communication: value })
        }
        else if (name === 'attitude') {
            setInputData({ ...inputData, attitude: value })
        }
        else if (name === 'selflearning') {
            setInputData({ ...inputData, selflearning: value })
        }

    }


    const inputFromDetail = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        if (name === 'interviewerName') {
            setInputData({ ...inputData, interviewerName: value })
        }
        else if (name === 'candidateName') {
            setInputData({ ...inputData, candidateName: value })
        }
        else if (name === 'interviewRound') {
            setInputData({ ...inputData, interviewRound: value })
        }
        else if (name === 'overallExperience') {
            setInputData({ ...inputData, overallExperience: value.replace(/[^0-9]/g, '') })
        }
        else if (name === 'relevantExperience') {
            setInputData({ ...inputData, relevantExperience: value })
        }
        else if (name === 'years') {
            setInputData({ ...inputData, years: value })
        }
        else if (name === 'radiogroup') {
            setInputData({ ...inputData, radiogroup: value })
        }
        else if (name === 'interviewFeedback') {
            setInputData({ ...inputData, interviewFeedback: value })
        }
        else if (name === 'additionalComments') {
            setInputData({ ...inputData, additionalComments: value })
        }
        else if (name === 'trainingRecommended') {
            setInputData({ ...inputData, trainingRecommended: value })
        }
        else if (name === 'others') {
            setInputData({ ...inputData, others: value })
        }
    };

    const ondateChange=(date)=>{
    console.log("sssssssssssssssssss",date.format('dd/MM/yyyy'))
   //let test = moment(date).format("DD/MM/YYYY")
   let test  = moment(date.$d, "DD/MM/YYYY");
   console.log("testtesttest", test)
    // inputData.datepicker = e;
    // inputData.test =e;
    // console.log("temp",inputData);
    // setDateValue(e.$d);
    console.log("inputDatainputDatainputDataccccc", inputData)
    setInputData({...inputData, datepicker: test})
    setDateValue(test)

    }
     console.log("&&&value",datevalue);
     console.log("&&&&inputData",inputData);
    
    return (
        <div>
            <Dialog
                open={showForm}
                //  onClose={displayForm}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div>
                    <DialogTitle >
                        {"Skill Assessment Form"}
                    </DialogTitle>
                    <DialogContent>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Interviewer Name" name="interviewerName" placeholder="Interviewer Name" value={inputData.interviewerName} variant="outlined" required onChange={(e) => inputFromDetail(e)} disabled={isNewMode ? false : isview ? true : true} />
                                </Grid>
                                <Grid xs={12} sm={6} item>

                                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker 
                                            // value={datevalue}
                                            
                                                onChange={ondateChange}
                                               
                                                renderInput ={(params)=><TextField{...params}/>}
                                                name="datepicker"
                                                //format="DD-MM-YYYY"

                                                format={'MM-DD-YYYY'}
                                                value={moment(datevalue, 'MM-DD-YYYY')}

                                                 />
                                        </DemoContainer>
                                    </LocalizationProvider> 
                                    

                                </Grid>
                            </Grid>
                        </div>

                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Candidate Name" name="candidateName" placeholder="Candidate Name" value={inputData.candidateName} variant="outlined" required onChange={(e) => inputFromDetail(e)} disabled={isNewMode ? false : isview ? true : true} />
                                </Grid>

                                <Grid xs={12} sm={6} item>
                                    <FormControl variant="outlined" sx={{ minWidth: 225 }}>
                                        <InputLabel>Interview round</InputLabel>
                                        <Select
                                            name="interviewRound"
                                            //    value={inputData.age} 
                                            label="Interview"
                                            // onChange={handleChange}
                                            onChange={(e) => inputFromDetail(e)}
                                            value={inputData.interviewRound}
                                            defaultValue=""
                                            disabled={isNewMode ? false : isview ? true : true}

                                        >
                                            <MenuItem value="first">first</MenuItem>
                                            <MenuItem value="second">Second</MenuItem>
                                            <MenuItem value="final">Final</MenuItem>
                                        </Select>
                                    </FormControl>

                                </Grid>

                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Overall Experience" name="overallExperience" placeholder="Overall Experience" type="number" variant="outlined" required value={inputData.overallExperience} onChange={(e) => inputFromDetail(e)} inputProps={{ inputMode: 'numeric' }} disabled={isNewMode ? false : isview ? true : false} />
                                </Grid>
                                <Grid xs={12} sm={6} item >
                                    <FormControl variant="outlined" sx={{ minWidth: 150 }}>
                                        <InputLabel>Relevant experience</InputLabel>
                                        <Select
                                            name="relevantExperience"
                                            value={inputData.relevantExperience}
                                            label="Relevant experience"
                                            onChange={(e) => inputFromDetail(e)}
                                            defaultValue=""
                                            disabled={isview ? true : false}
                                        >
                                            <MenuItem value="react">React</MenuItem>
                                            <MenuItem value="angular">Angular</MenuItem>
                                            <MenuItem value="node">Node</MenuItem>
                                        </Select>
                                    </FormControl>
                                    &nbsp;
                                    
                                    <TextField style={{'width':'70px'}} label="years" name="years" placeholder="years" type="number" variant="outlined" required value={inputData.years} onChange={(e) => inputFromDetail(e)} inputProps={{ inputMode: 'numeric' }} disabled={isNewMode ? false : isview ? true : false} />
                                   
                                </Grid>
                            </Grid>
                        </div>
                    </DialogContent>
                    <Divider />
                </div>

                <div>
                    <DialogTitle style={{ 'fontSize': '17px' }}>
                        {"Primary Skill evaluated"}
                    </DialogTitle>
                    <DialogContent>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">HTML</Typography>
                                    <Rating name="html" max={5} precision={0.5} value={parseInt(inputData.html)} onChange={(e) => handleInputRating(e)} disabled={isNewMode ? false : isview ? true : false} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">CSS</Typography>
                                    <Rating name="css" max={5} precision={0.5} value={parseInt(inputData.css)} onChange={(e) => handleInputRating(e)} disabled={isNewMode ? false : isview ? true : false} />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Javascript</Typography>
                                    <Rating name="javascript" max={5} precision={0.5} value={parseInt(inputData.javascript)} onChange={(e) => handleInputRating(e)} disabled={isNewMode ? false : isview ? true : false} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">ES6 Concepts</Typography>
                                    <Rating name="es6" max={5} precision={0.5} value={parseInt(inputData.es6)} onChange={(e) => handleInputRating(e)} disabled={isNewMode ? false : isview ? true : false} />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">TypeScript</Typography>
                                    <Rating name="typescript" max={5} precision={0.5} value={parseInt(inputData.typescript)} onChange={(e) => handleInputRating(e)} disabled={isNewMode ? false : isview ? true : false} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">React</Typography>
                                    <Rating name="react" max={5} precision={0.5} value={parseInt(inputData.react)} onChange={(e) => handleInputRating(e)} disabled={isNewMode ? false : isview ? true : false} />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Hooks</Typography>
                                    <Rating name="hooks" value={parseInt(inputData.hooks)} max={5} precision={0.5} onChange={(e) => handleInputRating(e)} disabled={isNewMode ? false : isview ? true : false} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Redux</Typography>
                                    <Rating name="redux" max={5} precision={0.5} value={parseInt(inputData.redux)} onChange={(e) => handleInputRating(e)} disabled={isNewMode ? false : isview ? true : false} />
                                </Grid>
                            </Grid>
                        </div>
                    </DialogContent>
                    <Divider />
                </div>
                <div>
                    <DialogTitle style={{ 'fontSize': '17px' }}>
                        {"Common Skills Evaluated"}
                    </DialogTitle>
                    <DialogContent>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Communication</Typography>
                                    <Rating name="communication" value={parseInt(inputData.communication)} max={5} precision={0.5} onChange={(e) => handleInputRating(e)} disabled={isNewMode ? false : isview ? true : false} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Attitude</Typography>
                                    <Rating name="attitude" value={parseInt(inputData.attitude)} max={5} precision={0.5} onChange={(e) => handleInputRating(e)} disabled={isNewMode ? false : isview ? true : false} />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Self-Learning</Typography>
                                    <Rating name="selflearning" value={parseInt(inputData.selflearning)} max={5} precision={0.5} onChange={(e) => handleInputRating(e)} disabled={isNewMode ? false : isview ? true : false} />
                                </Grid>

                            </Grid>
                        </div>
                    </DialogContent>
                    <Divider />
                </div>

                <div>
                    <DialogTitle style={{ 'fontSize': '17px' }}>
                        {"Decision"}
                    </DialogTitle>
                    <DialogContent>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <FormControl>
                                        <FormLabel >Selected</FormLabel>
                                        <RadioGroup row name="radiogroup" value={inputData.radiogroup} onChange={(e) => inputFromDetail(e)} >
                                            <FormControlLabel value="yes" control={<Radio />} label="yes" disabled={isNewMode ? false : isview ? true : true} />
                                            <FormControlLabel value="no" control={<Radio />} label="No" disabled={isNewMode ? false : isview ? true : true} />

                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Additional Comments" name="additionalComments" placeholder="Additional Comments" value={inputData.additionalComments} variant="outlined" onChange={(e) => inputFromDetail(e)} disabled={isNewMode ? false : isview ? true : true} />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Interview Feedback" name="interviewFeedback" multiline rows={4} placeholder="Interview Feedback" value={inputData.interviewFeedback} variant="outlined" onChange={(e) => inputFromDetail(e)} disabled={isNewMode ? false : isview ? true : false} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Training Recommended" name="trainingRecommended" multiline rows={4} placeholder="Training Recommended" value={inputData.trainingRecommended} variant="outlined" onChange={(e) => inputFromDetail(e)} disabled={isNewMode ? false : isview ? true : true} />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="others" name="others" multiline rows={4} placeholder="Others" value={inputData.others} variant="outlined" onChange={(e) => inputFromDetail(e)} disabled={isNewMode ? false : isview ? true : true} />
                                </Grid>

                            </Grid>
                        </div>
                    </DialogContent>
                </div>
                <DialogActions>
                    <Button type="submit" onClick={(e) => handleSubmit(e)}>Save</Button>
                    <Button onClick={(e) => handleReset(e)} disabled={isview}>Reset</Button>
                    <Button onClick={() => displayForm()}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
};

export default InputForm;