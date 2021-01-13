import { useEffect, useState } from 'react';
import './RandomActivity.scss'

const RandomActivity = (props) => {
  const [savedActivities, setSavedActivities] = useState([])
  const [savedStatus, setSavedStatus] = useState('+ Save Activity')

  const saveActivity = (currentActivity) => {
    setSavedActivities([...savedActivities, currentActivity])
  }

  useEffect(() => {
    const determineSavedStatus = savedActivities.filter(activity => {
        return activity.key === props.randomActivity.key
      })
      if (determineSavedStatus.length > 0) {
        setSavedStatus('Activity Saved!')
      }  
  }, [savedActivities])

  return(
    <section>
      <h1>{props.randomActivity.activity}</h1>
      <button onClick={() => saveActivity(props.randomActivity)}>{savedStatus}</button>
      <button onClick={props.generateNewActivity}>Show New Activity</button>
      {props.randomActivity.link !== '' && <button>Get Started Here!</button>}
    </section>
  )
}

export default RandomActivity;