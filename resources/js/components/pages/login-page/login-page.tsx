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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [validationError, setValidationError] = useState<ValidationError | null>(null);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleEmailInput = (evt: BaseSyntheticEvent) => {
    setEmail(evt.target.value);
    setValidationError((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      if (newState?.errors?.email) {
        delete newState.errors.email
      }
      return newState;
    })
  };

  const handlePasswordInput = (evt: BaseSyntheticEvent) => {
    setPassword(evt.target.value);
    setValidationError((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      if (newState?.errors?.password) {
        delete newState.errors.password
      }
      return newState;
    })
  };

  const handleSubmitClick = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    setIsSubmitDisabled(true);

    dispatch(loginAction({
      body: { email, password },
      errorHandler(error) {
        setIsSubmitDisabled(false);
        setValidationError(error);
      },
    }));
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
          id="email"
          label="Электронная почта"
          labelHidden
          name="email"
          type="text"
          placeholder="Электронная почта"
          defaultValue={email}
          onInput={handleEmailInput}
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
          disabled={isSubmitDisabled}
        >
          Войти в систему
        </Button>
      </LoginForm>
    </Main>
  );
}
