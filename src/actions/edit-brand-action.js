import * as types from './action-types';

export const selectStep2Switch = (editBrandStep2Switch) => {
  return {
        type: types.EDIT_BRAND_STEP2_SWITCH,
        editBrandStep2Switch
  };
}

export const selectStep3Switch = (editBrandStep3Switch) => {
  return {
        type: types.EDIT_BRAND_STEP3_SWITCH,
        editBrandStep3Switch
  };
}