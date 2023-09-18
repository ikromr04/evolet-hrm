import { PropsWithChildren } from 'react';
import { StyledBlock } from './styled';

type BlockProps = PropsWithChildren<{
  className?: string;
  [rest: string]: unknown;
}>;

export default function Block({ children, className, ...rest }: BlockProps): JSX.Element {
  return (
    <StyledBlock className={className} {...rest}>
      {children}
    </StyledBlock>
  );
}
