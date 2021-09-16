import AsyncStorage from '@react-native-community/async-storage';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';

import weatherReducer from '../reducers/weatherReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({data: weatherReducer});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
export default store;
