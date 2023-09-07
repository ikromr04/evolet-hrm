import { Input, Label, Wrapper } from './styled';

type TextFieldProps = {
  id: string;
  label: string;
  labelHidden?: boolean;
  className?: string;
  [rest:string]: any;
};

export default function TextField(props: TextFieldProps): JSX.Element {
  const { id, label, labelHidden, className, ...rest } = props;

  return (
    <Wrapper className={className}>
      <Label
        id={id}
        isHidden={labelHidden}
       >
        {label}
      </Label>
      <Input id={id} {...rest} />
    </Wrapper>
  );
}
