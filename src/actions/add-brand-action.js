import * as types from './action-types';

export const selectStep2Switch = (addBrandStep2Switch) => {
  return {
        type: types.ADD_BRAND_STEP2_SWITCH,
        addBrandStep2Switch
  };
}

export const selectStep3Switch = (addBrandStep3Switch) => {
  return {
        type: types.ADD_BRAND_STEP3_SWITCH,
        addBrandStep3Switch
  };
}