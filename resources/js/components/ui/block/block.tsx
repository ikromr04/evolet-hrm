import { PropsWithChildren } from 'react';
import { StyledBlock } from './styled';

type BlockProps = PropsWithChildren<{
  className?: string;
}>;

export default function Block({ children, className }: BlockProps): JSX.Element {
  return (
    <StyledBlock className={className}>
      {children}
    </StyledBlock>
  );
}
