import { StyledTitle } from './styled';
import { PropsWithChildren } from 'react';

type TitleProps = PropsWithChildren<{
  textAlign?: string;
}>;

export default function Title({ children, ...rest }: TitleProps): JSX.Element {
  return (
    <StyledTitle {...rest}>
      {children}
    </StyledTitle>
  );
}
