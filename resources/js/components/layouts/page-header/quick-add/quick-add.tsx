import { useState } from 'react';
import { StyledButton, Wrapper } from './styled';
import Navigation from './navigation/navigation';
import { useEscapeKeydown } from '../../../../hooks/use-escape-keydown';
import { useOutsideClick } from '../../../../hooks/use-outside-click';
import { useOnRouteChange } from '../../../../hooks/use-on-route-change';
import PlusIcon from '../../../icons/plus-icon';

export default function QuickAdd(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  useEscapeKeydown(() => setIsOpen(false));
  useOnRouteChange(() => setIsOpen(false));

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
