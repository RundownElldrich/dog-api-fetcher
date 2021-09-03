import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(74, 74, 74, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  max-width: 80vw;
  max-height: 90vh;
  overflow: scroll;
  padding: 4.8rem;
  background-color: var(--color-yellow);
  border: 0.6rem solid var(--color-orange);
  border-radius: var(--border-radius-primary);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  height: 3.2rem;
  width: 3.2rem;
  background-color: transparent;
  border: none;
  transform: rotate(45deg);
  opacity: 0.5;
  transition: opacity 200ms;

  &:hover {
    opacity: 1;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 15%;
    left: calc(50% - (15%/2));
    background-color: var(--color-dark-blue);
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 15%;
    top: calc(50% - (15%/2));
    background-color: var(--color-dark-blue);
  }
`;
