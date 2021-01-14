import { useEffect, useState } from 'react'
import './Dropdown.scss'

const Dropdown = (props) => {

  const [dropdownValue, setDropdownValue] = useState(props.filterType)

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

  useEffect(() => {
    props.filterSearchResults(dropdownValue, props.dropdownType)
  }, [dropdownValue])

  // const handleDropdownChange = (event) => {
  //   debugger
  //   setDropdownValue(event.target.value.toLowerCase())
  //   console.log(dropdownValue)
  //   props.filterSearchResults(dropdownValue, event.target[0].id)
  // }

  return(
    <form>
      <select 
      id='dropdown'
      // value={dropdownValue}
      onChange={(event) => setDropdownValue(event.target.value.toLowerCase())}>
        {generateDropdown()}
      </select>
    </form>
  )
}

export default Dropdown;