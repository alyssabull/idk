import { useEffect, useState } from 'react';
import './RandomActivity.scss'

const RandomActivity = (props) => {
  // const [savedActivities, setSavedActivities] = useState([])
  // TODO: remove savedStatus, add prop isSaved to random activity
  // add cleaner function to add isSaved prop (in APP)

  // const [currentActivity, setCurrentActivity] = useState(props.randomActivity) 

  // useEffect(() => {
  //   const determineSavedStatus = savedActivities.filter(activity => {
  //       return activity.key === props.randomActivity.key
  //     })
  //     if (determineSavedStatus.length > 0) {
  //       setSavedStatus('Remove Activity')
  //     } else {
  //       setSavedStatus('+ Save Activity')
  //     }
  // }, [savedActivities])

  // useEffect(() => {
  //   setSavedStatus('+ Save Activity')
  // }, [props])

  const toggleActivity = (activity) => {
    if (activity.isSaved === false) {
      activity.isSaved = true
      props.updateSavedActivities([activity])
    } 
    else if (activity.isSaved === true) {
      activity.isSaved = false
      const filteredActivities = props.savedActivities.filter(savedActivity => {
        return savedActivity.key !== activity.key
      })
      props.updateSavedActivities(filteredActivities)
    }
  }

  return(
    <section>
      <h1>{props.randomActivity.activity}</h1>
      <button onClick={() => toggleActivity(props.randomActivity)}>{props.randomActivity.isSaved ? 'Remove Activity' : '+ Save Activity'}</button>
      <button onClick={props.generateNewActivity}>Show New Activity</button>
      {props.randomActivity.link !== '' && <button>Get Started Here!</button>}
    </section>
  )
}

export default RandomActivity;