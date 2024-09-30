import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import localEsMessages from "./locales/es";
import localEnMessages from "./locales/en";
import { IntlProvider } from "react-intl";

const userLocale = navigator.language;
const messages = userLocale.startsWith("es") ? localEsMessages : localEnMessages;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={userLocale} messages={messages}>
    <App locale={userLocale} />
  </IntlProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
