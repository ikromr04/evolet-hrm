import { BaseSyntheticEvent, useState } from 'react';
import { AddressField, EditForm, EditModal, SubmitButton } from './styled';
import { toast } from 'react-toastify';
import { PersonalData } from '../../../../../types/employee';
import { ValidationError } from '../../../../../types/validation-error';
import { useAppDispatch } from '../../../../../hooks';
import { updateEmployeePersonalDataAction } from '../../../../../store/employees-slice/employees-api-actions';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../../ui/button/button';
import EditIcon from '../../../../icons/edit-icon';
import TextField from '../../../../ui/text-field/text-field';

type EditPersonalDataProps = {
  personalData: PersonalData
};

export default function EditPersonalData({ personalData }: EditPersonalDataProps): JSX.Element {
  const { userId, birthDate, nationality, citizenship, address,
    email, tel1, tel2, children } = personalData;
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState(personalData.gender);
  const [familyStatus, setFamilyStatus] = useState(personalData.familyStatus);
  const [validationError, setValidationError] = useState<ValidationError | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleFormSubmit = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    setIsLoading(true);

    dispatch(updateEmployeePersonalDataAction({
      form: new FormData(evt.target),
      employeeId: userId,
      errorHandler(error) {
        setIsLoading(false);
        setValidationError(error);
      },
      onSuccess() {
        setIsLoading(false);
        navigate(location.pathname);
        toast.success('Данные успешно обновлены');
      },
    }));
  };

  const handleInputsChange = (evt: BaseSyntheticEvent) =>
    setValidationError((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      if (newState?.errors?.[evt.target.name]) {
        delete newState.errors[evt.target.name]
      }
      return {
        ...newState,
        message: '',
      };
  })

  return (
    <EditModal
      modalButton={
        <Button type="button">
          <EditIcon height={13} /> Редактировать
        </Button>
      }
      modalWindow={
        <EditForm as="form" onSubmit={handleFormSubmit}>
          <TextField
            id="birth_date"
            label="Дата рождения"
            type="datetime-local"
            name="birth_date"
            defaultValue={birthDate}
            message={validationError?.errors?.birth_date?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="gender"
            label="Пол"
            name="gender"
            value={gender}
            onChange={(evt: BaseSyntheticEvent) => setGender(evt.target.value)}
            select={[{ value: 'Мужчина', label: 'Мужчина' }, { value: 'Женщина', label: 'Женщина' }]}
          />
          <TextField
            id="nationality"
            label="Национальность"
            type="text"
            name="nationality"
            defaultValue={nationality}
            message={validationError?.errors?.nationality?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="citizenship"
            label="Гражданство"
            type="text"
            name="citizenship"
            defaultValue={citizenship}
            message={validationError?.errors?.citizenship?.[0]}
            onInput={handleInputsChange}
          />
          <AddressField
            id="address"
            label="Адрес"
            type="text"
            name="address"
            defaultValue={address}
            message={validationError?.errors?.address?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="email"
            label="Эл. почта"
            type="email"
            name="email"
            defaultValue={email}
            message={validationError?.errors?.email?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="tel_1"
            label="Телефон-1"
            type="tel"
            name="tel_1"
            defaultValue={tel1}
            message={validationError?.errors?.tel_1?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="tel_2"
            label="Телефон-2"
            type="tel"
            name="tel_2"
            defaultValue={tel2}
            message={validationError?.errors?.tel_2?.[0]}
            onInput={handleInputsChange}
          />
          <TextField
            id="family_status"
            label="Эл. почта"
            name="family_status"
            value={familyStatus}
            onChange={(evt: BaseSyntheticEvent) => setFamilyStatus(evt.target.value)}
            select={[
              { value: '', label: 'Не выбрано' },
              { value: 'Не женат', label: 'Не женат' },
              { value: 'Не замужем', label: 'Не замужем' },
              { value: 'Женат', label: 'Женат' },
              { value: 'Замужем', label: 'Замужем' },
            ]}
          />
          <TextField
            id="children"
            label="Дети"
            type="text"
            name="children"
            defaultValue={children}
            message={validationError?.errors?.children?.[0]}
            onInput={handleInputsChange}
          />

          <SubmitButton
            isLoading={isLoading}
            disabled={isLoading}
            success
            large
          >
            Редактировать
          </SubmitButton>
        </EditForm>
      }
    />
  );
}
