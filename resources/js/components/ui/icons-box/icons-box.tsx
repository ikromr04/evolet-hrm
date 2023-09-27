import { StyledIconsBox } from './styled';

type IconsBoxProps = {
  icon: JSX.Element;
};

export default function IconsBox({ icon }: IconsBoxProps): JSX.Element {
  return (
    <StyledIconsBox>{icon}</StyledIconsBox>
  );
};
