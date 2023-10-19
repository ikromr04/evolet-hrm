export const EMPTY_OPTION_LABEL = '--Выберите--';
export const DEFAULT_AVATAR_PATH = '/img/default-avatar.png';

export enum AppRoute {
  Main = '/',
  Login = '/employees/login',
  Employees = '/employees',
  Employee = '/employees/:employeeId',
  EmployeeWork = '/employees/:employeeId/work',
  NotFound = '*',
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
};

export enum APIRoute {
  Login = '/employees/login',
  Logout = '/employees/logout',
  Employees = '/employees',
  EmployeesQuickAdd = '/employees/quick-add',
  Employee = '/employees/:employeeId',
  EmployeeJob = '/employees/:employeeId/job',
  EmployeeAvatar = '/employees/:employeeId/avatar',
  EmployeePersonalData = '/employees/:employeeId/personal',
  EmployeeEducations = '/employees/:employeeId/educations',
  EmployeeActivities = '/employees/:employeeId/activities',
  EmployeeLanguages = '/employees/:employeeId/languages',
  Education = '/educations/:educationId',
  Activity = '/labor-activities/:activityId',
  Jobs = '/jobs',
  Positions = '/positions',
  Languages = '/languages',
};

export enum SliceName {
  App = 'App',
  Employee = 'Employee',
  Job = 'Job',
  Position = 'Position',
  Language = 'Language',
};

export const languageLevelOptions = [
  { value: '(А1) – начальный', label: '(А1) – начальный' },
  { value: '(А2) – ниже среднего', label: '(А2) – ниже среднего' },
  { value: '(В1) – средний', label: '(В1) – средний' },
  { value: '(В2) – выше среднего', label: '(В2) – выше среднего' },
  { value: '(C1) – продвинутый', label: '(C1) – продвинутый' },
  { value: '(C2) – профессиональный', label: '(C2) – профессиональный' },
];

export const educationFormOptions = [
  { value: 'Очно', label: 'Очно' },
  { value: 'Заочно', label: 'Заочно' },
];

export const dataGridLocalText = {
  noRowsLabel: 'Нет рядов',
  noResultsOverlayLabel: 'Результатов не найдено.',

  toolbarDensity: 'Плотность',
  toolbarDensityLabel: 'Плотность',
  toolbarDensityCompact: 'Компакт',
  toolbarDensityStandard: 'Стандарт',
  toolbarDensityComfortable: 'Комфортный',

  toolbarColumns: 'Колонны',
  toolbarColumnsLabel: 'Выберите столбцы',

  toolbarFilters: 'Фильтры',
  toolbarFiltersLabel: 'Показать фильтры',
  toolbarFiltersTooltipHide: 'Скрыть фильтры',
  toolbarFiltersTooltipShow: 'Показать фильтры',
  toolbarFiltersTooltipActive: (count: any) =>
    count !== 1 ? `${count} активные фильтры` : `${count} активные фильтры`,

  toolbarQuickFilterPlaceholder: 'Поиск…',
  toolbarQuickFilterLabel: 'Поиск',
  toolbarQuickFilterDeleteIconLabel: 'Очистить',

  toolbarExport: 'Экспорт',
  toolbarExportLabel: 'Экспорт',
  toolbarExportCSV: 'Скачать как CSV',
  toolbarExportPrint: 'Распечатать',
  toolbarExportExcel: 'Скачать как Excel',

  columnsPanelTextFieldLabel: 'Найти столбец',
  columnsPanelTextFieldPlaceholder: 'Заголовок столбца',
  columnsPanelDragIconLabel: 'Переупорядочение столбца',
  columnsPanelShowAllButton: 'Показать все',
  columnsPanelHideAllButton: 'Скрыть все',

  filterPanelAddFilter: 'Добавить фильтер',
  filterPanelDeleteIconLabel: 'Удалить',
  filterPanelLogicOperator: 'Логические операторы',
  filterPanelOperator: 'Оператор',
  filterPanelOperatorAnd: 'И',
  filterPanelOperatorOr: 'Или',
  filterPanelColumns: 'Столбцы',
  filterPanelInputLabel: 'Значение',
  filterPanelInputPlaceholder: 'Значение фильтра',

  filterOperatorContains: 'содержит',
  filterOperatorEquals: 'равно',
  filterOperatorStartsWith: 'начинается с',
  filterOperatorEndsWith: 'заканчивается',
  filterOperatorIs: 'является',
  filterOperatorNot: 'не является',
  filterOperatorAfter: 'после',
  filterOperatorOnOrAfter: 'на или после',
  filterOperatorBefore: 'раньше',
  filterOperatorOnOrBefore: 'на или ранее',
  filterOperatorIsEmpty: 'пусто',
  filterOperatorIsNotEmpty: 'не пуст',
  filterOperatorIsAnyOf: 'любой',

  filterValueAny: 'любой',
  filterValueTrue: 'истинный',
  filterValueFalse: 'ложь',

  columnMenuLabel: 'Меню',
  columnMenuShowColumns: 'Показать столбцы',
  columnMenuManageColumns: 'Управление столбцами',
  columnMenuFilter: 'Фильтр',
  columnMenuHideColumn: 'Скрыть столбец',
  columnMenuUnsort: 'Убрать сортировку',
  columnMenuSortAsc: 'Сортировать, восходящая',
  columnMenuSortDesc: 'Сортировать, спустившись',

  columnHeaderFiltersTooltipActive: (count: any) =>
    count !== 1 ? `${count} активные фильтры` : `${count} активные фильтры`,
  columnHeaderFiltersLabel: 'Показать фильтры',
  columnHeaderSortIconLabel: 'Сортировать',

  footerRowSelected: (count: any) =>
    count !== 1
      ? `${count.toLocaleString()} ряды выбраны`
      : `${count.toLocaleString()} выбран строка`,

  footerTotalRows: 'Общие ряды:',

  footerTotalVisibleRows: (visibleCount: any, totalCount: any) =>
    `${visibleCount.toLocaleString()} из ${totalCount.toLocaleString()}`,

  checkboxSelectionHeaderName: 'Выбор флажки',
  checkboxSelectionSelectAllRows: 'Выберите все ряды',
  checkboxSelectionUnselectAllRows: 'Невыполнить все ряды',
  checkboxSelectionSelectRow: 'Выберите строку',
  checkboxSelectionUnselectRow: 'Невыразированный ряд',

  booleanCellTrueLabel: 'да',
  booleanCellFalseLabel: 'нет',

  actionsCellMore: 'ещё',

  pinToLeft: 'Булавка слева',
  pinToRight: 'Приколоть справа',
  unpin: 'Не',

  treeDataGroupingHeaderName: 'Группа',
  treeDataExpand: 'смотрите детей',
  treeDataCollapse: 'скрыть детей',

  groupingColumnHeaderName: 'Группа',
  groupColumn: (name: any) => `Группа по ${name}`,
  unGroupColumn: (name: any) => `Прекратите группировать ${name}`,

  detailPanelToggle: 'Подробная панель переключать',
  expandDetailPanel: 'Расширять',
  collapseDetailPanel: 'Крах',

  MuiTablePagination: {},

  rowReorderingHeaderName: 'Переупорядочение ряда',

  aggregationMenuItemHeader: 'Агрегация',
  aggregationFunctionLabelSum: 'сумма',
  aggregationFunctionLabelAvg: 'средний',
  aggregationFunctionLabelMin: 'мин',
  aggregationFunctionLabelMax: 'макс',
  aggregationFunctionLabelSize: 'размер',
};
