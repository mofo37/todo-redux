import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants/todo.constants';

const initialState = {
  todos: [
    {
      text: 'finish building this todo list using Redux',
      completed: false
    }
  ]
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos, {
            text: action.payload,
            completed: false
          }
        ]
      };

    case REMOVE_TODO: {
      const index = action.payload;
      return {
        todos: [
          ...state.todos.slice(0, index),
          ...state.todos.slice(index + 1)
        ]
      };
    }
    case TOGGLE_TODO:
      return {

      };

    default:
      return state;
  }
}