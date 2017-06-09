import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  float: right;
`;

export default function DeleteButton({ onClick }) {
  return (
    <Button
      className="delete-button"
      onClick={onClick}>

      🗑
    </Button>
  );
}