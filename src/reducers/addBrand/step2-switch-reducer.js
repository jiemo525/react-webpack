/**
 * 
 */
import * as types from '../../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_BRAND_STEP2_SWITCH:
      return [action.addBrandStep2Switch];
    default:
      return state;
  }
}
