import * as actionTypes from '../actions/actionTypes';

const initialState = {
  users: ['Individual', 'Social Service Organization', 'Business'],
  userAvailability: {},
  userInformation: {},
  userChoices: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER_CHOICES:
      return {
        ...state,
        userChoices: [...state.userChoices, action.payload],
      };
    case actionTypes.ADD_USER_INFORMATION:
      return {
        ...state,
        userInformation: action.payload,
      };    case actionTypes.ADD_USER_AVAILABILITY:
      return {
        ...state,
        userAvailability: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
