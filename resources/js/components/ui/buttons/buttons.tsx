import { PropsWithChildren } from 'react';
import { StyledButtons } from './styled';

export default function Buttons({ children }: PropsWithChildren): JSX.Element {
  return (
    <StyledButtons>{children}</StyledButtons>
  );
};
