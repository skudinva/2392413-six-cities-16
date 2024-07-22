import { Cities } from '../const';
import LoginForm from './login-form';

function Login(): JSX.Element {
  const city = Cities[0];
  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <LoginForm />
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city.name}</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
