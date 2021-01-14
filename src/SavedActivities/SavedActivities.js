import ActivityCard from '../ActivityCard/ActivityCard.js';
import './SavedActivities.scss'

const SavedActivities = (props) => {
  const generateActivityCards = () => {
    return props.savedActivities.map(activity => {
      return(
        <ActivityCard 
          activity={activity.activity}
          type={activity.type}
          participants={activity.participants}
          deleteSavedActivity={deleteSavedActivity}
          id={activity.key}
          key={Math.random()}
        />
      )
    })
  }

  const deleteSavedActivity = (activityKey) => {
    const filteredActivities = props.savedActivities.filter(savedActivity => {
      return savedActivity.key !== activityKey
    })

    props.updateSavedActivities(filteredActivities, 'delete')
  }

  return(
    <section>
      <h1>Saved Activities</h1>
      {generateActivityCards()}
    </section>
  )
}

export default SavedActivities;