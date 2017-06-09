import React from 'react';
import VisibilityFilter from '../components/VisibilityFilter';
import Todo from '../components/Todo';
import AddTodo from '../components/AddTodo';
import * as filters from '../constants/filter.constants';
import styled from 'styled-components';

const Div = styled.div`
  margin-top: 1em;
`;

const Ol = styled.ol`
  margin: 2em auto;
  max-width: 38%;
  padding-left: 0;
  list-style-type: none;
`;

const getValue = constant => constant.toLowerCase().replace('_', ' ');

export default function TodoList({ todos, addTodo, removeTodo, toggleTodo, changeFilter }) {  

  return (
    <div>
      <Div>
        {Object.keys(filters).map(filter => (
          <VisibilityFilter key={filter} value={getValue(filter)} handleClick={() => changeFilter(filter)} />
        ))}
      </Div>
      <Ol className="TodoList">
        {todos.map((todo, i) => (
          <Todo key={i} addTodo={addTodo} removeTodo={removeTodo} toggleTodo={toggleTodo} todo={todo} i={i}/>
        ))}
      </Ol>
      <AddTodo handleSubmit={addTodo}/>
    </div>
  );
}