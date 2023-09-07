import Button from '../../ui/button/button';
import { Main, LoginForm, Logo, PageTitle, Description, Field } from './styled';

export default function LoginPage(): JSX.Element {
  return (
    <Main>
      <LoginForm>
        <Logo />

        <PageTitle>Добро пожаловать в Evolet</PageTitle>
        <Description>Введите свои учетные данные</Description>

        <Field
          id="email"
          label="Электронная почта"
          labelHidden
          name="email"
          type="text"
          placeholder="Электронная почта"
        />

        <Field
          id="password"
          label="Пароль"
          labelHidden
          name="password"
          type="password"
          placeholder="Пароль"
        />

        <Button
          type="submit"
          fluid
        >
          Войти в систему
        </Button>
      </LoginForm>
    </Main>
  );
}
