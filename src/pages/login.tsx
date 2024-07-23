import { Navigate } from 'react-router-dom';
import LoginForm from '../components/login-form';
import { AppRoute, AuthorizationStatus, Cities } from '../const';
import { useAppSelector } from '../hooks/use-app-dispatch';

function Login(): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }
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
