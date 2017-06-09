import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/todo.constants';

const initialState = {
  visibilityFilter: SHOW_ALL,
  todos: [
    {
      text: 'finish building this todo list using Redux',
      completed: false
    },
    {
      text: 'don\'t forget to fix the centering, mr. OCD',
      completed: true
    },
    {
      text: 'see why styled-component function is tripping in Chrome',
      completed: false
    },
    {
      text: 'enjoy a glass of wine',
      completed: true
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
      const index = action.index;
      return {
        todos: [
          ...state.todos.slice(0, index),
          ...state.todos.slice(index + 1)
        ]
      };
    }

    case TOGGLE_TODO: {
      const index = action.index;
      return {
        todos: state.todos.map((todo, i) => {
          if (index === i) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    }

    case SHOW_ALL:
      return {

      };

    case SHOW_COMPLETED:
      return {

      };

    case SHOW_ACTIVE:
      return {

      };
    
    default:
      return state;
  }
}