import React, { useEffect, useState } from 'react';
import {
  Button,
  TableContainer,
  Paper,
  TableSortLabel,
  TextField,
  InputAdornment,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PageviewIcon from '@mui/icons-material/Pageview';
import { fetchData } from '../apiService/apiService';
import SearchIcon from '@mui/icons-material/Search';

function EmployeeTable({
  EditForm,
  DeleteForm,
  viewForm,
  isSuccess,
  isdeleteSuccess,
  isupdateSuccess,
}) {
  const [data, setData] = useState([]);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [isaxioserror, setIsaxioserror] = useState(false);

  useEffect(() => {
    try {
      fetchData().then((res) => {
        if (res && res.data) {
          setData(res.data);
        } else {
          setIsaxioserror(true);
        }
      });
    } catch (error) {
      console.log(error);
      setData([]);
    }
  }, [isSuccess, isdeleteSuccess, isupdateSuccess]);

  const handleSort = (columnName) => {
    const isAsc = orderBy === columnName && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(columnName);
  };

  const updatedData = () => {
    const regex = new RegExp(searchQuery, 'i');
    return data
      .filter(
        (row) =>
          regex.test(row.candidateName) ||
          regex.test(row.datepicker) ||
          regex.test(row.overallExperience) ||
          regex.test(row.overallExperience) ||
          regex.test(row.relevantExperience) ||
          regex.test(row.radiogroup)
      )
      .sort((a, b) => {
        const aValue = a[orderBy];
        const bValue = b[orderBy];

        if (order === 'asc') {
          return aValue < bValue ? -1 : 1;
        } else {
          return aValue > bValue ? -1 : 1;
        }
      });
  };
  const sortedData = updatedData();
  console.log('&&&&&data', data);

  return (
    <div style={{ marginLeft: '32px', marginRight: '32px', textAlign: 'centre' }}>
      {isaxioserror && (
        <div style={{ marginBottom: '10px' }}>
          <TextField
            variant="standard"
            value={'Issue in fetching data'}
            inputProps={{ min: 0, style: { textAlign: 'center' } }}
          />
        </div>
      )}
      <Paper sx={{ width: '100%' }}>
        <TextField
          type="search"
          sx={{ minWidth: '100%' }}
          label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
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

                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'overallExperience'}
                    direction={orderBy === 'overallExperience' ? order : 'asc'}
                    onClick={() => handleSort('overallExperience')}
                  >
                    Overall experience
                  </TableSortLabel>
                </TableCell>
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
                <TableCell>Selected</TableCell>
                <TableCell>Edit Actions</TableCell>
                <TableCell>Delete Actions</TableCell>
                <TableCell>View Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData &&
                sortedData.length > 0 &&
                sortedData.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell testid="Edit">{item.candidateName}</TableCell>
                      <TableCell>{item.overallExperience}</TableCell>
                      <TableCell>{item.datepicker}</TableCell>

                      <TableCell>
                        {item.relevantExperience} {item.years} years
                      </TableCell>
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
