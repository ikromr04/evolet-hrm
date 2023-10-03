import { PropsWithChildren } from 'react';
import { StyledBox } from './styled';

type BoxProps = PropsWithChildren<{
  className?: string;
  tagName?: string;
}>;

function Box({
  children,
  className,
  tagName,
}: BoxProps): JSX.Element {
  return (
    <StyledBox
      className={className}
      as={tagName}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
