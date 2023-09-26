import { Navigate, Outlet } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { useAppSelector } from "../../hooks";
import { getAuthStatus } from "../../store/employees-slice/employees-selector";


export default function PrivateRoute() {
  const authorizationStatus = useAppSelector(getAuthStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Outlet/>
      : <Navigate to={AppRoute.Login} replace />
  )
}
