import './ActivityCard.scss'

const ActivityCard = (props) => {
  return(
    <section>
      <h1>{props.activity}</h1>
      <p>{props.type}</p>
      <button onClick={() => props.deleteSavedActivity(props.id)}>REMOVE ACTIVITY</button>
    </section>
  )
}

export default ActivityCard;