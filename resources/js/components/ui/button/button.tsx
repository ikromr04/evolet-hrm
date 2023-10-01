import { PropsWithChildren, memo } from 'react';
import { StyledButton } from './styled';
import { Link } from 'react-router-dom';

type ButtonProps = PropsWithChildren<{
  href?: string;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  large?: boolean;
  [rest: string]: unknown;
}>;

function Button({
  children,
  href,
  success,
  warning,
  error,
  large,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <StyledButton
      as={href ? Link : ''}
      to={href}
      success={success}
      warning={warning}
      error={error}
      large={large}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default memo(Button);
