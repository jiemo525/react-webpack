/**
 * 
 */
import * as types from '../../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.EDIT_CATEGORY_STEP2_SWITCH:
      return [action.editCategoryStep2Switch];
    default:
      return state;
  }
}
