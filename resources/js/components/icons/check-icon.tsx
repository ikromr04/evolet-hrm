import { memo } from 'react';

type CheckIconProps = {
  width: number;
  height: number;
};

function CheckIcon({ width, height }: CheckIconProps): JSX.Element {
  return (
    <svg
      viewBox="0 0 448 512"
      width={width}
      height={height}
    >
      <path
        fill="currentColor"
        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
      />
    </svg>
  );
};

export default memo(CheckIcon);
