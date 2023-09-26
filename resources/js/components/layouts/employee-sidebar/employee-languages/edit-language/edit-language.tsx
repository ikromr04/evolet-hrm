import { BaseSyntheticEvent, useState } from 'react';
import { Employee, EmployeeLanguage, EmployeeLanguages } from '../../../../../types/employees';
import EditIcon from '../../../../icons/edit-icon';
import { ButtonLabel, ButtonsWrapper, EditButton, EditModal, StyledForm } from './styled';
import { Language, Languages } from '../../../../../types/language';
import LanguageField from './language-field/language-field';
import NewLanguageField from './new-language-field/new-language-field';
import Button from '../../../../ui/button/button';
import { useAppDispatch } from '../../../../../hooks';
import { createOrUpdateEmployeeLanguagesAction } from '../../../../../store/employees-slice/employees-api-actions';
import { generatePath, useLocation, useNavigate, useParams } from 'react-router-dom';
import { redirectToRoute } from '../../../../../store/middlewares/redirect';
import { toast } from 'react-toastify';

type EditLanguageProps = {
  employee: Employee;
  languages: Languages;
};

export default function EditLanguage({ employee, languages }: EditLanguageProps): JSX.Element {
  const [employeeLanguages, setEmployeeLanguages] = useState<EmployeeLanguages | null>(employee.languages);
  const dispatch = useAppDispatch();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const filterLanguages = (employeeLanguage?: EmployeeLanguage): Languages =>
    languages.filter((lang) => {
      if (employeeLanguage?.id === lang.id) {
        return true;
      }
      return !employeeLanguages?.map(({id}) => id).includes(lang.id);
    });

  const handleLanguageChange = (languageToUpdate: EmployeeLanguage) => (evt: BaseSyntheticEvent) => {
    const newLanguage: Language | undefined = languages.find(({ id }) => String(id) === evt.target.value);

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
      const newEmployeeLanguages: EmployeeLanguages = employeeLanguages.map((employeeLanguage) => {
        if (String(employeeLanguage.id) === String(languageToUpdate.id)) {
          return {
            ...languageToUpdate,
            level: evt.target.value,
          };
        }
        return employeeLanguage;
      })
      setEmployeeLanguages(newEmployeeLanguages);
    }
  };

  const handleLanguageDelete = (languageToDelete: EmployeeLanguage) => () => {
    if (employeeLanguages) {
      const newEmployeeLanguages: EmployeeLanguages = employeeLanguages.filter((employeeLanguage) => (
        String(employeeLanguage.id) !== String(languageToDelete.id)
      ));
      setEmployeeLanguages(newEmployeeLanguages);
    }
  };

  const insertLanguage = (employeeLanguage: EmployeeLanguage) => {
    setEmployeeLanguages((prevState) => {
      if (prevState) {
        return [ ...prevState, employeeLanguage ];
      }
      return [ employeeLanguage ];
    });
  };

  const handleButtonReset = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    setEmployeeLanguages(employee.languages);
  }

  const handleButtonSubmit = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();

    params.employeeId && dispatch(createOrUpdateEmployeeLanguagesAction({
      employeeId: params.employeeId,
      languages: employeeLanguages,
      onSuccess() {
        navigate(location.pathname);
        toast.success('Данные успешно обновлены');
      },
    }))
  }

  return (
    <EditModal
      modalButton={
        <EditButton>
          <EditIcon height={14} width={14} />
          <ButtonLabel>Редактировать</ButtonLabel>
        </EditButton>
      }
      modalWindow={
        <StyledForm as="form">
          {employeeLanguages?.map((employeeLanguage) => (
            <LanguageField
              key={employeeLanguage.id}
              currentLanguage={employeeLanguage}
              languages={filterLanguages(employeeLanguage)}
              languageChangeHandler={handleLanguageChange}
              levelChangeHandler={handleLevelChange}
              deleteHandler={handleLanguageDelete}
            />
          ))}
          <NewLanguageField
            languages={filterLanguages()}
            insertLanguage={insertLanguage}
          />

          <ButtonsWrapper>
            <Button onClick={handleButtonReset} type="reset">Сбросить</Button>
            <Button onClick={handleButtonSubmit} type="submit" success>Редактировать</Button>
          </ButtonsWrapper>
        </StyledForm>
      }
    />
  );
};
