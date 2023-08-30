import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Select, MenuItem, InputLabel, FormControl, Rating, Typography, Divider, RadioGroup, FormControlLabel, FormLabel, Radio,OutlinedInput } from '@mui/material';
import './InputForm.scss';


function InputForm({ formValueHandler, displayForm, showForm,updateFormHandler,userItem }) {
    // const [inputData, setInputData] = useState({ name: '', email: '', age: '' })
    const [inputData, setInputData] = useState(userItem);
    const isEditableMode = Object.keys(userItem).length > 0;

    console.log("&&&isEditableMode",isEditableMode);

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
        // formValueHandler({ ...inputData, id: uniqueId })
        // setInputData({ ...inputData, name: '', email: '', age: '' })
        if(Object.keys(userItem).length ==0){
            alert("its new form")
            formValueHandler({ ...inputData, id: uniqueId })
            setInputData({ ...inputData, name: '', email: '', age: '' })
        }
        else{
            alert("its edited form")
            updateFormHandler({...inputData})
            setInputData({ ...inputData, name: '', email: '', age: '' })
        }
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

    console.log("&&&&&&&&userItem", userItem);
    return (
        <div>
             <Card style={{ maxWidth: 500, margin: "0 auto" }}>
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
            </Card> 
           
            
        </div>
    )
};

export default InputForm;