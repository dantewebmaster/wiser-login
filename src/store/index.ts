import { createStore, applyMiddleware, Store, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { AuthState } from './ducks/auth/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface AppState {
  auth: AuthState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<AppState> = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware)
    /* tslint:disable */
    // (window as any)
    //   .__REDUX_DEVTOOLS_EXTENSION__ && (window as any)
    //   .__REDUX_DEVTOOLS_EXTENSION__(),
    /* tslint:enable */
  )
);

sagaMiddleware.run(rootSaga);

export default store;
