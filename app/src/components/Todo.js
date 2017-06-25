import React from 'react';

export default function Todo(props) {

const { addTodo } = props;
  
  let input;

  return(
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
        }}></form>
    </div>
  );
}