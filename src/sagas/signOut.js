import {call, put, takeEvery} from 'redux-saga/effects';

import {SIGN_OUT} from 'actions/actionTypes';
import {signInSucceeded} from 'actions/signIn';
import {signOutFailed} from 'actions/signOut';


function* signOutAsync() {
  try {
    const data = yield call(() => {
      return firebase.auth().signOut()
    });

    yield put(signInSucceeded(null));
  } catch (error) {
    console.error(error.code, error.message)
    yield put(signOutFailed(error.message));
  }
}

export default function* watchSignOut() {
  yield takeEvery(SIGN_OUT, signOutAsync);
}
