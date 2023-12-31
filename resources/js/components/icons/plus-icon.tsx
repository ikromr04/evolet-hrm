import { memo } from 'react';

type PlusIconProps = {
  width: number;
  height: number;
};

function PlusIcon({ width, height }: PlusIconProps): JSX.Element {
  return (
    <svg
      viewBox="0 0 448 512"
      width={width}
      height={height}
    >
      <path
        fill="currentColor"
        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
      />
    </svg>
  );
};

export default memo(PlusIcon);
