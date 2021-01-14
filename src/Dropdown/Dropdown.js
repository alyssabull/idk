import './Dropdown.scss'

const Dropdown = (props) => {
  const generateDropdown = () => {
    return props.dropdownValues.map(value => {
      return(
        <option
          id={value.id}
          key={value.id}
          value={`${value.name}`}>
            {value.name}
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