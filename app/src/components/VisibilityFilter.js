import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

VisibilityFilter.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};