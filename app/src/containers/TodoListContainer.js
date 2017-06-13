import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/todo.actions';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/filter.constants';
import TodoList from '../components/TodoList';

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case SHOW_ALL:
      return todos;

    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);

    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);

    default:
      return todos;
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;