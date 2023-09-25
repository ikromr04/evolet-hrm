import { PropsWithChildren } from 'react';
import { StyledBox } from './styled';

export default function IconsBox({ children }: PropsWithChildren): JSX.Element {
  return (
    <StyledBox>{children}</StyledBox>
  );
};
