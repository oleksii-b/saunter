import * as types from './actionTypes';


export const signIn = (credentials) => {
  return {
    type: types.SIGN_IN,
    payload: credentials
  }
};

export const signInSucceeded = (user) => {
  return {
    type: types.SIGN_IN_SUCCEEDED,
    payload: user
  }
};

export const signInFailed = (errorMsg) => {
  return {
    type: types.SIGN_IN_FAILED,
    payload: errorMsg
  }
};

