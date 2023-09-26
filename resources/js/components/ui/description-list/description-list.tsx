import { Fragment } from 'react';
import { Dd, Dl, Dt } from './styled';

type DescriptionListProps = {
  list: {
    [key: string]: any;
  };
  detailed?: boolean;
  detailedInverse?: boolean;
}

export default function DescriptionList({
  list,
  detailed,
  detailedInverse
}: DescriptionListProps): JSX.Element {
  return (
    <Dl detailed={detailed} detailedInverse={detailedInverse}>
      {Object.entries(list).map(([term, definition]) => (
        <Fragment key={term}>
          <Dt detailed={detailed} detailedInverse={detailedInverse}>{term}</Dt>
          <Dd detailed={detailed} detailedInverse={detailedInverse}>{definition}</Dd>
        </Fragment>
      ))}
    </Dl>
  );
}
