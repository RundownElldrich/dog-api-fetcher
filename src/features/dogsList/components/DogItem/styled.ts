import styled from 'styled-components';

export const Button = styled.button`
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
    transform: scale(1.2);
  }

  &:disabled {
    opacity: 0.7;
  }
`;
