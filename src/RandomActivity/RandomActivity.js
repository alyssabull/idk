import { useEffect, useState } from 'react';
import './RandomActivity.scss'

const RandomActivity = (props) => {
  const [savedActivities, setSavedActivities] = useState([])
  const [savedStatus, setSavedStatus] = useState('+ Save Activity')

  useEffect(() => {
    const determineSavedStatus = savedActivities.filter(activity => {
        return activity.key === props.randomActivity.key
      })
      if (determineSavedStatus.length > 0) {
        setSavedStatus('Activity Saved!')
      } else {
        setSavedStatus('+ Save Activity')
      }
  }, [savedActivities])

  useEffect(() => {
    setSavedStatus('+ Save Activity')
  }, [props])

  const toggleActivity = (currentActivity) => {
    if (savedStatus === '+ Save Activity') {
      setSavedActivities([...savedActivities, currentActivity])
    } else if (savedStatus === 'Activity Saved!') {
      const filteredActivities = savedActivities.filter(activity => {
        return activity.key !== currentActivity.key
      })
      setSavedActivities(filteredActivities)
    }
  }

  return(
    <section>
      <h1>{props.randomActivity.activity}</h1>
      <button onClick={() => toggleActivity(props.randomActivity)}>{savedStatus}</button>
      <button onClick={props.generateNewActivity}>Show New Activity</button>
      {props.randomActivity.link !== '' && <button>Get Started Here!</button>}
    </section>
  )
}

export default RandomActivity;