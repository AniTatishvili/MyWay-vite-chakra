import React from 'react';
import ReactDOM from 'react-dom/client';

import i18n from "./i18n";

import { ChakraProvider } from "@chakra-ui/react";
import { defaultTheme } from './app/defaultTheme';

import './app/index.css';
import App from './app/App';
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={defaultTheme}>
    {/* <Provider store={store}> */}
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    {/* </Provider> */}
  </ChakraProvider>
  </React.StrictMode>,
)