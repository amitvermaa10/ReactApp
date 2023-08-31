
import React, { useEffect, useState } from "react";
import axios from "axios";
import './home.scss';
import InputForm from "./form/InputForm";
import { AppBar, Typography, Toolbar,Button } from '@mui/material';
import { postData,UpdatetData ,deleteData} from "./apiService/apiService";
import EmployeeTable from "./EmployeeTable/Employeetable";



function Home() {
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [userItem,setUserItem] = useState({});
    const [isSuccess,setIsSuccess] = useState(false);
    const [isview,setIsView] = useState(false);
    const [isEdit,setIsEdit] = useState(false);


    // useEffect(() => {
    //     axios.get('http://localhost:3035/users').then
    //         (res => setData(res.data))
    //         .catch(error => console.log(error))
    // }, []);


    const handleClick = () => {
        setUserItem({});
        setShowForm(true);
    }

    const displayForm = () => {
        setShowForm(false);
    }

    const EditForm =(item) =>{
        console.log("&&item",item);
        setShowForm(true);
        setUserItem(item);
        setIsEdit(true);
        setIsView(false);

    }

    const viewForm =(item)=>{
        setShowForm(true);
        setUserItem(item);
        setIsView(true);
        setIsEdit(false);

    }

    const DeleteForm=(item) =>{
        DeleteformHandler(item);
    }

    // const formValueHandler = (formValues) => {
    //     if (formValues.name != '' && formValues.email != '' && formValues.age != '') {
    //         let test = [...data];
    //         test.push(formValues)
    //         setData(test)
    //         handlepost();
    //     }
    // }

    const formValueHandler = async(formValues)=>{
        try{
            if(isSuccess){
                setIsSuccess(false)
            }
         postData(formValues).then(res =>{
            if(res){
                setIsSuccess(true);
            }
         });
        }
        catch(error){
            console.log(error);
        }
    } 

    const updateFormHandler = async(formValues)=>{
        console.log("*****formValues",formValues,formValues.id)
        if(isSuccess){
            setIsSuccess(false)
        }
        axios.put('http://localhost:3031/users/'+formValues.id,formValues).then
            (res=>{ 
                if(res){
                    setIsSuccess(true);
                }
            })
            .catch(error => console.log(error))
    }

    const DeleteformHandler = async(formValues)=>{
        try{
            if(isSuccess){
                setIsSuccess(false)
            }
         deleteData(formValues.id).then(res =>{
            if(res){
                setIsSuccess(true);
            }
         });
        }
        catch(error){
            console.log(error);
        }
    } 
    // const updateFormHandler = async(formValues)=>{
    //     if(isSuccess){
    //         setIsSuccess(false)
    //     }
    //     UpdatetData(formValues).then
    //         (res=>{ 
    //             if(res){
    //                 setIsSuccess(true);
    //             }
    //         })
    //         .catch(error => console.log(error))
    // }


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
            <div className="align-button">
            <Button data-testid="button" onClick={handleClick}>+ New Assessment</Button>
            </div>
            
            <div className="home">
                {/* <table>
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
                </table> */}

                <EmployeeTable EditForm ={EditForm} isSuccess={isSuccess} DeleteForm ={DeleteForm} viewForm={viewForm} /> 


            </div>

            
            {showForm &&
                <InputForm formValueHandler={formValueHandler} displayForm={displayForm} showForm={showForm} userItem={userItem} updateFormHandler={updateFormHandler} isview={isview} isEdit={isEdit}/>
            }
        </div>
    )
};

export default Home;