import { AppRoute } from '../../../const';
import HomeIcon from '../../icons/home-icon';
import Button from '../../ui/button/button';
import Text from '../../ui/text/text';
import Title from '../../ui/title/title';
import { StyledPage } from './styled';

export default function NotFoundPage(): JSX.Element {
  return (
    <StyledPage tagName="main">
      <img
        src="/img/404.svg"
        width={300}
        height={200}
        alt="Not found status code"
      />
      <Title>Упс! Страница не найдена :(</Title>
      <Text>
        К сожалению, страница, которую вы ищете, не существует. Если вы уверены,
        что произошла ошибка, то сообщите своему администратору или дайте нам знать.
      </Text>
      <Button href={AppRoute.Main} success>
        <HomeIcon width={16} height={16} /> Вернуться на главную страницу
      </Button>
    </StyledPage>
  );
};
