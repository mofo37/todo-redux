import * as actions from '../constants/todo.constants';

export function addTodo(payload) {
  return {
    type: actions.ADD_TODO,
    payload
  };
}

export function removeTodo(index) {
  return {
    type: actions.REMOVE_TODO,
    index
  };
}

export function toggleTodo(index) {
  return {
    type: actions.TOGGLE_TODO,
    index
  };
}