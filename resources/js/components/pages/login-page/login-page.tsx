import { BaseSyntheticEvent, useState } from 'react';
import { StyledBox, Form } from './styled';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { loginAction } from '../../../store/employees-slice/employees-api-actions';
import { AuthorizationStatus, AppRoute } from '../../../const';
import { Navigate } from 'react-router-dom';
import { ValidationError } from '../../../types/validation-error';
import { getAuthorizationStatus } from '../../../store/employees-slice/employees-selector';
import MainLogo from '../../ui/main-logo/main-logo';
import Title from '../../ui/title/title';
import Text from '../../ui/text/text';
import TextField from '../../ui/input/input';
import { LoginData } from '../../../types/employee';
import Button from '../../ui/button/button';

function LoginPage(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const [loginData, setLoginData] = useState<LoginData>({ login: '', password: '' });
  const [validationError, setValidationError] = useState<ValidationError>({ message: '' });

  const handleFieldsInput = (evt: BaseSyntheticEvent): void => {
    const loginDataCopy = JSON.parse(JSON.stringify(loginData));
    loginDataCopy[evt.target.name] = evt.target.value;
    setLoginData(loginDataCopy);
    const validationErrorCopy = JSON.parse(JSON.stringify(validationError));
    validationErrorCopy.message = '';
    if (validationErrorCopy?.errors?.[evt.target.name]) {
      delete validationErrorCopy.errors[evt.target.name];
    }
    setValidationError(validationErrorCopy);
  };

  const handleSubmitButtonClick = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    evt.target.setAttribute('disabled', 'disabled');
    dispatch(loginAction({
      loginData,
      errorHandler(error) {
        evt.target.removeAttribute('disabled');
        setValidationError(error);
      },
    }));
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />
  };

  return (
    <StyledBox tagName="main">
      <MainLogo />
      <Title>Добро пожаловать в Evolet</Title>
      <Form>
        <Text error={validationError?.message ? true : false}>
          {validationError?.message ? 'Неверные учетные данные' : 'Введите свои учетные данные'}
        </Text>

        <TextField
          name="login"
          type="text"
          placeholder="Логин"
          defaultValue={loginData.login}
          onInput={handleFieldsInput}
          errorMessage={validationError?.errors?.login?.[0]}
        />

        <TextField
          name="password"
          type="password"
          placeholder="Пароль"
          defaultValue={loginData.password}
          onInput={handleFieldsInput}
          errorMessage={validationError?.errors?.password?.[0]}
        />

        <Button
          type="submit"
          success
          onClick={handleSubmitButtonClick}
        >
          Войти в систему
        </Button>
      </Form>
    </StyledBox>
  );
};

export default LoginPage;
