import ActivityCard from '../ActivityCard/ActivityCard.js';
import './SavedActivities.scss'

const SavedActivities = (props) => {
  const generateActivityCards = () => {
    return props.savedActivities.map(activity => {
      return(
        <section className='single-activity-card'>
          <ActivityCard 
            activity={activity.activity}
            type={activity.type}
            participants={activity.participants}
            deleteSavedActivity={deleteSavedActivity}
            id={activity.key}
            key={Math.random()}
          />
        </section>
      )
    })
  }

  const deleteSavedActivity = (activityKey) => {
    const filteredActivities = props.savedActivities.filter(savedActivity => {
      return savedActivity.key !== activityKey
    })

    props.setSavedActivities(filteredActivities)
  }

  return(
    <section className='saved-activities'>
      <h1 className='saved-title'>Saved Activities</h1>
      <section className='all-cards'>
        {generateActivityCards()}
      </section>
    </section>
  )
}

export default SavedActivities;