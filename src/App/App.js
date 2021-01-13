import React, { useState, useEffect } from 'react';
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
      <h1>IDK</h1>
      <button onClick={generateNewActivity}>PRESS FOR FUN</button>
    </section>
  )
}

export default App;
