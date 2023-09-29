import { BaseSyntheticEvent, useRef, useState } from 'react';
import { Form, StyledModal, WideColumn } from './styled';
import { toast } from 'react-toastify';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ValidationError } from '../../../../../types/validation-error';
import { useAppDispatch } from '../../../../../hooks';
import Button from '../../../../ui/button/button';
import PlusIcon from '../../../../icons/plus-icon';
import TextField from '../../../../ui/text-field/text-field';
import SelectField from '../../../../ui/select-field/select-field';
import {
  storeEmployeeEducationAction
} from '../../../../../store/employees-slice/employees-api-actions';
import Buttons from '../../../../ui/buttons/buttons';
import ModalInner from '../../../../ui/modal-inner/modal-inner';

export default function CreateEducation(): JSX.Element {
  const [validationError, setValidationError] = useState<ValidationError | null>(null);
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const formRef = useRef<HTMLFormElement | null>(null);

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
  });

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    evt.target.setAttribute('disabled', 'disabled');
    formRef.current && params.employeeId && dispatch(storeEmployeeEducationAction({
      formData: new FormData(formRef.current),
      employeeId: params.employeeId,
      errorHandler(error) {
        evt.target.removeAttribute('disabled')
        setValidationError(error);
      },
      successHandler() {
        evt.target.removeAttribute('disabled');
        formRef.current && formRef.current.reset();
        toast.success('Данные успешно обновлены');
        navigate(location.pathname);
      },
    }));
  };

  const handleResetButtonClick = () => {
    setValidationError(null);
    navigate(location.pathname);
  };

  return (
    <StyledModal
      button={
        <Button type="button">
          <PlusIcon width={14} height={14} /> Добавить
        </Button>
      }
      window={
        <ModalInner>
          <Form ref={formRef}>
            <TextField
              label="Год поступления"
              type="datetime-local"
              name="started_at"
              errorMessage={validationError?.errors?.started_at?.[0]}
              onInput={handleInputsChange}
            />
            <TextField
              label="Год окончания"
              type="datetime-local"
              name="graduated_at"
              errorMessage={validationError?.errors?.graduated_at?.[0]}
              onInput={handleInputsChange}
            />
            <WideColumn>
              <TextField
                label="Учебное заведение"
                type="text"
                name="institution"
                errorMessage={validationError?.errors?.institution?.[0]}
                onInput={handleInputsChange}
              />
            </WideColumn>
            <TextField
              label="Факультет"
              type="text"
              name="faculty"
              errorMessage={validationError?.errors?.faculty?.[0]}
              onInput={handleInputsChange}
            />
            <SelectField
              label="Форма обучения"
              name="form"
              options={[
                { value: 'Очно', label: 'Очно' },
                { value: 'Заочно', label: 'Заочно' },
              ]}
            />
            <TextField
              label="Специальность"
              type="text"
              name="speciality"
              errorMessage={validationError?.errors?.speciality?.[0]}
              onInput={handleInputsChange}
            />

            <WideColumn>
              <Buttons>
                <Button onClick={handleSubmitButtonClick} type="submit" success>Добавить</Button>
                <Button onClick={handleResetButtonClick} type="reset" error>Отмена</Button>
              </Buttons>
            </WideColumn>
          </Form>
        </ModalInner>
      }
    />
  );
};
