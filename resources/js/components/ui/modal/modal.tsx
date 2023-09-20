import { useEffect, useState } from 'react';
import { useEscapeKeydown } from '../../../hooks/use-escape-keydown';
import { useOnRouteChange } from '../../../hooks/use-on-route-change';
import { useOutsideClick } from '../../../hooks/use-outside-click';
import { ModalWindow, StyledModal, Wrapper } from './styled';
import { createRoot } from 'react-dom/client';

type ModalProps = {
  className?: string
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
    const element = document.createElement('div');
    document.body.append(element);
    createRoot(element).render(
      <StyledModal isOpen={isOpen}>
        <ModalWindow ref={ref}>
          {modalWindow}
        </ModalWindow>
      </StyledModal>
    );

    return () => element.remove();
  }, [isOpen]);

  return (
    <Wrapper className={className} onClick={() => setIsOpen(!isOpen)}>
      {modalButton}
    </Wrapper>
  );
}
