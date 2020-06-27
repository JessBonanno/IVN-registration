import * as actionTypes from './actionTypes.js';

export const addUserChoices = choices => {
  return {
    type: actionTypes.ADD_USER_CHOICES,
    payload: choices,
  };
};
export const addUserAvailability = info => {
  return {
    type: actionTypes.ADD_USER_AVAILABILITY,
    payload: info,
  };
};
export const addUserInformation = info => {
  return {
    type: actionTypes.ADD_USER_INFORMATION,
    payload: info,
  };
};
