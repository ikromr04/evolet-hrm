import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import Select from '../../../ui/select/select';
import { getEmployee } from '../../../../store/employees-slice/employees-selector';
import { EMPTY_OPTION_LABEL } from '../../../../const';
import { getPositions } from '../../../../store/position-slice/position-selector';
import { fetchPositionsAction } from '../../../../store/position-slice/position-api-actions';

function PositionSelect(): JSX.Element {
  const positions = useAppSelector(getPositions);
  const dispatch = useAppDispatch();
  const employee = useAppSelector(getEmployee);
  const [positionId, setPositionId] = useState(employee?.position?.id || '');

  useEffect(() => {
    !positions && dispatch(fetchPositionsAction());
  }, []);

  return (
    <Select
      label="Позиция"
      name="position_id"
      value={positionId}
      onChange={(evt: BaseSyntheticEvent) => setPositionId(evt.target.value)}
      options={positions ? [
        { value: '', label: EMPTY_OPTION_LABEL },
        ...positions.map(({ id, title }) => ({ value: id, label: title })),
      ] : [{ value: '', label: 'Не выбрано' }]}
    />
  );
};

export default PositionSelect;
