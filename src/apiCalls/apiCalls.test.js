import { act, render, screen, waitFor} from '@testing-library/react';
import { getRandomActivity, getFilteredActivity, getFilteredParticipantActivity} from '../apiCalls/apiCalls.js';
import { sampleRandomActivity, sampleSavedActivities } from '../sampleTestData.js';
import '@testing-library/jest-dom';
// jest.mock('./apiCalls.js')

describe('apiCalls', () => {
  it('should call getRandomActivity correctly', () =>  {  
    getRandomActivity('cooking')
  });

  it('should call getFilteredActivity correctly', () =>  { 
    getFilteredActivity('Cooking') 
  });

  it('should call deleteSavedActivity function with the activity id', () =>  {  

  });
});