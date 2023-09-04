import React, { useEffect, useState } from 'react';
import { Button, TableContainer, Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';
import { fetchData } from '../apiService/apiService';


function EmployeeTable({
  EditForm,
  DeleteForm,
  viewForm,
  isSuccess,
  isdeleteSuccess,
  isupdateSuccess,
}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData().then((res) => {
      setData(res.data);
    });
  }, [isSuccess, isdeleteSuccess, isupdateSuccess]);

  return (
    <div style={{ textAlign: 'centre' }}>
      <Paper sx={{ width: '100%' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Candidate Name</TableCell>
                <TableCell>Interview Date</TableCell>
                <TableCell>Overall experience</TableCell>
                <TableCell>Relevant experience</TableCell>
                <TableCell>Selected</TableCell>
                <TableCell>Edit Actions</TableCell>
                <TableCell>Delete Actions</TableCell>
                <TableCell>View Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell testid="Edit">{item.candidateName}</TableCell>
                      <TableCell>{item.datepicker.split("-").reverse().join("-")}</TableCell>
                      <TableCell>{item.overallExperience}</TableCell>
                      <TableCell>
                        {item.relevantExperience} {item.years} years
                      </TableCell>
                      <TableCell>{item.radiogroup}</TableCell>
                      <TableCell>
                        <Button onClick={() => EditForm(item)}><EditIcon/></Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => DeleteForm(item)}><DeleteIcon/></Button>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => viewForm(item)}><PageviewIcon/></Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default EmployeeTable;
