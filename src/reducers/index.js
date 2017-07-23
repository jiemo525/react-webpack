import category from './category-reducer';
import subcategory from './subcategory-reducer';
import gdata from './gData-reducer';
import editCategoryStep2Switch from './editCategory/step2-switch-reducer';
import editCategoryStep3Switch from './editCategory/step3-switch-reducer';
import addBrandStep2Switch from './addBrand/step2-switch-reducer';
import addBrandStep3Switch from './addBrand/step3-switch-reducer';
import editBrandStep2Switch from './editBrand/step2-switch-reducer';
import editBrandStep3Switch from './editBrand/step3-switch-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  category,
  subcategory,
  gdata,
  editCategoryStep2Switch,
  editCategoryStep3Switch,
  addBrandStep2Switch,
  addBrandStep3Switch,
  editBrandStep2Switch,
  editBrandStep3Switch
});

export default rootReducer;