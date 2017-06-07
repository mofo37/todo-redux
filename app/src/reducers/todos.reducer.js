import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants/todos.constants';

const initialState = {
  todos: [
    {
      text: 'sample todo',
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

    case REMOVE_TODO:
      return {

      };

    case TOGGLE_TODO:
      return {

      };

    default:
      return state;
  }
}