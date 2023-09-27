import { PropsWithChildren } from 'react';
import { StyledModalInner } from './styled';

type ModalInnerProps = PropsWithChildren<{
  tagName?: string;
}>;

export default function ModalInner({
  children,
  tagName,
}: ModalInnerProps): JSX.Element {
  return (
    <StyledModalInner tagName={tagName}>{children}</StyledModalInner>
  );
};
