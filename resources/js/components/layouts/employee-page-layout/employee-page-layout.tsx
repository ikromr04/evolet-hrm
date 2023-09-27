import { Outlet, generatePath, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { BaseSyntheticEvent, useEffect } from 'react';
import { getEmployee } from '../../../store/employees-slice/employees-selector';
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
import { Actions, HeaderInner, LayoutTop, PageWrapper, StyledLayout } from './styled';
import {
  fetchEmployeeByIdAction,
  fetchNextEmployeeIdAction,
  fetchPreviousEmployeeIdAction
} from '../../../store/employees-slice/employees-api-actions';

export default function EmployeePageLayout(): JSX.Element {
  const params = useParams();
  const employee = useAppSelector(getEmployee);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useOnRouteChange(() => {
    params.employeeId && dispatch(fetchEmployeeByIdAction({ employeeId: params.employeeId }));
  });

  useEffect(() => {
    if (!employee && params.employeeId) {
      dispatch(fetchEmployeeByIdAction({ employeeId: params.employeeId }));
    }
  }, [dispatch, employee, params]);

  if (!employee) {
    return (<Spinner />);
  }

  const handleNextClick = (evt: BaseSyntheticEvent) => {
    evt.target.disabled = true;
    dispatch(fetchNextEmployeeIdAction({
      employeeId: employee.id,
      successHandler(nextEmployeeId) {
        evt.target.disabled = false;
        navigate(generatePath(AppRoute.Employee, { employeeId: nextEmployeeId }));
      },
    }))
  };

  const handlePreviousClick = (evt: BaseSyntheticEvent) => {
    evt.target.disabled = true;
    dispatch(fetchPreviousEmployeeIdAction({
      employeeId: employee.id,
      successHandler(previousEmployeeId) {
        evt.target.disabled = false;
        navigate(generatePath(AppRoute.Employee, { employeeId: previousEmployeeId }));
      },
    }))
  };

  return (
    <StyledLayout>
      <LayoutTop>
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
      </LayoutTop>

      <EmployeeNavigation employee={employee} />

      <PageWrapper>
        <Outlet />
        <EmployeeSidebar />
      </PageWrapper>
    </StyledLayout>
  );
};
