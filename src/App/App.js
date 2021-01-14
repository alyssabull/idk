import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { getFilteredActivity, getRandomActivity } from '../apiCalls.js';
import RandomActivity from '../RandomActivity/RandomActivity.js';
import SavedActivities from '../SavedActivities/SavedActivities.js';
import Dropdown from '../Dropdown/Dropdown.js';
import './App.scss';

function App() {

  const [randomActivity, setRandomActivity] = useState({})
  const [savedActivities, setSavedActivities] = useState([])
  const [activitySearchType, setActivitySearchType] = useState('any')

  useEffect(() => {
    if(localStorage.length > 0) {
      let storedActivities = localStorage.getItem('storedActivities')
      let parsedActivities = JSON.parse(storedActivities)
      setSavedActivities(parsedActivities)
    }
  }, [])

  const generateNewActivity = () => {
    if (activitySearchType === 'any') {
      getRandomActivity()
      .then(data => formatAPIData(data))
      .catch(error => console.error)
    } else {
      getFilteredActivity(activitySearchType)
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
    setActivitySearchType(dropdownInput)
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
      <Route 
        exact path='/'>
      <h1>IDK</h1>
      <section className='filter-activities'>
        <p>Show me</p>
        <Dropdown 
          activityTypes={[
            {id: 0, name: 'Any'},
            {id: 1, name: 'Busywork'},
            {id: 1, name: 'Charity'},
            {id: 1, name: 'Cooking'},
            {id: 1, name: 'DIY'},
            {id: 1, name: 'Education'},
            {id: 1, name: 'Music'},
            {id: 1, name: 'Recreational'},
            {id: 1, name: 'Relaxation'},
            {id: 1, name: 'Social'}
          ]}
          filterSearchResults={filterSearchResults}
        />
        <p>Activities</p>
      </section>
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
