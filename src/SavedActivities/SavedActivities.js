import ActivityCard from '../ActivityCard/ActivityCard.js';
import './SavedActivities.scss'

const SavedActivities = (props) => {
  const generateActivityCards = () => {
    props.savedActivities.map(activity => {
      return(
        <ActivityCard 
          activity={activity.name}
          type={activity.type}
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