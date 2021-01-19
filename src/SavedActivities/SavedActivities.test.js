import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SavedActivities from './SavedActivities.js';
import { iconSampleData } from '../sampleTestData.js';
import '@testing-library/jest-dom';

describe('Saved Activities', () => {
  let mockDeleteSavedActivity

  beforeEach(() => {
    mockDeleteSavedActivity = jest.fn()

    render(
      <MemoryRouter>
        <SavedActivities
          savedActivities={iconSampleData}
          deleteSavedActivities={mockDeleteSavedActivity}
        />
      </MemoryRouter>
    );
  })

  it('should render correctly', () =>  {  
    const pageTitle = screen.getByText('Saved Activities');
    const savedActivityName = screen.getByText('Visit your past teachers')
    const savedActivityType = screen.getByText('social')
    const savedActivityParticipants = screen.queryAllByText('1')

    expect(pageTitle).toBeInTheDocument();
    expect(savedActivityName).toBeInTheDocument();
    expect(savedActivityType).toBeInTheDocument();
    expect(savedActivityParticipants).toHaveLength(8);
  });
});