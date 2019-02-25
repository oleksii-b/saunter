import * as types from 'actions/actionTypes';


export default function PathsReducer(state = [], action) {
  let newState = [...state];

  switch (action.type) {
    case types.ADD_PATH:
      action.payload.id = `${Date.now()}`;

      return [...newState, action.payload];
    case types.REMOVE_PATH:
      newState = newState.filter((path) => {
        return path.id !== action.payload;
      });

      return newState;
    case types.UPDATE_PATH:
      newState = newState.map((path) => {
        return path.id === action.payload.id ? {...path, ...action.payload} : path;
      });

      return newState;
    default:
      return newState;
  }
}
