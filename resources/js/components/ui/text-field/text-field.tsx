import { ErrorMessage, FieldInner, FieldInput, FieldLabel, StyledField } from './styled';

type TextFieldProps = {
  className?: string;
  label?: string;
  errorMessage?: string;
  [rest: string]: unknown;
};

export default function TextField({
  className,
  label,
  errorMessage,
  ...rest
}: TextFieldProps): JSX.Element {
  return (
    <StyledField className={className}>
      <FieldInner>
        <FieldLabel>{label}</FieldLabel>
        <FieldInput error={errorMessage ? true : false} {...rest} />
      </FieldInner>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </StyledField>
  );
};
