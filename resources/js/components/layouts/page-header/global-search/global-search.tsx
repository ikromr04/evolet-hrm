import TextField from '../../../ui/text-field/text-field';
import { Wrapper } from './styled';

type GlobalSearchProps = {
  className?: string;
};

export default function GlobalSearch({ className }: GlobalSearchProps): JSX.Element {
  return (
    <Wrapper className={className}>
      <TextField placeholder="Поиск..." />
    </Wrapper>
  );
};
