import * as types from 'actions/actionTypes';


const initaialState = {
  loading: false,
  error: false
};

export default function SignOutReducer(state = initaialState, action) {
  const newState = {...state};

  switch (action.type) {
    case types.SIGN_OUT:
      return {
        loading: true,
        error: false
      };
    case types.SIGN_OUT_FAILED:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return newState;
  }
}
