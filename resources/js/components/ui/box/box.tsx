import { PropsWithChildren } from 'react';
import { StyledBox } from './styled';

type BoxProps = PropsWithChildren<{
  className?: string;
  tagName?: string;
  [rest: string]: any
}>;

function Box({
  children,
  className,
  tagName,
  ...rest
}: BoxProps): JSX.Element {
  return (
    <StyledBox
      className={className}
      as={tagName}
      {...rest}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
