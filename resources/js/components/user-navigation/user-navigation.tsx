import { useState } from 'react';
import { getUser } from '../../services/user';
import { Avatar, DropdownIcon, StyledButton, Wrapper } from './styled';
import Navigation from './navigation/navigation';

export default function UserNavigation(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const user = getUser();

  return (
    <Wrapper>
      <StyledButton onClick={() => setIsOpen(!isOpen)}>
        <Avatar
          src={user?.avatar}
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
