import './Dropdown.scss'

const DropdownFilter = (props) => {

  const generateDropdown = () => {
    return props.dropdownValues.map(value => {
      return(
        <option
          id={value.type}
          data-testid={value.name}
          key={value.id}
          value={`${value.name}`}>
            {value.name}
        </option>
      )
    })
  }

  const handleDropdownChange = (event) => {
    props.filterSearchResults(event.target.value.toLowerCase(), event.target[0].id)
  }

  return(
    <select
      id='dropdown'
      data-testid = 'dropdown'
      onChange={handleDropdownChange}>
        {generateDropdown()}
    </select>
  )
}

export default DropdownFilter;