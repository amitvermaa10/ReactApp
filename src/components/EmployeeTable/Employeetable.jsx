import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField, InputAdornment, Rating } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import saveAs from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from 'docx';

// import Othertable from './Othertable.jsx';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmployeeRendertable from './EmployeeRendertable.jsx';
import './EmployeeTable.scss';

function EmployeeTable({ EditForm, DeleteForm, viewForm, name }) {
  // const [data, setData] = useState([]);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [orderByOther, setOrderByOther] = useState('');
  const [orderOther, setOrderOther] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchQueryOther, setSearchQueryOther] = useState('');
  const [isaxioserror] = useState(false);

  const data = useSelector((state) => state.app.data);

  const myInterviewerData = data.filter((item) => item.interviewerName !== name);
  const otherInterviewerdata = data.filter((item) => item.interviewerName === name);

  const handleSort = (columnName) => {
    const isAsc = orderBy === columnName && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(columnName);
  };

  const handleSortOther = (columnName) => {
    const isAsc = orderByOther === columnName && orderOther === 'asc';
    setOrderOther(isAsc ? 'desc' : 'asc');
    setOrderByOther(columnName);
  };

  const avgCalculate = (item) => {
    const avg =
      (parseFloat(item.html) +
        parseFloat(item.css) +
        parseFloat(item.javascript) +
        parseFloat(item.es6) +
        parseFloat(item.typescript) +
        parseFloat(item.react) +
        parseFloat(item.hooks) +
        parseFloat(item.redux)) /
      8;
    return avg;
  };

  const updatedData = () => {
    const regex = new RegExp(searchQuery, 'i');
    return myInterviewerData
      .filter(
        (row) =>
          regex.test(row.candidateName) ||
          regex.test(row.datepicker) ||
          regex.test(row.relevantExperience) ||
          regex.test(row.radiogroup)
      )
      .sort((a, b) => {
        const aValue = a[orderBy];
        const bValue = b[orderBy];

        if (order === 'asc') {
          return aValue < bValue ? -1 : 1;
        }
        // else {
        return aValue > bValue ? -1 : 1;
        // }
      });
  };

  const updatedDataOther = () => {
    const regex = new RegExp(searchQueryOther, 'i');
    return otherInterviewerdata
      .filter(
        (row) =>
          regex.test(row.candidateName) ||
          regex.test(row.datepicker) ||
          regex.test(row.relevantExperience) ||
          regex.test(row.radiogroup)
      )
      .sort((a, b) => {
        const aValue = a[orderByOther];
        const bValue = b[orderByOther];

        if (orderOther === 'asc') {
          return aValue < bValue ? -1 : 1;
        }

        // else {
        return aValue > bValue ? -1 : 1;
        // }
      });
  };

  const sortedData = updatedData(myInterviewerData);
  const sortedDataOther = updatedDataOther(otherInterviewerdata);
  const handleDownload = (rowData) => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: `Name: ${rowData.candidateName}`,
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Overall Experience: ${rowData.overallExperience}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Date: ${rowData.datepicker}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Interviewer Name: ${rowData.interviewerName}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Relevant Experience: ${rowData.relevantExperience} ${rowData.years}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Selected: ${rowData.radiogroup}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Interview Round: ${rowData.interviewRound}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Avg Skills: ${avgCalculate(rowData)}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Interview Feedback: ${rowData.interviewFeedback}`,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Training Recommended: ${rowData.trainingRecommended}`,
                }),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, `data_${rowData.candidateName}.docx`);
    });
  };

  const handlechangenew = (item) => (
    <Rating
      max={5}
      precision={0.5}
      value={avgCalculate(item)}
      readOnly
      sx={{
        cursor: 'not-allowed',
      }}
    />
  );
  return (
    <div style={{ marginTop: '10px' }}>
      <Accordion style={{ textAlign: 'left', marginLeft: '100px', marginRight: '100px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <h3 style={{ textAlign: 'left' }}>My Interviews</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div
            className="search-textbox"
            style={{
              marginBottom: '20px',
            }}
          >
            <TextField
              type="search"
              sx={{ minWidth: '100%' }}
              label="Search"
              value={searchQueryOther}
              onChange={(e) => setSearchQueryOther(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <EmployeeRendertable
            handlechangenew={handlechangenew}
            isaxioserror={isaxioserror}
            handleDownload={handleDownload}
            viewForm={viewForm}
            DeleteForm={DeleteForm}
            EditForm={EditForm}
            sortedData={sortedDataOther}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            orderBy={orderByOther}
            order={orderOther}
            handleSort={handleSortOther}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ textAlign: 'left', marginLeft: '100px', marginRight: '100px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <h3 style={{ textAlign: 'left' }}>Other Interviews</h3>
        </AccordionSummary>
        <AccordionDetails>
          <div
            className="search-textbox"
            style={{
              marginBottom: '20px',
            }}
          >
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
          </div>
          <EmployeeRendertable
            handlechangenew={handlechangenew}
            isaxioserror={isaxioserror}
            handleDownload={handleDownload}
            viewForm={viewForm}
            DeleteForm={DeleteForm}
            EditForm={EditForm}
            sortedData={sortedData}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            orderBy={orderBy}
            order={order}
            handleSort={handleSort}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default EmployeeTable;
