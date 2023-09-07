import { StyledText } from './styled';
import { PropsWithChildren } from 'react';

type TextProps = PropsWithChildren<{
  dark?: boolean;
}>;

export default function Text({ children, ...rest }: TextProps): JSX.Element {
  return (
    <StyledText {...rest}>
      {children}
    </StyledText>
  );
}
