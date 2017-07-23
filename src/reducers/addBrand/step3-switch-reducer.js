/**
 * 
 */
import * as types from '../../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_BRAND_STEP3_SWITCH:
      return [action.addBrandStep3Switch];
    default:
      return state;
  }
}
