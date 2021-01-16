import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Dropdown from './Dropdown.js';
import { sampleActivityDropdown } from '../sampleTestData.js';
import '@testing-library/jest-dom';

describe('Dropdown', () => {
  let mockFilterSearchResults;
  
  beforeEach(() => {
    mockFilterSearchResults = jest.fn()

    render(
      <MemoryRouter>
        <Dropdown 
          dropdownValues={sampleActivityDropdown}
          filterSearchResults={mockFilterSearchResults}
          filterType='any'
          dropdownType='activity'
        />
      </MemoryRouter>
    );
  })

  it('should render correctly', () =>  {  
    const dropdown = screen.getByTestId('dropdown');
    const dropdownValue1 = screen.getByText('Busywork')
    const dropdownValue2 = screen.getByText('Cooking')
    const dropdownValue3 = screen.getByText('Education')
    const dropdownValue4 = screen.getByText('Recreational')

    expect(dropdown).toBeInTheDocument();
    expect(dropdownValue1).toBeInTheDocument();
    expect(dropdownValue2).toBeInTheDocument();
    expect(dropdownValue3).toBeInTheDocument();
    expect(dropdownValue4).toBeInTheDocument();
  });

  it('should fire filterSearchResults when a selection is made', () => {
    const dropdown = screen.getByTestId('dropdown');

    userEvent.selectOptions(dropdown, ['Cooking'] );

    expect(mockFilterSearchResults).toHaveBeenCalled();
  })
});