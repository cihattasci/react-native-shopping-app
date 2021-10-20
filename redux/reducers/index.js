import {combineReducers} from 'redux';
import quantityOneReducer from './quantityOneReducer';
import quantityTwoReducer from './quantityTwoReducer';
 
const reducers = combineReducers({
  quantityOneReducer,
  quantityTwoReducer,
});

export default reducers;