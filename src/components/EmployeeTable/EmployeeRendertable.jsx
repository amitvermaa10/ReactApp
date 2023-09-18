import React, { useState } from 'react';
import {
  Button,
  TableContainer,
  Paper,
  TableSortLabel,
  TextField,
  Pagination,
} from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function EmployeeRendertable({
  handlechangenew,
  isaxioserror,
  handleDownload,
  viewForm,
  DeleteForm,
  EditForm,
  sortedData,
  orderBy,
  order,
  handleSort,
}) {
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(8);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <div style={{ marginLeft: '100px', marginRight: '100px', textAlign: 'centre' }}>
      {isaxioserror && (
        <div style={{ marginBottom: '10px' }}>
          <TextField
            variant="standard"
            value="Issue in fetching data"
            inputProps={{ min: 0, style: { textAlign: 'center' } }}
            error
          />
        </div>
      )}
      <Paper sx={{ width: '100%' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'candidateName'}
                    direction={orderBy === 'candidateName' ? order : 'asc'}
                    onClick={() => handleSort('candidateName')}
                  >
                    Candidate Name
                  </TableSortLabel>
                </TableCell>

                <TableCell>Overall experience</TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'datepicker'}
                    direction={orderBy === 'datepicker' ? order : 'asc'}
                    onClick={() => handleSort('datepicker')}
                  >
                    Interview Date
                  </TableSortLabel>
                </TableCell>

                <TableCell>Relevant experience</TableCell>
                <TableCell>Average skills</TableCell>
                <TableCell>Selected</TableCell>
                <TableCell>Edit Actions</TableCell>
                <TableCell>Delete Actions</TableCell>
                <TableCell>View Actions</TableCell>
                <TableCell>Download Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData &&
                sortedData.length > 0 &&
                sortedData.slice(startIndex, endIndex).map((item) => (
                  <TableRow key={item.id}>
                    <TableCell testid="Edit">{item.candidateName}</TableCell>
                    <TableCell>{item.overallExperience}</TableCell>
                    <TableCell>{item.datepicker}</TableCell>
                    <TableCell>
                      {item.relevantExperience} {item.years} years
                    </TableCell>
                    <TableCell>{handlechangenew(item)}</TableCell>
                    <TableCell>{item.radiogroup}</TableCell>
                    <TableCell>
                      <Button onClick={() => EditForm(item)}>
                        <EditIcon />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => DeleteForm(item)}>
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => viewForm(item)}>
                        <PageviewIcon />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => handleDownload(item)}>
                        <CloudDownloadIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={Math.ceil(sortedData.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
        />
      </Paper>
    </div>
  );
}

export default EmployeeRendertable;
