import { memo } from 'react';

type EditIconProps = {
  width: number;
  height: number;
};

function EditIcon({ width, height }: EditIconProps): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
      />
    </svg>
  );
};

export default memo(EditIcon);
