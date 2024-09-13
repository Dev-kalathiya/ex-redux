import {  applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
  
import userReducer from './redux/AddReducer';
import { thunk } from 'redux-thunk';

const combineAllReducers = combineReducers({
  student: userReducer 
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const Store = legacy_createStore(
  combineAllReducers,
  composeEnhancers(applyMiddleware(thunk))  
);
