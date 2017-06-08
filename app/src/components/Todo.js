import React from 'react';
import DeleteButton from '../components/DeleteButton';

import styled from 'styled-components';

const Li = styled.li`
  margin: 1em 0;
`;

const Input = styled.input`
  float: right;
  margin-top: .45em;
`;

const Span = styled.span`
  font-size: .9em;
  color: #444;
`;

export default function Todo({ todo, i, removeTodo, toggleTodo }) {
  return (
    <Li>
      {todo.text}
      <br />
      <Span>
        Completed:
      </Span>
      <DeleteButton onClick={() => removeTodo(i)} />
      
      {todo.completed 
        ? <Input type="checkbox" checked onChange={() => toggleTodo(i)} /> 
        : <Input type="checkbox" onChange={() => toggleTodo(i)} />}
    </Li>
  );
}