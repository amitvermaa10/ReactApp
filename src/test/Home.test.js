
import React from 'react';
import { getByText, render,waitForElement, screen, waitFor } from '@testing-library/react';
import Home from "../components/Home";
import '@testing-library/jest-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


jest.mock('axios');

const mockResponse = {
  data: {
    "id":1,
    "name":"ajit kumar",
    "email":"ajit11@gmail.com",
    "age":23
   },
};

// Set up the mock implementation for Axios
axios.get.mockImplementation(() => Promise.resolve(mockResponse));

  describe("Button Component", () => {
    render(<Home btnTxt="Form" />);
    const button = screen.getByTestId("button");
 
    // Test 1
    test("Button Rendering", () => {
        expect(button).toBeInTheDocument();
    })
   
})


  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // given
      const users = [
        {
         id:1,
         name:"ajit kumar",
         email:"ajit11@gmail.com",
         age:23
        },
        {
         id:2,
         name:"ankit raj",
         email:"ankitraj2@gmail.com",
         age:25
        },
        {
         id:3,
         name:"priya kumari",
         email:"priyaKumari3@gmail.com",
         age:28
        },
        {
         id:4,
         name:"priya kumari",
         email:"priyaKumari3@gmail.com",
         age:30
        },
        {
         id:5,
         name:"raghav prasad",
         email:"raghavprasad21@gmail.com",
         age:27
        }
     ];
      axios.get(users);
      expect(axios.get).toHaveBeenCalledWith(`http://localhost:3035/users`);
    });

  axios.get('http://localhost:3035/users').then((response) => {
  expect(response.data).toBeTruthy();
});
  });


