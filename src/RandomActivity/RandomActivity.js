import { useEffect, useState } from 'react';
import './RandomActivity.scss'

const RandomActivity = (props) => {
  const [savedActivities, setSavedActivities] = useState([])
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

  // const toggleActivity = (currentActivity) => {
  //   if (savedStatus === '+ Save Activity') {
  //     setSavedActivities([...savedActivities, currentActivity])
  //   } else if (savedStatus === 'Remove Activity') {
  //     const filteredActivities = savedActivities.filter(activity => {
  //       return activity.key !== currentActivity.key
  //     })
  //     setSavedActivities(filteredActivities)
  //   }
  // }
  // pass setRandomActivity as prop to update isSaved 

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