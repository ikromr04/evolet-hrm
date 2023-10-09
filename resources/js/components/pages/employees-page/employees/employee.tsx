import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getEmployees } from '../../../../store/employees-slice/employees-selector';
import { fetchEmployeesAction } from '../../../../store/employees-slice/employees-api-actions';
import { DEFAULT_AVATAR_PATH, dataGridLocalText } from '../../../../const';
import { Avatar } from './styled';
import dayjs from 'dayjs';

function Employees(): JSX.Element {
  const employees = useAppSelector(getEmployees);
  const dispatch = useAppDispatch();
  const [rows, setRows] = useState<GridRowsProp>(employees?.map((employee) => ({
    id: +employee.id,
    avatar: employee.avatar,
    name: `${employee.surname} ${employee.name} ${employee.patronymic}`,
    login: employee.login,
    startedWorkAt: dayjs(employee.startedWorkAt).format('D MMM YYYY'),
    job: employee.job?.title,
    position: employee.position?.title,
  })) || []);

  useEffect(() => {
    !employees && dispatch(fetchEmployeesAction({
      successHandler(employees) {
        setRows(employees.map((employee) => ({
          id: +employee.id,
          avatar: employee.avatar,
          name: `${employee.surname} ${employee.name} ${employee.patronymic}`,
          login: employee.login,
          startedWorkAt: dayjs(employee.startedWorkAt).format('D MMM YYYY'),
          job: employee.job?.title,
          position: employee.position?.title,
        })));
      },
    }));
  }, []);

  const columns: GridColDef[] = [
    {
      field: 'avatar',
      headerName: 'Аватар',
      width: 80,
      renderCell: (params) => (
        <Avatar
          src={params.row.avatar || DEFAULT_AVATAR_PATH}
          alt={params.row.avatar}
        />
      ),
    },
    { field: 'name', headerName: 'ФИО', flex: 1.5},
    { field: 'login', headerName: 'Логин', flex: 1},
    { field: 'startedWorkAt', headerName: 'Начало работы', flex: 1},
    { field: 'job', headerName: 'Должность', flex: 1},
    { field: 'position', headerName: 'Позиция', flex: 1.5},
  ];

  return (
    <DataGrid
      sx={{
        backgroundColor: 'white',
        border: '1px solid #dce5ef',
        borderRadius: '8px',
        boxShadow: '0 0px 4px rgba(0,0,0,0.05)',
        '.MuiDataGrid-columnHeaders': {
          backgroundColor: '#f9f9f9',
          borderRadius: '8px 8px 0 0'
        },
        '.MuiDataGrid-cell': {
          padding: '4px 16px',
          color: '#476887',
          lineHeight: 1.3,
          fontFamily: 'Inter, sans-serif',
        },
        '.MuiDataGrid-columnHeader': {
          padding: '0 16px',
        },
        '.css-t89xny-MuiDataGrid-columnHeaderTitle': {
          fontSize: '15px',
          fontWeight: 500,
          lineHeight: '130%',
          color: '#000f30',
          fontFamily: 'Inter, sans-serif',
        },
      }}
      columnHeaderHeight={48}
      autoHeight
      getRowHeight={() => 'auto'}
      rows={rows}
      columns={columns}
      localeText={dataGridLocalText}
      pageSizeOptions={[]}
      hideFooter
    />
  );
};

export default Employees;
