import * as actionTypes from '../actions/actionTypes';

const initialState = {
  users: ['Help Seeker', 'Volunteer', 'Partner'],
  userType: '',
  userAvailability: {},
  userInformation: {},
  userChoices: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.SET_USER_TYPE: 
      return {
          ...state,
          userType: action.payload,
      };
    case actionTypes.ADD_USER_CHOICES:
      return {
        ...state,
        userChoices: [...state.userChoices, action.payload],
      };
    case actionTypes.ADD_USER_INFORMATION:
      return {
        ...state,
        userInformation: action.payload,
      };
    case actionTypes.ADD_USER_AVAILABILITY:
      return {
        ...state,
        userAvailability: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
