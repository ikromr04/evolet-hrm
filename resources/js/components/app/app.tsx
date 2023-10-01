import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/employees-slice/employees-selector';
import { AppSpinner } from './styled';
import PrivateRoute from '../private-route/private-route';
import LoginPage from '../pages/login-page/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import MainPage from '../pages/main-page/main-page';
import EmployeePage from '../pages/employee-page/employee-page';
import PageLayout from '../layouts/page-layout/page-layout';
import EmployeeLayout from '../layouts/employee-layout/employee-layout';

export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (<AppSpinner />);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        <Route element={<PrivateRoute />}>
          <Route element={<PageLayout />}>
            <Route path={AppRoute.Main} element={<MainPage />} />
            <Route path={AppRoute.Employee} element={<EmployeeLayout />}>
              <Route index element={<EmployeePage />} />
              <Route path={AppRoute.EmployeeWork} element={<></>} />
            </Route>

            <Route path={AppRoute.Employees} element={<p>Not implemented</p>} />
            <Route path="/calendars" element={<p>Not implemented</p>} />
            <Route path="/recruitment" element={<p>Not implemented</p>} />
            <Route path="/efficiency" element={<p>Not implemented</p>} />
            <Route path="/attendance" element={<p>Not implemented</p>} />
            <Route path="/polls" element={<p>Not implemented</p>} />
            <Route path="/documents" element={<p>Not implemented</p>} />
            <Route path="/store" element={<p>Not implemented</p>} />
            <Route path="/knowledge" element={<p>Not implemented</p>} />
            <Route path="/cases" element={<p>Not implemented</p>} />
            <Route path="/process" element={<p>Not implemented</p>} />
            <Route path="/reports" element={<p>Not implemented</p>} />
            <Route path="/settings" element={<p>Not implemented</p>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
