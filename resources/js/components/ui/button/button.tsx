import { PropsWithChildren } from 'react';
import { StyledButton } from './styled';
import { Link } from 'react-router-dom';

type ButtonProps = PropsWithChildren<{
  href?: string;
  icon?: JSX.Element;
  [rest:string]: any;
}>

export default function Button(props: ButtonProps): JSX.Element {
  const { children, href, icon, ...rest } = props;

  return (
    <StyledButton
      as={href ? Link : ''}
      to={href}
      {...rest}
    >
      {icon}
      {children}
    </StyledButton>
  );
}
