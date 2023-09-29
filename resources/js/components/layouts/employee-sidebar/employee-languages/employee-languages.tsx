import IconsBox from '../../../ui/icons-box/icons-box';
import LanguageIcon from '../../../icons/language-icon';
import Title from '../../../ui/title/title';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getEmployee } from '../../../../store/employees-slice/employees-selector';
import EditLanguage from './edit-language/edit-language';
import { getLanguages } from '../../../../store/language-slice/language-selector';
import { useEffect } from 'react';
import LanguagesList from './languages-list/languages-list';
import { fetchLanguagesAction } from '../../../../store/language-slice/language-api-actions';
import Box from '../../../ui/box/box';
import BoxToolbar from '../../../ui/box-toolbar/box-toolbar';

export default function EmployeeLanguages(): JSX.Element {
  const employee = useAppSelector(getEmployee);
  const languages = useAppSelector(getLanguages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    !languages && dispatch(fetchLanguagesAction());
  }, [dispatch, languages]);

  if (!employee || !languages) {
    return <></>;
  }

  return (
    <Box>
      <BoxToolbar>
        <IconsBox icon={<LanguageIcon width={16} height={16} />} />
        <Title small>Знание языков</Title>
        <EditLanguage employee={employee} languages={languages} />
      </BoxToolbar>

      <LanguagesList languages={employee.languages} />
    </Box>
  );
};
