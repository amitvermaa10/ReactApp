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



function EmployeeTable({EditForm}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3035/users').then
            (res => setData(res.data))
            .catch(error => console.log(error))
    }, [])

    // useEffect(() => {
      
    //     fetchData().then(responseData)=>{
    //         setData(responseData)
    //     }
    // }, [])
    console.log("****getData",fetchData().then((data)=>{
        console.log("&&&data",data)
    }));
    return (
        <div style={{textAlign:'centre'}}>
            <Paper sx ={{width:'100%'}}>
          <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Edit Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map((item,index)=>{
                        return(
                            <TableRow key = {index}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.age}</TableCell>
                                <TableCell>
                                    {/* <Button onClick={()=>alert(item.id)}>Edit</Button> */}
                                    <Button onClick={() => EditForm(item)}>Edit</Button>
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