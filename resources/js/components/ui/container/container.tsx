import { PropsWithChildren } from 'react';
import { StyledContainer } from './styled';

type ContainerProps = PropsWithChildren<{
  className?: string;
  tagName?: string;
}>;

export default function Container({
  children,
  className,
  tagName,
}: ContainerProps): JSX.Element {
  return (
    <StyledContainer className={className} as={tagName}>
      {children}
    </StyledContainer>
  );
};
