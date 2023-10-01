import { memo } from 'react';
import { StyledIconsBox } from './styled';

type IconsBoxProps = {
  icon: JSX.Element;
};

function IconsBox({ icon }: IconsBoxProps): JSX.Element {
  return (
    <StyledIconsBox>{icon}</StyledIconsBox>
  );
};

export default memo(IconsBox);
