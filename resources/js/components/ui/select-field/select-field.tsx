import { Label, Message, Select, Wrapper } from './styled';

type TextFieldProps = {
  label: string;
  labelHidden?: boolean;
  className?: string;
  message?: string;
  width?: number;
  options: { value: string; label: string }[];
  [rest:string]: unknown;
};

export default function SelectField({
  label,
  labelHidden,
  className,
  message,
  width,
  options,
  ...rest
}: TextFieldProps): JSX.Element {
  return (
    <Wrapper className={className} width={width}>
      <Label isHidden={labelHidden}>
        {label}
      </Label>
      <Select
        error={message ? true : false}
        {...rest}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </Select>
      {message && <Message error={message ? true : false}>{message}</Message>}
    </Wrapper>
  );
}
