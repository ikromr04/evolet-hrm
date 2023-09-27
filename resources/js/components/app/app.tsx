import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/employees-slice/employees-selector';
import { AppSpinner } from './styled';
import PrivateRoute from '../private-route/private-route';
import LoginPage from '../pages/login-page/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import MainPage from '../pages/main-page/main-page';
import PageWrapper from '../layouts/page-wrapper/page-wrapper';
import EmployeePageLayout from '../layouts/employee-page-layout/employee-page-layout';
import EmployeePage from '../pages/employee-page/employee-page';

export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (<AppSpinner />);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        <Route element={<PrivateRoute />}>
          <Route element={<PageWrapper />}>
            <Route path={AppRoute.Main} element={<MainPage />} />
            <Route path={AppRoute.Employee} element={<EmployeePageLayout />}>
              <Route index element={<EmployeePage />} />
              <Route path={AppRoute.EmployeeWork} element={<p>Not implemented</p>} />
            </Route>

            <Route path="/employees" element={<p>Not implemented</p>} />
            <Route path="/calendars" element={<p>Not implemented</p>} />
            <Route path="/recruitment/vacancies" element={<p>Not implemented</p>} />
            <Route path="/recruitment/applicants" element={<p>Not implemented</p>} />
            <Route path="/recruitment/hiring" element={<p>Not implemented</p>} />
            <Route path="/recruitment/tests" element={<p>Not implemented</p>} />
            <Route path="/efficiency/review" element={<p>Not implemented</p>} />
            <Route path="/efficiency/one-on-one" element={<p>Not implemented</p>} />
            <Route path="/efficiency/kpi" element={<p>Not implemented</p>} />
            <Route path="/efficiency/goals" element={<p>Not implemented</p>} />
            <Route path="/efficiency/grade" element={<p>Not implemented</p>} />
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
}
