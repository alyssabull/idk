import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App.js';
import { getRandomActivity, getFilteredActivity, getFilteredParticipantActivity} from '../apiCalls/apiCalls.js';
import { sampleSavedActivities } from '../sampleTestData.js';
import '@testing-library/jest-dom';
jest.mock('../apiCalls/apiCalls.js')

describe('Saved Activities', () => {
  let mockGetRandomActivity;
  let mockGetFilteredActivity;
  let mockGetFilteredParticipantActivity;

  beforeEach(() => {

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  })

  it('should render correctly', () =>  {  
    const title = screen.getByText('IDK');
    const tagline = screen.getByText('Not sure what to today? Click below for some fun ideas!')
    const activityTypeDropdown = screen.getByTestId('Cooking')
    const participantNumDropdown = screen.getByText(2)
    const getActivityButton = screen.getByTestId('question-button')

    expect(title).toBeInTheDocument();
    expect(tagline).toBeInTheDocument();
    expect(activityTypeDropdown).toBeInTheDocument()
    expect(participantNumDropdown).toBeInTheDocument()
    expect(getActivityButton).toBeInTheDocument();
  });
});