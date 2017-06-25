import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './constants';

export default function Todo(state, {type, payload, id}) {

  switch (type) {
    case ADD_TODO:
      return { todos: [...state.todos, { name: payload, completed: false, id }] };

    case REMOVE_TODO:
      return {
        todos: state.todos.splice((result, item) => {
          if (item.id.toString() !== payload) {
            result.push(item);
          }
          return result;
        }, [])
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map(item => {
          if (item.id.toString() === payload) {
            return { ...item, completed: !item.completed };
          }
          return item;
        })
      };

    default:
      return state;
  }
}