import React from 'react';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';
import styled from 'styled-components';

const Ol = styled.ol`
  margin: 2em auto;
  max-width: 38%;
  padding-left: 0;
  list-style-type: none;
`;

export default function TodoList({ todos, addTodo, removeTodo, toggleTodo }) {
  return (
    <div>
      <Ol className="TodoList">
        {todos.map((todo, i) => (
          <Todo key={i} addTodo={addTodo} removeTodo={removeTodo} toggleTodo={toggleTodo} todo={todo} i={i}/>
        ))}
      </Ol>
      <AddTodo handleSubmit={addTodo}/>
    </div>
  );
}