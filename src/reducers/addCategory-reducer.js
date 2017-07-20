import * as types from '../actions/action-types';

export default (state = '', action) => {
  switch (action.type) {
    case types.SELECT_CATEGORY:
      return action.category;
    default:
      return state;
  }
};