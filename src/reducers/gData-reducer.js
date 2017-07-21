import * as types from '../actions/action-types';

const init = [{
  key: '0',
  title:'电子产品',
  children: [{
    key: '0-0',
    title:'电脑',
    children: [{
      key: '0-0-0',
      title:'MACBOOK',
    },{
      key: '0-0-1',
      title:'MACBOOKPRO',
    }]
  },]
},];

export default (state=init, action) => {
  switch (action.type) {
    case types.G_DATA:
      return action.gdata;
    default:
      return state;
  }
};