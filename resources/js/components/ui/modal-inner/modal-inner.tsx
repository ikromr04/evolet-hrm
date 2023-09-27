import { PropsWithChildren } from 'react';
import { StyledModalInner } from './styled';

type ModalInnerProps = PropsWithChildren<{
  tagName?: string;
  [rest: string]: any;
}>;

export default function ModalInner({
  children,
  tagName,
  ...rest
}: ModalInnerProps): JSX.Element {
  return (
    <StyledModalInner tagName={tagName} {...rest}>
      {children}
    </StyledModalInner>
  );
};
