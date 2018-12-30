import {combineReducers} from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';

import AuthReducer from './auth';
import PathsReducer from './paths';


const reducers = asyncInitialState.outerReducer(combineReducers({
  auth: AuthReducer,
  paths: PathsReducer,
  asyncInitialState: asyncInitialState.innerReducer
}));

export default reducers;
