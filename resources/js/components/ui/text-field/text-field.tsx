import { Input, Label, Message, Wrapper } from './styled';

type TextFieldProps = {
  id: string;
  label: string;
  labelHidden?: boolean;
  className?: string;
  message?: string;
  width?: number;
  [rest:string]: unknown;
};

export default function TextField({
  id,
  label,
  labelHidden,
  className,
  message,
  width,
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
      <Input
        id={id}
        {...rest}
        error={message ? true : false}
      />
      {message && <Message error={message ? true : false}>{message}</Message>}
    </Wrapper>
  );
}
