import { Fragment } from 'react';
import { Dd, Dl, Dt } from './styled';

type DescriptionListProps = {
  list: {
    [key: string]: any;
  };
}

export default function DescriptionList({ list }: DescriptionListProps): JSX.Element {
  return (
    <Dl>
      {Object.entries(list).map(([term, definition]) => (
        <Fragment key={term}>
          <Dt>{term}</Dt>
          <Dd>{definition}</Dd>
        </Fragment>
      ))}
    </Dl>
  );
}
