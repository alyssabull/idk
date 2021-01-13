import { useState, useEffect } from 'react'
import './RandomActivity.scss'

const RandomActivity = (props) => {

  return(
    <section>
      <h1>{props.randomActivity.activity}</h1>
      <button>+ Save Activity</button>
      <button onClick={props.generateNewActivity}>Show New Activity</button>
    </section>
  )
}

export default RandomActivity;