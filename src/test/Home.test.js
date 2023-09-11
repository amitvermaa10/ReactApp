import React from 'react';
import Home from '../components/Home';
import { render,fireEvent} from '@testing-library/react';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/home',
  }),
}));

jest.mock('../components/apiService/apiService', () => ({
  postData: jest.fn(),
  deleteData: jest.fn(),
  UpdateData: jest.fn(),
}));

describe('home component', () => {
  it(' render component', () => {
    const wrapper = render(<Home />);
    expect(wrapper).toBeTruthy();
  });

  it('open the form on button click', () => {
   const {getByText} = render (<Home/>);
   const newAssesmentButton = getByText('+ New Assessment');
   fireEvent.click(newAssesmentButton);
  });


});
