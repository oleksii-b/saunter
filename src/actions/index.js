import {ADD_PATH, REMOVE_PATH, UPDATE_PATH} from './actionTypes';


export function addPath(path) {
  return {
    type: ADD_PATH,
    payload: path
  }
}

export function removePath(path) {
  return {
    type: REMOVE_PATH,
    payload: path
  }
}

export function updatePath(path) {
  return {
    type: UPDATE_PATH,
    payload: path
  }
}
