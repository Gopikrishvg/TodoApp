import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from './reducers';
import mySaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducer);

const middlewares = applyMiddleware(sagaMiddleware, logger);
// mount it on the Store
export const store = createStore(persistedReducer, middlewares);
export let persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// then run the saga
sagaMiddleware.run(mySaga);
