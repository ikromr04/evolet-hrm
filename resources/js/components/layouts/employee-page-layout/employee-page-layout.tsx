import { Outlet, generatePath, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { BaseSyntheticEvent, useEffect } from 'react';
import { getEmployee } from '../../../store/employees-slice/employees-selector';
import { fetchEmployeeById, nextEmployeeAction } from '../../../store/employees-slice/employees-api-actions';
import { Actions, HeaderInner, LayoutHeader, PageWrapper, StyledLayout } from './styled';
import EmployeeAvatar from './employee-avatar/employee-avatar';
import EmployeeDetails from './employee-details/employee-details';
import Spinner from '../../ui/spinner/spinner';
import EmployeeNavigation from './employee-navigation/employee-navigation';
import EmployeeSidebar from '../employee-sidebar/employee-sidebar';
import Button from '../../ui/button/button';
import ChevronLeftIcon from '../../icons/chevron-left-icon';
import ChevronRightIcon from '../../icons/chevron-right-icon';
import { useOnRouteChange } from '../../../hooks/use-on-route-change';
import { AppRoute } from '../../../const';

export default function EmployeePageLayout(): JSX.Element {
  const params = useParams();
  const employee = useAppSelector(getEmployee);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useOnRouteChange(() => {
    params.employeeId && dispatch(fetchEmployeeById({ employeeId: params.employeeId }));
  });

  useEffect(() => {
    if (!employee && params.employeeId) {
      dispatch(fetchEmployeeById({ employeeId: params.employeeId }));
    }
  }, [dispatch, employee, params]);

  if (!employee) {
    return (<Spinner />);
  }

  const handleNextClick = (evt: BaseSyntheticEvent) => {
    evt.target.disabled = true;
    dispatch(nextEmployeeAction({
      employeeId: employee.id,
      onSuccess(nextEmployeeId) {
        navigate(generatePath(AppRoute.Employee, { employeeId: nextEmployeeId }));
        evt.target.disabled = false;
      },
    }))
  };

  const handlePreviousClick = (evt: BaseSyntheticEvent) => {
    evt.target.disabled = true;
    dispatch(nextEmployeeAction({
      employeeId: employee.id,
      onSuccess(previousEmployeeId) {
        navigate(generatePath(AppRoute.Employee, { employeeId: previousEmployeeId }));
        evt.target.disabled = false;
      },
    }))
  };

  return (
    <StyledLayout>
      <LayoutHeader>
        <EmployeeAvatar />

        <HeaderInner>
          <EmployeeDetails employee={employee} />

          <Actions>
            <Button onClick={handlePreviousClick} type="button">
              <ChevronLeftIcon height={13} /> Предыдущий
            </Button>
            <Button onClick={handleNextClick} type="button">
              Следующий <ChevronRightIcon height={13} />
            </Button>
          </Actions>
        </HeaderInner>
      </LayoutHeader>

      <EmployeeNavigation employee={employee} />

      <PageWrapper>
        <Outlet />
        <EmployeeSidebar />
      </PageWrapper>
    </StyledLayout>
  );
};
