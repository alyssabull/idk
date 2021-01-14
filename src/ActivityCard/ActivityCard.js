import './ActivityCard.scss'

const ActivityCard = (props) => {
  return(
    <section>
      <h1>{props.activity}</h1>
      <p>{props.type}</p>
      <button>REMOVE ACTIVITY</button>
    </section>
  )
}

export default ActivityCard;