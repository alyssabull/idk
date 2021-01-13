import './RandomActivity.scss'

const RandomActivity = (props) => {
  return(
    <section>
      <h1>{props.randomActivity.activity}</h1>
      <button onClick={() => props.saveActivity(props.randomActivity)}>+ Save Activity</button>
      <button onClick={props.generateNewActivity}>Show New Activity</button>
      {props.randomActivity.link !== '' && <button>Get Started Here!</button>}
    </section>
  )
}

export default RandomActivity;