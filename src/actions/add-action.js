import * as types from './action-types';

export const selectCategory = (add) => {
  return {
        type: types.ADD_ACTION,
        add
  };
}
