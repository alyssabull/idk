import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { getFilteredActivity, getFilteredParticipantActivity, getRandomActivity } from '../apiCalls.js';
import { FaQuestion } from 'react-icons/fa'
import RandomActivity from '../RandomActivity/RandomActivity.js';
import SavedActivities from '../SavedActivities/SavedActivities.js';
import DropdownFilter from '../Dropdown/Dropdown.js';
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
    console.log('data', data)
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
    saveToStorage()
  }

  const saveToStorage = () => {
    localStorage.clear()
    let stringifiedActivities = JSON.stringify(savedActivities)
    localStorage.setItem('storedActivities', stringifiedActivities)
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
        <h1 className='website-title'>IDK</h1>
        <nav>
          <Link to='/'>
            <p className='nav-title'>Home</p>
          </Link>
          <Link to='/saved-activities'>
          <p className='nav-title'>Saved Activities</p>
          </Link>
        </nav>
      </header>
      <Route exact path={["/", "/random-activity"]}>
        <section className='filter-activities'>
          <p>Show me</p>
          <DropdownFilter 
            dropdownValues={[
              {id: 0, name: 'Any', type: 'activity'},
              {id: 1, name: 'Busywork', type: 'activity'},
              {id: 2, name: 'Charity', type: 'activity'},
              {id: 3, name: 'Cooking', type: 'activity'},
              {id: 4, name: 'DIY', type: 'activity'},
              {id: 5, name: 'Education', type: 'activity'},
              {id: 6, name: 'Music', type: 'activity'},
              {id: 7, name: 'Recreational', type: 'activity'},
              {id: 8, name: 'Relaxation', type: 'activity'},
              {id: 9, name: 'Social', type: 'activity'}
            ]}
            filterSearchResults={filterSearchResults}
            filterType={activitySearchType}
            dropdownType='activity'
          />
          <p>activity with</p>
          <DropdownFilter 
            dropdownValues={[
              {id: 0, name: 'Any', type: 'participants'},
              {id: 1, name: '1', type: 'participants'},
              {id: 2, name: '2', type: 'participants'},
              {id: 3, name: '3', type: 'participants'}
            ]}
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
          <FaQuestion size={72}/>
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
            updateSavedActivities={updateSavedActivities}
            setSavedActivities={setSavedActivities}
          />
      </Route>
    </section>
  )
}

export default App;
