import { Main, LoginForm, Logo, PageTitle, Description } from './styled';

export default function LoginPage(): JSX.Element {
  return (
    <Main>
      <LoginForm>
        <Logo />

        <PageTitle>Добро пожаловать в Evolet</PageTitle>
        <Description dark>Введите свои учетные данные</Description>

        <label>
          <span>Электронная почта</span>
          <input type="text" placeholder="Электронная почта" />
        </label>

        <label>
          <span>Пароль</span>
          <input type="password" placeholder="Пароль" />
        </label>

        <button type="submit">Войти в систему</button>
      </LoginForm>
    </Main>
  );
}
