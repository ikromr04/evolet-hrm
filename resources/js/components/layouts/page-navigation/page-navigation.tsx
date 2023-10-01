import { AppRoute } from '../../../const';
import AddressBookIcon from '../../icons/address-book-icon';
import AwardIcon from '../../icons/award-icon';
import CalendarIcon from '../../icons/calendar-icon';
import ClockIcon from '../../icons/clock-icon';
import HomeIcon from '../../icons/home-icon';
import UsersIcon from '../../icons/users-icon';
import { NavigationItem, StyledBox } from './styled';
import QuestionIcon from '../../icons/question-icon';
import FileIcon from '../../icons/file-icon';
import CubesIcon from '../../icons/cubes-icon';
import BookIcon from '../../icons/book-icon';
import CommentIcon from '../../icons/comment-icon';
import NetwordIcon from '../../icons/network-icon';
import PieChartIcon from '../../icons/pie-chart-icon';
import CogIcon from '../../icons/cog-icon';
import Hr from '../../ui/hr/hr';
import Info from '../../ui/info/info';
import NavigationLink from './navigation-link/navigation-link';
import { useAppDispatch } from '../../../hooks';
import ToggleButton from './toggle-button/toggle-button';

function PageNavigation(): JSX.Element {
  return (
    <StyledBox tagName="nav">
      <NavigationItem>
        <NavigationLink href={AppRoute.Main}>
          <HomeIcon width={16} height={16} /> Главная страница
        </NavigationLink>
        <Info right>Главная страница</Info>
      </NavigationItem>

      <Hr />

      <NavigationItem>
        <NavigationLink href={AppRoute.Employees}>
          <AddressBookIcon width={16} height={16} /> Сотрудники
        </NavigationLink>
        <Info right>Сотрудники</Info>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink href="/calendars">
          <CalendarIcon width={16} height={16} /> Календарь
        </NavigationLink>
        <Info right>Календарь</Info>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink href="/recruitment">
          <UsersIcon width={16} height={16} /> Рекрутинг
        </NavigationLink>
        <Info right>Рекрутинг</Info>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink href="/efficiency">
          <AwardIcon width={16} height={16} /> Эффективность
        </NavigationLink>
        <Info right>Эффективность</Info>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink href="/attendance">
          <ClockIcon width={16} height={16} /> Учет посещаемости
        </NavigationLink>
        <Info right>Учет посещаемости</Info>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink href="/polls">
          <QuestionIcon width={16} height={16} /> Опросы
        </NavigationLink>
        <Info right>Опросы</Info>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink href="/documents">
          <FileIcon width={16} height={16} /> Документы
        </NavigationLink>
        <Info right>Документы</Info>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink href="/store">
          <CubesIcon width={16} height={16} /> Имущество
        </NavigationLink>
        <Info right>Имущество</Info>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink href="/knowledge">
          <BookIcon width={16} height={16} /> База знаний
        </NavigationLink>
        <Info right>База знаний</Info>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink href="/cases">
          <CommentIcon width={16} height={16} /> Кейсы
        </NavigationLink>
        <Info right>Кейсы</Info>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink href="/process">
          <NetwordIcon width={16} height={16} /> Процессы
        </NavigationLink>
        <Info right>Процессы</Info>
      </NavigationItem>

      <NavigationItem>
        <NavigationLink href="/reports">
          <PieChartIcon width={16} height={16} /> Отчеты
        </NavigationLink>
        <Info right>Отчеты</Info>
      </NavigationItem>

      <Hr />

      <NavigationItem>
        <NavigationLink href="/setting">
          <CogIcon width={16} height={16} /> Настройки
        </NavigationLink>
        <Info right>Настройки</Info>
      </NavigationItem>

      <ToggleButton />
    </StyledBox>
  );
};

export default PageNavigation;
