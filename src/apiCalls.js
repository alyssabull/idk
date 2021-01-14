export const getRandomActivity = () => {
  return fetch('http://www.boredapi.com/api/activity/')
  .then(response => response.json())
}

export const getFilteredActivity = (type) => {
  return fetch(`http://www.boredapi.com/api/activity?type=${type}`)
  .then(response => response.json())
}