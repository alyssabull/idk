import PropTypes from 'prop-types';

const Dropdown = ({ dropdownValues, filterSearchResults, dropdownType}) => {

  const generateDropdown = () => {
    return dropdownValues.map(value => {
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
    debugger
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

export default Dropdown;

Dropdown.propTypes = {
  dropdownValues: PropTypes.array,
  filterSearchResults: PropTypes.func,
  dropdownType: PropTypes.string
};