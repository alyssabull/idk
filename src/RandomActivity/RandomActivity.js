import PropTypes from 'prop-types';
import './RandomActivity.scss'

const RandomActivity = ({ randomActivity, savedActivities, generateNewActivity, updateSavedActivities}) => {
  const toggleActivity = (randomActivity) => {
    if (randomActivity.isSaved === false) {
      randomActivity.isSaved = true
      return updateSavedActivities(randomActivity, 'save')
    } else if (randomActivity.isSaved === true) {
      randomActivity.isSaved = false
      const filteredActivities = savedActivities.filter(savedActivity => {
        return savedActivity.key !== randomActivity.key
      })
      updateSavedActivities(filteredActivities, 'delete')
    }
  }

  const generateActivityCard = () => {
    return(
      <section className='activity-card'>
        <h1 className='activity-title'>{randomActivity.activity}</h1>
        <section className='activity-details'>
          <p className='activity-type'><b>Activity Type:</b> &nbsp;{randomActivity.type}</p>
          <p className='activity-participants'><b>Number of Participants:</b> &nbsp; {randomActivity.participants}</p>
        </section>
        <section className='button-container'>
          <button onClick={() => toggleActivity(randomActivity)} className='buttons'>
            {randomActivity.isSaved ? '- Remove Activity' : '+ Save Activity'}
          </button>
          <button onClick={generateNewActivity} className='buttons'>
            Show New Activity
          </button>
        </section>
        {randomActivity.link !== '' && <p className='get-started-link'>Want to get started? Click <a target='_blank' rel="noreferrer" className='get-started-here'href={`${randomActivity.link}`}>HERE!</a></p>}
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

RandomActivity.propTypes = {
  randomActivity: PropTypes.object,
  savedActivities: PropTypes.array,
  generateNewActivity: PropTypes.func,
  updateSavedActivities: PropTypes.func
};