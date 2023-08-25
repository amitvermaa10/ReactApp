
import React, { useEffect, useState } from "react";
import axios from "axios";
import './home.scss';
import InputForm from "./form/InputForm";
import { AppBar, Typography, Toolbar } from '@mui/material';



function Home() {
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:3035/users').then
            (res => setData(res.data))
            .catch(error => console.log(error))
    }, []);


    const handleClick = () => {
        setShowForm(true);
    }

    const displayForm = () => {
        setShowForm(false);
    }

    const formValueHandler = (formValues) => {
        if (formValues.name != '' && formValues.email != '' && formValues.age != '') {
            let test = [...data];
            test.push(formValues)
            setData(test)
        }
    }

    return (
        <div>
            <div className="heading">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Skill Assessment Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div className="home">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th> Edit Actions</th>
                            <th>Delete Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                    <td><button>EDIT</button></td>
                                    <td><button>DELETE</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

            <button data-testid="button" onClick={handleClick}>Form</button>
            {showForm &&
                <InputForm formValueHandler={formValueHandler} displayForm={displayForm} />
            }
        </div>
    )
};

export default Home;