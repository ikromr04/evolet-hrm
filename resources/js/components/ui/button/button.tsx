import { PropsWithChildren } from 'react';
import { StyledButton } from './styled';
import { Link } from 'react-router-dom';

type ButtonProps = PropsWithChildren<{
  href?: string;
  icon?: JSX.Element;
}>

export default function Button(props: ButtonProps): JSX.Element {
  const { children, href, icon } = props;

  return (
    <StyledButton as={href ? Link : ''} to={href}>
      {icon}
      {children}
    </StyledButton>
  );
}
