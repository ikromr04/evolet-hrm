import { useEffect, useState } from 'react';
import { useEscapeKeydown } from '../../../hooks/use-escape-keydown';
import { useOnRouteChange } from '../../../hooks/use-on-route-change';
import { useOutsideClick } from '../../../hooks/use-outside-click';
import { ModalWindow, StyledModal, Wrapper } from './styled';

type ModalProps = {
  className?: string;
  modalButton: JSX.Element;
  modalWindow: JSX.Element;
}

export default function Modal({
  className,
  modalButton,
  modalWindow,
}: ModalProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  useEscapeKeydown(() => setIsOpen(false));
  useOnRouteChange(() => setIsOpen(false));

  useEffect(() => {
    isOpen
      ? document.body.classList.add('modal-shown')
      : document.body.classList.remove('modal-shown');
    return () => document.body.classList.remove('modal-shown');
  }, [isOpen]);

  return (
    <>
      <Wrapper
        className={className}
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        {modalButton}
      </Wrapper>
      <StyledModal isOpen={isOpen}>
        <ModalWindow ref={ref} isOpen={isOpen}>
          {modalWindow}
        </ModalWindow>
      </StyledModal>
    </>
  );
}
