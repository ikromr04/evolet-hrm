import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-slice/selector';
import { AppSpinner } from './styled';
import PrivateRoute from '../private-route/private-route';

export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (<AppSpinner />);
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Login} element={<h1>Login page</h1>} />
        <Route path={AppRoute.NotFound} element={<h1>Not found page</h1>} />

        <Route element={<PrivateRoute />}>
          <Route path={AppRoute.Main} element={<h1>Main page</h1>} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}
