import React from 'react';
import AddTodo from '../components/AddTodo';
import DeleteButton from '../components/DeleteButton';
import styled from 'styled-components';

const Ol = styled.ol`
  margin: 2em auto;
  max-width: 20%;
  padding-left: 0;
`;

const Li = styled.li`
  margin: 1em 0;
`;

// move to the left so trash can is on the right?
const Input = styled.input`
  float: right;
  margin-top: .45em;
`;

const Span = styled.span`
  font-size: .9em;
  color: #444;
`;

export default function TodoList({ todos, addTodo, removeTodo }) {
  
  return (
    <div>
      <Ol className="TodoList">
        {todos.map((todo, id) => (
          <Li key={id}>
            {todo.text}
            <br/>
            <Span>
              Completed:
            </Span>
            <DeleteButton onClick={() => removeTodo(id)}/>
            {todo.completed ? <Input type="checkbox" checked /> : <Input type="checkbox" />}
          </Li> 
        ))}
      </Ol>
      <AddTodo handleSubmit={addTodo}/>
    </div>
  );
}