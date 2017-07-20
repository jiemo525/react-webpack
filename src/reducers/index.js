import category from './addCategory-reducer.js';
import subcategory from './subcategory-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  category,
  subcategory
});

export default rootReducer;