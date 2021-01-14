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

  const handleDropdownChange = (event) => {
    props.filterSearchResults(event.target.value.toLowerCase())
  }

  return(
    <select 
    id='dropdown'
    onChange={(event) => handleDropdownChange(event)}>
      {generateDropdown()}
    </select>
  )
}

export default Dropdown;