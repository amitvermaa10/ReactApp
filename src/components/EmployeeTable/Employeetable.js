import React, { useEffect, useState } from "react";
import axios from "axios";
import { AppBar, Typography, Toolbar, Button,TableContainer,Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { fetchData } from "../apiService/apiService";



function EmployeeTable({EditForm,DeleteForm, viewForm,isSuccess}) {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:3035/users').then
    //         (res => setData(res.data))
    //         .catch(error => console.log(error))
    // }, [])

    useEffect(() => {
      
        fetchData().then((res)=>{
            setData(res.data)
        })
    }, [isSuccess])
    // console.log("****getData",fetchData().then((res)=>{
    //     console.log("&&&data",res.data)
    // }));
    return (
        <div style={{textAlign:'centre'}}>
            <Paper sx ={{width:'100%'}}>
          <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Candidate Name</TableCell>
                        <TableCell>Overall experience</TableCell>
                        <TableCell>Relevant experience</TableCell>
                        <TableCell>Selected</TableCell>
                        <TableCell>Edit Actions</TableCell>
                        <TableCell>Delete Actions</TableCell>
                        <TableCell>View Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map((item,index)=>{
                        return(
                            <TableRow key = {index}>
                                <TableCell>{item.candidateName}</TableCell>
                                <TableCell>{item.overallExperience}</TableCell>
                                <TableCell>{item.relevantExperience} {item.years} years</TableCell>
                                <TableCell>{item.radiogroup}</TableCell>
                                <TableCell>
                                    <Button onClick={() => EditForm(item)}>Edit</Button>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => DeleteForm(item)}>Delete</Button>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() =>  viewForm(item,true)}>View</Button>
                                </TableCell>

                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
          </TableContainer>
          </Paper>
          </div>
    )
}


export default EmployeeTable;