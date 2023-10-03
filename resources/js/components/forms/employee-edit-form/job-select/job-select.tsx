import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getJobs } from '../../../../store/job-slice/job-selector';
import Select from '../../../ui/select/select';
import { fetchJobsAction } from '../../../../store/job-slice/job-api-actions';
import { getEmployee } from '../../../../store/employees-slice/employees-selector';
import { EMPTY_OPTION_LABEL } from '../../../../const';

function JobSelect(): JSX.Element {
  const jobs = useAppSelector(getJobs);
  const dispatch = useAppDispatch();
  const employee = useAppSelector(getEmployee);
  const [jobId, setJobId] = useState(employee?.job?.id || '');

  useEffect(() => {
    !jobs && dispatch(fetchJobsAction());
  }, []);

  return (
    <Select
      label="Должность"
      name="job_id"
      value={jobId}
      onChange={(evt: BaseSyntheticEvent) => setJobId(evt.target.value)}
      options={jobs ? [
        { value: '', label: EMPTY_OPTION_LABEL },
        ...jobs.map(({ id, title }) => ({ value: id, label: title })),
      ] : [{ value: '', label: 'Не выбрано' }]}
    />
  );
};

export default JobSelect;
