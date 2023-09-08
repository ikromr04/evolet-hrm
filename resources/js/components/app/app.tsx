import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-slice/selector';
import { AppSpinner } from './styled';
import PrivateRoute from '../private-route/private-route';
import LoginPage from '../pages/login-page/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import MainPage from '../pages/main-page/main-page';
import PageWrapper from '../layouts/page-wrapper/page-wrapper';

export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (<AppSpinner />);
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />

        <Route element={<PrivateRoute />}>
          <Route element={<PageWrapper />}>
            <Route path={AppRoute.Main} element={<MainPage />} />
            <Route path={AppRoute.Profile} element={<p>Not implemented</p>} />
          </Route>
        </Route>
      </Routes>
    </HistoryRouter>
  );
}
