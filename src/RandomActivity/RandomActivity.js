import { toggleActivity } from '../utilities/utilities.js';
import './RandomActivity.scss'

const RandomActivity = (props) => {

  const generateActivityCard = () => {
      return(
        <section className='activity-card'>
          <h1 className='activity-title'>{props.randomActivity.activity}</h1>
          <section className='activity-details'>
            <p className='activity-type'><b>Activity Type:</b> &nbsp;{props.randomActivity.type}</p>
            <p className='activity-participants'><b>Number of Participants:</b> &nbsp; {props.randomActivity.participants}</p>
          </section>
          <section>
            <button onClick={() => toggleActivity(props.randomActivity, props.savedActivites, props.updateSavedActivities)} className='buttons'>
              {props.randomActivity.isSaved ? '- Remove Activity' : '+ Save Activity'}
            </button>
            <button onClick={props.generateNewActivity} className='buttons'>
              Show New Activity
            </button>
          </section>
          {props.randomActivity.link !== '' && <p className='get-started-link'>Want to get started? Click <a target='_blank' className='get-started-link' href={`${props.randomActivity.link}`}>HERE!</a></p>}
        </section>
      )
  }

  return(
    <section>
      {generateActivityCard()}
    </section>
  )
}

export default RandomActivity;