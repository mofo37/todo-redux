import React from 'react';
import VisibilityFilter from '../components/VisibilityFilter';
import Todo from '../components/Todo';
import AddTodo from '../components/AddTodo';
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

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;

    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);

    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);

    default:
      return todos;
  }
}

export default function TodoList({ todos, visibilityFilter, addTodo, removeTodo, toggleTodo, showAll, showCompleted, showActive }) {
  const visibleTodos = getVisibleTodos(todos, visibilityFilter);

  return (
    <div>
      <Div>
        <VisibilityFilter value="show all" onClick={() => showAll} />
        <VisibilityFilter value="show completed" onClick={() => showCompleted('SHOW_COMPLETED')} />
        <VisibilityFilter value="show active" onClick={() => showActive} />
      </Div>
      <Ol className="TodoList">
        {visibleTodos.map((todo, i) => (
          <Todo key={i} addTodo={addTodo} removeTodo={removeTodo} toggleTodo={toggleTodo} todo={todo} i={i}/>
        ))}
      </Ol>
      <AddTodo handleSubmit={addTodo}/>
    </div>
  );
}