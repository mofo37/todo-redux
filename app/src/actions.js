import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './constants';

export function addTodo(payload = 'eat ice cream') {
  return {
    type: ADD_TODO,
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