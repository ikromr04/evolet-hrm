import IconsBox from '../../../ui/icons-box/icons-box';
import LanguageIcon from '../../../icons/language-icon';
import Title from '../../../ui/title/title';
import { useAppSelector } from '../../../../hooks';
import { getEmployee } from '../../../../store/employees-slice/employees-selector';
import EditLanguage from './edit-language/edit-language';
import LanguagesList from './languages-list/languages-list';
import Box from '../../../ui/box/box';
import BoxToolbar from '../../../ui/box-toolbar/box-toolbar';
import { memo } from 'react';

function EmployeeLanguages(): JSX.Element {
  const employee = useAppSelector(getEmployee);

  if (!employee) {
    return <></>;
  }

  return (
    <Box>
      <BoxToolbar>
        <IconsBox icon={<LanguageIcon width={16} height={16} />} />
        <Title small>Знание языков</Title>
        {/* <EditLanguage employee={employee} languages={languages} /> */}
      </BoxToolbar>

      <LanguagesList languages={employee.languages} />
    </Box>
  );
};

export default memo(EmployeeLanguages);
