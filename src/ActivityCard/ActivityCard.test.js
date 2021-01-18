import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ActivityCard from './ActivityCard.js';
import { sampleRandomActivity } from '../sampleTestData.js';
import '@testing-library/jest-dom';

describe('Saved Activities', () => {
  let mockDeleteSavedActivity

  beforeEach(() => {
    mockDeleteSavedActivity = jest.fn()

    render(
      <MemoryRouter>
        <ActivityCard 
            activity={sampleRandomActivity.activity}
            type={sampleRandomActivity.type}
            participants={sampleRandomActivity.participants}
            deleteSavedActivity={mockDeleteSavedActivity}
            id={sampleRandomActivity.key}
            key={sampleRandomActivity.key}
          />
      </MemoryRouter>
    );
  })

  it('should render correctly', () =>  {  
    const savedActivityName = screen.getByText('Catch up with a friend')
    const savedActivityType = screen.getByText('social')
    const savedActivityParticipants = screen.getByText('2')

    expect(savedActivityName).toBeInTheDocument();
    expect(savedActivityType).toBeInTheDocument();
    expect(savedActivityParticipants).toBeInTheDocument();
  });
});