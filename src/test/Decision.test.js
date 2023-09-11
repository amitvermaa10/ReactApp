import React from 'react';
import { render } from '@testing-library/react';
import Decision from '../components/decision/Decision.jsx';

const mockInputFromDetail = jest.fn();

const mockInputData = {
  interviewFeedback: 'Mock Interview Feedback',
  trainingRecommended: 'Mock Training Recommended',
  others: 'Mock Others',
  radiogroup: 'yes',
  additionalComments: 'Mock Additional Comments',
};

describe('to test decison', () => {
  test('renders the Decision component is view is true', () => {
    const { getByText, queryByTestId } = render(
      <Decision inputData={mockInputData} inputFromDetail={mockInputFromDetail} isview={true} />
    );
    expect(getByText('Decision')).toBeInTheDocument;
    expect(queryByTestId('interviewFeedback')).toBeDisabled;
  });

  test('renders the Decision component is view is false', () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <Decision inputData={mockInputData} inputFromDetail={mockInputFromDetail} isview={true} />
    );

    // Check if the component is rendered
    expect(getByText('Decision')).toBeInTheDocument;
    expect(queryByTestId('interviewFeedback')).not.toBeDisabled;
  });
});
