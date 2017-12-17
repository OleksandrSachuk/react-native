import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import topReposSaga from '../sagas/sagas'
import { Platform } from 'react-native';
import devTools from 'remote-redux-devtools';
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware(/* {sagaMonitor} */);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(sagaMiddleware,logger))
// );


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
//     applyMiddleware(sagaMiddleware)
// ));
//
//

// const enhancer = compose(
//     applyMiddleware(sagaMiddleware,logger),
//     devTools({
//         name: Platform.OS,
//         hostname: 'localhost',
//         port: 19009
//     }))
//
// export const store = createStore(rootReducer, enhancer);
export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(topReposSaga)