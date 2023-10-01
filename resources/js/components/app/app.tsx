import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/employees-slice/employees-selector';
import { AppSpinner } from './styled';
import LoginPage from '../pages/login-page/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import MainPage from '../pages/main-page/main-page';
import EmployeePage from '../pages/employee-page/employee-page';
import EmployeesPage from '../pages/employees-page/employees-page';
import EmployeeWorkPage from '../pages/employee-work-page/employee-work-page';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (<AppSpinner />);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />

        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.Employees} element={<EmployeesPage />} />
        <Route path={AppRoute.Employee} element={<EmployeePage />} />
        <Route path={AppRoute.EmployeeWork} element={<EmployeeWorkPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
