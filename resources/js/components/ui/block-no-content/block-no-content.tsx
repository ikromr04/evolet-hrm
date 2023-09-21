import { PropsWithChildren } from 'react';
import { StyledNoContent } from './styled';

export default function BlockNoContent({ children }: PropsWithChildren): JSX.Element {
  return (
    <StyledNoContent>{children}</StyledNoContent>
  );
}
