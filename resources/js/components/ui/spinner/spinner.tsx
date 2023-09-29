import { Loader, StyledSpinner } from './styled';

type SpinnerProps = {
  className?: string;
  width?: number;
  stroke?: number;
  color?: string;
  [rest: string]: any;
};

export default function Spinner(props: SpinnerProps): JSX.Element {
  const { className, width, stroke, color, ...rest } = props;

  return (
    <StyledSpinner
      className={className}
      {...rest}
    >
      <Loader
        width={width}
        stroke={stroke}
        color={color}
      />
    </StyledSpinner>
  );
};
