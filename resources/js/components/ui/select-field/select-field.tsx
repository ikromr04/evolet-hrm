import { ErrorMessage, FieldInner, FieldLabel, FieldSelect, StyledField } from './styled';

type SelectFieldProps = {
  className?: string;
  label: string;
  options: { value: string; label: string }[];
  errorMessage?: string;
  [rest: string]: unknown;
};

export default function SelectField({
  className,
  label,
  options,
  errorMessage,
  ...rest
}: SelectFieldProps): JSX.Element {
  return (
    <StyledField className={className}>
      <FieldInner>
        <FieldLabel>{label}</FieldLabel>
        <FieldSelect error={errorMessage ? true : false} {...rest}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </FieldSelect>
      </FieldInner>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </StyledField>
  );
};
