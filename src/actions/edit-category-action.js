import * as types from './action-types';

export const selectStep2Switch = (editCategoryStep2Switch) => {
  return {
        type: types.EDIT_CATEGORY_STEP2_SWITCH,
        editCategoryStep2Switch
  };
}

export const selectStep3Switch = (editCategoryStep3Switch) => {
  return {
        type: types.EDIT_CATEGORY_STEP3_SWITCH,
        editCategoryStep3Switch
  };
}