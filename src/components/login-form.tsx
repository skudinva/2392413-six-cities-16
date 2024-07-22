import { FormEvent, KeyboardEvent, useState } from 'react';
import { useAppDispatch } from '../hooks/use-app-dispatch';
import { loginAction } from '../store/api-actions';

const isPasswordValid = (password: string) =>
  password.length && /\d/g.test(password) && /[a-zA-Zа-яА-Я]/g.test(password);

const isEmailValid = (email: string) => email.length;

function LoginForm(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();

  const onEmailInput = (evt: KeyboardEvent<HTMLInputElement>) => {
    setEmail(evt.currentTarget.value);
  };

  const onPasswordInput = (evt: KeyboardEvent<HTMLInputElement>) => {
    setPassword(evt.currentTarget.value);
  };

  const onFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(loginAction({ email, password }));
  };

  const isSubmitButtonDisabled: boolean =
    !isEmailValid(email) || !isPasswordValid(password);
  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={onFormSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
            onInput={onEmailInput}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
            onInput={onPasswordInput}
          />
        </div>
        <button
          className="login__submit form__submit button"
          type="submit"
          disabled={isSubmitButtonDisabled}
        >
          Sign in
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
