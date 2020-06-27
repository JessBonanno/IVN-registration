import * as actionTypes from '../actions/actionTypes';

const initialState = {
  users: ['Individual', 'Social Service Organization', 'Business'],
  userChoices: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
      case actionTypes.ADD_USER_CHOICES:
        return {
          ...state,
          userChoices: [
            ...state.userChoices,
            action.payload
          ]
        }
    default:
      return state;
  }
};
export default userReducer;
