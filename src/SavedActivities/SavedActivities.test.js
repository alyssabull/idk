import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import SavedActivities from './SavedActivities.js';
import { sampleSavedActivities } from '../sampleTestData.js';
import '@testing-library/jest-dom';

describe('Saved Activities', () => {
  let mockDeleteSavedActivities

  beforeEach(() => {
    mockDeleteSavedActivities = jest.fn()

    render(
      <MemoryRouter>
        <SavedActivities
          savedActivities={sampleSavedActivities}
          deleteSavedActivities={mockDeleteSavedActivities}
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
    expect(savedActivityParticipants).toHaveLength(3);
  });

  // it('should fire filterSearchResults when a selection is made', () => {
  //   const dropdown = screen.getByTestId('dropdown');

  //   userEvent.selectOptions(dropdown, ['Cooking'] );

  //   expect(mockFilterSearchResults).toHaveBeenCalled();
  // })

  // it('should call filterSearchResults with the target value and type', () => {
  //   const dropdown = screen.getByTestId('dropdown');

  //   userEvent.selectOptions(dropdown, ['Cooking'] );

  //   expect(mockFilterSearchResults).toHaveBeenCalledWith('cooking', 'activity');
  // })
});