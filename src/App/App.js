import React, { useState, useEffect, useCallback } from 'react';
import { Route, Link } from 'react-router-dom';
import { getFilteredActivity, getFilteredParticipantActivity, getRandomActivity } from '../apiCalls.js';
import RandomActivity from '../RandomActivity/RandomActivity.js';
import SavedActivities from '../SavedActivities/SavedActivities.js';
import Dropdown from '../Dropdown/Dropdown.js';
import './App.scss';

function App() {

  const [randomActivity, setRandomActivity] = useState({})
  const [savedActivities, setSavedActivities] = useState([])
  const [activitySearchType, setActivitySearchType] = useState('any')
  const [participantSearchNum, setParticipantSearchNum] = useState('any')

  useEffect(() => {
    if(localStorage.length > 0) {
      let storedActivities = localStorage.getItem('storedActivities')
      let parsedActivities = JSON.parse(storedActivities)
      setSavedActivities(parsedActivities)
    }
  }, [])

  const generateNewActivity = () => {
    debugger
    if (activitySearchType === 'any' && participantSearchNum === 'any') {
      getRandomActivity()
      .then(data => formatAPIData(data))
      .catch(error => console.error)
    } else if (activitySearchType !== 'any' && participantSearchNum === 'any') {
      getFilteredActivity(activitySearchType)
      .then(data => formatAPIData(data))
      .catch(error => console.error)
    } else if (activitySearchType === 'any' && participantSearchNum !== 'any') {
      getFilteredParticipantActivity(Number(participantSearchNum))
      .then(data => formatAPIData(data))
      .catch(error => console.error)
    }
  }

  const formatAPIData = (data) => {
    const cleanedData = {
      activity: data.activity,
      key: data.key,
      link: data.link,
      participants: data.participants,
      type: data.type,
      isSaved: false
    }
    setRandomActivity(cleanedData)
  }

  const updateSavedActivities = (activities, updateType) => {
    if(updateType === 'save') {
      setSavedActivities([...savedActivities, activities])
    } else {
      setSavedActivities(activities)
    }
    saveToStorage()
  }

  const saveToStorage = () => {
    localStorage.clear()
    let stringifiedActivities = JSON.stringify(savedActivities)
    localStorage.setItem('storedActivities', stringifiedActivities)
  }

  const filterSearchResults = (dropdownInput) => {
    if (dropdownInput.length > 1) {
      setActivitySearchType(dropdownInput)
    } else {
      setParticipantSearchNum(dropdownInput)
    }
  }

  const clearFilters = () => {
    setActivitySearchType('any')
    setParticipantSearchNum('any')
  }

  return(
    <section>
      <nav>
        <Link to='/'>
          Home
        </Link>
        <Link to='/saved-activities'>
          Saved Activities
        </Link>
      </nav>
      <h1>IDK</h1>
      <Route path={["/", "/random-activity"]}>
        <section className='filter-activities'>
          <p>Show me</p>
          <Dropdown 
            dropdownValues={[
              {id: 0, name: 'Any'},
              {id: 1, name: 'Busywork'},
              {id: 2, name: 'Charity'},
              {id: 3, name: 'Cooking'},
              {id: 4, name: 'DIY'},
              {id: 5, name: 'Education'},
              {id: 6, name: 'Music'},
              {id: 7, name: 'Recreational'},
              {id: 8, name: 'Relaxation'},
              {id: 9, name: 'Social'}
            ]}
            filterSearchResults={filterSearchResults}
          />
          <p>Activities with</p>
          <Dropdown 
            dropdownValues={[
              {id: 0, name: 'Any'},
              {id: 1, name: '0'},
              {id: 2, name: '1'},
              {id: 3, name: '2'},
              {id: 4, name: '3'},
              {id: 5, name: '4'},
            ]}
            filterSearchResults={filterSearchResults}
          />
          <button onClick={clearFilters}>CLEAR FILTERS</button>
        </section>
      </Route>
      <Route 
        exact path='/'>
      <Link to='random-activity'>
        <button onClick={generateNewActivity}>Find an Activity</button>
      </Link>
      </Route>
      <Route 
        exact path='/random-activity'>
          <RandomActivity 
            randomActivity={randomActivity}
            generateNewActivity={generateNewActivity}
            savedActivities={savedActivities}
            updateSavedActivities={updateSavedActivities}
          />
      </Route>
      <Route  
        exact path='/saved-activities'>
          <SavedActivities 
            savedActivities={savedActivities}
            updateSavedActivities={updateSavedActivities}
            setSavedActivities={setSavedActivities}
          />
      </Route>
    </section>
  )
}

export default App;
