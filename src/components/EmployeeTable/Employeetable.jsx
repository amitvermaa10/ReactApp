import React, { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import saveAs from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { fetchData } from '../apiService/apiService.js';
import EmployeeRendertable from './EmployeeRendertable.jsx';
import './EmployeeTable.scss';

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
    return data
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
  const sortedData = updatedData();
  const handleDownload = (rowData) => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                // new TextRun('\tName: ' + rowData.candidateName),
                // new TextRun('\toverallExperience: ' + rowData.overallExperience),
                // new TextRun('\tdate: ' + rowData.datepicker),
                // new TextRun('\tinterviewerName: ' + rowData.interviewerName),
                // new TextRun('\trelevantExperience: ' + rowData.relevantExperience + rowData.years),
                // new TextRun('\tSelected: ' + rowData.radiogroup),
                // new TextRun('\tinterviewRound: ' + rowData.interviewRound),
                // new TextRun('\taAvgSkills: ' + avgCalculate(rowData)),
                // new TextRun('\tinterviewFeedback: ' + rowData.interviewFeedback),
                // new TextRun('\ttrainingRecommended: ' + rowData.trainingRecommended),
                // new TextRun('\tadditionalComments: ' + rowData.additionalComments),
                // new TextRun('\tothers: ' + rowData.others),

                new TextRun(`\tName:${rowData.candidateName}`),
                new TextRun(`\toverallExperience: ${rowData.overallExperience}`),
                new TextRun(`\tdate: ${rowData.datepicker}`),
                new TextRun(`\tinterviewerName: ${rowData.interviewerName}`),
                new TextRun(
                  `\trelevantExperience:  ${rowData.relevantExperience} ${rowData.years}`
                ),
                new TextRun(`\tSelected: ${rowData.radiogroup}`),
                new TextRun(`\tinterviewRound: ${rowData.interviewRound}`),
                new TextRun(`\taAvgSkills: ' + ${avgCalculate(rowData)}`),
                new TextRun(`\tinterviewFeedback: ' + ${rowData.interviewFeedback}`),
                 new TextRun(`\ttrainingRecommended: ' + ${rowData.trainingRecommended}`),
                // new TextRun('\tadditionalComments: ' + rowData.additionalComments),
                // new TextRun('\tothers: ' + rowData.others),
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
  const handlechangenew = (item) => { <Rating max={5} precision={0.5} value={avgCalculate(item)} /> };

  

  return (
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
  );
}
export default EmployeeTable;
