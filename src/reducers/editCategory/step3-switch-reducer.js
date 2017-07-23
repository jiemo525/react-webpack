/**
 * 
 */
import * as types from '../../actions/action-types';

export default (state = '', action) => {
  switch (action.type) {
    case types.EDIT_CATEGORY_STEP3_SWITCH:
      return action.editCategoryStep3Switch;
    default:
      return state;
  }
}
