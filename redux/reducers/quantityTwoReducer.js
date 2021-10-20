import * as actionTypes from '../actions/actionTypes';
 
const quantityTwoReducer = (state = 1, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_QUANTITY_TWO:
      return (newState = state + action.payload);
    case actionTypes.DECREASE_QUANTITY_TWO:
      if (state > 0) {
        return (newState = state - action.payload);
      }
    default:
      return state;
  }
};
 
export default quantityTwoReducer;