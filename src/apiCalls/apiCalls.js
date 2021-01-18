export const getRandomActivity = () => {
  return fetch('http://www.boredapi.com/api/activity/')
  .then(response => {
    if (!response.ok) {
      throw Error('Failed to fetch activity.')
    }
    return response.json()
  })
}

export const getFilteredActivity = (type) => {
  return fetch(`http://www.boredapi.com/api/activity?type=${type}`)
  .then(response => {
    if (!response.ok) {
      throw Error(`Failed to fetch ${type} activity.`)
    }
    return response.json()
  })
}

export const getFilteredParticipantActivity = (num) => {
  return fetch(`http://www.boredapi.com/api/activity?participants=${num}`)
  .then(response => {
    if (!response.ok) {
      throw Error(`Failed to fetch activity with ${num} participants.`)
    }
    return response.json()
  })
}