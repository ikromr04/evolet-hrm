import { PropsWithChildren } from 'react';
import { StyledButton } from './styled';
import { Link } from 'react-router-dom';
import Spinner from '../spinner/spinner';

type ButtonProps = PropsWithChildren<{
  href?: string;
  success?: boolean;
  error?: boolean;
  large?: boolean;
  isLoading?: boolean;
  [rest:string]: any;
}>

export default function Button({
  children,
  href,
  success,
  error,
  large,
  isLoading,
  ...rest
}: ButtonProps): JSX.Element {

  return (
    <StyledButton
      as={href ? Link : ''}
      to={href}
      success={success}
      error={error}
      large={large}
      {...rest}
    >
      {isLoading
        ? <Spinner width={14} stroke={2} color="white" />
        : children }
    </StyledButton>
  );
}
