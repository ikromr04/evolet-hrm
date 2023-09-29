import BellIcon from '../../../icons/bell-icon';
import { StyledButton, Wrapper } from './styled';

export default function Notification(): JSX.Element {
  return (
    <Wrapper>
      <StyledButton title="Уведомлении">
        <BellIcon width={14} height={14} />
      </StyledButton>
    </Wrapper>
  );
};
