import * as actionTypes from './actionTypes';
 
export const increaseQuantityOne = () => ({
  type: actionTypes.INCREASE_QUANTITY_ONE,
  payload: 1,
});
 
export const decreaseQuantityOne = () => ({
  type: actionTypes.DECREASE_QUANTITY_ONE,
  payload: 1,
});

export const increaseQuantityTwo = () => ({
  type: actionTypes.INCREASE_QUANTITY_TWO,
  payload: 1,
});
 
export const decreaseQuantityTwo = () => ({
  type: actionTypes.DECREASE_QUANTITY_TWO,
  payload: 1,
});
