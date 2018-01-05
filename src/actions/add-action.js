import * as types from './action-types';

export const selectCategory = (add) => {
  console.log(add);
  return {
        type: types.ADD_ACTION,
        add
  };
}
