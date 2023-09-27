import { useEffect, useState } from 'react';
import { useEscapeKeydown } from '../../../hooks/use-escape-keydown';
import { useOnRouteChange } from '../../../hooks/use-on-route-change';
import { useOutsideClick } from '../../../hooks/use-outside-click';
import { ButtonWrapper, ModalWindow, ModalWrapper } from './styled';

type ModalProps = {
  className?: string;
  button: JSX.Element;
  window: JSX.Element;
}

export default function Modal({
  className,
  button,
  window,
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
      <ButtonWrapper
        className={className}
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        {button}
      </ButtonWrapper>
      <ModalWrapper isOpen={isOpen}>
        <ModalWindow ref={ref} isOpen={isOpen}>{window}</ModalWindow>
      </ModalWrapper>
    </>
  );
};
