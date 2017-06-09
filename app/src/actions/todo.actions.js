import * as constants from '../constants/todo.constants';

export function addTodo(payload) {
  return {
    type: constants.ADD_TODO,
    payload
  };
}

export function removeTodo(index) {
  return {
    type: constants.REMOVE_TODO,
    index
  };
}

export function toggleTodo(index) {
  return {
    type: constants.TOGGLE_TODO,
    index
  };
}

export function showAll(filter) {
  return {
    type: constants.SHOW_ALL,
    filter
  };
}

export function showCompleted(filter) {
  return {
    type: constants.SHOW_COMPLETED,
    filter
  };
}

export function showActive(filter) {
  return {
    type: constants.SHOW_ACTIVE,
    filter
  };
}