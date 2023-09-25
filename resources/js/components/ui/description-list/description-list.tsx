import { Fragment } from 'react';
import { Dd, Dl, Dt } from './styled';

type DescriptionListProps = {
  list: {
    [key: string]: any;
  };
  detailed?: boolean;
}

export default function DescriptionList({ list, detailed }: DescriptionListProps): JSX.Element {
  return (
    <Dl detailed={detailed}>
      {Object.entries(list).map(([term, definition]) => (
        <Fragment key={term}>
          <Dt detailed={detailed}>{term}</Dt>
          <Dd detailed={detailed}>{definition}</Dd>
        </Fragment>
      ))}
    </Dl>
  );
}
