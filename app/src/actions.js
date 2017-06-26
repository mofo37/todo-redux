import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './constants';

let Id = 0;
export function addTodo(payload = 'eat ice cream') {
  return {
    type: ADD_TODO,
    id: Id++,
    payload
  };
}

export function removeTodo(payload) {
  return {
    type: REMOVE_TODO,
    payload
  };
}

export function toggleTodo(payload) {
  return {
    type: TOGGLE_TODO,
    payload
  };
}

export function setVisibilityFilter(payload) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload
  };
}