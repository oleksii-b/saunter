import * as types from 'actions/actionTypes';


const initaialState = {
  loading: false,
  error: false,
  user: null
};

export default function SignInReducer(state = initaialState, action) {
  const newState = {...state};

  switch (action.type) {
    case types.SIGN_IN:
      return {
        loading: true,
        error: false,
        user: null
      };
    case types.SIGN_IN_SUCCEEDED:
      return {
        loading: false,
        error: false,
        user: action.payload
      };
    case types.SIGN_IN_FAILED:
      return {
        loading: false,
        error: action.payload,
        user: null
      };
    default:
      return newState;
  }
}
