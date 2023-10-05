import { useAppSelector } from '../../../../../hooks';
import { getEmployee } from '../../../../../store/employees-slice/employees-selector';

function Job(): JSX.Element {
  const employee = useAppSelector(getEmployee);

  return (
    <>{employee?.job?.title}</>
  );
};

export default Job;
