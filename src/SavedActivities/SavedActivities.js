import ActivityCard from '../ActivityCard/ActivityCard.js';
import './SavedActivities.scss'

const SavedActivities = (props) => {
  const generateActivityCards = () => {
    return props.savedActivities.map(activity => {
      return(
        <section>
          <ActivityCard 
            activity={activity.activity}
            type={activity.type}
            participants={activity.participants}
            deleteSavedActivity={props.deleteSavedActivity}
            id={activity.key}
            key={activity.key}
          />
        </section>
      )
    })
  }

  return(
    <section className='saved-activities'>
      <h1 className='saved-title'>Saved Activities</h1>
      <section className='all-cards'>
        {props.savedActivities.length > 0 && generateActivityCards() }
        {props.savedActivities.length === 0 && <p>No saved activites yet! Your saved activities will be shown here.</p>}
      </section>
    </section>
  )
}

export default SavedActivities;