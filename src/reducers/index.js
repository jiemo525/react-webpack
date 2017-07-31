import add from './add-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  add,
});

export default rootReducer;