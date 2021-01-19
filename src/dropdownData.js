import PropTypes from 'prop-types';

export const activityTypeDropdown = [
  {id: 0, name: 'Any', type: 'activity'},
  {id: 1, name: 'Busywork', type: 'activity'},
  {id: 2, name: 'Charity', type: 'activity'},
  {id: 3, name: 'Cooking', type: 'activity'},
  {id: 4, name: 'DIY', type: 'activity'},
  {id: 5, name: 'Education', type: 'activity'},
  {id: 6, name: 'Music', type: 'activity'},
  {id: 7, name: 'Recreational', type: 'activity'},
  {id: 8, name: 'Relaxation', type: 'activity'},
  {id: 9, name: 'Social', type: 'activity'}
]

export const participantNumDropdown = [
  {id: 10, name: 'Any', type: 'participants'},
  {id: 11, name: '1', type: 'participants'},
  {id: 12, name: '2', type: 'participants'},
  {id: 13, name: '3', type: 'participants'}
] 

activityTypeDropdown.PropTypes = {
  activityTypeDropdown: PropTypes.array
};

participantNumDropdown.PropTypes = {
  participantNumDropdown: PropTypes.array
};
