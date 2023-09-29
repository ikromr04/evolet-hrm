import BellIcon from '../../../icons/bell-icon';
import { StyledButton, Wrapper } from './styled';

export default function Notification(): JSX.Element {
  return (
    <Wrapper>
      <StyledButton title="Уведомлении">
        <BellIcon width={16} height={16} />
      </StyledButton>
    </Wrapper>
  );
};
