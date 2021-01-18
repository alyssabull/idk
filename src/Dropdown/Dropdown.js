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
              <label for={value.id}>{value.name}</label>
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
        <label for={`${dropdownType} dropdown`}>{generateDropdown()}</label>
    </select>
  )
}

export default DropdownFilter;