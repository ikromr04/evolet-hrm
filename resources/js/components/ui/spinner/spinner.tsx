import { Loader, StyledSpinner } from './styled';

type SpinnerProps = {
  className?: string;
  width?: number;
  stroke?: number;
  color?: string;
}

export default function Spinner(props: SpinnerProps): JSX.Element {
  const { className, width, stroke, color } = props;

  return (
    <StyledSpinner
      className={className}
    >
      <Loader
        width={width}
        stroke={stroke}
        color={color}
      />
    </StyledSpinner>
  )
}
