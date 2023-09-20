import { StyledTitle } from './styled';
import { PropsWithChildren } from 'react';

type TitleProps = PropsWithChildren<{
  textAlign?: string;
  small?: boolean;
}>;

export default function Title({ children, small = false, ...rest }: TitleProps): JSX.Element {
  return (
    <StyledTitle small={small} {...rest}>
      {children}
    </StyledTitle>
  );
}
