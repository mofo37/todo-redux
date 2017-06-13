import React from 'react';
import styled from 'styled-components';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
import PropTypes from 'prop-types';

const Div = styled.div`
  width: 30%;
  margin: 0 auto;
`;

const Input = styled.input`
  margin: 0 1em;
`;

const Label = styled.label`
  margin: 0 .3em;
`;

export default function AddTodo({ handleSubmit }) {
  return (
    <Div>
      <form onSubmit={e => {
        e.preventDefault();
        handleSubmit(e.target.elements.todo.value);
        e.target.reset();
      }}>
        <fieldset>
          <legend>
          <MdAddCircleOutline className="Add-icon" />
          <Label>
            Add new Todo
          </Label>
          </legend>
          <Input name="todo"/>
          <button>
            submit
          </button>
        </fieldset>
      </form>
    </Div>
  );
}

AddTodo.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};