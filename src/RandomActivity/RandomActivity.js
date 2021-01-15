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

  const generateActivityCard = () => {
      return(
        <section className='activity-card'>
          <h1 className='activity-title'>{props.randomActivity.activity}</h1>
          <section className='activity-details'>
            <p className='activity-type'><b>Activity Type:</b> {props.randomActivity.type}</p>
            <p className='activity-participants'><b>Number of Participants:</b> {props.randomActivity.participants}</p>
          </section>
          <section className='buttons'>
            <button onClick={() => toggleActivity(props.randomActivity)}>{props.randomActivity.isSaved ? '- Remove Activity' : '+ Save Activity'}</button>
            <button onClick={props.generateNewActivity}>Show New Activity</button>
            {props.randomActivity.link !== '' && <button>Get Started Here!</button>}
          </section>
        </section>
      )
  }

  return(
    <section>
      {generateActivityCard()}
    </section>
  )
}

export default RandomActivity;