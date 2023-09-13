import { BaseSyntheticEvent, useState } from 'react';
import Button from '../../ui/button/button';
import { Main, LoginForm, Logo, PageTitle, Description, Field } from './styled';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { loginAction } from '../../../store/user-slice/api-actions';
import { getAuthorizationStatus } from '../../../store/user-slice/selector';
import { AuthorizationStatus, AppRoute } from '../../../const';
import { Navigate } from 'react-router-dom';
import { ValidationError } from '../../../types/validation-error';

export default function LoginPage(): JSX.Element {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState<ValidationError | null>(null);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleSubmitClick = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    setIsLoading(true);

    dispatch(loginAction({
      body: { login, password },
      errorHandler(error) {
        setIsLoading(false);
        setValidationError(error);
      },
    }));
  };

  const handleLoginInput = (evt: BaseSyntheticEvent) => {
    setLogin(evt.target.value);
    setValidationError((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      if (newState?.errors?.email) {
        delete newState.errors.email
      }
      return {
        ...newState,
        message: '',
      };
    })
  };

  const handlePasswordInput = (evt: BaseSyntheticEvent) => {
    setPassword(evt.target.value);
    setValidationError((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      if (newState?.errors?.password) {
        delete newState.errors.password
      }
      return {
        ...newState,
        message: '',
      };
    })
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />
  }

  return (
    <Main>
      <LoginForm as="form">
        <Logo />

        <PageTitle>Добро пожаловать в Evolet</PageTitle>
        <Description
          dark={validationError?.message ? false : true}
          error={validationError?.message ? true : false}
        >
          {validationError?.message ? 'Неверные учетные данные' : 'Введите свои учетные данные'}
        </Description>

        <Field
          id="login"
          label="Логин"
          labelHidden
          name="login"
          type="text"
          placeholder="Логин"
          defaultValue={login}
          onInput={handleLoginInput}
          message={validationError?.errors?.email?.[0]}
          required
        />

        <Field
          id="password"
          label="Пароль"
          labelHidden
          name="password"
          type="password"
          placeholder="Пароль"
          defaultValue={password}
          onInput={handlePasswordInput}
          message={validationError?.errors?.password?.[0]}
          required
        />

        <Button
          type="submit"
          fluid
          onClick={handleSubmitClick}
          disabled={isLoading}
          isLoading={isLoading}
        >
          Войти в систему
        </Button>
      </LoginForm>
    </Main>
  );
}
