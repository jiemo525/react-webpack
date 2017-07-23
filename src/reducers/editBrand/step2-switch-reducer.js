/**
 * 
 */
import * as types from '../../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.EDIT_BRAND_STEP2_SWITCH:
      return [action.editBrandStep2Switch];
    default:
      return state;
  }
}
