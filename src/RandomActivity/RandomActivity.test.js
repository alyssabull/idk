import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import RandomActivity from './RandomActivity.js';
import { sampleRandomActivity, sampleSavedActivities } from '../sampleTestData.js';
import '@testing-library/jest-dom';

describe('Dropdown', () => {
  let mockGenerateNewActivity;
  let mockUpdateSavedActivities;
  
  beforeEach(() => {
    mockGenerateNewActivity = jest.fn()
    mockUpdateSavedActivities = jest.fn()

    render(
      <MemoryRouter>
        <RandomActivity
          randomActivity={sampleRandomActivity}
          generateNewActivity={mockGenerateNewActivity}
          savedActivities={sampleSavedActivities}
          updateSavedActivities={mockUpdateSavedActivities}
        />
      </MemoryRouter>
    );
  })

  it('should render correctly', () =>  {  
    const randomActivity = screen.getByText('Catch up with a friend')
    const activityTypeLabel = screen.getByText('Activity Type:')
    const activityType = screen.getByText('social')
    const numParticipantsLabel = screen.getByText('Number of Participants:')
    const numParticipants = screen.getByText('2')
    const newActivityButton = screen.getByText('Show New Activity')
    const saveActivityButton = screen.getByText('+ Save Activity')

    expect(randomActivity).toBeInTheDocument()
    expect(activityTypeLabel).toBeInTheDocument()
    expect(activityType).toBeInTheDocument()
    expect(numParticipantsLabel).toBeInTheDocument()
    expect(numParticipants).toBeInTheDocument()
    expect(newActivityButton).toBeInTheDocument()
    expect(saveActivityButton).toBeInTheDocument()
  });

  it('should generate new activity on Show New Activity button click', () => {
    const newActivityButton = screen.getByText('Show New Activity')

    userEvent.click(newActivityButton)

    expect(screen.queryByText(sampleRandomActivity)).not.toBeInTheDocument()
  })

  it('should call toggleActivity with the current randomActivity', () => {
    screen.debug()
  })
});