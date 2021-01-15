import './ActivityCard.scss'

const ActivityCard = (props) => {
  return(
    <section className='single-activity-card'>
      <h1 className='title'>{props.activity}</h1>
      <p className='type'>{props.type}</p>
      <button onClick={() => props.deleteSavedActivity(props.id)}>REMOVE ACTIVITY</button>
    </section>
  )
}

export default ActivityCard;