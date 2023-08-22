import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, Button,TextField} from '@mui/material';
import users from "../user/user";
import { v4 as uuid } from "uuid";
import {Link, useNavigate} from "react-router-dom";


function InputForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    return (
        <div>
            <p>hhhhh</p>
            <Card style={{ maxWidth: 500, margin: "0 auto" }}>
                <CardContent>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Name" name ="fullname" placeholder="Enter Name" variant="outlined" required  />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Email" name ="email" placeholder="Enter Email" variant="outlined" required />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Age" name ="age" aplaceholder="Enter Age" variant="outlined" required  />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained"  fullWidth>Save</Button>

                            </Grid>
                            <Grid item xs={12}>
                                <Button type="" variant="contained" fullWidth>Cancel</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="reset" variant="contained" fullWidth>Reset</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
};

export default InputForm;