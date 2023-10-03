import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import { Form, StyledModal, WideColumn } from './styled';
import { toast } from 'react-toastify';
import { PersonalData } from '../../../../../types/employee';
import { ValidationError } from '../../../../../types/validation-error';
import { useAppDispatch } from '../../../../../hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../../ui/button/button';
import EditIcon from '../../../../icons/edit-icon';
import TextField from '../../../../ui/input/input';
import ModalInner from '../../../../ui/modal-inner/modal-inner';
import SelectField from '../../../../ui/select/select';
import {
  updateEmployeePersonalDataAction
} from '../../../../../store/employees-slice/employees-api-actions';
import Buttons from '../../../../ui/buttons/buttons';
import { EMPTY_OPTION_LABEL } from '../../../../../const';

type EditPersonalDataProps = {
  personalData: PersonalData
};

export default function EditPersonalData({ personalData }: EditPersonalDataProps): JSX.Element {
  const {
    userId,
    birthDate,
    nationality,
    citizenship,
    address,
    email,
    tel1,
    tel2,
    children
} = personalData;
  const [gender, setGender] = useState(personalData.gender);
  const [familyStatus, setFamilyStatus] = useState(personalData.familyStatus);
  const [validationError, setValidationError] = useState<ValidationError | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    setGender(personalData.gender);
    setFamilyStatus(personalData.familyStatus);
  }, [personalData]);

  const handleFormReset = (evt: BaseSyntheticEvent): void => {
    evt.preventDefault();
    Array.from(evt.target.elements).forEach((input: any) => {
      if (input.name !== 'family_status' && input.name !== 'gender') {
        input.value = input.defaultValue;
      }
    });
    setFamilyStatus(personalData.familyStatus);
    setGender(personalData.gender);
    setValidationError(null);
    navigate(location.pathname);
  };

  const handleInputsChange = (evt: BaseSyntheticEvent): void =>
    setValidationError((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      if (newState?.errors?.[evt.target.name]) {
        delete newState.errors[evt.target.name]
      }
      return {
        ...newState,
        message: '',
      };
  });

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent): void => {
    evt.preventDefault();
    evt.target.setAttribute('disabled', 'disabled');
    formRef.current && dispatch(updateEmployeePersonalDataAction({
      formData: new FormData(formRef.current),
      employeeId: userId,
      errorHandler(error) {
        evt.target.removeAttribute('disabled');
        setValidationError(error);
      },
      successHandler() {
        evt.target.removeAttribute('disabled');
        toast.success('Данные успешно обновлены');
        navigate(location.pathname);
      },
    }));
  };

  return (
    <StyledModal
      button={
        <Button type="button">
          <EditIcon width={16} height={16} /> Редактировать
        </Button>
      }
      window={
        <ModalInner>
          <Form
            key={personalData.id}
            ref={formRef}
            onReset={handleFormReset}
          >
            <TextField
              label="Дата рождения"
              type="datetime-local"
              name="birth_date"
              defaultValue={birthDate}
              errorMessage={validationError?.errors?.birth_date?.[0]}
              onInput={handleInputsChange}
            />
            <SelectField
              label="Пол"
              name="gender"
              value={gender}
              onChange={(evt: BaseSyntheticEvent) => setGender(evt.target.value)}
              options={[
                { value: 'Мужчина', label: 'Мужчина' },
                { value: 'Женщина', label: 'Женщина' }
              ]}
              errorMessage={validationError?.errors?.gender?.[0]}
            />
            <TextField
              label="Национальность"
              type="text"
              name="nationality"
              defaultValue={nationality}
              errorMessage={validationError?.errors?.nationality?.[0]}
              onInput={handleInputsChange}
            />
            <TextField
              label="Гражданство"
              type="text"
              name="citizenship"
              defaultValue={citizenship}
              errorMessage={validationError?.errors?.citizenship?.[0]}
              onInput={handleInputsChange}
            />
            <WideColumn>
              <TextField
                label="Адрес"
                type="text"
                name="address"
                defaultValue={address}
                errorMessage={validationError?.errors?.address?.[0]}
                onInput={handleInputsChange}
              />
            </WideColumn>
            <TextField
              label="Эл. почта"
              type="email"
              name="email"
              defaultValue={email}
              errorMessage={validationError?.errors?.email?.[0]}
              onInput={handleInputsChange}
            />
            <TextField
              label="Телефон-1"
              type="tel"
              name="tel_1"
              defaultValue={tel1}
              errorMessage={validationError?.errors?.tel_1?.[0]}
              onInput={handleInputsChange}
            />
            <TextField
              label="Телефон-2"
              type="tel"
              name="tel_2"
              defaultValue={tel2}
              errorMessage={validationError?.errors?.tel_2?.[0]}
              onInput={handleInputsChange}
            />
            <SelectField
              label="Семейное положение"
              name="family_status"
              value={familyStatus}
              onChange={(evt: BaseSyntheticEvent) => setFamilyStatus(evt.target.value)}
              options={[
                { value: '', label: EMPTY_OPTION_LABEL },
                { value: 'Не женат', label: 'Не женат' },
                { value: 'Не замужем', label: 'Не замужем' },
                { value: 'Женат', label: 'Женат' },
                { value: 'Замужем', label: 'Замужем' },
              ]}
              errorMessage={validationError?.errors?.family_status?.[0]}
            />
            <WideColumn>
              <TextField
                label="Дети"
                type="text"
                name="children"
                defaultValue={children}
                errorMessage={validationError?.errors?.children?.[0]}
                onInput={handleInputsChange}
              />
            </WideColumn>
            <WideColumn>
              <Buttons>
                <Button onClick={handleSubmitButtonClick} type="submit" success>Сохранить</Button>
                <Button type="reset" error>Отмена</Button>
              </Buttons>
            </WideColumn>
          </Form>
        </ModalInner>
      }
    />
  );
};
