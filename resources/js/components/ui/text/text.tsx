import { StyledText } from './styled';
import { PropsWithChildren } from 'react';

type TextProps = PropsWithChildren;

export default function Text({ children }: TextProps): JSX.Element {
  return (
    <StyledText>
      {children}
    </StyledText>
  );
}
