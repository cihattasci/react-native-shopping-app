import * as actionTypes from '../actions/actionTypes';
 
const addressReducer = (state = 1, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_QUANTITY_ONE:
      return (newState = state + action.payload);
    case actionTypes.DECREASE_QUANTITY_ONE:
      if (state > 0) {
        return (newState = state - action.payload);
      }
    default:
      return state;
  }
};
 
export default addressReducer;