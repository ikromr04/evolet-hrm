import { PropsWithChildren } from 'react';
import { StyledToolbar } from './styled';

function BoxToolbar({ children }: PropsWithChildren) {
  return (
    <StyledToolbar>{children}</StyledToolbar>
  );
};

export default BoxToolbar;
