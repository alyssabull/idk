import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar.js';
import '@testing-library/jest-dom';

describe('NavBar', () => {
  it('should render correctly', () =>  {    
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  
    const homeLink = screen.getByText('Home');
    const randomActivityLink = screen.getByText('Random Activity');
    const savedActivitiesLink = screen.getByText('Saved Activities')

    expect(homeLink).toBeInTheDocument();
    expect(randomActivityLink).toBeInTheDocument();
    expect(savedActivitiesLink).toBeInTheDocument();
  });
});