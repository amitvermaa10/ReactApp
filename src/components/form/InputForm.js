import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Select, MenuItem, InputLabel, FormControl, Rating, Typography, Divider, RadioGroup, FormControlLabel, FormLabel, Radio,OutlinedInput } from '@mui/material';
import './InputForm.scss';


function InputForm({ formValueHandler, displayForm, showForm,updateFormHandler,userItem,isview,isEdit }) {

    const newuser = { interviewerName: '', candidateName: '', interviewRound: '', overallExperience:'',relevantExperience:'',html:'',css:'',javascript:'',es6:'',typescript:'',react:'',hooks:'',redux:'',communication:'',attitude:'',selflearning:'',radiogroup:'',interviewFeedback:'',additionalComments:'',trainingRecommended:'',others:''};

     const [inputData, setInputData] = useState(userItem);
    // const [inputData, setInputData] = useState(userItem);
    const isEditableMode = Object.keys(userItem).length > 0;
    const isNewMode = Object.keys(userItem).length > 0;


    console.log("&&&isEditableMode",isEditableMode);

   useEffect(()=>{
    setInputData(userItem)
   },[userItem]);

   



    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = Math.random().toString(16).slice(2);
        let uniqueId = ids.slice(0, 3);
        if(Object.keys(userItem).length ==0){
            alert("its new form")
            formValueHandler({ ...inputData, id: uniqueId })
            // setInputData({ ...inputData, name: '', email: '', age: '' })//need to uncomment
        }
        else{
            alert("its edited form")
            updateFormHandler({...inputData})
            // setInputData({ ...inputData, name: '', email: '', age: '' })//need to uncomment
        }

        displayForm();
    }

    const handleReset = (e) => {
        // setInputData({ ...inputData, name: '', email: '', age: '' })
        setInputData({ ...inputData, ...newuser })
    }

    const handleClickOpen = () => {
        // setOpen(true);
    };

    const handleClose = () => {
        // setOpen(false);
    };

    const handleChange = (event) => {
        // setAge(event.target.value);
    }

    const handleInputRating=(e) =>{
        let value = e.target.value;
        let name = e.target.name;
        if (name === 'html') {
            setInputData({ ...inputData, html: value })
        }
        else if(name ==='css'){
            setInputData({ ...inputData, css: value })
        }
        else if(name ==='javascript'){
            setInputData({ ...inputData, javascript: value })
        }
        else if(name ==='es6'){
            setInputData({ ...inputData, es6: value })
        }
        else if(name ==='typescript'){
            setInputData({ ...inputData, typescript: value })
        }
        else if(name ==='react'){
            setInputData({ ...inputData, react: value })
        }
        else if(name ==='hooks'){
            setInputData({ ...inputData, hooks: value })
        }
        else if(name ==='redux'){
            setInputData({ ...inputData, redux: value })
        }
        else if(name ==='communication'){
            setInputData({ ...inputData, communication: value })
        }
        else if(name ==='attitude'){
            setInputData({ ...inputData, attitude: value })
        }
        else if(name ==='selflearning'){
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
        else if(name ==='overallExperience'){
            setInputData({ ...inputData, overallExperience: value.replace(/[^0-9]/g,'') })
        }
        else if (name === 'relevantExperience') {
            setInputData({ ...inputData, relevantExperience: value })
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

   

    console.log("&&&&setIsView",isview);
    console.log("&&&&setIsEdit",isEdit);

    const checkdisable =(e)=>{
        if(isNewMode){
            return false;
        };
    }

    return (
        <div>
             {/* <Card style={{ maxWidth: 500, margin: "0 auto" }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Name" name="fullname" placeholder="Enter Name" value={inputData.name} variant="outlined" required onChange={(e) => inputFromDetail(e)} disabled={isEditableMode} />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Email" name="email" placeholder="Enter Email" value={inputData.email} variant="outlined" required onChange={(e) => inputFromDetail(e)} />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Age" name="age" placeholder="Enter Age" value={inputData.age} variant="outlined" required onChange={(e) => inputFromDetail(e)} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" fullWidth onClick={(e) => handleSubmit(e)}>Save</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="" variant="contained" fullWidth onClick={() => displayForm()}>Cancel</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="reset" variant="contained" fullWidth onClick={(e) => handleReset(e)}>Reset</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>  */}

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
                                    <TextField label="Interviewer Name" name="interviewerName" placeholder="Interviewer Name" value={inputData.interviewerName} variant="outlined" required onChange={(e) => inputFromDetail(e)} disabled={checkdisable()} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    {/* <TextField label="Name" name="fullname" placeholder="Date" value={inputData.name} variant="outlined" required onChange={(e) => inputFromDetail(e)} /> */}
                                    date picker
                                    <TextField type="date" label="select Date" variant="outlined" placeholder="Date" disabled={isview?false:true}/>
                                </Grid>
                            </Grid>
                        </div>

                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Candidate Name" name="candidateName" placeholder="Candidate Name" value={inputData.candidateName} variant="outlined" required onChange={(e) => inputFromDetail(e)} disabled={checkdisable()} />
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
                                            disabled={isview?true:true}

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
                                    <TextField label="Overall Experience" name="overallExperience" placeholder="Overall Experience" type="number" variant="outlined" required value={inputData.overallExperience} onChange={(e) => inputFromDetail(e)} inputProps={{inputMode:'numeric'}}disabled={isview?true:false} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <FormControl variant="outlined"  sx={{ minWidth: 225 }}>
                                        <InputLabel>Relevant experience</InputLabel>
                                        <Select
                                            name="relevantExperience"
                                            value={inputData.relevantExperience} 
                                            label="Relevant experience"
                                            onChange={(e) => inputFromDetail(e)}
                                            disabled={isview?true:false}
                                        >
                                            <MenuItem value="react">React</MenuItem>
                                            <MenuItem value="angular">Angular</MenuItem>
                                            <MenuItem value="node">Node</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </div>

                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
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
                                    <Rating name="html"   max={5} precision={0.5} value={inputData.html} onChange={(e) => handleInputRating(e)} disabled={isview?true:false}/>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">CSS</Typography>
                                    <Rating name="css"   max={5} precision={0.5} value={inputData.css} onChange={(e) => handleInputRating(e)} disabled={isview?true:false}/>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Javascript</Typography>
                                    <Rating name="javascript"   max={5} precision={0.5} value={inputData.javascript} onChange={(e) => handleInputRating(e)} disabled={isview?true:false}/>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">ES6 Concepts</Typography>
                                    <Rating name="es6"  max={5} precision={0.5} value={inputData.es6}  onChange={(e) => handleInputRating(e)} disabled={isview?true:false}/>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">TypeScript</Typography>
                                    <Rating name="typescript"   max={5} precision={0.5} value={inputData.typescript} onChange={(e) => handleInputRating(e)} disabled={isview?true:false}/>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">React</Typography>
                                    <Rating name="react"   max={5} precision={0.5} value={inputData.react} onChange={(e) => handleInputRating(e)} disabled={isview?true:false}/>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Hooks</Typography>
                                    <Rating name="hooks"   value={inputData.hooks} max={5} precision={0.5} onChange={(e) => handleInputRating(e)} disabled={isview?true:false}/>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Redux</Typography>
                                    <Rating name="redux"   max={5} precision={0.5} value={inputData.redux} onChange={(e) => handleInputRating(e)} disabled={isview?true:false}/>
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
                                    <Rating name="communication" value ={inputData.communication}   max={5} precision={0.5} onChange={(e) => handleInputRating(e)} disabled={isview?true:false}/>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Attitude</Typography>
                                    <Rating name="attitude"   value={inputData.attitude} max={5} precision={0.5} onChange={(e) => handleInputRating(e)} disabled={isview?true:false}/>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Self-Learning</Typography>
                                    <Rating name="selflearning" value={inputData.selflearning}   max={5} precision={0.5} onChange={(e) => handleInputRating(e)} disabled={isview?true:false}/>
                                </Grid>

                            </Grid>
                        </div>
                    </DialogContent>
                    <Divider/>
                </div>
                
                <div>
                    <DialogTitle style={{ 'fontSize': '17px' }}>
                        {"Decision"}
                    </DialogTitle>
                    <DialogContent>
                        {/* <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup> */}

                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <FormControl>
                                        <FormLabel >Selected</FormLabel>
                                        <RadioGroup row name="radiogroup" value={inputData.radiogroup} onChange={(e) => inputFromDetail(e)} >
                                            <FormControlLabel value="yes" control={<Radio />} label="yes" disabled={isview?true:true}/>
                                            <FormControlLabel value="no" control={<Radio />} label="No" disabled={isview?true:true}/>

                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                <TextField label="Additional Comments" name="additionalComments"  placeholder="Additional Comments" value={inputData.additionalComments} variant="outlined"  onChange={(e) => inputFromDetail(e)} disabled={isview?true:true}/>
                                </Grid>

                            </Grid>
                        </div>

                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Interview Feedback" name="interviewFeedback" multiline rows={4} placeholder="Interview Feedback" value={inputData.interviewFeedback} variant="outlined" onChange={(e) => inputFromDetail(e)} disabled={isview?true:false}/>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                <TextField label="Training Recommended" name="trainingRecommended" multiline rows={4} placeholder="Training Recommended" value={inputData.trainingRecommended} variant="outlined" onChange={(e) => inputFromDetail(e)} disabled={isview?true:true}/>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="others" name="others" multiline rows={4} placeholder="Others" value={inputData.others} variant="outlined" onChange={(e) => inputFromDetail(e)} disabled={isview?true:true}/>
                                </Grid>
                              
                            </Grid>
                        </div>
                    </DialogContent>
                </div>
                /////////////
                <DialogActions>
                <Button type="submit"onClick={(e) => handleSubmit(e)}>Save</Button>
                    <Button onClick={(e) => handleReset(e)}>Reset</Button>
                    <Button onClick={() => displayForm()}>Cancel</Button>
                </DialogActions>
            </Dialog>
           
            
        </div>
    )
};

export default InputForm;