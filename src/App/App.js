import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { getFilteredActivity, getFilteredParticipantActivity, getRandomActivity } from '../apiCalls/apiCalls.js';
import { FaQuestion } from 'react-icons/fa';
import { activityTypeDropdown, participantNumDropdown } from '../dropdownData.js';
import NavBar from '../NavBar/NavBar.js';
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
    if(localStorage.storedActivities && localStorage.length === 1) {
      getSavedActivitiesFromStorage()
    } else if (localStorage.currentActivity && localStorage.length === 1) {
      getSavedCurrentActivityFromStorage()
    } else if (localStorage.length === 2) {
      getSavedActivitiesFromStorage()
      getSavedCurrentActivityFromStorage()
    }
  }, [])

  useEffect(() => {
    saveToStorage()
  }, [savedActivities])

  useEffect(() => {
    saveCurrentActivitiy()
  }, [randomActivity])

  const getSavedActivitiesFromStorage = () => {
    let storedActivities = localStorage.getItem('storedActivities')
    let parsedActivities = JSON.parse(storedActivities)
    setSavedActivities(parsedActivities)
  }

  const getSavedCurrentActivityFromStorage = () => {
    let storedCurrentActivity = localStorage.getItem('storedCurrentActivity')
    let parsedCurrentActivity = JSON.parse(storedCurrentActivity)
    setRandomActivity(parsedCurrentActivity)
  }

  const generateNewActivity = () => {
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
    } else if (activitySearchType !== 'any' && participantSearchNum !== 'any') {
      getFilteredActivity(activitySearchType)
      .then(data => filterActivityParticipants(data))
      .catch(error => console.error)
    }
  }

  const filterActivityParticipants = (data) => {
    if (data.participants === Number(participantSearchNum)) {
      formatAPIData(data)
    } else {
      getFilteredActivity(activitySearchType)
      .then(data => filterActivityParticipants(data))
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
  }

  const deleteSavedActivity = (activityKey) => {
    const filteredActivities = savedActivities.filter(savedActivity => {
      return savedActivity.key !== activityKey
    })

    setSavedActivities(filteredActivities)
    generateNewActivity()
  }

  const saveToStorage = () => {
    localStorage.clear()
    let stringifiedActivities = JSON.stringify(savedActivities)
    localStorage.setItem('storedActivities', stringifiedActivities)
  }

  const saveCurrentActivitiy = () => {
    localStorage.clear()
    saveToStorage()
    let stringifiedCurrentActivity = JSON.stringify(randomActivity)
    localStorage.setItem('storedCurrentActivity', stringifiedCurrentActivity)
  }

  const filterSearchResults = (dropdownInput, dropdownType) => {
    if (dropdownType === 'activity') {
      setActivitySearchType(dropdownInput)
    } else {
      setParticipantSearchNum(dropdownInput)
    }
  }

  return(
    <section>
      <header>
        <Route exact path={['/random-activity', '/saved-activities']}>
          <h1 className='website-title'>IDK</h1>
        </Route>
        <h1></h1>
        <nav>
          <NavBar />
        </nav>
      </header>
      <Route exact path='/'>
        <h1 className='home-title'>IDK</h1>
        <p className='tagline'>Not sure what to today? Click below for some fun ideas!</p>
      </Route>
      <Route exact path={['/', '/random-activity']}>
        <section className='filter-activities'>
          <p>Show me</p>
          <Dropdown 
            dropdownValues={activityTypeDropdown}
            filterSearchResults={filterSearchResults}
            filterType={activitySearchType}
            dropdownType='activity'
          />
          <p>activity with</p>
          <Dropdown
            dropdownValues={participantNumDropdown}
            filterSearchResults={filterSearchResults}
            filterType={participantSearchNum}
            dropdownType='participants'
          />
          <p>participants</p>
        </section>
      </Route>
      <Route 
        exact path='/'>
      <Link to='random-activity' className='find-activity'>
        <button onClick={generateNewActivity} className='find-activity-button'>
          <FaQuestion size={72} data-testid='question-button' />
        </button>
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
            deleteSavedActivity={deleteSavedActivity}
          />
      </Route>
    </section>
  )
}

export default App;
