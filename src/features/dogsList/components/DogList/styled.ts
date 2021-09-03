import styled from 'styled-components';

const bgBaseAnimation = `
  animation: slide 6s ease-in-out infinite alternate;
  background-image: linear-gradient(-90deg, #b6e8de 50%, #d8c7f1 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;

  @keyframes slide {
    0% {
      transform:translateX(-30%);
    }
    25% {
      transform:translateX(-25%);
    }
    75% {
      transform:translateX(25%);
    }
    100% {
      transform:translateX(30%);
    }
  }
`;

export const BgLayer1 = styled.div`
  ${bgBaseAnimation}
`;

export const BgLayer2 = styled.div`
  ${bgBaseAnimation}
  animation-direction: alternate-reverse;
  animation-duration: 4s;
`;

export const BgLayer3 = styled.div`
  ${bgBaseAnimation}
  animation-duration: 4s;
`;

export const Wrapper = styled.main`
  height: 100vh;
  padding: 1.6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.h1`
  position: fixed;
  top: calc(50% - 1.8rem);
  color: var(--color-dark-blue);
  font-size: 3.2rem;
  text-transform: capitalize;
`;
