import React, { useState, useEffect } from 'react';
import { getRandomActivity } from '../apiCalls.js';
import './App.css';

function App() {

  useEffect(() => {
    getRandomActivity()
    .then(data => console.log(data))
  })
  
  return(
    <section>
      <h1>IDK</h1>
    </section>
  )
}

export default App;
