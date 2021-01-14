import './RandomActivity.scss'

const RandomActivity = (props) => {
  const toggleActivity = (activity) => {
    if (activity.isSaved === false) {
      activity.isSaved = true
      props.updateSavedActivities(activity, 'save')
    } else if (activity.isSaved === true) {
      activity.isSaved = false
      const filteredActivities = props.savedActivities.filter(savedActivity => {
        return savedActivity.key !== activity.key
      })
      props.updateSavedActivities(filteredActivities, 'delete')
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