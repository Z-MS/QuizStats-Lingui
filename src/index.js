import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react';
import { defaultLocale, loadMessage } from './localeLoader';

const I18nApp = () => {
  function changeLocale(locale) {
    setCurrentLocale(locale);
    loadMessage(locale);
  }

  const [currentLocale, setCurrentLocale] = useState(defaultLocale);
  useEffect(() => {
    loadMessage(defaultLocale);
  }, []);

  return (
    <React.StrictMode>
      <I18nProvider i18n={i18n}>
        <App locale={currentLocale} handleLocaleChange={changeLocale}/>
      </I18nProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<I18nApp/>);
