import MainLogo from '../../../ui/main-logo/main-logo';

export default function LoginForm(): JSX.Element {
  return (
    <form>
      <MainLogo />
      <h2>Добро пожаловать в Evolet</h2>
      <p>Введите свои учетные данные</p>

      <label>
        <span>Электронная почта</span>
        <input type="text" placeholder="Электронная почта" />
      </label>

      <label>
        <span>Пароль</span>
        <input type="password" placeholder="Пароль" />
      </label>

      <button type="submit">Войти в систему</button>
    </form>
  );
}
