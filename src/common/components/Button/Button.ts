import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  children?: ReactNode
  onClick: () => void
  type: string
  withScaling?: boolean
}

export const Button = styled.button<ButtonProps>`
  margin: 0.8rem 1rem;
  padding: 0.6rem;
  background-color: var(--color-red);
  color: var(--color-dark-blue);
  text-transform: uppercase;
  font-weight: bold;
  border-radius: var(--border-radius-primary);
  border: none;
  cursor: pointer;
  transition: transform 100ms;

  &:hover {
    ${(props) => props.withScaling && css`transform: scale(1.2);`}
  }

  &:disabled {
    opacity: 0.7;
  }
`;
