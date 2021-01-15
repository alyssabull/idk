import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dropdown from './Dropdown.js';
import { sampleActivityDropdown } from '../sampleTestData.js';
import '@testing-library/jest-dom';

describe('Dropdown', () => {
  beforeEach(() => {
    const mockFilterSearchResults = jest.fn()

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
});