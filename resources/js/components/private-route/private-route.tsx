import { PropsWithChildren } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { useAppSelector } from "../../hooks";
import { getAuthorizationStatus } from "../../store/auth-slice/selector";

type PrivateRouteProps = PropsWithChildren;

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Outlet/>
      : <Navigate to={AppRoute.Login} replace />
  )
}
