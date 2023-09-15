import { useState } from 'react';
import { getUser } from '../../services/user';
import { Avatar, DropdownIcon, StyledButton, Wrapper } from './styled';
import Navigation from './navigation/navigation';
import { useOutsideClick } from '../../hooks/use-outside-click';
import { useEscapeKeydown } from '../../hooks/use-escape-keydown';
import { useOnRouteChange } from '../../hooks/use-on-route-change';

export default function UserNavigation(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const user = getUser();
  const ref = useOutsideClick(() => setIsOpen(false));

  useEscapeKeydown(() => setIsOpen(false));
  useOnRouteChange(() => setIsOpen(false));

  return (
    <Wrapper ref={ref}>
      <StyledButton onClick={() => setIsOpen(!isOpen)}>
        <Avatar
          src={user?.avatar || '/img/default-avatar.png'}
          width={32}
          height={32}
          alt={user?.name}
        />
        {user?.name}
        <DropdownIcon open={isOpen} />
      </StyledButton>

      {isOpen && <Navigation />}
    </Wrapper>
  );
}
