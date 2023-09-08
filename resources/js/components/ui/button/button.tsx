import { PropsWithChildren } from 'react';
import { StyledButton } from './styled';
import { Link } from 'react-router-dom';
import Spinner from '../spinner/spinner';

type ButtonProps = PropsWithChildren<{
  href?: string;
  icon?: JSX.Element;
  isLoading?: boolean;
  [rest:string]: any;
}>

export default function Button({
  children,
  href,
  icon,
  isLoading,
  ...rest
}: ButtonProps): JSX.Element {

  return (
    <StyledButton
      as={href ? Link : ''}
      to={href}
      {...rest}
    >
      {isLoading
        ? <Spinner width={24} stroke={4} color="white" />
        : <>
            {icon}
            {children}
          </>}
    </StyledButton>
  );
}
