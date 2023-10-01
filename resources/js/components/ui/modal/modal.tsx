import { PropsWithChildren, useEffect } from 'react';
import { ModalInner, StyledModal } from './styled';
import { useModalRef } from '../../../hooks/use-modal-ref';

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  setIsOpen: () => void;
}>;

function Modal({ children, isOpen, setIsOpen }: ModalProps): JSX.Element {
  const ref = useModalRef(() => setIsOpen());

  useEffect(() => {
    isOpen
      ? document.body.classList.add('modal-shown')
      : document.body.classList.remove('modal-shown');
    return () => document.body.classList.remove('modal-shown');
  }, [isOpen]);

  return (
    <StyledModal isOpen={isOpen}>
      <div ref={ref}>
        <ModalInner>{isOpen && children}</ModalInner>
      </div>
    </StyledModal>
  );
};

export default Modal;
