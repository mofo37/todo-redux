import React from 'react';

export default function ListItem(props) {

  const { id, toggleTodo, removeTodo, name, completed } = props;

  return (
    <div>
      <h1>{name}</h1>
      <label><input value={id} onClick={(e) => {
        toggleTodo(e.target.value);
      }} type='checkbox' checked={completed}/>
      </label>
      <button value={id} onClick={(e) => {
        removeTodo(e.target.value);
      }} type='checkbox'>Delete</button>
    </div>
  );
}