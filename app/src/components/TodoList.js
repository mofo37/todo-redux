import React from 'react';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';
import styled from 'styled-components';

const Ol = styled.ol`
  margin: 2em auto;
  max-width: 20%;
  padding-left: 0;
`;

export default function TodoList({ todos, addTodo, removeTodo, toggleTodo }) {
  return (
    <div>
      <Ol className="TodoList">
        {todos.map((todo, i) => (
          <Todo key={i} addTodo={addTodo} removeTodo={removeTodo} toggleTodo={toggleTodo} todo={todo} i={i}/>
          /*<Li key={i}>
            {todo.text}
            <br/>
            <Span>
              Completed:
            </Span>
            <DeleteButton onClick={() => removeTodo(i)}/>
            {todo.completed ? <Input type="checkbox" checked onChange={() => toggleTodo(i)}/> : <Input type="checkbox" onChange={() => toggleTodo(i)}/>}
          </Li> */
        ))}
      </Ol>
      <AddTodo handleSubmit={addTodo}/>
    </div>
  );
}