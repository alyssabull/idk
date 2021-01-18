import './Dropdown.scss'

const DropdownFilter = ({ dropdownValues, filterSearchResults, dropdownType}) => {

  const generateDropdown = () => {
    return dropdownValues.map(value => {
      return(
          <option
            id={value.id}
            data-testid={value.name}
            key={value.id}
            value={`${value.name}`}>
              {value.name}
          </option>
      )
    })
  }

  const handleDropdownChange = (event) => {
    filterSearchResults(event.target.value.toLowerCase(), event.target[0].id)
  }

  return(
    <select
      id={`${dropdownType} dropdown`}
      data-testid = 'dropdown'
      onChange={handleDropdownChange}>
        {generateDropdown()}
    </select>
  )
}

export default DropdownFilter;