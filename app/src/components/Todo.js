import React from 'react';
import DeleteButton from '../components/DeleteButton';
import styled from 'styled-components';

const Input = styled.input`
  float: right;
  margin-top: .45em;
`;

export default function Todo({ todo, i, removeTodo, toggleTodo }) {
  const Li = styled.li`
    margin: 1em 0;
    padding-left: 45px;
    text-decoration: ${todo => todo.completed ? 'line-through' : 'none'};
  `;
  
  return (
    <div>
      <Li>
        {todo.text}
        <DeleteButton onClick={() => removeTodo(i)} />
        <Input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(i)} />
      </Li>
    <hr/>
    </div>
  );
}