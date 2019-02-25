import {combineReducers} from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';

import AuthReducer from './auth';
import PathsReducer from './paths';
import SignInReducer from './signIn';
import SignOutReducer from './signOut';


const reducers = asyncInitialState.outerReducer(combineReducers({
  auth: AuthReducer,
  paths: PathsReducer,
  signIn: SignInReducer,
  signOut: SignOutReducer,
  asyncInitialState: asyncInitialState.innerReducer
}));

export default reducers;
