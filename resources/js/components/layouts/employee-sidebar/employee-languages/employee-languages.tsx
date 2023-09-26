import BlockToolbar from '../../../ui/block-toolbar/block-toolbar';
import Block from '../../../ui/block/block';
import IconsBox from '../../../ui/icons-box/icons-box';
import LanguageIcon from '../../../icons/language-icon';
import Title from '../../../ui/title/title';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getEmployee } from '../../../../store/employees-slice/employees-selector';
import EditLanguage from './edit-language/edit-language';
import { getLanguages } from '../../../../store/language-slice/language-selector';
import { useEffect } from 'react';
import { fetchLanguages } from '../../../../store/language-slice/language-api-actions';
import LanguagesList from './languages-list/languages-list';

export default function EmployeeLanguages(): JSX.Element {
  const employee = useAppSelector(getEmployee);
  const languages = useAppSelector(getLanguages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    !languages && dispatch(fetchLanguages());
  }, [dispatch, languages]);

  if (!employee || !languages) {
    return <></>;
  }

  return (
    <Block>
      <BlockToolbar>
        <IconsBox>
          <LanguageIcon />
        </IconsBox>
        <Title small>Знание языков</Title>

        <EditLanguage employee={employee} languages={languages} />
      </BlockToolbar>

      <LanguagesList languages={employee.languages} />
    </Block>
  );
};
