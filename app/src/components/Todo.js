import React from 'react';
import ListItem from './ListItem'

export default function Todo(props) {

  const { addTodo, removeTodo, toggleTodo, todos } = props;

  let input;

  return (
    <div>
      <ul>
        {todos.map((item, i) => {
          return <ListItem key={i} id={item.id} name={item.name} toggleTodo={toggleTodo} completed={item.completed} removeTodo={removeTodo} />;
        })}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
        <label>What do you need to do?<input ref={node => {
          input = node;
        }} />
        </label>
      </form>
    </div>
  );
}