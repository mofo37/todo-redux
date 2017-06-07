import React from 'react';

export default function TodoList({ todos }) {
  return (
    <ol className="TodoList">
      {todos.map((todo, i) => (
        <li key={i}>
          {todo.text}
          <br/>
          Completed: {todo.completed ? <input type="checkbox" checked /> : <input type="checkbox" />}
        </li> 
      ))}
    </ol>
  );
}