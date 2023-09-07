import { Input, Label, Message, Wrapper } from './styled';

type TextFieldProps = {
  id: string;
  label: string;
  labelHidden?: boolean;
  className?: string;
  message?: string;
  [rest:string]: any;
};

export default function TextField({
  id, label, labelHidden, className, message, ...rest
}: TextFieldProps): JSX.Element {
  return (
    <Wrapper className={className}>
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
      <Message error={message ? true : false}>{message}</Message>
    </Wrapper>
  );
}
