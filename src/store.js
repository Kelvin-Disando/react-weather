import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { logger } from 'redux-logger';
// import { reducer as formReducer } from 'redux-form';
// import projects, { projectsSaga } from './features/projects';

const reducer = {
  projects,

};

function* rootSaga() {
  yield all([projectsSaga()]);
}

const initialiseSagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware(), initialiseSagaMiddleware];
if (process.env.NODE_ENV === `development`) {
  middleware.push(logger);
}
const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

initialiseSagaMiddleware.run(rootSaga);

export default store;
