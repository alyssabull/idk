import './ActivityCard.scss'

const ActivityCard = (props) => {
  return(
    <section>
      <h1>{props.activity}</h1>
      <p>{props.participants}</p>
    </section>
  )
}

export default ActivityCard;