import { PropsWithChildren } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { useAppSelector } from "../../hooks";
import { getAuthStatus } from "../../store/employees-slice/employees-selector";

type PrivateRouteProps = PropsWithChildren;

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(getAuthStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Outlet/>
      : <Navigate to={AppRoute.Login} replace />
  )
}
