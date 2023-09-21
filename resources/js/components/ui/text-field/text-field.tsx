import { Input, Label, Message, Wrapper } from './styled';

type TextFieldProps = {
  id: string;
  label: string;
  labelHidden?: boolean;
  className?: string;
  message?: string;
  width?: number;
  select?: { value: string; label: string }[];
  [rest:string]: unknown;
};

export default function TextField({
  id,
  label,
  labelHidden,
  className,
  message,
  width,
  select,
  ...rest
}: TextFieldProps): JSX.Element {
  return (
    <Wrapper className={className} width={width}>
      <Label
        id={id}
        isHidden={labelHidden}
       >
        {label}
      </Label>
      {select
        ?
          <Input
            id={id}
            as="select"
            error={message ? true : false}
            {...rest}
          >
            {select.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </Input>
        :
          <Input
            id={id}
            error={message ? true : false}
            {...rest}
          />}
      {message && <Message error={message ? true : false}>{message}</Message>}
    </Wrapper>
  );
}
