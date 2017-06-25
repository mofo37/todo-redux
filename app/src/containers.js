import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import Todo from './components/Todo';

const mapStateToProps = (state) => state;

function mapDispatchtoProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const TodoContainer = connect(mapStateToProps, mapDispatchtoProps)(Todo);

export default TodoContainer;