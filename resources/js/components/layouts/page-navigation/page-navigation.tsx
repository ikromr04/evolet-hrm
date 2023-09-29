import { AppRoute } from '../../../const';
import AddressBookIcon from '../../icons/address-book-icon';
import AwardIcon from '../../icons/award-icon';
import CalendarIcon from '../../icons/calendar-icon';
import ClockIcon from '../../icons/clock-icon';
import HomeIcon from '../../icons/home-icon';
import UsersIcon from '../../icons/users-icon';
import { NavigationLink, StyledBox, ToggleButton } from './styled';
import QuestionIcon from '../../icons/question-icon';
import FileIcon from '../../icons/file-icon';
import CubesIcon from '../../icons/cubes-icon';
import BookIcon from '../../icons/book-icon';
import CommentIcon from '../../icons/comment-icon';
import NetwordIcon from '../../icons/network-icon';
import PieChartIcon from '../../icons/pie-chart-icon';
import CogIcon from '../../icons/cog-icon';
import ArrowLeftIcon from '../../icons/arrow-left-icon';
import { useState } from 'react';
import Hr from '../../ui/hr/hr';
import { useLocation } from 'react-router-dom';

function PageNavigation(): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  return (
    <StyledBox tagName="nav" isCollapsed={isCollapsed}>
      <NavigationLink
        to={AppRoute.Main}
        isCurrent={location.pathname === AppRoute.Main}
        data-title="Главная страница"
      >
        <HomeIcon width={16} height={16} /> Главная страница
      </NavigationLink>
      <Hr />
      <NavigationLink
        to="/employees"
        isCurrent={location.pathname.startsWith('/employees')}
        data-title="Сотрудники"
      >
        <AddressBookIcon width={16} height={16} /> Сотрудники
      </NavigationLink>
      <NavigationLink
        to="/calendars"
        isCurrent={location.pathname === '/calendars'}
        data-title="Календарь"
      >
        <CalendarIcon width={16} height={16} /> Календарь
      </NavigationLink>
      <NavigationLink
        to="/recruitment"
        isCurrent={location.pathname === '/recruitment'}
        data-title="Рекрутинг"
      >
        <UsersIcon width={16} height={16} /> Рекрутинг
      </NavigationLink>
      <NavigationLink
        to="/efficiency"
        isCurrent={location.pathname === '/efficiency'}
        data-title="Эффективность"
      >
        <AwardIcon width={16} height={16} /> Эффективность
      </NavigationLink>
      <NavigationLink
        to="/attendance"
        isCurrent={location.pathname === '/attendance'}
        data-title="Учет посещаемости"
      >
        <ClockIcon width={16} height={16} /> Учет посещаемости
      </NavigationLink>
      <NavigationLink
        to="/polls"
        isCurrent={location.pathname === '/polls'}
        data-title="Опросы"
      >
        <QuestionIcon width={16} height={16} /> Опросы
      </NavigationLink>
      <NavigationLink
        to="/documents"
        isCurrent={location.pathname === '/documents'}
        data-title="Документы"
      >
        <FileIcon width={16} height={16} /> Документы
      </NavigationLink>
      <NavigationLink
        to="/store"
        isCurrent={location.pathname === '/store'}
        data-title="Имущество"
      >
        <CubesIcon width={16} height={16} /> Имущество
      </NavigationLink>
      <NavigationLink
        to="/knowledge"
        isCurrent={location.pathname === '/knowledge'}
        data-title="База знаний"
      >
        <BookIcon width={16} height={16} /> База знаний
      </NavigationLink>
      <NavigationLink
        to="/cases"
        isCurrent={location.pathname === '/cases'}
        data-title="Кейсы"
      >
        <CommentIcon width={16} height={16} /> Кейсы
      </NavigationLink>
      <NavigationLink
        to="/process"
        isCurrent={location.pathname === '/process'}
        data-title="Процессы"
      >
        <NetwordIcon width={16} height={16} /> Процессы
      </NavigationLink>
      <NavigationLink
        to="/reports"
        isCurrent={location.pathname === '/reports'}
        data-title="Отчеты"
      >
        <PieChartIcon width={16} height={16} /> Отчеты
      </NavigationLink>
      <Hr />
      <NavigationLink
        to="/settings"
        isCurrent={location.pathname === '/settings'}
        data-title="Настройки"
      >
        <CogIcon width={16} height={16} /> Настройки
      </NavigationLink>

      <ToggleButton onClick={() => setIsCollapsed(!isCollapsed)} type="button">
        <ArrowLeftIcon width={16} height={16} /> Свернуть
      </ToggleButton>
    </StyledBox>
  );
};

export default PageNavigation;
