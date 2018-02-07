// import rootReducer from '../reducers';
// import {createStore, compose} from 'redux';

// // enable redux devtools... can this be done with Webpack instead?
// const enhancers = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )

// export default (initialState) => {
//   return createStore(rootReducer, initialState, enhancers);
// };


import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import watchIncrementAsync from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware(watchIncrementAsync)

// sagaMiddleware.run(rootSaga)

export default (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware))
}