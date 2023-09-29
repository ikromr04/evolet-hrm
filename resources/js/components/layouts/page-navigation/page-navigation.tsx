import { AppRoute } from '../../../const';
import AddressBookIcon from '../../icons/address-book-icon';
import AwardIcon from '../../icons/award-icon';
import CalendarIcon from '../../icons/calendar-icon';
import ClockIcon from '../../icons/clock-icon';
import HomeIcon from '../../icons/home-icon';
import UsersIcon from '../../icons/users-icon';
import NavigationItem from './navigation-item/navigation-item';
import { StyledBox } from './styled';
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

export default function PageNavigation(): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <StyledBox tagName="nav">
      <NavigationItem
        label="Главная страница"
        icon={<HomeIcon width={14} height={14} />}
        href={AppRoute.Main}
        isCollapsed={isCollapsed}
      />
      <Hr />
      <NavigationItem
        label="Сотрудники"
        icon={<AddressBookIcon width={14} height={14} />}
        href="/employees"
        isCollapsed={isCollapsed}
      />
      <NavigationItem
        label="Календарь"
        icon={<CalendarIcon width={14} height={14} />}
        href="/calendars"
        isCollapsed={isCollapsed}
      />
      <NavigationItem
        label="Рекрутинг"
        icon={<UsersIcon width={14} height={14} />}
        links={[
          { label: 'Вакансии', path: '/recruitment/vacancies' },
          { label: 'Кандидаты', path: '/recruitment/applicants' },
          { label: 'План найма', path: '/recruitment/hiring' },
          { label: 'Тесты', path: '/recruitment/tests' },
        ]}
        isCollapsed={isCollapsed}
      />
      <NavigationItem
        label="Эффективность"
        icon={<AwardIcon width={14} height={14} />}
        links={[
          { label: 'Обзор', path: '/efficiency/review' },
          { label: '1-on-1', path: '/efficiency/one-on-one' },
          { label: 'KPI', path: '/efficiency/kpi' },
          { label: 'Цели', path: '/efficiency/goals' },
          { label: 'Оценка', path: '/efficiency/grade' },
        ]}
        isCollapsed={isCollapsed}
      />
      <NavigationItem
        label="Учет посещаемости"
        icon={<ClockIcon width={14} height={14} />}
        href="/attendance"
        isCollapsed={isCollapsed}
      />
      <NavigationItem
        label="Опросы"
        icon={<QuestionIcon width={14} height={14} />}
        href="/polls"
        isCollapsed={isCollapsed}
      />
      <NavigationItem
        label="Документы"
        icon={<FileIcon width={14} height={14} />}
        href="/documents"
        isCollapsed={isCollapsed}
      />
      <NavigationItem
        label="Имущество"
        icon={<CubesIcon width={14} height={14} />}
        href="/store"
        isCollapsed={isCollapsed}
      />
      <NavigationItem
        label="База знаний"
        icon={<BookIcon width={14} height={14} />}
        href="/knowledge"
        isCollapsed={isCollapsed}
      />
      <NavigationItem
        label="Кейсы"
        icon={<CommentIcon width={14} height={14} />}
        href="/cases"
        isCollapsed={isCollapsed}
      />
      <NavigationItem
        label="Процессы"
        icon={<NetwordIcon width={14} height={14} />}
        href="/process"
        isCollapsed={isCollapsed}
      />
      <NavigationItem
        label="Отчеты"
        icon={<PieChartIcon width={14} height={14} />}
        href="/reports"
        isCollapsed={isCollapsed}
      />
      <Hr />
      <NavigationItem
        label="Настройки"
        icon={<CogIcon width={14} height={14} />}
        href="/settings"
        isCollapsed={isCollapsed}
      />
      <NavigationItem
        label="Свернуть"
        icon={<ArrowLeftIcon width={14} height={14} style={{
          transform: isCollapsed && 'scale(-1)', transition: '0.3s',
        }} />}
        isCollapsed={isCollapsed}
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
    </StyledBox>
  );
};
