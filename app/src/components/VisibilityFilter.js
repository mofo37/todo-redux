import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 1em .5em 0;
`;

export default function VisibilityFilter({ value, handleClick }) {
  return (
    <Button onClick={handleClick}>
      {value}
    </Button>
  );
}