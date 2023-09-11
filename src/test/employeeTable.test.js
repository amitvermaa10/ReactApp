import '@testing-library/jest-dom';
import axios from 'axios';

jest.mock('axios');

const mockResponse = {
  data: {
    id: 1,
    interviewerName: 'ksksks',
    candidateName: 'newwww',
    interviewRound: 'final',
    overallExperience: '10',
    relevantExperience: 'react',
    years: '4',
    html: '5',
    css: '4',
  },
};

// Set up the mock implementation for Axios
axios.get.mockImplementation(() => Promise.resolve(mockResponse));

describe('when API call is successful', () => {
  it('should return users list', async () => {
    // expect(axios.get).toHaveBeenCalledWith(`http://localhost:3035/users`);
    axios.get('http://localhost:3035/users').then((response) => {
      expect(response).toBe(mockResponse);
    });
  });
  it('should call the server', async () => {
    expect(axios.get).toHaveBeenCalledWith(`http://localhost:3035/users`);
  });
});
//
