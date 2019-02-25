import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

import {SIGN_IN} from 'actions/actionTypes';
import {signIn, signInSucceeded, signInFailed} from 'actions/signIn';


function* signInAsync(action) {
  try {
    const {login, pwd} = action.payload;

    const data = yield call(() => {
      return firebase.auth().signInWithEmailAndPassword(login, pwd)
    });

    yield put(signInSucceeded(login));
  } catch (error) {
    yield put(signInFailed(error.message));
  }
}

export default function* watchSignIn() {
  yield takeEvery(SIGN_IN, signInAsync);
}
