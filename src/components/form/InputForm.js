import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Select, MenuItem, InputLabel, FormControl, Rating, Typography, Divider, RadioGroup, FormControlLabel, FormLabel, Radio,OutlinedInput } from '@mui/material';
import './InputForm.scss';


function InputForm({ formValueHandler, displayForm, showForm }) {
    const [inputData, setInputData] = useState({ name: '', email: '', age: '' })

    const inputFromDetail = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        if (name === 'fullname') {
            setInputData({ ...inputData, name: value })
        }
        else if (name === 'email') {
            setInputData({ ...inputData, email: value })
        }
        else if (name === 'age') {
            setInputData({ ...inputData, age: value })
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = Math.random().toString(16).slice(2);
        let uniqueId = ids.slice(0, 3);
        formValueHandler({ ...inputData, id: uniqueId })
        setInputData({ ...inputData, name: '', email: '', age: '' })
    }

    const handleReset = (e) => {
        setInputData({ ...inputData, name: '', email: '', age: '' })
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

    const ratingDetail=(e) =>{
      console.log("&&&&&e",e.target.name,e.target.value);
    }

    console.log("&&&&&&&&showForm", showForm);
    return (
        <div>
            {/* <Card style={{ maxWidth: 500, margin: "0 auto" }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Name" name="fullname" placeholder="Enter Name" value={inputData.name} variant="outlined" required onChange={(e) => inputFromDetail(e)} />
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
            </Card> */}

            <Dialog
                open={showForm}
                // onClose={displayForm}
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
                                    <TextField label="Interviewer Name" name="InterviewerName" placeholder="Interviewer Name" value={inputData.name} variant="outlined" required onChange={(e) => inputFromDetail(e)} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    {/* <TextField label="Name" name="fullname" placeholder="Date" value={inputData.name} variant="outlined" required onChange={(e) => inputFromDetail(e)} /> */}
                                    date picker
                                </Grid>
                            </Grid>
                        </div>

                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Candidate Name" name="Candidate Name" placeholder="Candidate Name" value={inputData.name} variant="outlined" required onChange={(e) => inputFromDetail(e)} />
                                </Grid>

                                <Grid xs={12} sm={6} item>
                                    <FormControl variant="outlined" sx={{ minWidth: 225 }}>
                                        <InputLabel>Interview round</InputLabel>
                                        <Select
                                            name="Interview round"
                                            //    value={inputData.age} 
                                            label="Interview"
                                            // onChange={handleChange}
                                            onChange={(e) => handleChange(e)}
                                            value={'jjjj'}

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
                                    <TextField label="Overall Experience" name="Experience" placeholder="Overall Experience" type="number" variant="outlined" required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <FormControl variant="outlined"  sx={{ minWidth: 225 }}>
                                        <InputLabel>Relevant experience</InputLabel>
                                        <Select
                                            name="Relevant experience"
                                            //    value={inputData.age} 
                                            label="Relevant experience"
                                            // onChange={handleChange}
                                            onChange={(e) => handleChange(e)}
                                            value={'jjjj'}

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
                                    <Rating name="html" defaultValue={2} max={5} precision={0.5} onChange={(e) => ratingDetail(e)} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">CSS</Typography>
                                    <Rating name="css" defaultValue={2} max={5} precision={0.5} onChange={(e) => ratingDetail(e)} />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Javascript</Typography>
                                    <Rating name="javascript" defaultValue={2} max={5} precision={0.5} onChange={(e) => ratingDetail(e)} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">ES6 Concepts</Typography>
                                    <Rating name="es6" defaultValue={2} max={5} precision={0.5}  onChange={(e) => ratingDetail(e)} />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">TypeScript</Typography>
                                    <Rating name="typescript" defaultValue={2} max={5} precision={0.5} onChange={(e) => ratingDetail(e)} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">React</Typography>
                                    <Rating name="react" defaultValue={2} max={5} precision={0.5} onChange={(e) => ratingDetail(e)} />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Hooks</Typography>
                                    <Rating name="hooks" defaultValue={2} max={5} precision={0.5} onChange={(e) => ratingDetail(e)} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Redux</Typography>
                                    <Rating name="redux" defaultValue={2} max={5} precision={0.5} onChange={(e) => ratingDetail(e)} />
                                </Grid>
                            </Grid>
                        </div>
                    </DialogContent>
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
                                    <Rating name="communication" defaultValue={2} max={5} precision={0.5} onChange={(e) => ratingDetail(e)} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Attitude</Typography>
                                    <Rating name="attitude" defaultValue={2} max={5} precision={0.5} onChange={(e) => ratingDetail(e)} />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <Typography component="legend">Self-Learning</Typography>
                                    <Rating name="selflearning" defaultValue={2} max={5} precision={0.5} onChange={(e) => ratingDetail(e)} />
                                </Grid>

                            </Grid>
                        </div>
                    </DialogContent>
                </div>
                //////////////////
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
                                        <FormLabel >Gender</FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel value="male" control={<Radio />} label="male" />
                                            <FormControlLabel value="female" control={<Radio />} label="female" />

                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Additional Comments" name="Additional Comments" placeholder="Additional Comments" value={inputData.name} variant="outlined" required onChange={(e) => inputFromDetail(e)} />
                                </Grid>

                            </Grid>
                        </div>

                        <div className="select-field">
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Interview Feedback" name="Interview Feedback" multiline rows={4} placeholder="Interview Feedback" value={inputData.name} variant="outlined" required onChange={(e) => inputFromDetail(e)} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Additional Comments" name="Additional Comments" multiline rows={4} placeholder="Additional Comments" value={inputData.name} variant="outlined" required onChange={(e) => inputFromDetail(e)} />
                                </Grid>
                            </Grid>
                        </div>
                    </DialogContent>
                </div>
                /////////////
                <DialogActions>
                    <Button onClick={displayForm}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
};

export default InputForm;