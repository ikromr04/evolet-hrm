import { PropsWithChildren } from 'react';
import { StyledButtons } from './styled';

type ButtonsProps = PropsWithChildren<{
  className?: string;
}>

export default function Buttons({ className, children }: ButtonsProps): JSX.Element {
  return (
    <StyledButtons className={className}>{children}</StyledButtons>
  );
};
