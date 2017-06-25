import React from 'react';

export default function ListItem(props) {

const { id, toggleTodo, removeTodo, name } = props;
let input;

  return (
    <div>
      <h1>{name}</h1>
      <label>completed<input value={id} onClick={(e) => {
        toggleTodo(e.target.value);
      }} type='checkbox' /></label>
      <button value={id} onClick={(e) => {
        removeTodo(e.target.value);
      }} type='checkbox'>Delete</button>
    </div>
  );
}