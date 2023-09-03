
import React, { useState } from "react";
import './home.scss';
import InputForm from "./form/InputForm";
import { Button } from '@mui/material';
import { postData, deleteData,UpdatetData } from "./apiService/apiService";
import EmployeeTable from "./EmployeeTable/Employeetable";
import HeaderComp from './header/HeaderComp';



function Home() {
    const [showForm, setShowForm] = useState(false);
    const [userItem, setUserItem] = useState({ interviewerName: '' });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isdeleteSuccess, setIsDeleteSuccess] = useState(false);
    const [isupdateSuccess, setIsUpdateSuccess] = useState(false);
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
        if (isdeleteSuccess) {
            setIsDeleteSuccess(false)
        }
        deleteData(item.id).then
        (res => {
            if (res) {
                setIsDeleteSuccess(true);
            }
        })    
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
        if (isupdateSuccess) {
            setIsUpdateSuccess(false)
        }
        UpdatetData(formValues).then(res => {
                if (res.status =='200') {
                    setIsUpdateSuccess(true);
                }
            })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <HeaderComp />
            <div className="align-button">
                <Button data-testid="button" onClick={handleClick}>+ New Assessment</Button>
            </div>
            <EmployeeTable EditForm={EditForm} isSuccess={isSuccess} isdeleteSuccess={isdeleteSuccess} isupdateSuccess={isupdateSuccess} DeleteForm={DeleteForm} viewForm={viewForm} />
            {showForm &&
                <InputForm formValueHandler={formValueHandler} displayForm={displayForm} showForm={showForm} userItem={userItem} updateUserItem={setUserItem} updateFormHandler={updateFormHandler} isview={isview} isEdit={isEdit} />

            }
        </div>
    )
};

export default Home;