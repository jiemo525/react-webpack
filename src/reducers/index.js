import category from './addCategory-reducer.js';
import subcategory from './subcategory-reducer.js';
import gdata from './gData-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  category,
  subcategory,
  gdata
});

export default rootReducer;