import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { getRandomActivity } from '../apiCalls.js';
import RandomActivity from '../RandomActivity/RandomActivity.js';
import SavedActivities from '../SavedActivities/SavedActivities.js';
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

  const generateNewActivity = () => {
    getRandomActivity()
    .then(data => setRandomActivity(data))
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
          />
      </Route>
      <Route  
        exact path='/saved-activities'>
          <SavedActivities />
      </Route>
    </section>
  )
}

export default App;
