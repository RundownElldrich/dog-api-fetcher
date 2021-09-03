import { ReactNode } from 'react';

import {
  BgLayer1,
  BgLayer2,
  BgLayer3,
  Wrapper,
} from './styled';

type DogListWrapperProps = {
  children: ReactNode
}

export function DogListWrapper({ children }: DogListWrapperProps) {
  return (
    <>
      <BgLayer1 />
      <BgLayer2 />
      <BgLayer3 />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
}
