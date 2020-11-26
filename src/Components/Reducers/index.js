import boardCheckReducer from './boardCheck';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  validateBoard: boardCheckReducer,
});

export default allReducers;
