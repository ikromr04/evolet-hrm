import { BaseSyntheticEvent, useState } from 'react';
import { Employee, EmployeeLanguage, EmployeeLanguages } from '../../../../../types/employee';
import EditIcon from '../../../../icons/edit-icon';
import { Buttons, StyledModal } from './styled';
import { Language, Languages } from '../../../../../types/language';
import Button from '../../../../ui/button/button';
import { useAppDispatch } from '../../../../../hooks';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModalInner from '../../../../ui/modal-inner/modal-inner';
import NewLanguageFields from './new-language-fields/new-language-fields';
import LanguageFields from './language-fields/language-fields';
import {
  crudEmployeeLanguagesAction
} from '../../../../../store/employees-slice/employees-api-actions';

type EditLanguageProps = {
  employee: Employee;
  languages: Languages;
};

export default function EditLanguage({ employee, languages }: EditLanguageProps): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [employeeLanguages, setEmployeeLanguages] =
    useState<EmployeeLanguages>(employee.languages || []);

  const getFilteredLanguages = (employeeLanguage?: EmployeeLanguage): Languages =>
    languages.filter((lang) => {
      if (employeeLanguage?.id === lang.id) {
        return true;
      }
      return !employeeLanguages?.map(({id}) => id).includes(lang.id);
    });

  const handleLanguageChange = (languageToUpdate: EmployeeLanguage) =>
    (evt: BaseSyntheticEvent) => {
      const newLanguage: Language | undefined =
        languages.find(({ id }) => String(id) === evt.target.value);

      if (employeeLanguages && newLanguage) {
        const newEmployeeLanguages: EmployeeLanguages = employeeLanguages.map((language) => {
          if (String(language.id) === String(languageToUpdate.id)) {
            return {
              ...newLanguage,
              level: languageToUpdate.level,
            };
          }
          return language;
        })
        setEmployeeLanguages(newEmployeeLanguages);
      }
    };

  const handleLevelChange = (languageToUpdate: EmployeeLanguage) => (evt: BaseSyntheticEvent) => {
    if (employeeLanguages) {
      const newEmployeeLanguages = employeeLanguages.map((employeeLanguage) => {
        if (String(employeeLanguage.id) === String(languageToUpdate.id)) {
          return { ...languageToUpdate, level: evt.target.value };
        }
        return employeeLanguage;
      });
      setEmployeeLanguages(newEmployeeLanguages);
    }
  };

  const handleLanguageDelete = (languageToDelete: EmployeeLanguage) => () => {
    if (employeeLanguages) {
      const newEmployeeLanguages = employeeLanguages.filter((employeeLanguage) => (
        String(employeeLanguage.id) !== String(languageToDelete.id)
      ));
      setEmployeeLanguages(newEmployeeLanguages);
    }
  };

  const addLanguage = (employeeLanguage: EmployeeLanguage) => {
    setEmployeeLanguages((prevState) => {
      if (prevState) {
        return [ ...prevState, employeeLanguage ];
      }
      return [ employeeLanguage ];
    });
  };

  const handleResetButtonClick = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    setEmployeeLanguages(employee.languages || []);
    navigate(location.pathname);
  }

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    evt.target.setAttribute('disabled', 'disabled');
    params.employeeId && dispatch(crudEmployeeLanguagesAction({
      employeeId: params.employeeId,
      employeeLanguages,
      successHandler() {
        toast.success('Данные успешно обновлены');
        evt.target.removeAttribute('disabled');
        navigate(location.pathname);
      },
    }))
  }

  return (
    <StyledModal
      button={
        <Button title="Редактировать">
          <EditIcon height={14} width={14} />
        </Button>
      }
      window={
        <ModalInner tagName="form">
          {employeeLanguages?.map((employeeLanguage) => (
            <LanguageFields
              key={employeeLanguage.id}
              currentLanguage={employeeLanguage}
              languages={getFilteredLanguages(employeeLanguage)}
              languageChangeHandler={handleLanguageChange}
              levelChangeHandler={handleLevelChange}
              deleteHandler={handleLanguageDelete}
            />
          ))}
          <NewLanguageFields
            languages={getFilteredLanguages()}
            languageChangeHandler={addLanguage}
          />
          <Buttons>
            <Button onClick={handleSubmitButtonClick} type="submit" success>Сохранить</Button>
            <Button onClick={handleResetButtonClick} type="reset" error>Отмена</Button>
          </Buttons>
        </ModalInner>
      }
    />
  );
};
