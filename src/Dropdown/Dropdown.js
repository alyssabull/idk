import './Dropdown.scss'

const Dropdown = (props) => {
  const generateDropdown = () => {
    return props.activityTypes.map(activityType => {
      return(
        <option
          id={activityType.id}
          key={activityType.id}
          value={`${activityType.name}`}>
            {activityType.name}
        </option>
      )
    })
  }

  return(
    <select id='dropdown'>
      {generateDropdown()}
    </select>
  )
}

export default Dropdown;