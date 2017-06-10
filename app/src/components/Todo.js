import React from 'react';
import DeleteButton from '../components/DeleteButton';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  float: left;
  margin-top: .45em;
`;

const Li = styled.li`
  margin: 1em 0;
  padding: 0 .5em;
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
`;

export default function Todo({ todo, i, removeTodo, toggleTodo }) {
  
  return (
    <div>
      <Li completed={todo.completed}>
        {todo.text}
        <DeleteButton onClick={() => removeTodo(i)} />
        <Input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(i)} />
      </Li>
    <hr/>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
};