import React from 'react';
import AddTodo from '../components/AddTodo';
import styled from 'styled-components';

const Ol = styled.ol`
  margin: 2em auto;
  max-width: 20%;
  padding-left: 0;
`;

const Li = styled.li`
  margin: 1em 0;
`;

const Input = styled.input`
  float: right;
  margin-top: .7em;
`;

const Span = styled.span`
  font-size: .9em;
  color: #444;
  line-height: 2em;
`;

export default function TodoList({ todos, addTodo }) {
  
  return (
    <div>
      <Ol className="TodoList">
        {todos.map((todo, i) => (
          <Li key={i}>
            {todo.text}
            <br/>
            <Span>Completed:</Span> {todo.completed ? <Input type="checkbox" checked /> : <Input type="checkbox" />}
          </Li> 
        ))}
      </Ol>
      <AddTodo handleSubmit={addTodo}/>
    </div>
  );
}