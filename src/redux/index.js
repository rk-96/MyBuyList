import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';

import TodoReducer from './reducers/TodoReducer';
import ConfigReducer from './reducers/ConfigReducer';

// Config store key & reducers
const reducersConfig = combineReducers({
  todo: TodoReducer,
  config: ConfigReducer,
});

// Config store persistence
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['todo', 'config'],
};

const persistedReducer = persistReducer(persistConfig, reducersConfig);

let store;

if (__DEV__) {
  // Apply log for debug value while runing on development mode
  store = createStore(persistedReducer, applyMiddleware(logger));
} else {
  store = createStore(persistedReducer);
}

const persistor = persistStore(store);

export {store, persistor};
