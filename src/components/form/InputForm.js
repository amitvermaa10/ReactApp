import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, Button,TextField} from '@mui/material';
import {Link, useNavigate} from "react-router-dom";


function InputForm({formValueHandler,parentFunction}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const [inputData, setInputData] = useState({name:'', email:'',age:''})

  
    // const inputFromDetail = (e) => {         //InputForm
    //     console.log("****name",e.target.value)
    //     let value = e.target.value;
    //     let name = e.target.name;
    //     console.log("&&&name",name);
    //     if(name ==='fullname'){
    //         setName(value);
    //     }
    //    else if(name ==='email'){
    //         setEmail(value); 
    //     }
    //     else if(name ==='age'){
    //         setAge(value); 
    //     }
    // };

    
    const inputFromDetail = (e) => {         //InputForm
        let value = e.target.value;
        let name = e.target.name;
        if(name ==='fullname'){
            setInputData({...inputData,name:value})
        }
       else if(name ==='email'){
         setInputData({...inputData,email:value}) 
        }
        else if(name ==='age'){
        setInputData({...inputData,age:value}) 
        }
    };

    
    const handleSubmit =(e) =>{
        e.preventDefault(); 
         const ids =  Math.random().toString(16).slice(2);
         let uniqueId = ids.slice(0,3);
      formValueHandler({...inputData, id:uniqueId})
    }

   const handleReset = (e) =>{
    console.log("$$$",e.target.value);
    setInputData({...inputData,name:'', email:'',age:''})
   }

    return (
        <div>
            <p>hhhhh</p>
            <Card style={{ maxWidth: 500, margin: "0 auto" }}>
                <CardContent>
                    {/* <form> */}
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Name" name ="fullname" placeholder="Enter Name" value={inputData.name} variant="outlined" required onChange={(e) => inputFromDetail(e)} />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Email" name ="email" placeholder="Enter Email" value={inputData.email} variant="outlined" required onChange={(e) => inputFromDetail(e)} />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Age" name ="age" placeholder="Enter Age" value ={inputData.age}variant="outlined" required onChange={(e) => inputFromDetail(e)} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained"  fullWidth onClick={(e) => handleSubmit(e)}>Save</Button>

                            </Grid>
                            <Grid item xs={12}>
                                <Button type="" variant="contained" fullWidth onClick={() => parentFunction()}>Cancel</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="reset" variant="contained" fullWidth onClick={(e) => handleReset(e)}>Reset</Button>
                            </Grid>
                        </Grid>
                    {/* </form> */}
                </CardContent>
            </Card>
        </div>
    )
};

export default InputForm;