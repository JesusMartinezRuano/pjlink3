// ./react-redux-client/src/reducers/index.js
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import {proyectorReducer} from './proyectorReducer';

export default combineReducers({
  appState:appReducer,
  proyectorState:proyectorReducer,
  routing
  // More reducers if there are
  // can go here
})
