
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from "../components/Home";
import '@testing-library/jest-dom';



  describe("Button Component", () => {
    render(<Home btnTxt="Form" />);
    const button = screen.getByTestId("button");
 
    // Test 1
    test("Button Rendering", () => {
        expect(button).toBeInTheDocument();
    })
 
    test('to check it contain name', () => {
      const data ={
        "id":1,
        "name":"ajit kumar",
        "email":"ajit11@gmail.com",
        "age":23
       }
       render(<Home data ={data}/>)
      const todoElement = screen.getByTestId('todo-1');
      console.log("&&&todoElement",todoElement);
      expect(todoElement).toHaveTextContent('ajit kumar'); 
    });
   
})
