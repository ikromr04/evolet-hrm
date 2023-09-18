import EllipsisIcon from '../../../icons/ellipsis-icon';
import { Button, Wrapper } from './styled';

export default function Actions(): JSX.Element {
  return (
    <Wrapper>
      <Button>
        <EllipsisIcon width={12} />
      </Button>
    </Wrapper>
  );
}
