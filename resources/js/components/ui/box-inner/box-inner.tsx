import { PropsWithChildren } from 'react';
import { StyledBoxInner } from './styled';

type BoxInnerProps = PropsWithChildren<{
  clasName?: string;
  tagName?: string;
}>;

export default function BoxInner({ children, clasName, tagName }: BoxInnerProps): JSX.Element {
  return (
    <StyledBoxInner
      className={clasName}
      as={tagName}
    >
      {children}
    </StyledBoxInner>
  );
};
