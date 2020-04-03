import React from 'react';
import styled, { css } from 'styled-components';
import palatte from '../../lib/styles/palette';

interface StyledButtonProps {
  fullWidth?: boolean;
  cyan?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${palatte.gray[8]};
  &:hover {
    background: ${palatte.gray[6]};
  }
  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${props =>
    props.cyan &&
    css`
      background: ${palatte.cyan[5]};
      &:hover {
        background: ${palatte.cyan[4]};
      }
    `}
`;

function Button(props: any) {
  return <StyledButton {...props} />;
}

export default Button;