import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Select, MenuItem, InputLabe, FormControl ,Rating,Typography } from '@mui/material';
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
                <DialogTitle >
                    {"Skill Assessment Form"}
                </DialogTitle>
                <DialogContent>
                    <div className="select-field">
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Name" name="fullname" placeholder="Interviewer Name" value={inputData.name} variant="outlined" required onChange={(e) => inputFromDetail(e)} />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Name" name="fullname" placeholder="Date" value={inputData.name} variant="outlined" required onChange={(e) => inputFromDetail(e)} />
                            </Grid>
                        </Grid>
                    </div>

                    <div className="select-field">
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Name" name="fullname" placeholder="Candidate Name" value={inputData.name} variant="outlined" required onChange={(e) => inputFromDetail(e)} />
                            </Grid>

                            <Grid xs={12} sm={6} item>
                                <FormControl sx={{ minWidth: 225 }}>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        //    value={inputData.age} 
                                        label="Age"
                                        // onChange={handleChange}
                                        onChange={(e) => handleChange(e)}

                                    >
                                        <MenuItem value={10}>first</MenuItem>
                                        <MenuItem value={20}>Second</MenuItem>
                                        <MenuItem value={30}>Final</MenuItem>
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

                
                <div>
                    <DialogTitle style={{'fontSize':'17px'}}>
                        {"Primary Skill evaluated"}
                    </DialogTitle>
                    <DialogContent>
                        <Typography component="legend">HTML</Typography>
                        <Rating name="html" defaultValue={2} max={5} precision={0.5} />
                    </DialogContent>
                </div>
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