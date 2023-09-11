import React from "react";
import {render} from '@testing-library/react';
import HeaderComp from "../components/header/HeaderComp";


describe('header Component',()=>{
    it('renders without crashing',()=>{
        render(<HeaderComp name ='john'/>)
    });

    it('display the title correctly',()=>{
    const {getByText} =  render(<HeaderComp name ='john'/>);
    const titleValue = getByText('Skill Assessment Dashboard');
    expect(titleValue).toBeInTheDocument;
    })
})

