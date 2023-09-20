import { PropsWithChildren } from 'react';
import { StyledToolbar } from './styled';

export default function BlockToolbar({ children }: PropsWithChildren) {
  return (
    <StyledToolbar>{children}</StyledToolbar>
  );
}
