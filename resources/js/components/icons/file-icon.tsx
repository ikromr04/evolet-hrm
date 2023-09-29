import { memo } from 'react';

type FileIconProps = {
  width: number;
  height: number;
};

function FileIcon({ width, height }: FileIconProps): JSX.Element {
  return (
    <svg
      viewBox="0 0 384 512"
      width={width}
      height={height}
    >
      <path
        fill="currentColor"
        d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"
      />
    </svg>
  );
};

export default memo(FileIcon);
