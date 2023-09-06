import { PropsWithChildren } from 'react';
import { StyledContainer } from './styled';

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export default function Container({ className, children }: ContainerProps): JSX.Element {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  );
}
