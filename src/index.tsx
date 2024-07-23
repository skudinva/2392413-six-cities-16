import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app';
import { store } from './store';
import {
  checkLoginAction,
  fetchFavoriteOffersAction,
  fetchOfferAction,
} from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.dispatch(checkLoginAction());
store.dispatch(fetchOfferAction());
store.dispatch(fetchFavoriteOffersAction());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
