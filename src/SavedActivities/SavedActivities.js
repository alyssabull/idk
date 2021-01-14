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

  return(
    <section>
      <h1>Saved Activities</h1>
      {generateActivityCards()}
    </section>
  )
}

export default SavedActivities;