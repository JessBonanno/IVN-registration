import * as actionTypes from './actionTypes.js';

export const updateCurrentPath = path => {
  return {
    type: actionTypes.UPDATE_CURRENT_PATH,
    payload: path,
  }
}

export const addService = service => dispatch => {
  dispatch({ type: actionTypes.ADD_SELECTED_SERVICE, payload: service });
  dispatch(updateServices(service.id));
};
export const updateServices = service => {
  return {
    type: actionTypes.UPDATE_SERVICES,
    payload: service,
  };
};

export const removeService = service => {
  return {
    type: actionTypes.REMOVE_SERVICE,
    payload: service,
  };
};

export const addResponses = responses => {
  return {
    type: actionTypes.ADD_RESPONSES,
    payload: responses,
  };
};

export const addUserChoices = choices => {
  return {
    type: actionTypes.ADD_USER_CHOICES,
    payload: choices,
  };
};

