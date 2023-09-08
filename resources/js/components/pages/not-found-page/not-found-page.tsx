import { AppRoute } from '../../../const';
import HomeIcon from '../../icons/home-icon';
import Button from '../../ui/button/button';
import { Description, Image, Main, PageTitle } from './styled';

export default function NotFoundPage(): JSX.Element {
  return (
    <Main as="main">
      <Image
        src='/img/404.svg'
        width={300}
        height={200}
        alt="Not found status code"
      />
      <PageTitle>Упс! Страница не найдена :(</PageTitle>
      <Description>К сожалению, страница, которую вы ищете, не существует. Если вы уверены, что произошла ошибка, то сообщите своему администратору или дайте нам знать.</Description>

      <Button
        href={AppRoute.Main}
        icon={<HomeIcon width={16} />}
      >
        Вернуться на главную страницу
      </Button>
    </Main>
  );
}
