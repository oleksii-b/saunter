import * as types from './actionTypes';


export const signOut = () => {
  return {
    type: types.SIGN_OUT
  }
};

export const signOutFailed = (errorMsg) => {
  return {
    type: types.SIGN_OUT_FAILED,
    payload: errorMsg
  }
};

