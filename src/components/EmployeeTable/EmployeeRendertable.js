import React from 'react';
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
import SearchIcon from '@mui/icons-material/Search';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function EmployeeRendertable({
  handlechangenew,
  isaxioserror,
  handleDownload,
  viewForm,
  DeleteForm,
  EditForm,
  sortedData,
  searchQuery,
  setSearchQuery,
  orderBy,
  order,
  handleSort,
}) {
  return (
    <div style={{ marginLeft: '32px', marginRight: '32px', textAlign: 'centre' }}>
      {isaxioserror && (
        <div style={{ marginBottom: '10px' }}>
          <TextField
            variant="standard"
            value={'Issue in fetching data'}
            inputProps={{ min: 0, style: { textAlign: 'center' } }}
            error
          />
        </div>
      )}

      <div className="search-textbox" style={{ marginBottom: '20px' }}>
        <TextField
          type="search"
          sx={{ minWidth: '30%' }}
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
      </div>
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
                sortedData.map((item, index) => {
                  return (
                    <TableRow key={index}>
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
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default EmployeeRendertable;
