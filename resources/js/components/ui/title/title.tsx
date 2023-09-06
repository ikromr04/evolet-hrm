import { StyledTitle } from './styled';
import { PropsWithChildren } from 'react';

type TitleProps = PropsWithChildren<{
  textAlign?: string;
}>;

export default function Title(props: TitleProps): JSX.Element {
  return (
    <StyledTitle {...props}>
      {props.children}
    </StyledTitle>
  );
}
