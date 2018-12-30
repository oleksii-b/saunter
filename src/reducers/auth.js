export default function AuthReducer(state = JSON.parse(localStorage.getItem('auth')), action) {
  switch (action.type) {
    case 'SET_AUTH_STATUS':
      return action.payload;
    default:
      return state;
  }
}
