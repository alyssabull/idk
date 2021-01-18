import { render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App.js';
import userEvent from '@testing-library/user-event';
import { getRandomActivity, getFilteredActivity, getFilteredParticipantActivity} from '../apiCalls/apiCalls.js';
import { sampleRandomActivity, sampleSavedActivities } from '../sampleTestData.js';
import '@testing-library/jest-dom';
jest.mock('../apiCalls/apiCalls.js')

describe('Saved Activities', () => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
      clear: jest.fn(() => null)
    }
  })

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
  
  // it('should fetch activities from storage on page load', () =>  {  

  //   expect(localStorage.getItem).toHaveBeenCalled()
  // });

  it('should display a random activity on button click', () =>  {  
    const randomActivityButton = screen.getByText('Random Activity')
    
    userEvent.click(randomActivityButton)
    
    expect(screen.queryByText('Not sure what to today? Click below for some fun ideas!')).not.toBeInTheDocument()
    
    const activityTypeLabel = screen.getByText('Activity Type:')
    const activityParticipantNum = screen.getByText('Number of Participants:')
    const saveActivityButton = screen.getByText('+ Save Activity')
    const newRandomActivityButton = screen.getByText('Show New Activity')

    expect(activityTypeLabel).toBeInTheDocument()
    expect(activityParticipantNum).toBeInTheDocument()
    expect(saveActivityButton).toBeInTheDocument()
    expect(newRandomActivityButton).toBeInTheDocument()

    // getRandomActivity.mockResolvedValueOnce(sampleRandomActivity)

    // const activityName = await waitFor(() => screen.getByText('Catch up with a friend'))
  });
});