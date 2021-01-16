export const toggleActivity = (activity, savedActivities, updateSavedActivities) => {
  if (activity.isSaved === false) {
    activity.isSaved = true
    return updateSavedActivities(activity, 'save')
  } else if (activity.isSaved === true) {
    activity.isSaved = false
    const filteredActivities = savedActivities.filter(savedActivity => {
      return savedActivity.key !== activity.key
    })
    return updateSavedActivities(filteredActivities, 'delete')
  }
}