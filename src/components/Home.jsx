import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';
import './home.scss';
import { fetchAllUsers, createUsers, deleteUsers } from '../redux/slice/todo.js';
import InputForm from './form/InputForm.jsx';
import { postData, deleteData, UpdatetData } from './apiService/apiService.js';
import EmployeeTable from './EmployeeTable/Employeetable.jsx';
import HeaderComp from './header/HeaderComp.jsx';
import CandidateCard from './CandidateCard/CandidateCard.jsx';
import EmployeeChart from './EmployeeChart/EmployeeChart.jsx';

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [userItem, setUserItem] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isdeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [isupdateSuccess, setIsUpdateSuccess] = useState(false);
  const [isview, setIsView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [snackbartext, setSnackbartext] = useState('');
  const [issnackbarError, setIssnackbarError] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const stateUpdated = useSelector((state) =>
    // state.app
    console.log('&&&&sate', state)
  );

  //  console.log("^^^^^^^",state.app)

  const handleClick = () => {
    setUserItem({
      interviewerName: '',
      candidateName: '',
      interviewRound: '',
      overallExperience: '',
      relevantExperience: '',
      years: 0,
      html: 0,
      css: 0,
      javascript: 0,
      es6: 0,
      typescript: 0,
      react: 0,
      hooks: 0,
      redux: 0,
      communication: 0,
      attitude: 0,
      selflearning: 0,
      radiogroup: '',
      interviewFeedback: '',
      additionalComments: '',
      trainingRecommended: '',
      others: '',
      datepicker: null,
    });
    setShowForm(true);
  };

  const displayForm = () => {
    setShowForm(false);
  };

  const EditForm = (item) => {
    setShowForm(true);
    setUserItem(item);
    setIsEdit(true);
    setIsView(false);
  };

  const viewForm = (item) => {
    setShowForm(true);
    setUserItem(item);
    setIsView(true);
    setIsEdit(false);
    alert('heya view');
  };

  const DeleteForm = (item) => {
    try {
      if (isdeleteSuccess) {
        setIsDeleteSuccess(false);
      }
      dispatch(deleteUsers(item.id));
      setIsDeleteSuccess(true);
      setOpen(true);
      setSnackbartext('Delete is successfull');
    } catch (error) {
      setOpen(true);
      setIssnackbarError(true);
      setSnackbartext('Delete is unsuccessfull');
    }
  };

  // const DeleteForm = (item) => {
  //   try {
  //     if (isdeleteSuccess) {
  //       setIsDeleteSuccess(false);
  //     }
  //     deleteData(item.id).then((res) => {
  //       if (res) {
  //         setIsDeleteSuccess(true);
  //         setOpen(true);
  //         setSnackbartext('Delete is successfull');
  //       }
  //     });
  //   } catch (error) {
  //     setOpen(true);
  //     setIssnackbarError(true);
  //     setSnackbartext('Delete is unsuccessfull');
  //   }
  // };

  // const formValueHandler = async (formValues) => {
  //   try {
  //     if (isSuccess) {
  //       setIsSuccess(false);
  //     }
  //     postData(formValues).then((res) => {
  //       if (res) {
  //         setIsSuccess(true);
  //         setOpen(true);

  //         setSnackbartext('Submit is successfull');
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     setOpen(true);
  //     setIssnackbarError(true);
  //     setSnackbartext('Submit is successfull');
  //   }
  // };

  const formValueHandler = async (formValues) => {
    try {
      if (isSuccess) {
        setIsSuccess(false);
      }
      dispatch(createUsers(formValues));
      setIsSuccess(true);
      setOpen(true);
      setSnackbartext('Submit is successfull');
    } catch (error) {
      console.log(error);
      setOpen(true);
      setIssnackbarError(true);
      setSnackbartext('Submit is successfull');
    }
  };

  const updateFormHandler = async (formValues) => {
    if (isupdateSuccess) {
      setIsUpdateSuccess(false);
    }
    UpdatetData(formValues)
      .then((res) => {
        if (res.status === 200) {
          setIsUpdateSuccess(true);
          setOpen(true);
          setSnackbartext('it is successfull');
        }
      })
      .catch((error) => {
        console.log(error);
        setOpen(true);
        setIssnackbarError(true);
        setSnackbartext('it is not successfull');
      });
  };

  const handleClose = () => {
    setOpen(false);
    setIssnackbarError(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  console.log('&&&stateUpdated', stateUpdated);
  return (
    <div>
      <HeaderComp name={location?.state?.name} />
      <Snackbar
        open={open}
        autoHideDuration={2000}
        message={snackbartext}
        action={action}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        ContentProps={{
          sx: {
            // background: 'green',
            ...(issnackbarError ? { background: 'red' } : { background: 'green' }),
          },
        }}
      />

      <div className="align-button">
        <Button data-testid="button" onClick={handleClick}>
          + New Assessment
        </Button>
      </div>
      <CandidateCard />
      <EmployeeChart />
      <EmployeeTable
        EditForm={EditForm}
        isSuccess={isSuccess}
        isdeleteSuccess={isdeleteSuccess}
        isupdateSuccess={isupdateSuccess}
        DeleteForm={DeleteForm}
        viewForm={viewForm}
      />
      {showForm && (
        <InputForm
          formValueHandler={formValueHandler}
          displayForm={displayForm}
          showForm={showForm}
          userItem={userItem}
          updateUserItem={setUserItem}
          updateFormHandler={updateFormHandler}
          isview={isview}
          isEdit={isEdit}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default Home;
