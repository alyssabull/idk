import React, { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { getRandomActivity } from '../apiCalls.js';
import './App.css';

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
      <button onClick={generateNewActivity}>PRESS FOR FUN</button>
      </Route>
    </section>
  )
}

export default App;
