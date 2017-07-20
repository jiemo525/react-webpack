import * as types from './action-types';

export const selectCategory = (category) => {
  return {
        type: types.SELECT_CATEGORY,
        category
  };
}

export const addSubcategory = (subcategory) => {
    return {
        type: types.ADD_SUBCATEGORY,
        subcategory
    }
}