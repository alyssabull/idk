import './Dropdown.scss'

const DropdownFilter = (props) => {

  const generateDropdown = () => {
    return props.dropdownValues.map(value => {
      return(
        <option
          id={value.type}
          key={value.id}
          value={`${value.name}`}>
            {value.name}
        </option>
      )
    })
  }

  const handleDropdownChange = (event) => {
    debugger
    props.filterSearchResults(event.target.value.toLowerCase(), event.target[0].id)
  }

  return(
    <select
      id='dropdown'
      onChange={handleDropdownChange}>
        {generateDropdown()}
    </select>
  )
}

export default DropdownFilter;