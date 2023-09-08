import { useEffect, useState } from 'react';
import PlusIcon from '../icons/plus-icon';
import { StyledButton, Wrapper } from './styled';
import Navigation from './navigation/navigation';
import { useOutsideClick } from '../../hooks/use-outside-click';

export default function QuickAdd(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  useEffect(() => {
    const handleEscapeKeydown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        setIsOpen(false);
      }
    }
    document.addEventListener('keydown', handleEscapeKeydown);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeydown);
    }
  }, []);

  return (
    <Wrapper ref={ref}>
      <StyledButton onClick={() => setIsOpen(!isOpen)}>
        <PlusIcon width={12} />
        Быстрое добавление
      </StyledButton>

      {isOpen && <Navigation />}
    </Wrapper>
  );
}
