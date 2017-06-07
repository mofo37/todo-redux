import * as actions from '../constants/todos.constants';

export function addTodo(payload) {
  return {
    type: actions.ADD_TODO,
    payload
  };
}

export function removeTodo(payload) {
  return {
    type: actions.REMOVE_TODO,
    payload
  };
}

export function toggleTodo(payload) {
  return {
    type: actions.TOGGLE_TODO,
    payload
  };
}