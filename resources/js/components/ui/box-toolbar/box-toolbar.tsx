import { PropsWithChildren } from 'react';
import { StyledToolbar } from './styled';

export default function BoxToolbar({ children }: PropsWithChildren) {
  return (
    <StyledToolbar>{children}</StyledToolbar>
  );
};
