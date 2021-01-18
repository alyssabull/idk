import { act, render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App.js';
import userEvent from '@testing-library/user-event';
import { getRandomActivity} from '../apiCalls/apiCalls.js';
import { sampleRandomActivity} from '../sampleTestData.js';
import '@testing-library/jest-dom';
jest.mock('../apiCalls/apiCalls.js')

describe('Saved Activities', () => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      setItem: jest.fn(() => null),
      clear: jest.fn(() => null)
    },
    writeable: true
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

  it('should navigate away from the home screen on button click', () =>  {  
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
  });

  it('should be able to get and display random activities on button click', async () =>  {  
    const randomActivityButton = screen.getByText('Random Activity')
    userEvent.click(randomActivityButton)

    const newRandomActivityButton = screen.getByText('Show New Activity')

    await act(async () => {
      getRandomActivity.mockResolvedValueOnce(sampleRandomActivity)
      userEvent.click(newRandomActivityButton)
    })

    const activityName = screen.getByText('Catch up with a friend')
    const activityType = screen.getByText('social')
    const saveActivityButton = screen.getByText('+ Save Activity')

    expect(activityName).toBeInTheDocument()
    expect(activityType).toBeInTheDocument()
    expect(saveActivityButton).toBeInTheDocument()
    expect(newRandomActivityButton).toBeInTheDocument()
  });

  it('should save current activity to storage on button click', async () =>  {  
    const randomActivityButton = screen.getByText('Random Activity')
    userEvent.click(randomActivityButton)

    const newRandomActivityButton = screen.getByText('Show New Activity')

    await act(async () => {
      getRandomActivity.mockResolvedValueOnce(sampleRandomActivity)
      userEvent.click(newRandomActivityButton)
    })

    expect(localStorage.setItem).toHaveBeenCalled()
  });

  it('should be able to toggle save or remove saved current activity on button click', async () => {
    const randomActivityButton = screen.getByText('Random Activity')
    userEvent.click(randomActivityButton)

    const newRandomActivityButton = screen.getByText('Show New Activity')

    await act(async () => {
      getRandomActivity.mockResolvedValueOnce(sampleRandomActivity)
      userEvent.click(newRandomActivityButton)
    })

    const saveActivityButton = screen.getByText('+ Save Activity')
    userEvent.click(saveActivityButton)

    const removeActivityButton = screen.getByText('- Remove Activity')
    expect(removeActivityButton).toBeInTheDocument()

    userEvent.click(removeActivityButton)
    expect(saveActivityButton).toBeInTheDocument()
  })

  it('should be able to save, view saved activities then remove saved activities', async () => {
    const randomActivityButton = screen.getByText('Random Activity')
    userEvent.click(randomActivityButton)

    const newRandomActivityButton = screen.getByText('Show New Activity')

    await act(async () => {
      getRandomActivity.mockResolvedValueOnce(sampleRandomActivity)
      userEvent.click(newRandomActivityButton)
    })

    const saveActivityButton = screen.getByText('+ Save Activity')
    userEvent.click(saveActivityButton)

    const savedActivityButton = screen.getByText('Saved Activities')
    userEvent.click(savedActivityButton)

    const savedActivityTitle = screen.getByText('Catch up with a friend')
    const savedActivityType = screen.getByText('social')
    const savedActivityParticipants = screen.getByText(2)
    const removeSavedActivityButton = screen.getByText('REMOVE ACTIVITY')

    expect(savedActivityTitle).toBeInTheDocument()
    expect(savedActivityType).toBeInTheDocument()
    expect(savedActivityParticipants).toBeInTheDocument()
    expect(removeSavedActivityButton).toBeInTheDocument()

    await act(async () => {
      getRandomActivity.mockResolvedValueOnce(sampleRandomActivity)
      userEvent.click(removeSavedActivityButton)
    })

    const noActivitesMessage = screen.getByText('No saved activites yet! Your saved activities will be shown here.')
    expect(noActivitesMessage).toBeInTheDocument()
  })

  it('should be able to switch between page views', async () => {
    const randomActivityButton = screen.getByText('Random Activity')
    userEvent.click(randomActivityButton)

    const newRandomActivityButton = screen.getByText('Show New Activity')

    await act(async () => {
      getRandomActivity.mockResolvedValueOnce(sampleRandomActivity)
      userEvent.click(newRandomActivityButton)
    })

    const activityName = screen.getByText('Catch up with a friend')
    const activityType = screen.getByText('social')
    const saveActivityButton = screen.getByText('+ Save Activity')

    expect(activityName).toBeInTheDocument()
    expect(activityType).toBeInTheDocument()
    expect(saveActivityButton).toBeInTheDocument()
    expect(newRandomActivityButton).toBeInTheDocument()

    const savedActivityButton = screen.getByText('Saved Activities')
    userEvent.click(savedActivityButton)

    const noActivitesMessage = screen.getByText('No saved activites yet! Your saved activities will be shown here.')
    expect(noActivitesMessage).toBeInTheDocument()

    const homeButton = screen.getByText('Home')
    userEvent.click(homeButton)

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
  })
});