import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { getRandomActivity } from '../apiCalls.js';
import RandomActivity from '../RandomActivity/RandomActivity.js';
import SavedActivities from '../SavedActivities/SavedActivities.js';
import './App.scss';

function App() {

  const [randomActivity, setRandomActivity] = useState({})
  const [savedActivities, setSavedActivities] = useState([])

  useEffect(() => {
    if(localStorage.length > 0) {
      let storedActivities = localStorage.getItem('storedActivities')
      let parsedActivities = JSON.parse(storedActivities)
      setSavedActivities(parsedActivities)
    }
  }, [])

  const generateNewActivity = () => {
    getRandomActivity()
    .then(data => formatAPIData(data))
    .catch(error => console.error)
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
      <Link to='random-activity'>
        <button onClick={generateNewActivity}>PRESS FOR FUN</button>
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
