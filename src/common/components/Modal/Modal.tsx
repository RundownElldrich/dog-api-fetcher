import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import {
  CloseButton,
  ModalBackdrop,
  ModalBox,
} from './styled';

type ModalProps = {
  children: ReactNode
  close(): void
}

export function Modal({ children, close }: ModalProps) {
  const ModalBody = (
    <ModalBackdrop>
      <ModalBox>
        <CloseButton onClick={close} />
        {children}
      </ModalBox>
    </ModalBackdrop>
  );
  const modalRoot = document.querySelector('#modal-root') as HTMLElement;

  return createPortal(ModalBody, modalRoot);
}
