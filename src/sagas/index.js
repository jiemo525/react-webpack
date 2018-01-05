import {take, call, put, fork, race} from 'redux-saga/effects'
import * as types from '../actions/action-types';

// export function* loginFlow() {
//     const response = yield call(function(){console.log('111111')})
//     yield put({ type: types.ADD_ACTION, sending: true })
// }


// export default function* root() {
//     yield fork(loginFlow)
// }

export default function* hello() {
    console.log('hello');
}