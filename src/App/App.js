import React, { useState, useEffect } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import { getRandomActivity } from '../apiCalls.js';
import RandomActivity from '../RandomActivity/RandomActivity.js';
import './App.scss';

function App() {

  const [randomActivity, setRandomActivity] = useState({
    accessibility: null,
    activity: '',
    key: '',
    link: '',
    participants: null,
    price: null,
    type: ''
  })

  const [savedActivities, setSavedActivities] = useState([])

  const generateNewActivity = () => {
    getRandomActivity()
    .then(data => setRandomActivity(data))
  }

  const saveActivity = (currentActivity) => {
    setSavedActivities([...savedActivities, currentActivity])
  }

  return(
    <section>
      <nav>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/saved-activities'>
          Saved Activities
        </NavLink>
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
            saveActivity={saveActivity}
          />
      </Route>
    </section>
  )
}

export default App;
