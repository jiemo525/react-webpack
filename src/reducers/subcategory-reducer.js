import * as types from '../actions/action-types';

export default (state = '', action) => {
  switch (action.type) {
    case types.ADD_SUBCATEGORY:
      return action.subcategory;
    default:
      return state;
  }
};