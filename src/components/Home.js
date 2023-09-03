
import React, { useEffect, useState } from "react";
import axios from "axios";
import './home.scss';
import InputForm from "./form/InputForm";
import { Button } from '@mui/material';
import { postData, deleteData } from "./apiService/apiService";
import EmployeeTable from "./EmployeeTable/Employeetable";
import HeaderComp from './header/HeaderComp';



function Home() {
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [userItem, setUserItem] = useState({ interviewerName: '' });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isdeleteSuccess, setIsDeleteSuccess] = useState(false);
    const [isview, setIsView] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const handleClick = () => {
        setUserItem({ interviewerName: '', candidateName: '', interviewRound: '', overallExperience: '', relevantExperience: '', years: '', html: '', css: '', javascript: '', es6: '', typescript: '', react: '', hooks: '', redux: '', communication: '', attitude: '', selflearning: '', radiogroup: '', interviewFeedback: '', additionalComments: '', trainingRecommended: '', others: '', datepicker: null });
        setShowForm(true);
    }

    const displayForm = () => {
        setShowForm(false);
    }

    const EditForm = (item) => {
        console.log("&&item", item);
        setShowForm(true);
        setUserItem(item);
        setIsEdit(true);
        setIsView(false);

    }

    const viewForm = (item) => {
        setShowForm(true);
        setUserItem(item);
        setIsView(true);
        setIsEdit(false);

    }

    const DeleteForm = (item) => {
        console.log("&&&&item", item)
        // DeleteformHandler(item);
        if (isdeleteSuccess) {
            setIsDeleteSuccess(false)
        }
        deleteData(item.id).then((res) => {
            return {
                if(res) {
                    console.log("&&&&&&&res", res);
                    setIsDeleteSuccess(true);
                }
            }

        }).catch(error => console.log(error));

    }

    const formValueHandler = async (formValues) => {
        try {
            if (isSuccess) {
                setIsSuccess(false)
            }
            postData(formValues).then(res => {
                if (res) {
                    setIsSuccess(true);
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }

    const updateFormHandler = async (formValues) => {
        if (isSuccess) {
            setIsSuccess(false)
        }
        axios.put('http://localhost:3031/users/' + formValues.id, formValues).then
            (res => {
                if (res) {
                    setIsSuccess(true);
                }
            })
            .catch(error => console.log(error))
    }

    const DeleteformHandler = async (formValues) => {
        try {
            console.log("&&&&formValues", formValues);
            // if (isdeleteSuccess) {
            //     setIsDeleteSuccess(false)
            // }
            deleteData(formValues.id).then(res => {
                if (res) {
                    console.log("&&&&&&&res", res);
                    setIsDeleteSuccess(true);
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <HeaderComp />
            <div className="align-button">
                <Button data-testid="button" onClick={handleClick}>+ New Assessment</Button>
            </div>
            <EmployeeTable EditForm={EditForm} isSuccess={isSuccess} isdeleteSuccess={isdeleteSuccess} DeleteForm={DeleteForm} viewForm={viewForm} />
            {showForm &&
                <InputForm formValueHandler={formValueHandler} displayForm={displayForm} showForm={showForm} userItem={userItem} updateUserItem={setUserItem} updateFormHandler={updateFormHandler} isview={isview} isEdit={isEdit} />

            }
        </div>
    )
};

export default Home;