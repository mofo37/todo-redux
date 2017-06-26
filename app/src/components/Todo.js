import React from 'react';
import ListItem from './ListItem';

export default function Todo(props) {

  const { addTodo, removeTodo, toggleTodo, todos, setFilter, filter } = props;

  let input;
  let filteredTodos = todos.filter((item, i) => {
    if(filter === 'Active') {
      return !item.completed;
    } else if(filter === 'Completed') {
      return item.completed;
    } else {
      return true;
    }
  });

  return (
    <div>
      <ul>
        {filteredTodos.map((item, i) => {
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
      <button onClick={() => { setFilter('Completed');}}>Completed</button>
      <button onClick={() => { setFilter('Active');}}>Active</button>
      <button onClick={() => { setFilter('All');}}>All</button>
    </div>
  );
}